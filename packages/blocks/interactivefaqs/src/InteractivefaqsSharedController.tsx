import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
// Customizable Area Start
import { IFaq } from "./types";
// Customizable Area End
export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

interface S {
  // Customizable Area Start
  token: string;
  faq: any;
  isVisible: boolean;
  activeId: number;
  activeTitle: string;
  activeContent: string;
  activeCreatedAt: string;
  activeUpdatedAt: string;
  title: string;
  content: string;
  value: any;
  faqsData: IFaq[];
  loading: boolean;
  expanded: string | null;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class InteractivefaqsSharedController extends BlockComponent<
  Props,
  S,
  SS
> {
  value: any;
  editorState: any;
  faqApiCallId: any;
  deleteFaqApiCallId: any;
  addFaqApiCallId: any;
  richtext: any;
  editor: any;
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    this.editorState = null; //createEditorStateWithText("");

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.RestAPIResponceMessage)
    ];

    this.state = {
      token: "",
      faq: [],
      isVisible: false,
      activeId: 0,
      activeTitle: "",
      activeContent: "",
      activeCreatedAt: "",
      activeUpdatedAt: "",
      title: "",
      content: "",
      value: this.value,
      faqsData: [],
      loading: false,
      expanded: null,
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }
  async componentDidMount() {
    super.componentDidMount();
    this.getToken();
    if (this.isPlatformWeb() === false) {
      this.props.navigation.addListener("willFocus", () => {
        this.getToken();
      });
    }
  }

  getToken = () => {
    const msg: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msg);
  };

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.faqApiCallId != null &&
      this.faqApiCallId ===
        message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (!responseJson.errors.length && responseJson.data) {
        this.setState({
          faqsData: responseJson.data.faqs,
          loading: false
        });
      } else {
        this.setState({ faqsData: [], loading: false });
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start

  setModal = (item: any) => {};

  hideModal = () => {};

  addFaq = () => {};

  setTitle = (txt: string) => {};

  deleteFAQ = (id: number) => {};

  addFaqCall = () => {
    if (this.state.title.trim() === "") {
      this.showAlert(configJSON.configError, configJSON.configErrorTitle);
      return false;
    } else if (this.state.content === "") {
      this.showAlert(configJSON.configError, configJSON.configErrorContent);
      return false;
    } else {
      const data = {
        title: this.state.title,
        content: this.state.content
      };

      const header = {
        "Content-Type": configJSON.faqApiApiContentType,
        token: this.state.token
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );

      this.addFaqApiCallId = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.faqApiEndPoint
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestHeaderMessage),
        JSON.stringify(header)
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(data)
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestMethodMessage),
        configJSON.httpPostMethod
      );

      runEngine.sendMessage(requestMessage.id, requestMessage);
      return true;
    }
  };

  deleteFaqApiCall = (endPointURL: string) => {
    const header = {
      "Content-Type": configJSON.faqApiApiContentType,
      token: this.state.token
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.deleteFaqApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPointURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpDeleteMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  };

  getFaqs = () => {
    const header = {
      "Content-Type": configJSON.faqApiApiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.faqApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.faqApiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpGetMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  handleExpandedChange = (question: string, isExpanded: boolean) => {
    this.setState({ expanded: isExpanded ? question : null });
  };
  // Customizable Area End
}
