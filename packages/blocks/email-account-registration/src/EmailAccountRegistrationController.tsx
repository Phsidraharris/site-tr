import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

export interface S {
  // Customizable Area Start
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otpAuthToken: string;
  reTypePassword: string;
  data: any[];
  passwordHelperText: string;
  enablePasswordField: boolean;
  enableReTypePasswordField: boolean;
  countryCodeSelected: string;
  phone: string;
  containsCapital: boolean,
  containsLowercase: boolean,
  containsNumber: boolean,
  hasMinLength: boolean,
  showPassword: boolean,
  passwordMatchError: boolean,
  confirmPassword: string,
  emailError: boolean,
  activeGridId: number;
  emailExists: boolean,
  checkboxChecked: boolean;
  showConfirmPassword: boolean,
  isSnackbarOpen: boolean,
  isSnackbarOpens: boolean,
  createAccountButtonDisabled: boolean,
  checkboxError: boolean,
  snackbarOpen: boolean,
  emailFocused: boolean,
  emailBlurred: boolean;
  finishedTyping: boolean;
  termsData: unknown[],
  policyData: unknown[],
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountRegistrationController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  arrayholder: any[];
  passwordReg: RegExp;
  emailReg: RegExp;
  createAccountApiCallId: any;
  validationApiCallId: string = "";

  imgPasswordVisible: any;
  imgPasswordInVisible: any;

