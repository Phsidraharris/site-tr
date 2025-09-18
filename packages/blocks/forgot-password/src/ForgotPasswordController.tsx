import { BlockComponent } from "../../../framework/src/BlockComponent";
import { IBlock } from "../../../framework/src/IBlock";
import { runEngine } from "../../../framework/src/RunEngine";
import { Message } from "../../../framework/src/Message";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import * as Yup from "yup";
import { imgPasswordVisible, imgPasswordInVisible } from "./assets"
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isSnackbarOpen:boolean;
  isSnackbarOpens: boolean;
  accountType: string;
  emailSchema: any;
  phoneSchema: any;
  otpSchema: any;
  passwordSchema: any;
  accountStatus: any;
  passwordRules: any;
  emailValue: any;
  phoneValue: any;
  countryCodeSelected: any;
  token: any;
  enablePasswordField: Boolean;
  btnConfirmPasswordShowHide: Boolean;
  password: string;
  containsCapital: boolean;
  containsLowercase: boolean;
  containsNumber: boolean;
  hasMinLength: boolean;
  showPassword: boolean;
  passwordMatchError: boolean;
  confirmPassword: string;
  email: string;
  emailError: boolean;
  firstName: string;
  lastName: string;
  checkboxChecked: boolean;
  showConfirmPassword: boolean;
  checkboxError: boolean;
  snackbarOpen: boolean;
  emailFocused: boolean;
  emailMatchError: boolean;
  emailExists: boolean;
  emailBlurred: boolean;
  finishedTyping: boolean;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  navigation: any;
  // Customizable Area End
}

// Customizable Area Start
// Customizable Area End

