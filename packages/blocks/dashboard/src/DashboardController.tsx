import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config.js");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}
interface S {
  // Customizable Area Start
  dashboardData: any;
  token: string;
  errorMsg: string;
  loading: boolean;
  isModalOpen: boolean;
  isEditModal: boolean;
  isDeallocateModalOpen: boolean;
  isSnackbarOpen: boolean;
  isSuccessfulSnackbarOpen: boolean; 
  enableDeallocateButton: boolean;
  inputError: string;
  errorMessage: string;
  inputList:{
    firstName: string
  lastName: string;
  email: string;
  firmName: string;
  },
  isAnyFieldEmpty:boolean;
  selectedDate:Date;
  // Customizable Area End
}
interface SS {
  id: any;
}

export default class DashboardController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  apiDashboardItemCallId: string = "";
  dashboardApiCallId: string = "";
  apiGetQueryStrinurl: string = "";
  // Customizable Area End
  
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    console.disableYellowBox = true;
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage)
    ];

    this.state = {
      dashboardData: [],
      errorMsg: "",
      token: "",
      loading: false,
      isModalOpen: false,
      isEditModal: false,
      isDeallocateModalOpen: false,
      isSnackbarOpen: false,
      isSuccessfulSnackbarOpen: false,
      enableDeallocateButton: true as boolean,
      inputError: "",
      errorMessage: "",
      inputList:{
        email: "",
        firstName: "",
        lastName: "",
        firmName: "",
      },
      isAnyFieldEmpty:false,
      selectedDate: new Date(),
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
    this.getToken();
    if (this.isPlatformWeb() === false) {
      this.props.navigation.addListener('willFocus', () => {
        this.getToken();
      });
    }
    // Customizable Area Start
    // Customizable Area End
  }
  
  getToken=()=>{
    const msg: Message = new Message(getName(MessageEnum.SessionRequestMessage));
    this.send(msg);
  }

  getDashboardData(): boolean {
    // Customizable Area Start
    const header = {
      "Content-Type": configJSON.dashboarContentType,
      token: this.state.token
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiDashboardItemCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.dashboardGetUrl
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.dashboarApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    // Customizable Area End
    return true;
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.SessionResponseMessage) === message.id) {
      let token = message.getData(getName(MessageEnum.SessionResponseToken));
      this.setState({ token: token, loading: true }, () => {
        this.getDashboardData();
      });
    }

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (responseJson && !responseJson.errors && responseJson.data) {
        if (responseJson.data.length === 0) {
          this.setState({
            errorMsg: "Data Not Found",
            loading: false
          });
        } else {
          this.setState({
            dashboardData: responseJson.data,
            errorMsg: "",
            loading: false
          });
        }
      } else {
        var errorReponse = message.getData(
          getName(MessageEnum.RestAPIResponceErrorMessage)
        );
        if (errorReponse === undefined) {
          this.setState({
            errorMsg: "Something went wrong",
            loading: false
          });
        } else {
          this.setState({
            errorMsg: errorReponse,
            loading: false
          });
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start

  openModal = (isEditModal?: boolean) => {
    this.setState({ isModalOpen: true, isDeallocateModalOpen: false, isEditModal: Boolean(isEditModal) });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false,isAnyFieldEmpty: false  });
  }

  openDeallocateModal = () => {
    const { inputList } = this.state;

        if (!inputList.firstName || !inputList.lastName || !inputList.email || !inputList.firmName) {
      this.setState({ isAnyFieldEmpty: true, enableDeallocateButton:true });
    } else {
      this.setState({ isAnyFieldEmpty: false , isDeallocateModalOpen: true, isModalOpen: false , inputList: {
        firmName: "",
        firstName: "",
        lastName: "",
        email: ""
      }});
      
    }
  }
  
  closeDeallocateModal = () => {
    this.setState({ isDeallocateModalOpen: false, });
  }

  handleSnackbarOpen = () => {
    this.setState({ isSnackbarOpen: true });
  }

  handleSnackbarClose = () => {
    this.setState({ isSnackbarOpen: false });
  }

  handleSuccessfulSnackbar = (isOpen:boolean) => {
    this.setState({ isSuccessfulSnackbarOpen: isOpen });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedInputList = { ...this.state.inputList, [name]: value };
  
    this.setState({
      inputList: updatedInputList,
    });
  }

  handleDateChange = (date: Date) => {
    this.setState({ selectedDate: date })
  }
  
  // Customizable Area End

}