  labelHeader: any;
  labelFirstName: string;
  lastName: string;
  labelEmail: string;
  labelPassword: string;
  labelRePassword: string;
  labelLegalText: string;
  labelLegalTermCondition: string;
  labelLegalPrivacyPolicy: string;
  btnTextSignUp: string;
  currentCountryCode: any;
  termId: string = "";
  policyId: string = "";
  signupId: string = "";
  resendId: string="";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      getName(MessageEnum.CountryCodeMessage)
    ];
    this.receive = this.receive.bind(this);
    this.isStringNullOrBlank = this.isStringNullOrBlank.bind(this);

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {
      // Customizable Area Start
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reTypePassword: "",
      otpAuthToken: "",
      data: [],
      passwordHelperText: "",
      enablePasswordField: true,
      enableReTypePasswordField: true,
      countryCodeSelected: "",
      phone: "",
      containsCapital: false,
      containsLowercase: false,
      containsNumber: false,
      hasMinLength: false,
      showPassword: false,
      passwordMatchError: false,
      confirmPassword: "",
      emailError: false,
      activeGridId: 1,
      emailExists: false,
      checkboxChecked: false,
      showConfirmPassword: false,
      isSnackbarOpen: false,
      isSnackbarOpens: false,
      createAccountButtonDisabled: true,
      checkboxError: false,
      snackbarOpen: false,
      emailFocused: false,
      emailBlurred: false,
      finishedTyping: false,
      termsData: [],
      policyData: []

      // Customizable Area End
    };

    // Customizable Area Start
    this.arrayholder = [];
    this.passwordReg = new RegExp("\\w+");
    this.emailReg = new RegExp("\\w+");

    this.imgPasswordVisible = imgPasswordVisible;
    this.imgPasswordInVisible = imgPasswordInVisible;

    this.labelHeader = configJSON.labelHeader;
    this.labelFirstName = configJSON.labelFirstName;
    this.lastName = configJSON.lastName;
    this.labelEmail = configJSON.labelEmail;
    this.labelPassword = configJSON.labelPassword;
    this.labelRePassword = configJSON.labelRePassword;
    this.labelLegalText = configJSON.labelLegalText;
    this.labelLegalTermCondition = configJSON.labelLegalTermCondition;
    this.labelLegalPrivacyPolicy = configJSON.labelLegalPrivacyPolicy;
    this.btnTextSignUp = configJSON.btnTextSignUp;
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if (apiRequestCallId && responseJson) {
        this.handleResponses(apiRequestCallId, responseJson)
      }
    }

    if (getName(MessageEnum.NavigationPayLoadMessage) === message.id) {
      const otpAuthTkn = message.getData(
        getName(MessageEnum.AuthTokenDataMessage)
      );
      if (otpAuthTkn && otpAuthTkn.length > 0) {
        this.setState({ otpAuthToken: otpAuthTkn });
        runEngine.debugLog("otpAuthTkn", this.state.otpAuthToken);
        runEngine.unSubscribeFromMessages(this as IBlock, [message.id]);
      }
    }

    if (getName(MessageEnum.CountryCodeMessage) === message.id) {
      var selectedCode = message.getData(
        getName(MessageEnum.CountyCodeDataMessage)
      );

      if (selectedCode !== undefined) {
        this.setState({
          countryCodeSelected:
            selectedCode.indexOf("+") > 0
              ? selectedCode.split("+")[1]
              : selectedCode
        });
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start

  handleResponses = (apiRequestCallId: string, responseJson: { data: unknown[] }) => {
    if (apiRequestCallId === this.termId) {
      this.setState({ termsData: responseJson.data })
    }
    else if (apiRequestCallId === this.policyId) {
      this.setState({ policyData: responseJson.data })
    }
    else if (apiRequestCallId === this.signupId) {
      this.handleSignupResponse(responseJson)
    }
    else if (apiRequestCallId === this.resendId) {
      this.handleSignupResponse(responseJson)
    }
  }

  handleSignupResponse(responseJson: Record<string, any>) {
    if (responseJson.data) {
      this.props.navigation.navigate("Verification");

      this.setState({
        confirmPassword: "",
        containsCapital: false,
        containsLowercase: false,
        containsNumber: false,
        hasMinLength: false,
        showPassword: false,
        passwordMatchError: false,
        emailError: false,
        checkboxChecked: false,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      localStorage.clear()
      localStorage.setItem("token",responseJson?.meta?.token)

    } else {
      this.openSnackbars()
    }

  }

  async componentDidMount(): Promise<void> {

    this.getTerms()
    this.getPrivacy()
    const formData = localStorage.getItem('formData');

    if (formData) {
      const parsedFormData = JSON.parse(formData);

      this.setState({
        firstName: parsedFormData.firstName,
        lastName: parsedFormData.lastName,
        email: parsedFormData.email,
        password: parsedFormData.password,
        confirmPassword: parsedFormData.confirmPassword,
        containsCapital: parsedFormData.containsCapital,
        containsLowercase: parsedFormData.containsLowercase,
        containsNumber: parsedFormData.containsNumber,
        hasMinLength: parsedFormData.hasMinLength,
        passwordMatchError: parsedFormData.passwordMatchError,
        emailError: parsedFormData.emailError,
        emailBlurred: parsedFormData.emailBlurred,
        finishedTyping: parsedFormData.finishedTyping,
      });
    }
  }

  getTerms = () => {
    const header = {
      'Content-Type': 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.termId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `bx_block_terms_and_conditions/terms_and_conditions`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "GET"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)
  }

  getPrivacy = () => {
    const headr = {
      'Content-Type': 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.policyId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `bx_block_privacy_policies/privacy_policies`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "GET"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headr)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)
  }

  handleNextClick = () => {
    if (this.state.activeGridId === 1 || this.state.activeGridId === 2 || this.state.activeGridId === 3 || this.state.activeGridId === 4) {
      this.props.navigation.navigate("EmailAccountRegistration");
      localStorage.setItem("role", this.state.activeGridId.toString())
    }
    else {
      this.props.navigation.navigate("SomeOtherScreen");
    }
  }

  handleClickLogin = () => {
    this.props.navigation.navigate("EmailAccountLoginBlock");
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
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

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
  };

  handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!inputValue.startsWith(' ') && /^[A-Za-z]*$/.test(inputValue)) {
      this.setState({ firstName: inputValue });
    }
  };

  handleLasttNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!inputValue.startsWith(' ') && /^[A-Za-z]*$/.test(inputValue)) {
      this.setState({ lastName: inputValue });
    }
  };

  handleEmailChange = (event: { target: { value: string; }; }) => {
    const email = event.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const emailExists = localStorage.getItem('registeredEmail') === email;

    this.setState({
      email,
      emailError: !emailPattern.test(email),
    });
  };
  handleEmailBlur = () => {
    const { email } = this.state;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      emailBlurred: true,
      finishedTyping: true,
      emailError: !emailPattern.test(email),
    });
  };

  handleEmailFocus = () => {
    this.setState({
      emailFocused: true,
      emailBlurred: false,
      finishedTyping: false,
    });
  }
  handleprivacy = () => {
    this.storeData()
    this.props.navigation.navigate("Privacy")
    global.scrollTo(0,0)
  }
  storeData=()=>{
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      containsCapital: this.state.containsCapital,
      containsLowercase: this.state.containsLowercase,
      containsNumber: this.state.containsNumber,
      hasMinLength: this.state.hasMinLength,
      emailError: this.state.emailError,
      passwordMatchError: this.state.passwordMatchError,
      emailBlurred: this.state.emailBlurred,
      finishedTyping: this.state.finishedTyping,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  handleterm = () => {
    this.storeData()
    this.props.navigation.navigate("Term")
    global.scrollTo(0,0)
  }
  handleCreateAccount() {
    const { checkboxChecked } = this.state;

    if (!checkboxChecked) {
      this.setState({ checkboxError: true });
      this.openSnackbar();
      return;
    }
    this.handleSignup()
    localStorage.removeItem('formData');
  }

  handleSignup = () => {

    const httpBody = {
      data: {
        type: "email_account",
        attributes: {
          role_id: localStorage.getItem("role") || this.state.activeGridId,
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.confirmPassword,
        }
      }
    };
    const header = {
      "Content-Type": 'application/json',
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.signupId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `accounts`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    runEngine.sendMessage(requestMessage.id, requestMessage)
  }
  handleResend=()=>{
    const header = {
      "Content-Type": 'application/json',
      "token":localStorage.getItem("token")
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.resendId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `accounts/email_confirmation`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "GET"
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    
    runEngine.sendMessage(requestMessage.id, requestMessage)
  }
  openSnackbar = () => {
    this.setState({
      isSnackbarOpen: true,
    });
  };
  closeSnackbar = () => {
    this.setState({
      isSnackbarOpen: false,
      checkboxError: false,
    });

  };

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
  isButtonDisabled = () => {
    const {
      emailError,
      containsCapital,
      containsLowercase,
      containsNumber,
      hasMinLength,
      passwordMatchError,
      confirmPassword,
      firstName,
      lastName
    } = this.state;

    return (
      firstName === "" ||
      lastName === "" ||
      emailError ||
      !containsCapital ||
      !containsLowercase ||
      !containsNumber ||
      !hasMinLength ||
      passwordMatchError ||
      confirmPassword !== this.state.password
    );
  }


  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      checkboxChecked: !prevState.checkboxChecked,
    }));
  };


  arrowBack = () => {
    this.props.navigation.goBack()
  }


  getButtonBackgroundColor = () => {
    return this.isButtonDisabled() ? "#9299B2" : "#273567";
  };

  goToPrivacyPolicy() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationPrivacyPolicyMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  goToTermsAndCondition() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationTermAndConditionMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  isStringNullOrBlank(str: string) {
    return str === null || str.length === 0;
  }

  isValidEmail(email: string) {
    return this.emailReg.test(email);
  }

  createAccount(): boolean {
    if (
      this.isStringNullOrBlank(this.state.firstName) ||
      this.isStringNullOrBlank(this.state.lastName) ||
      this.isStringNullOrBlank(this.state.email) ||
      this.isStringNullOrBlank(this.state.password) ||
      this.isStringNullOrBlank(this.state.reTypePassword)
    ) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorAllFieldsAreMandatory
      );
      return false;
    }

    var phoneNumberError = this.validateCountryCodeAndPhoneNumber(
      this.state.countryCodeSelected,
      this.state.phone
    );

    if (phoneNumberError) {
      this.showAlert(configJSON.errorTitle, phoneNumberError);
      return false;
    }

    if (!this.isValidEmail(this.state.email)) {
      this.showAlert(configJSON.errorTitle, configJSON.errorEmailNotValid);
      return false;
    }

    if (!this.passwordReg.test(this.state.password)) {
      this.showAlert(configJSON.errorTitle, configJSON.errorPasswordNotValid);
      return false;
    }

    if (this.state.password !== this.state.reTypePassword) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorBothPasswordsNotSame
      );
      return false;
    }

    const header = {
      "Content-Type": configJSON.contentTypeApiAddDetail
    };

    const attrs = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      full_phone_number: "+" + this.state.countryCodeSelected + this.state.phone
    };

    const data = {
      type: "email_account",
      attributes: attrs
    };

    const httpBody = {
      data: data,
      token: this.state.otpAuthToken
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.createAccountApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.accountsAPiEndPoint
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
      configJSON.apiMethodTypeAddDetail
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  }

  getValidations() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType
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

  isNonNullAndEmpty(value: String) {
    return (
      value !== undefined &&
      value !== null &&
      value !== "null" &&
      value.trim().length > 0
    );
  }

  validateCountryCodeAndPhoneNumber(countryCode: string, phoneNumber: string) {
    let error = null;

    if (this.isNonNullAndEmpty(phoneNumber)) {
      if (!this.isNonNullAndEmpty(String(countryCode))) {
        error = configJSON.errorCountryCodeNotSelected;
      }
    } else if (this.isNonNullAndEmpty(countryCode)) {
      if (!this.isNonNullAndEmpty(phoneNumber)) {
        error = "Phone " + configJSON.errorBlankField;
      }
    }

    return error;
  }

  imgEnableRePasswordFieldProps = {
    source: imgPasswordVisible
  };

  btnConfirmPasswordShowHideProps = {
    onPress: () => {
      this.setState({
        enableReTypePasswordField: !this.state.enableReTypePasswordField
      });
      this.txtInputConfirmPasswordProps.secureTextEntry = !this.state
        .enableReTypePasswordField;
      this.imgEnableRePasswordFieldProps.source = this
        .txtInputConfirmPasswordProps.secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    }
  };

  imgEnablePasswordFieldProps = {
    source: imgPasswordVisible
  };

  btnPasswordShowHideProps = {
    onPress: () => {
      this.setState({ enablePasswordField: !this.state.enablePasswordField });
      this.txtInputPasswordProps.secureTextEntry = !this.state
        .enablePasswordField;
      this.imgEnablePasswordFieldProps.source = this.txtInputPasswordProps
        .secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    }
  };

  btnSignUpProps = {
    onPress: () => this.createAccount()
  };

  btnLegalPrivacyPolicyProps = {
    onPress: () => this.goToPrivacyPolicy()
  };

  btnLegalTermsAndConditionProps = {
    onPress: () => this.goToTermsAndCondition()
  };

  txtInputEmailWebPrpos = {
    onChangeText: (text: string) => {
      this.setState({ email: text });
      //@ts-ignore
      this.txtInputEmailPrpos.value = text;
    }
  };

  txtInputEmailMobilePrpos = {
    ...this.txtInputEmailWebPrpos,
    keyboardType: "email-address"
  };

  txtInputEmailPrpos = this.isPlatformWeb()
    ? this.txtInputEmailWebPrpos
    : this.txtInputEmailMobilePrpos;

  txtPhoneNumberWebProps = {
    onChangeText: (text: string) => {
      this.setState({ phone: text });

      //@ts-ignore
      this.txtPhoneNumberProps.value = text;
    }
  };

  txtPhoneNumberMobileProps = {
    ...this.txtPhoneNumberWebProps,
    autoCompleteType: "tel",
    keyboardType: "phone-pad"
  };

  txtPhoneNumberProps = this.isPlatformWeb()
    ? this.txtPhoneNumberWebProps
    : this.txtPhoneNumberMobileProps;

  txtInputLastNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ lastName: text });

      //@ts-ignore
      this.txtInputLastNamePrpos.value = text;
    }
  };

  txtInputFirstNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ firstName: text });

      //@ts-ignore
      this.txtInputFirstNamePrpos.value = text;
    }
  };

  txtInputConfirmPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ reTypePassword: text });

      //@ts-ignore
      this.txtInputConfirmPasswordProps.value = text;
    },
    secureTextEntry: true
  };

  txtInputPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ password: text });

      //@ts-ignore
      this.txtInputPasswordProps.value = text;
    },
    secureTextEntry: true
  };

  // Customizable Area End
}