export default class ForgotPasswordController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  validationAPICallId: any;
  requestEmailOtpCallId: any;
  requestPhoneOtpCallId: any;
  requestChangePasswordCallId: any;
  requestGoToConfirmationCallId: any;
  otpToken: any;
  isChangePassword: any;
  forgetId: string = "";

  //Properties from config
  labelTextIsAccountRecovery: string = configJSON.labelTextIsAccountRecovery;
  secondLabelText: string = configJSON.secondLabelText;
  thirdLabelText: string = configJSON.thirdLabelText;
  forthLabelText: string = configJSON.forthLabelText;
  fifthLabelText: string = configJSON.fifthLabelText;
  sixthLabelText: string = configJSON.sixthLabelText;
  firstInputAutoCompleteType: any = configJSON.firstInputAutoCompleteType;
  firstInputKeyboardStyle: any = configJSON.firstInputKeyboardStyle;
  firstInputPlaceholder: string = configJSON.firstInputPlaceholder;
  firstInputErrorColor: any = configJSON.firstInputErrorColor;
  buttonTextIsNext: string = configJSON.buttonTextIsNext;
  buttonColorForNextButton: any = configJSON.buttonColorForNextButton;
  secondInputAutoCompleteType: any = configJSON.secondInputAutoCompleteType;
  secondInputKeyboardType: any = configJSON.secondInputKeyboardType;
  secondInputPlaceholder: string = configJSON.secondInputPlaceholder;
  secondInputErrorColor: any = configJSON.secondInputErrorColor;
  thirdInputPlaceholder: string = configJSON.thirdInputPlaceholder;
  thirdInputErrorColor: any = configJSON.thirdInputErrorColor;
  buttonTitleIsSMSPhoneAccount: string =
    configJSON.buttonTitleIsSMSPhoneAccount;
  buttonTitleIsEmailAccount: string = configJSON.buttonTitleIsEmailAccount;
  labelTextIsPleaseEnterYourNewPassword: string =
    configJSON.labelTextIsPleaseEnterYourNewPassword;
  labelTextIsYourPasswordHasBeenSuccessfullyChanged: string =
    configJSON.labelTextIsYourPasswordHasBeenSuccessfullyChanged;
  placeholderIsPassword: string = configJSON.placeholderIsPassword;
  imgPasswordInVisible: any = configJSON.imgPasswordInVisible;
  imgPasswordVisible: any = configJSON.imgPasswordVisible;
  placeholderIsReTypePassword: string = configJSON.placeholderIsReTypePassword;
  buttonTitleIsOk: string = configJSON.buttonTitleIsOk;
  buttonColorForOkButton: any = configJSON.buttonColorForOkButton;
  countryCodeSelectorPlaceholder: string =
    configJSON.countryCodeSelectorPlaceholder;
    resendEmailId:string="";
    setNewPass:string=""
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      getName(MessageEnum.CountryCodeMessage)
      // Customizable Area End
    ];

    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start

    //email schema
    let emailSchema = {
      email: Yup.string()
        .email(configJSON.pleaseEnterAValidEmail)
        .required(configJSON.emailIsRequired)
    };

    //phone schema
    let phoneSchema = {
      // countryCode: Yup.number()
      // .required("Country code is required"),

      phone: Yup.string()
        .matches(configJSON.phoneRegExp, configJSON.phoneNumberIsNotValid)
        .required(configJSON.phoneNumberIsRequired)
    };

    //otpSchema
    let otpSchema = {
      otpCode: Yup.number()
        .min(4)
        .required(configJSON.otpCodeIsRequired)
    };

    //passwordSchema
    let passwordSchema = {
      password: Yup.string()
        .required(configJSON.pleaseEnterAPassword)
        .min(2, configJSON.passwordMustBeAtLeast2Characters),
      confirmPassword: Yup.string()
        .required(configJSON.pleaseConfirmYourPassword)
        .when("password", {
          is: val => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            configJSON.passwordsMustMatch
          )
        })
    };

    this.state = {
      isSnackbarOpens: false,
      isSnackbarOpen:false,
      accountType: "sms",
      accountStatus: "ChooseAccountType",
      emailValue: "",
      phoneValue: "",
      countryCodeSelected: "",
      passwordRules: "",
      emailSchema: emailSchema,
      phoneSchema: phoneSchema,
      otpSchema: otpSchema,
      passwordSchema: passwordSchema,
      token: "",
      enablePasswordField: true,
      btnConfirmPasswordShowHide: true,
      password: "",
      containsCapital: false,
      containsLowercase: false,
      containsNumber: false,
      hasMinLength: false,
      showPassword: false,
      passwordMatchError: false,
      confirmPassword: "",
      email: localStorage.getItem("forgotEmail") ?? "",
      emailError: false,
      firstName: "",
      lastName: "",
      checkboxChecked: false,
      showConfirmPassword: false,
      checkboxError: false,
      snackbarOpen: false,
      emailFocused: false,
      emailMatchError: false,
      emailExists: false,
      emailBlurred: false,
      finishedTyping: false,
    };
    // Customizable Area End
  }

  async componentDidMount() {
    // Customizable Area Start
    super.componentDidMount();
    this.validationRulesRequest();
    // Customizable Area End
  }

  validationRulesRequest = () => {
    const header = {
      "Content-Type": configJSON.forgotPasswordAPiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationAPICallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.profileValidationSettingsAPiEndPoint
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

  async receive(from: string, message: Message) {
    // Customizable Area Start
    // Customizable Area Start
    let responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );
     if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.forgetId &&
      this.forgetId ===
      message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
      if (responseJson.message === "Email sent successfully") {
        localStorage.setItem("setEmail",this.state.email)
        this.props.navigation.navigate("VerificationPass")
      }
      else {
        this.openSnackbars()
      }
    }
    else if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.resendEmailId &&
      this.resendEmailId ===
      message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
     

      if (responseJson.message === "Email sent successfully") {
        this.props.navigation.navigate("VerificationPass")
      }
      else {
        this.openSnackbars()
      }
    }
    else if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.setNewPass &&
      this.setNewPass ===
      message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
      console.log("responseee",responseJson )
    }
    // Customizable Area End
  }

  startForgotPassword(accountType: String) {
    this.setState({
      accountStatus: accountType === "sms" ? "EnterPhone" : "EnterEmail"
    });
  }

  goToOtpAfterEmailValidation(values: { accountType: string; email: string }) {
    //change status to OTP
    const header = {
      "Content-Type": configJSON.forgotPasswordAPiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    //GO TO REQUEST STATE
    this.requestEmailOtpCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.passwordRecoveryStartOtpAPiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    this.setState({
      emailValue: values.email ? values.email : ""
    });

    const data = {
      type: values.accountType ? values.accountType : "email_account",
      attributes: {
        email: values.email ? values.email : ""
      }
    };

    const httpBody = {
      data: data
    };

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostMethod
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  }

  goToOtpAfterPhoneValidation(values: { phone: string }) {
    // console.log("entered phone validation code");
    if (
      !this.state.countryCodeSelected ||
      this.state.countryCodeSelected.length === 0
    ) {
      this.showAlert(
        configJSON.goToOtpAfterPhoneValidationErrorTitle,
        configJSON.goToOtpAfterPhoneValidationErrorBody
      );
      return;
    }
    console.log(this.state.countryCodeSelected);
    //change status to OTP
    const header = {
      "Content-Type": configJSON.forgotPasswordAPiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    //GO TO REQUEST STATE
    this.requestPhoneOtpCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.passwordRecoveryStartOtpAPiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    this.setState({
      phoneValue:
        this.state.countryCodeSelected && values.phone
          ? this.state.countryCodeSelected + values.phone
          : ""
    });

    const data = {
      type: "sms_account",
      attributes: {
        full_phone_number: this.state.phoneValue
      }
    };

    const httpBody = {
      data: data
    };

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostMethod
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  }

  goToChangePasswordAfterOtp(values: { otpCode: string }) {
    //change status to change password
    //change status to OTP
    const header = {
      "Content-Type": configJSON.forgotPasswordAPiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    //GO TO REQUEST STATE
    this.requestChangePasswordCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.passwordRecoveryConfirmOtpAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    const data = {
      token: this.otpToken ? this.otpToken : "",
      otp_code: values.otpCode ? values.otpCode : ""
    };

    const httpBody = {
      data: data
    };

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostMethod
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  }

  goToConfirmationAfterPasswordChange(values: {
    password: any;
    confirmPassword: any;
  }) {
    const header = {
      "Content-Type": configJSON.forgotPasswordAPiContentType
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    //GO TO REQUEST STATE
    this.requestGoToConfirmationCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.passwordRecoveryChangePasswordAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    const data = {
      token: this.otpToken ? this.otpToken : "",
      new_password: values.password
    };

    const httpBody = {
      data: data
    };

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostMethod
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  }

  goToHome() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationHomeScreenMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  goToLogin() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationEmailLogInMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }
  
  // Customizable Area Start

  openSnackbars = () => {
    this.setState({
      isSnackbarOpens: true
    })
  }

  closeSnackbars = () => {
    this.setState({
      isSnackbarOpens: false
    })
  }
  openSnackbarTwo = () => {
    this.setState({
      isSnackbarOpen: true
    })
  }

  closeSnackbarTwo = () => {
    this.setState({
      isSnackbarOpen: false
    })
  }

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const containsCapital = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;

    this.setState({
      password,
      containsCapital,
      containsLowercase,
      containsNumber,
      hasMinLength,
    });
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  }

  handleConfirmPasswordChange = (event: { target: { value: string; }; }) => {
    const confirmPassword = event.target.value;
    const { password } = this.state;
    const passwordMatchError = password !== confirmPassword;

    this.setState({
      confirmPassword,
      passwordMatchError,
    });
  }

  isPasswordValid = () => {
    const {
      containsCapital,
      containsLowercase,
      containsNumber,
      hasMinLength,
      passwordMatchError,
    } = this.state;

    return (
      !passwordMatchError &&
      containsCapital &&
      containsLowercase &&
      containsNumber &&
      hasMinLength &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleClickLogin = () => {
    this.props.navigation.navigate("EmailAccountLoginBlock")
  }

  handleEmailChange = (event: { target: { value: any; }; }) => {
    const email = event.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      emailError: !emailPattern.test(email),
      email,
    });
  }

  handleEmailBlur = () => {
    const { email } = this.state;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      emailBlurred: true,
      finishedTyping: true,
      emailError: !emailPattern.test(email),
      emailExists: localStorage.getItem('registeredEmail') === email,
    });
  }

  handleEmailFocus = () => {
    this.setState({
      emailFocused: true,
      emailBlurred: false,
      finishedTyping: false,
    });
  }

  handleForgetCLick = () => {
    const header = {
      "Content-Type": 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.forgetId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `accounts/forget_password?email=${this.state.email}`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );



    runEngine.sendMessage(requestMessage.id, requestMessage)


  }
  handleResetCLick = () => {
    const header = {
      "Content-Type": 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.resendEmailId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `accounts/forget_password?email=${localStorage.getItem("setEmail")}`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)

  }
  handlesetButton = () => {
    this.openSnackbarTwo()
    const header = {
      "Content-Type": 'application/json',
      "token":localStorage.getItem("token")
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.setNewPass = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `accounts/reset_password?password=${this.state.password}&password_confirmation=${this.state.confirmPassword}`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "PUT"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)
  }
 
  // Customizable Area End
}
