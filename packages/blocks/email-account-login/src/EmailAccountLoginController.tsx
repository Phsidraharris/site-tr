import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
export interface LoginResponseType {
  meta: {
    token: string;
    refresh_token: string;
    id: number;
    role_id: number;
  }
}
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  password: string;
  email: string;
  enablePasswordField: boolean;
  checkedRememberMe: boolean;
  placeHolderEmail: string;
  placeHolderPassword: string;
  imgPasswordVisible: string;
  imgPasswordInVisible: string;
  labelHeader: string;
  btnTxtLogin: string;
  labelRememberMe: string;
  btnTxtSocialLogin: string;
  labelOr: string;
  activeGridId: number;
  emailError: boolean;
  passwordError: boolean;
  loginDisabled: boolean;
  showPassword: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  loginButtonDisabled: boolean;
  isSnackbarOpen: boolean;
  emailFocused: boolean;
  emailBlurred: boolean;
  finishedTyping: boolean;
  emailExists: boolean;
  emailMatchError: boolean;
  showError: boolean;
  shouldShowRedBorder: boolean;
  lastActivityTime: number;
  pasSnackbar: boolean;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountLoginController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiEmailLoginCallId: string = "";
  validationApiCallId: string = "";
  loginCallId: string = "";
  emailReg: RegExp;
  labelTitle: string = "";
  activeGridId: number = 1;
  emailError: boolean = false;
  passwordError: boolean = false;
  loginDisabled: boolean = false;
  showPassword: boolean = false;
  private idleTimer: NodeJS.Timeout | null = null;
  private idleTime = 15 * 60 * 1000;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      email: "",
      password: "",
      enablePasswordField: true,
      checkedRememberMe: false,
      placeHolderEmail: configJSON.placeHolderEmail,
      placeHolderPassword: configJSON.placeHolderPassword,
      imgPasswordVisible: configJSON.imgPasswordVisible,
      imgPasswordInVisible: imgPasswordInVisible,
      labelHeader: configJSON.labelHeader,
      btnTxtLogin: configJSON.btnTxtLogin,
      labelRememberMe: configJSON.labelRememberMe,
      btnTxtSocialLogin: configJSON.btnTxtSocialLogin,
      labelOr: configJSON.labelOr,
      activeGridId: 1,
      emailError: false,
      emailErrorMessage: "",
      passwordError: false,
      passwordErrorMessage: "",
      loginDisabled: false,
      showPassword: false,
      loginButtonDisabled: false,
      isSnackbarOpen: false,
      emailFocused: false,
      emailBlurred: false,
      finishedTyping: false,
      emailExists: false,
      emailMatchError: false,
      showError: false,
      shouldShowRedBorder: false,
      lastActivityTime: Date.now(),
      pasSnackbar:false,
    };

    this.emailReg = new RegExp("");
    this.labelTitle = configJSON.labelTitle;
    document.addEventListener("mousemove", this.handleUserActivity.bind(this));
    document.addEventListener("keydown", this.handleUserActivity.bind(this));

    this.resetIdleTimer();
    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.callGetValidationApi();
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    // Customizable Area Start
    const savedCredentials = JSON.parse(localStorage.getItem("rememberMeCredentials") || "null");

    if (savedCredentials && savedCredentials !== "null") {
      this.setState({
        email: savedCredentials.email,
        password: savedCredentials.password,
        checkedRememberMe: true,
      });
    }
    this.resetIdleTimer();
    // Customizable Area End
  }

  // Customizable Area Start
  resetIdleTimer() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }

    this.idleTimer = setTimeout(() => {
      this.handleLogout();
    }, this.idleTime);
  }

  handleLogout() {
    localStorage.clear()
    this.props.navigation.navigate("EmailAccountLoginBlock")
    console.log("User is logged out due to inactivity.");
  }

  handleUserActivity() {
    this.resetIdleTimer();
  }


  handleEmailChange = (event: { target: { value: string; }; }) => {
    const email = event.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.setState({
      email,
      finishedTyping: false,
      loginButtonDisabled: !emailPattern.test(email) || this.state.passwordError,
    });
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.setState({
      emailBlurred: true,
      finishedTyping: true,
      emailError: !emailPattern.test(email),
      emailExists: localStorage.getItem('registeredEmail') === email,
      loginButtonDisabled: !emailPattern.test(email) || this.state.passwordError,
    });
  };

  handleEmailFocus = () => {
    this.setState({
      emailFocused: true,
      emailBlurred: false,
      finishedTyping: false,
    });
  };

  handleClick = () => {
    if (this.state.activeGridId === 1) {
      this.props.navigation.navigate("EmailAccountLoginBlock");
    } else {
      this.props.navigation.navigate("ChooseType");
    }
  };

  handlesinnup = () => {
    this.props.navigation.navigate("ChooseType")
  };

  handlePasswordChange = (event: { target: { value: string; }; }) => {
    const password = event.target.value;

    this.setState({
      password,
      passwordError: false,
      passwordErrorMessage: "",
      loginDisabled: this.state.emailError,
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const httpBodyy = {
      data: {
        type: "email_account",
        attributes: {
          email: email,
          password: password
        }
      }
    }

    const headr = {
      "Content-Type": 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.loginCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `login`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headr)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBodyy)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)
  };

  openSnackbar = () => {
    this.setState({
      isSnackbarOpen: true,
    });
  };

  closeSnackbar = () => {
    this.setState({
      isSnackbarOpen: false,
    });
  };
  openSnackbarPass = () => {
    this.setState({
      pasSnackbar: true,
    });
  };

  closeSnackbarPass = () => {
    this.setState({
      pasSnackbar: false,
    });
  };

  handleGridClick = (gridId: number) => () => {
    this.setState({ activeGridId: gridId });
  };

  btnSocialLoginProps = {
    onPress: () => this.goToSocialLogin(),
  };

  btnPasswordShowHideProps = {
    onPress: () => {
      this.setState({ enablePasswordField: !this.state.enablePasswordField });
      this.txtInputPasswordProps.secureTextEntry =
        !this.state.enablePasswordField;
      this.btnPasswordShowHideImageProps.source = this.txtInputPasswordProps
        .secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  // Web Event Handling
  handleClickShowPassword = () => {
    this.setState({
      enablePasswordField: !this.state.enablePasswordField,
    });
  };

  setRememberMe = (value: boolean) => {
    this.setState({ checkedRememberMe: value });
    if (value) {
      localStorage.setItem("rememberMeCredentials", JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }));
    } else {
      // Clear saved credentials when "Remember Me" is unchecked
      localStorage.removeItem("rememberMeCredentials");
    }
  };


  CustomCheckBoxProps = {
    onChangeValue: (value: boolean) => {
      this.setState({ checkedRememberMe: value });
      this.CustomCheckBoxProps.isChecked = value;
    },
    isChecked: false,
  };

  txtInputPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ password: text });
    },
    secureTextEntry: true,
  };

  btnPasswordShowHideImageProps = {
    source: imgPasswordVisible,
  };

  btnRememberMeProps = {
    onPress: () => {
      this.setState({ checkedRememberMe: !this.CustomCheckBoxProps.isChecked });
      this.CustomCheckBoxProps.isChecked = !this.CustomCheckBoxProps.isChecked;
    },
  };

  txtInputEmailWebProps = {
    onChangeText: (text: string) => {
      this.setState({ email: text });
    },
  };

  txtInputEmailMobileProps = {
    ...this.txtInputEmailWebProps,
    autoCompleteType: "email",
    keyboardType: "email-address",
  };

  txtInputEmailProps = this.isPlatformWeb()
    ? this.txtInputEmailWebProps
    : this.txtInputEmailMobileProps;

  navigateForgotPassword = () => {
    localStorage.setItem("forgotEmail", this.state.email)
    this.props.navigation.navigate("ForgotPassword")
  }

  handleNavigate = (routePath: string) => {
    const to = new Message(getName(MessageEnum.NavigationMessage));
    to.addData(
      getName(MessageEnum.NavigationTargetMessage),
      routePath
    );
    to.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(to);
  };
  // Customizable Area End

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      let errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (apiRequestCallId != null && apiRequestCallId === this.loginCallId) {
        
          if (hasValidToken(responseJson)) {
            localStorage.setItem("token", responseJson.meta.token)
            this.resetIdleTimer();
            const roleId = responseJson.meta.role_id;
            switch (roleId) {
              case 1:
                this.handleNavigate("Customisableuserprofiles2");
                break;
              case 2:
                this.handleNavigate("Customisablebuyerprofiles");
                break;
              case 3:
                this.handleNavigate("CustomisableAgentProfiles");
                break;
              case 4:
                this.handleNavigate("CustomisableSolicitorProfiles");
                break;
              default:
                this.openSnackbar();
            }
            this.parseApiCatchErrorResponse(errorReponse);
          }
          if (responseJson.errors.length>0) {
            this.openSnackbarPass()
          }
      }

      function hasValidToken(responseJson: LoginResponseType) {
        return responseJson && responseJson.meta && responseJson.meta.token;
      }
    }
    // Customizable Area End
  }

  sendLoginFailMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginFaliureMessage));
    this.send(msg);
  }

  sendLoginSuccessMessage() {
    const msg: Message = new Message(getName(MessageEnum.LoginSuccessMessage));

    msg.addData(getName(MessageEnum.LoginUserName), this.state.email);
    msg.addData(getName(MessageEnum.CountyCodeDataMessage), null);
    msg.addData(getName(MessageEnum.LoginPassword), this.state.password);
    msg.addData(
      getName(MessageEnum.LoginIsRememberMe),
      this.state.checkedRememberMe
    );

    this.send(msg);
  }

  saveLoggedInUserData(responseJson: any) {
    if (responseJson && responseJson.meta && responseJson.meta.token) {
      const msg: Message = new Message(getName(MessageEnum.SessionSaveMessage));

      msg.addData(
        getName(MessageEnum.SessionResponseData),
        JSON.stringify(responseJson)
      );
      msg.addData(
        getName(MessageEnum.SessionResponseToken),
        responseJson.meta.token
      );

      this.send(msg);
    }
  }

  openInfoPage() {
    // Merge Engine - Navigation - btnEmailLogIn - Start
    const msg: Message = new Message(getName(MessageEnum.AccoutLoginSuccess));
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
    // Merge Engine - Navigation - btnEmailLogIn - End
  }

  goToForgotPassword() {
    // Merge Engine - Navigation - btnForgotPassword - Start
    const msg: Message = new Message(
      getName(MessageEnum.NavigationForgotPasswordMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    msg.addData(getName(MessageEnum.NavigationForgotPasswordPageInfo), "email");
    this.send(msg);
    // Merge Engine - Navigation - btnForgotPassword - End
  }

  goToSocialLogin() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationSocialLogInMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  doEmailLogIn(): boolean {
    if (
      this.state.email === null ||
      this.state.email.length === 0 ||
      !this.emailReg.test(this.state.email)
    ) {
      this.showAlert("Error", configJSON.errorEmailNotValid);
      return false;
    }

    if (this.state.password === null || this.state.password.length === 0) {
      this.showAlert("Error", configJSON.errorPasswordNotValid);
      return false;
    }

    const header = {
      "Content-Type": configJSON.loginApiContentType,
    };

    const attrs = {
      email: this.state.email,
      password: this.state.password,
    };

    const data = {
      type: "email_account",
      attributes: attrs,
    };

    const httpBody = {
      data: data,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiEmailLoginCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.loginAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.loginAPiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);

    return true;
  }

  callGetValidationApi() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType,
    };

    const getValidationsMsg = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationApiCallId = getValidationsMsg.messageId;

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.urlGetValidations
    );

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(getValidationsMsg.id, getValidationsMsg);
  }
}
