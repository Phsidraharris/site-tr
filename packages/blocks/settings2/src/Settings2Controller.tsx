import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  isVisibleLogoutModal: boolean;
  isVisibleDeactivateModal: boolean;
  activeTab: string;
  termsConds: string;
  privacyPolicies: string;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class Settings2Controller extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  getTermsCondsCallId: string = "";
  getPrivacyPoliciesCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area End
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      // Customizable Area Start
      isVisibleLogoutModal: false,
      isVisibleDeactivateModal: false,
      activeTab: configJSON.privacyTab,
      termsConds: "",
      privacyPolicies: "",
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);

    if (message.id === getName(MessageEnum.AccoutLoginSuccess)) {
      let value = message.getData(getName(MessageEnum.AuthTokenDataMessage));

      this.showAlert(
        "Change Value",
        "From: " + this.state.txtSavedValue + " To: " + value
      );

      this.setState({ txtSavedValue: value });
    }

    // Customizable Area Start
    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );
    const responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );

    if (
      responseJson &&
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.getTermsCondsCallId.length > 0 &&
      apiRequestCallId === this.getTermsCondsCallId
    ) {
      this.getTermsCondsCallId = "";

      this.setState({
        termsConds: responseJson[0].description,
      });
    }

    if (
      responseJson &&
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.getPrivacyPoliciesCallId.length > 0 &&
      apiRequestCallId === this.getPrivacyPoliciesCallId
    ) {
      this.getPrivacyPoliciesCallId = "";
      this.setState({
        privacyPolicies: responseJson.data[0].attributes.description,
      });
    }
    // Customizable Area End
  }

  txtInputWebProps = {
    onChangeText: (text: string) => {
      this.setState({ txtInputValue: text });
    },
    secureTextEntry: false,
  };

  txtInputMobileProps = {
    ...this.txtInputWebProps,
    autoCompleteType: "email",
    keyboardType: "email-address",
  };

  txtInputProps = this.isPlatformWeb()
    ? this.txtInputWebProps
    : this.txtInputMobileProps;

  btnShowHideProps = {
    onPress: () => {
      this.setState({ enableField: !this.state.enableField });
      this.txtInputProps.secureTextEntry = !this.state.enableField;
      this.btnShowHideImageProps.source = this.txtInputProps.secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  btnShowHideImageProps = {
    source: this.txtInputProps.secureTextEntry
      ? imgPasswordVisible
      : imgPasswordInVisible,
  };

  btnExampleProps = {
    onPress: () => this.doButtonPressed(),
  };

  doButtonPressed() {
    let msg = new Message(getName(MessageEnum.AccoutLoginSuccess));
    msg.addData(
      getName(MessageEnum.AuthTokenDataMessage),
      this.state.txtInputValue
    );
    this.send(msg);
  }

  // web events
  setInputValue = (text: string) => {
    this.setState({ txtInputValue: text });
  };

  setEnableField = () => {
    this.setState({ enableField: !this.state.enableField });
  };

  // Customizable Area Start
  async componentDidMount() {
    super.componentDidMount();
    await this.getPrivacyPolicies();
    await this.getTermsConds();
  }

  hideModal = () => {
    this.setState({ isVisibleLogoutModal: !this.state.isVisibleLogoutModal });
  };

  showModal = () => {
    this.setState({ isVisibleLogoutModal: true });
  };

  hideDeactivateModal = () => {
    this.setState({
      isVisibleDeactivateModal: !this.state.isVisibleDeactivateModal,
    });
  };

  showDeactivateModal = () => {
    this.setState({ isVisibleDeactivateModal: true });
  };

  changeActiveTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  getTermsConds = async () => {
    const header = {
      "Content-Type": configJSON.apiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getTermsCondsCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getTermsCondsApiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.getApiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  getPrivacyPolicies = async () => {
    const header = {
      "Content-Type": configJSON.apiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    console.log(requestMessage.messageId);

    this.getPrivacyPoliciesCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getPrivacyPoliciesApiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.getApiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
