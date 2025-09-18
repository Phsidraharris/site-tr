import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { userProfile } from "./assets";
import { Linking } from "react-native";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  drawerContent?: boolean;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  activeLink: string;
  webDrawer: boolean;
  token: any;
  drawerItems: any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class NavigationMenuController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiGetDataCallId: string = "";
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
      // Customizable Area Start
      activeLink: "Browse Properties",
      webDrawer: false,
      token: "",
      drawerItems: [],
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);
    // Customizable Area End
  }

  // Customizable Area Start
  handleClick = (text: string) => {
    this.setState({ activeLink: text });
  };

  handleMyHub = (link: string) => {
    this.props.navigation.navigate(link);
  };

  handleListProperty = () => {
    if (!this.state.token) {
      this.props.navigation.navigate("EmailAccountLoginBlock");
    }else{
      this.props.navigation.navigate("ListMyProperty")
    }
  };

  async componentDidMount() {
    super.componentDidMount();
    this.getToken();
    this.setState({ token: localStorage.getItem("token") });
  }

  getToken = () => {
    const msg: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msg);
  };
  // Customizable Area End
}
