import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";

export interface InputEventType {
  target: {
    value: string;
  }
}

export interface CheckEventType {
  target: {
    checked: boolean;
  }
}
export interface SelectEventType {
  target: {
    value: string | unknown;
  }
}

export interface SellerResponseType {
  data: {
    id: string;
    type: string;
    attributes: {
      country: string;
      address: string;
      user_profile_data: {
        preferred_selling_timeframe: string;
        preferred_moving_timeframe: string;
        mortgage_or_liens_exists: string;
      }
    }
  };
  meta: {
    message: string;
  }
}

export interface BuyerResponseType {
  data: {
    id: string;
    type: string;
    attributes: {
      country: string;
      address: string;
      user_profile_data: {
        preferred_location: string;
        property_preference: string;
        budget_in: string;
        financing_status: string;
        no_of_bedrooms: string;
        no_of_bathrooms: string;
        additional_features: string;
        purpose_of_buying: string;
        mortgage_pre_approval_status: string;
        prefered_moving_timeframe: string;
      }
    }
  };
  meta: {
    message: string;
  }
}

export interface SolicitorResponseType {
  data: {
    id: string;
    type: string;
    attributes: {
      country: string;
      address: string;
      user_profile_data: {
        law_firm_name: string;
        law_firm_address: string;
        no_of_solicitors: string;
        license_number: string;
        years_of_experience: string;
        specific_experience: string;
        regulation_for_onboarding_scheme: string;
        regulation_for_onboarding_authorities: string;
      }
    }
  };
  meta: {
    message: string;
  }
}

export interface AgentResponseType {
  data: {
    id: string;
    type: string;
    attributes: {
      country: string;
      address: string;
      user_profile_data: {
        agency_name: string;
        trading_name: string;
        name_of_director: string;
        branch_address: string;
        contact_name: string;
        job_title: string;
        date_of_incorporation: string;
        date_commenced_trading: string;
        website_address: string;
        years_of_experience: string;
        location_of_your_property_stock: string;
        redres_scheme_memeber: string;
        registration_number: string;
        ico_registration_number: string;
        ico_registration_expiry_date: string;
        insurance_indemnity_policy: string;
        insurance_indemnity_policy_attachment: string;
        hmrc_anti_money_laundery: string;
        hmrc_supervised_registration_number: string;
        hmrc_supervised_registration_expiry_date: string;
        disclaimer_accepted: string;
      }
    }
  };
  meta: {
    message: string;
  }
}

export interface APIPayloadType {
  contentType?: string;
  method: string;
  endPoint: string;
  body?: object;
  type?: string;
  baseURL?: string;
}

interface ErrorRes {
  errors: [
    {
      token: string;
    }
  ]
}

export interface CountryCodeResponseType {
  id: string;
  type: string;
  attributes: {
    name: string;
    emoji_flag: string;
    country_code: string;
  }
}

export interface SolicitorErrorType {
  isFirmName: boolean;
  isFirmAddress: boolean;
  licenseNo: boolean;
  yearOfExp: boolean;
  specificExperties: boolean;
  indemnityProvider: boolean;
  policyNumber: boolean;
  authorityIdNo: boolean;
  authorityLicenseNo: boolean;
  contactNumber: boolean;
}

export interface AgentErrorType {
  isAgencyName: boolean;
  isNameofDirector: boolean;
  isCompanyRegNo: boolean;
  isCompanyRegAddress: boolean;
  isContactName: boolean;
  isJobTitle: boolean;
  isContactNo: boolean;
  isYearofExp: boolean;
  isICORegNo: boolean;
  isICOExpiryDate: boolean;
  isHMRCRegNo: boolean;
  isHMRCRenewalDate: boolean;
  isAttachment: boolean;
}

export interface CountryCodeResponseTypeData {
  data:
  [
    {
      id: string;
      type: string;
      attributes: {
        name: string;
        emoji_flag: string;
        country_code: string;
      }
    }
  ]
}

// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  classes: Record<string, string>;
  // Customizable Area End
}

interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  sellerCountryCode: string | unknown;
  sellerContactNumber: string;
  isContactError: boolean;
  sellerAddress: string;
  countryCode: string;
  sellerSellingTime: string | unknown;
  sellerMovingTime: string | unknown;
  sellerMortgageValue: string | unknown;
  profileUpdateNotification: boolean;
  sellerProfileSellingTimeData: Array<string>;
  sellerProfileMovingTimeData: Array<string>;
  sellerProfileMortgageData: Array<string>;
  buyerPropertyPrefernceData: Array<string>;
  buyerPropertyBudgetData: Array<string>;
  buyerFinancingData: Array<string>;
  buyerBedroomsData: Array<string>;
  buyerBathroomsData: Array<string>;
  buyerAdditionalFeaturesData: Array<string>;
  buyerBuyingForData: Array<string>;
  buyerMortgageData: Array<string>;
  buyerMovingData: Array<string>;
  isContactErrorForBuyer: boolean;
  buyerCountryCode: string | unknown;
  buyerContactNumber: string;
  buyerAddress: string;
  buyerPropertyPrefernce: string | unknown;
  buyerPropertyBudget: string | unknown;
  buyerFinancing: string | unknown;
  buyerBedrooms: string | unknown;
  buyerBathrooms: string | unknown;
  buyerAdditionalFeatures: string | unknown;
  buyerBuyingFor: string | unknown;
  buyerMortgage: string | unknown;
  buyerMovingTime: string | unknown;
  getCountryCodeData: Array<CountryCodeResponseType>;
  buyerSuccessNotification: boolean;
  agentYearsOfExperienceData: Array<string>;
  agentCountryCode: string | unknown;
  agentContactNumber: string;
  agentLocationOfStock: string;
  agentRedressMember: string;
  agentPolicyValue: string;
  agentHMRCvalue: string;
  agentAgencyName: string;
  agentTradingName: string;
  agentDirectorTradingName: string;
  agentCompanyRegisterNumber: string;
  agentPrincipalAdd: string;
  agentBranchAdd: string;
  agentContactName: string;
  agentJobTitle: string;
  agentDOIncoporation: string;
  isShowMore: boolean;
  agentDateCommenced: string;
  agentWebstieAddress: string;
  agentYearsofExperience: string | unknown;
  agentRegistrationNo: string;
  agentICONumber: string;
  agentICOExpiryDate: string;
  agentHMRCRegNo: string;
  agentHMRRenewalDate: string;
  disclaimerNote1: boolean;
  disclaimerNote2: boolean;
  agentPolicyAttachment: string;
  agentSuccessNotification: boolean;
  solicitorYearsOfExpData: Array<string>;
  solicitorSpecificExpertiseData: Array<string>;
  solicitorCountryCode: string | unknown;
  solicitorContactNumber: string;
  solicitorFirmName: string;
  solicitorFirmAddress: string;
  noOfSolicitor: string;
  solicitorLicenceNo: string;
  solicitorYearsOfExp: string | unknown;
  solicitorExperties: string | unknown;
  solicitorAuthorities: string;
  solicitorAuthoritiesIdNumber: string;
  solicitorAuthoritiesLicenseNo: string;
  solicitorScheme: string;
  solicitorSchemeName: string;
  solicitorSchemeMembershipNo: string;
  solicitorIndemnityProvider: string;
  solicitorSchemePolicyNumber: string;
  isContactErrorForSolicitor: boolean;
  isContactErrorForAgent: boolean;
  token: string | unknown;
  showAllError: SolicitorErrorType;
  showErrorMessage: boolean;
  solicitorSuccessNotification: boolean;
  showAgentAllError: AgentErrorType;
  showAgentErroMessage: boolean;
  isDOIinvalid: boolean;
  isDateCommencedInvalid: boolean;
  isIOCInvalidDate: boolean;
  isHMRCInvalidDate: boolean;
  isDisclaimerChecked: boolean;
  isAgentRegNo: boolean;
  isAgencyName: boolean;
  isAgencyTradingValid: boolean;
  isAgencyDirectorNameValid: boolean;
  isAgencyContactName: boolean;
  isAgencyJobTitle: boolean;
  isAencyRegNum: boolean;
  isAgencyICOValid: boolean;
  isHMRCRegValid: boolean;
  isSolicitorFirmName: boolean;
  isNumberOfSolicitor: boolean;
  isSolicitorLicenceNumber: boolean;
  isSolicitorSRAIdNo: boolean;
  isSolicitorCLCLicence: boolean;
  isSolicitorSchemeName: boolean;
  isSolicitorSchemeNumber: boolean;
  isSolicitorIndemnity: boolean;
  isSolicitorIndemnityNumber: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class Customisableuserprofiles2Controller extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  sellerProfileApiCallId: string = "";
  getCountryCodeApiCallId: string = "";
  buyerProfileApiCallId: string = "";
  agentProfileApiCallId: string = "";
  solicitorProfileApiCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.ReciveUserCredentials)
      // Customizable Area End
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      // Customizable Area Start
      sellerCountryCode: "+44",
      sellerContactNumber: "",
      isContactError: false,
      sellerAddress: "",
      sellerSellingTime: "",
      countryCode: "",
      sellerMovingTime: "",
      sellerMortgageValue: "",
      profileUpdateNotification: false,
      sellerProfileSellingTimeData: ["ASAP", "Few weeks", "Few months"],
      sellerProfileMovingTimeData: ["1 to 2 weeks", "2 to 4 weeks", "1 to 2 months", "2 months or more", "No hurry"],
      sellerProfileMortgageData: ["Yes", "No"],
      buyerPropertyPrefernceData: ["Flat", "Detached", "Semi Detached", "Terraced"],
      buyerPropertyBudgetData: ["50k-100k", "100k-250k", "250k-500k", "500k-750k", "750k-1000k", "1000k-2500k", "2500k-5000k", "5000k-10,000k", "10,000k+"],
      buyerFinancingData: ["Cash buyer", "Financing"],
      buyerBedroomsData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      buyerBathroomsData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      buyerAdditionalFeaturesData: ["Garage", "Parking", "Garden", "Other amenities"],
      buyerBuyingForData: ["Self(residential)", "Investment"],
      buyerMortgageData: ["Approved", "In process", "Not started yet"],
      buyerMovingData: ["1 to 2 weeks", "2 to 4 weeks", "1 to 2 months", "2 months or more", "No hurry"],
      isContactErrorForBuyer: false,
      buyerCountryCode: "+44",
      buyerContactNumber: "",
      buyerAddress: "",
      buyerPropertyPrefernce: "",
      buyerPropertyBudget: "",
      buyerFinancing: "",
      buyerBedrooms: "",
      buyerBathrooms: "",
      buyerAdditionalFeatures: "",
      buyerBuyingFor: "",
      buyerMortgage: "",
      buyerMovingTime: "",
      getCountryCodeData: [],
      buyerSuccessNotification: false,
      agentYearsOfExperienceData: ["1 to 5 yrs", "5 to 10 yrs", "10 to 20 yrs", "20 yrs to above"],
      agentLocationOfStock: "England",
      agentCountryCode: "+44",
      agentContactNumber: "",
      agentRedressMember: "The Property Ombudsman",
      agentPolicyValue: "Yes",
      agentHMRCvalue: "No",
      agentAgencyName: "",
      agentTradingName: "",
      agentDirectorTradingName: "",
      agentCompanyRegisterNumber: "",
      agentPrincipalAdd: "",
      agentBranchAdd: "",
      isShowMore: false,
      agentContactName: "",
      agentDOIncoporation: "",
      agentJobTitle: "",
      agentDateCommenced: "",
      agentWebstieAddress: "",
      agentYearsofExperience: "",
      agentRegistrationNo: "",
      agentICONumber: "",
      agentICOExpiryDate: "",
      agentHMRCRegNo: "",
      agentHMRRenewalDate: "",
      agentPolicyAttachment: "",
      disclaimerNote1: true,
      disclaimerNote2: false,
      agentSuccessNotification: false,
      solicitorYearsOfExpData: ["1 to 5", "5 to 10", "10 to 20", "20+ years of experience"],
      solicitorSpecificExpertiseData: ["Residential", "Commercial"],
      solicitorCountryCode: "+44",
      solicitorContactNumber: "",
      solicitorFirmName: "",
      solicitorFirmAddress: "",
      noOfSolicitor: "",
      solicitorLicenceNo: "",
      solicitorYearsOfExp: "",
      solicitorExperties: "",
      solicitorAuthorities: "Solicitors Regulation Authority (SRA)",
      solicitorAuthoritiesIdNumber: "",
      solicitorAuthoritiesLicenseNo: "",
      solicitorScheme: "Conveyancing Quality Scheme (CQS)",
      solicitorSchemeName: "",
      solicitorSchemeMembershipNo: "",
      solicitorIndemnityProvider: "",
      solicitorSchemePolicyNumber: "",
      isContactErrorForSolicitor: false,
      isContactErrorForAgent: false,
      token: '',
      showAllError: {
        isFirmName: false,
        isFirmAddress: false,
        licenseNo: false,
        yearOfExp: false,
        specificExperties: false,
        indemnityProvider: false,
        policyNumber: false,
        authorityIdNo: false,
        authorityLicenseNo: false,
        contactNumber: false,
      },
      showErrorMessage: false,
      solicitorSuccessNotification: false,
      showAgentAllError: {
        isAgencyName: false,
        isNameofDirector: false,
        isCompanyRegNo: false,
        isCompanyRegAddress: false,
        isContactName: false,
        isJobTitle: false,
        isContactNo: false,
        isYearofExp: false,
        isICORegNo: false,
        isICOExpiryDate: false,
        isHMRCRegNo: false,
        isHMRCRenewalDate: false,
        isAttachment: false
      },
      showAgentErroMessage: false,
      isDOIinvalid: false,
      isDateCommencedInvalid: false,
      isIOCInvalidDate: false,
      isHMRCInvalidDate: false,
      isDisclaimerChecked: false,
      isAgencyName: false,
      isAgentRegNo: false,
      isAgencyTradingValid: false,
      isAgencyDirectorNameValid: false,
      isAgencyContactName: false,
      isAgencyJobTitle: false,
      isAencyRegNum: false,
      isAgencyICOValid: false,
      isHMRCRegValid: false,
      isSolicitorFirmName: false,
      isNumberOfSolicitor: false,
      isSolicitorLicenceNumber: false,
      isSolicitorSRAIdNo: false,
      isSolicitorCLCLicence: false,
      isSolicitorSchemeName: false,
      isSolicitorSchemeNumber: false,
      isSolicitorIndemnity: false,
      isSolicitorIndemnityNumber: false
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
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      if (this.inValidResponse(responseJson)) {
        this.responseFailureCallBack(apiRequestCallId, responseJson);
      }
      else if (this.isValidResponse(responseJson)) {
        this.responseSucessCallBack(apiRequestCallId, responseJson);
      }
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
    await this.getCountryCode();
    const token = localStorage.getItem("token");
    this.setState({ token: token })
  }

  apiCall = async (data: APIPayloadType) => {
    let { method, endPoint, body, baseURL, type = "", contentType } = data;
    const header = {
      "Content-Type": contentType,
      token: this.state.token
    };
    let requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    body && type !== "formData"
      ? requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      )
      : requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        body
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  isValidResponse = (responseJson: SellerResponseType & CountryCodeResponseTypeData & BuyerResponseType & AgentResponseType) => {
    return responseJson && responseJson.data;
  };

  inValidResponse = (responseJson: ErrorRes) => {
    return responseJson && responseJson.errors;
  };

  responseSucessCallBack = async (apiRequestCallId: string, responseJson: SellerResponseType & CountryCodeResponseTypeData & BuyerResponseType & AgentResponseType & SolicitorResponseType) => {
    if (apiRequestCallId === this.sellerProfileApiCallId) {
      this.sellerProfileSucessCallBack(responseJson);
    }
    if (apiRequestCallId === this.getCountryCodeApiCallId) {
      this.getCountryCodeSuccessCallBack(responseJson);
    }
    if (apiRequestCallId === this.buyerProfileApiCallId) {
      this.buyerProfileSucessCallBack(responseJson);
    }
    if (apiRequestCallId === this.agentProfileApiCallId) {
      this.agentProfileSucessCallBack(responseJson);
    }
    if (apiRequestCallId === this.solicitorProfileApiCallId) {
      this.solicitorProfileSucessCallBack(responseJson);
    }
  };

  responseFailureCallBack = async (apiRequestCallId: string, responseJson: ErrorRes & string) => {
    if (apiRequestCallId === this.sellerProfileApiCallId) {
      this.sellerProfileFailureCallBack(responseJson);
    }
    if (apiRequestCallId === this.getCountryCodeApiCallId) {
      this.getCountryCodeFailureCallBack(responseJson);
    }
    if (apiRequestCallId === this.buyerProfileApiCallId) {
      this.buyerProfileFailureCallBack(responseJson);
    }
    if (apiRequestCallId === this.agentProfileApiCallId) {
      this.agentProfileFailureCallBack(responseJson);
    }
    if (apiRequestCallId === this.solicitorProfileApiCallId) {
      this.solicitorProfileFailureCallBack(responseJson);
    }
  };

  parseConverter = (data: string | unknown) => {
    let value: string | unknown = data;
    let parseValue = JSON.stringify(value);
    return JSON.parse(parseValue);
  };

  sellerProfileSave = async () => {
    let formdata = new FormData();
    formdata.append("profile[country]", this.parseConverter(this.state.sellerCountryCode));
    formdata.append("profile[address]", this.state.sellerAddress);
    formdata.append("profile[preferred_selling_timeframe]", this.parseConverter(this.state.sellerSellingTime));
    formdata.append("profile[preferred_moving_timeframe]", this.parseConverter(this.state.sellerMovingTime));
    formdata.append("profile[mortgage_or_liens_exists]", this.parseConverter(this.state.sellerMortgageValue));
    this.sellerProfileApiCallId = await this.apiCall({
      method: configJSON.putSellerProfileAPiMethod,
      endPoint: `${configJSON.putSellerProfileAPiEndPoint}?ignore_this=seller`,
      body: formdata,
      type: "formData",
    });
  };

  sellerProfileSucessCallBack = (response: SellerResponseType) => {
    this.setState({ profileUpdateNotification: true })
  };

  sellerProfileFailureCallBack = (response: ErrorRes) => {
    this.setState({ profileUpdateNotification: false })
  };

  getCountryCode = async () => {
    this.getCountryCodeApiCallId = await this.apiCall({
      contentType: configJSON.apiGetCountryCodeContentTyp,
      method: configJSON.apiGetCountryMethod,
      endPoint: configJSON.apiGetCountryCodeEndPoint,
    });
  };

  getCountryCodeSuccessCallBack = async (response: CountryCodeResponseTypeData) => {
    this.setState({ getCountryCodeData: response.data });
  };

  getCountryCodeFailureCallBack = async (errorReponse: string) => {
    this.setState({ getCountryCodeData: [] });
  };

  buyerProfileSave = async () => {
    let formdata = new FormData();
    formdata.append("profile[country]", this.parseConverter(this.state.countryCode));
    formdata.append("profile[preferred_location]", this.state.buyerAddress);
    formdata.append("profile[property_preference]", this.parseConverter(this.state.buyerPropertyPrefernce));
    formdata.append("profile[budget_in]", this.parseConverter(this.state.buyerPropertyBudget));
    formdata.append("profile[financing_status]", this.parseConverter(this.state.buyerFinancing));
    formdata.append("profile[no_of_bedrooms]", this.parseConverter(this.state.buyerBedrooms));
    formdata.append("profile[no_of_bathrooms]", this.parseConverter(this.state.buyerBathrooms));
    formdata.append("profile[mortgage_pre_approval_status]", this.parseConverter(this.state.buyerMortgage));
    formdata.append("profile[prefered_moving_timeframe]", this.parseConverter(this.state.buyerMovingTime));
    this.buyerProfileApiCallId = await this.apiCall({
      method: configJSON.putBuyerProfileAPiMethod,
      endPoint: `${configJSON.putBuyerProfileAPiEndPoint}?ignore_this=buyer`,
      body: formdata,
      type: "formData",
    });
  };

  buyerProfileSucessCallBack = (response: BuyerResponseType) => {
    this.setState({ buyerSuccessNotification: true });
  };

  buyerProfileFailureCallBack = (response: ErrorRes) => {
    this.setState({ buyerSuccessNotification: false });
  };

  agentProfileSave = async () => {
    const showAgentAllError = {
      isAgencyName: this.state.agentAgencyName.trim() === '',
      isNameofDirector: this.state.agentDirectorTradingName.trim() === '',
      isCompanyRegNo: this.state.agentCompanyRegisterNumber.trim() === '',
      isCompanyRegAddress: this.state.agentPrincipalAdd.trim() === '',
      isContactName: this.state.agentContactName.trim() === '',
      isJobTitle: this.state.agentJobTitle.trim() === '',
      isContactNo: this.state.agentContactNumber.trim() === '',
      isYearofExp: typeof this.state.agentYearsofExperience === 'string' && this.state.agentYearsofExperience.trim() === '',
      isICORegNo: this.state.agentICONumber.trim() === '' ,
      isICOExpiryDate: this.state.agentICOExpiryDate.trim() === '' ,
      isAttachment: this.state.agentPolicyValue === "Yes" && this.state.agentPolicyAttachment.trim() === '' ,
      isHMRCRegNo: this.state.agentHMRCvalue === "Yes" && this.state.agentHMRCRegNo.trim() === '' ,
      isHMRCRenewalDate: this.state.agentHMRCvalue === "Yes" && this.state.agentHMRRenewalDate.trim() === '',
    };
    this.setState({ showAgentAllError: showAgentAllError });
    const anyTrueValue = Object.values(showAgentAllError).includes(true);
    if (anyTrueValue || !this.state.disclaimerNote2) {
      this.setState({
        isDisclaimerChecked: !this.state.disclaimerNote2,
        showAgentErroMessage: anyTrueValue,
      });
    }
    else {
      this.setState({ showAgentErroMessage: false, isDisclaimerChecked: false});
      let formdata = new FormData();
      formdata.append("profile[agency_name]", this.parseConverter(this.state.agentAgencyName));
      formdata.append("profile[trading_name]", this.state.agentTradingName);
      formdata.append("profile[name_of_director]", this.state.agentDirectorTradingName);
      formdata.append("profile[office_address]", this.state.agentPrincipalAdd);
      formdata.append("profile[branch_address]", this.parseConverter(this.state.agentBranchAdd));
      formdata.append("profile[contact_name]", this.parseConverter(this.state.agentContactName));
      formdata.append("profile[job_title]", this.parseConverter(this.state.agentJobTitle));
      formdata.append("profile[date_of_incorporation]", this.parseConverter(this.state.agentDOIncoporation));
      formdata.append("profile[date_commenced_trading]", this.parseConverter(this.state.agentDateCommenced));
      formdata.append("profile[website_address]", this.parseConverter(this.state.agentWebstieAddress));
      formdata.append("profile[years_of_experience]", this.parseConverter(this.state.agentYearsofExperience));
      formdata.append("profile[location_of_your_property_stock]", this.parseConverter(this.state.agentLocationOfStock));
      formdata.append("profile[redres_scheme_memeber]", this.parseConverter(this.state.agentRedressMember));
      formdata.append("profile[registration_number]", this.parseConverter(this.state.agentRegistrationNo));
      formdata.append("profile[ico_registration_number]", this.parseConverter(this.state.agentICONumber));
      formdata.append("profile[ico_registration_expiry_date]", this.parseConverter(this.state.agentICOExpiryDate));
      formdata.append("profile[insurance_indemnity_policy]", this.parseConverter(this.state.agentPolicyValue));
      formdata.append("profile[hmrc_anti_money_laundery]", this.parseConverter(this.state.agentHMRCvalue));
      formdata.append("profile[hmrc_supervised_registration_number]", this.parseConverter(this.state.agentHMRCRegNo));
      formdata.append("profile[insurance_indemnity_policy_attachment]", this.parseConverter(this.state.agentPolicyAttachment));
      formdata.append("profile[hmrc_supervised_registration_expiry_date]", this.parseConverter(this.state.agentHMRRenewalDate));
      formdata.append("profile[disclaimer_accepted]", this.parseConverter(this.state.disclaimerNote2));
      this.agentProfileApiCallId = await this.apiCall({
        method: configJSON.putAgentProfileAPiMethod,
        endPoint: `${configJSON.putAgentProfileAPiEndPoint}?ignore_this=agent`,
        body: formdata,
        type: "formData",
      });
    }
  };

  agentProfileSucessCallBack = (response: AgentResponseType) => {
    this.setState({ agentSuccessNotification: true });
  };

  agentProfileFailureCallBack = (response: ErrorRes) => {
    this.setState({ agentSuccessNotification: false });
  };

  solicitorProfileSave = async () => {
    const showAllError = {
      isFirmName: this.state.solicitorFirmName.trim() === '' ? true : false,
      isFirmAddress: this.state.solicitorFirmAddress.trim() === '' ? true : false,
      licenseNo: this.state.solicitorLicenceNo.trim() === '' ? true : false,
      yearOfExp: typeof this.state.solicitorYearsOfExp === 'string' && this.state.solicitorYearsOfExp.trim() === '',
      specificExperties: typeof this.state.solicitorExperties === 'string' && this.state.solicitorExperties.trim() === '',
      indemnityProvider: this.state.solicitorIndemnityProvider.trim() === '' ? true : false,
      policyNumber: this.state.solicitorSchemePolicyNumber.trim() === '' ? true : false,
      authorityIdNo: this.state.solicitorAuthorities === "Solicitors Regulation Authority (SRA)" && this.state.solicitorAuthoritiesIdNumber.trim() === '' ? true : false,
      authorityLicenseNo: this.state.solicitorAuthorities === "Council of Licensed Conveyancers (CLC)" && this.state.solicitorAuthoritiesLicenseNo.trim() === '' ? true : false,
      contactNumber: this.state.solicitorContactNumber.trim() === '' ? true : false
    };
    this.setState({ showAllError: showAllError });
    const anyTrueValue = Object.values(showAllError).includes(true);
     if (anyTrueValue || this.state.isContactError) {
      this.setState({
        isContactError: this.state.isContactError,
        showErrorMessage: anyTrueValue,
      });
    }
    else{
      this.setState({ showErrorMessage: false });
      let formdata = new FormData();
      formdata.append("profile[country]", this.parseConverter(this.state.solicitorCountryCode));
      formdata.append("profile[law_firm_name]", this.state.solicitorFirmName);
      formdata.append("profile[law_firm_address]", this.state.solicitorFirmAddress);
      formdata.append("profile[no_of_solicitors]", this.state.noOfSolicitor);
      formdata.append("profile[license_number]", this.state.solicitorLicenceNo);
      formdata.append("profile[years_of_experience]", this.parseConverter(this.state.solicitorYearsOfExp));
      formdata.append("profile[specific_experience]", this.parseConverter(this.state.solicitorExperties));
      formdata.append("profile[regulation_for_onboarding_scheme]", this.parseConverter(this.state.solicitorScheme));
      formdata.append("profile[regulation_for_onboarding_authorities]", this.parseConverter(this.state.solicitorAuthorities));
      this.solicitorProfileApiCallId = await this.apiCall({
        method: configJSON.putSolicitorProfileAPiMethod,
        endPoint: `${configJSON.putSolicitorProfileAPiEndPoint}?ignore_this=solicitor`,
        body: formdata,
        type: "formData",
      });
    }
  };

  solicitorProfileSucessCallBack = (response: AgentResponseType) => {
    this.setState({ solicitorSuccessNotification: true });
  };

  solicitorProfileFailureCallBack = (response: ErrorRes) => {
    this.setState({ solicitorSuccessNotification: false });
  };

  handleSellerCountryCode = (event: SelectEventType) => {
    this.setState({
      sellerCountryCode: event.target.value
    });
  };

  handleSellerContactNumber = (event: InputEventType) => {
    const phoneNumber = event.target.value;
    const contactRegx = /^[0-9\b]+$/;
    if (contactRegx.test(phoneNumber) && phoneNumber.length<15) {
      this.setState({
        sellerContactNumber: event.target.value,
        isContactError: false
      });
    } else {
      this.setState({
        isContactError: true,
        sellerContactNumber: event.target.value
      });
    }
  };

  handleSellerAddress = (event: InputEventType) => {
    this.setState({
      sellerAddress: event.target.value
    });
  };

  handleSellerSellingTime = (event: SelectEventType) => {
    this.setState({
      sellerSellingTime: event.target.value
    });
  };

  handleSellerMovingTime = (event: SelectEventType) => {
    this.setState({
      sellerMovingTime: event.target.value
    });
  };

  handleSellerMortage = (event: SelectEventType) => {
    this.setState({ sellerMortgageValue: event.target.value });
  };

  handleSnackBarClose = () => {
    this.setState({ isContactError: false });
  };

  handleBuyerCountryCode = (event: SelectEventType) => {
    this.setState({
      buyerCountryCode: event.target.value
    });
  };

  handleBuyerContactNumber = (event: InputEventType) => {
    const phoneNumber = event.target.value;
    const contactRegx = /^[0-9\b]+$/;
    if (contactRegx.test(phoneNumber) && phoneNumber.length < 15) {
      this.setState({
        buyerContactNumber: event.target.value,
        isContactError: false
      });
    } else {
      this.setState({
        isContactError: true,
        buyerContactNumber: event.target.value
      });
    }
  };

  handleBuyerAddress = (event: InputEventType) => {
    this.setState({
      buyerAddress: event.target.value
    });
  };

  handleBuyerPropertyPrefernce = (event: SelectEventType) => {
    this.setState({
      buyerPropertyPrefernce: event.target.value
    });
  };

  handleBuyerPropertyBudget = (event: SelectEventType) => {
    this.setState({
      buyerPropertyBudget: event.target.value
    });
  };

  handleBuyerFinancing = (event: SelectEventType) => {
    this.setState({
      buyerFinancing: event.target.value
    });
  };

  handleBuyerBedrooms = (event: SelectEventType) => {
    this.setState({
      buyerBedrooms: event.target.value
    });
  };

  handleBuyerBathrooms = (event: SelectEventType) => {
    this.setState({
      buyerBathrooms: event.target.value
    });
  };

  handleBuyerAdditionalFeatures = (event: SelectEventType) => {
    this.setState({
      buyerAdditionalFeatures: event.target.value
    });
  };

  handleBuyerBuyingFor = (event: SelectEventType) => {
    this.setState({
      buyerBuyingFor: event.target.value
    });
  };

  handleBuyerMortgage = (event: SelectEventType) => {
    this.setState({
      buyerMortgage: event.target.value
    });
  };

  handleBuyerMovingTime = (event: SelectEventType) => {
    this.setState({
      buyerMovingTime: event.target.value
    });
  };

  showBuyerSuccessNotification = () => {
    this.setState({ buyerSuccessNotification: false });
  };

  showSellerSuccessNotification = () => {
    this.setState({ profileUpdateNotification: false });
  };

  handleAgentCountryCode = (event: SelectEventType) => {
    this.setState({ agentCountryCode: event.target.value });
  };

  handleAgentContactNumber = (event: InputEventType) => {
    const phoneNumber = event.target.value;
    const contactRegx = /^[0-9\b]+$/;
    if (contactRegx.test(phoneNumber) && phoneNumber.length < 15) {
      this.setState({
        agentContactNumber: event.target.value,
        isContactError: false
      });
    } else {
      this.setState({
        isContactError: true,
        agentContactNumber: event.target.value
      });
    }
  };

  handleAgentLocationStock = (event: InputEventType) => {
    this.setState({ agentLocationOfStock: event.target.value });
  };

  handleAgentRedressMember = (event: InputEventType) => {
    this.setState({ agentRedressMember: event.target.value });
  };

  handleAgentPolicyValue = (event: InputEventType) => {
    this.setState({ agentPolicyValue: event.target.value });
  };

  handleAgentHMRCValue = (event: InputEventType) => {
    this.setState({ agentHMRCvalue: event.target.value });
  };

  handleAgentAgencyName = (event: InputEventType) => {
    this.setState({ agentAgencyName: event.target.value });
  };

  validateAgencyName = () => {
    const { agentAgencyName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(agentAgencyName)) {
      this.setState({ isAgencyName: true });
    } else {
      this.setState({ isAgencyName: false });
    }
  };

  handleAgentTradingName = (event: InputEventType) => {
    this.setState({ agentTradingName: event.target.value });
  };

  validateTradingName = () => {
    const { agentTradingName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(agentTradingName)) {
      this.setState({ isAgencyTradingValid: true });
    } else {
      this.setState({ isAgencyTradingValid: false });
    }
  };

  handleAgentDirectorName = (event: InputEventType) => {
    this.setState({ agentDirectorTradingName: event.target.value });
  };

  validateDirectorName = () => {
    const { agentDirectorTradingName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(agentDirectorTradingName)) {
      this.setState({ isAgencyDirectorNameValid: true });
    } else {
      this.setState({ isAgencyDirectorNameValid: false });
    }
  };

  handleAgentCompanyRegNo = (event: InputEventType) => {
    this.setState({ agentCompanyRegisterNumber: event.target.value });
  };

  validateRegNo = () => {
    const { agentCompanyRegisterNumber } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(agentCompanyRegisterNumber)) {
      this.setState({ isAgentRegNo: true });
    } else {
      this.setState({ isAgentRegNo: false });
    }
  };

  handleAgentPrincipalAdd = (event: InputEventType) => {
    this.setState({ agentPrincipalAdd: event.target.value });
  };

  handleBranchAdd = (event: InputEventType) => {
    this.setState({ agentBranchAdd: event.target.value });
  };

  handleContactName = (event: InputEventType) => {
    this.setState({ agentContactName: event.target.value });
  };

  validateContactName = () => {
    const { agentContactName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(agentContactName)) {
      this.setState({ isAgencyContactName: true });
    } else {
      this.setState({ isAgencyContactName: false });
    }
  };

  handleJobTitle = (event: InputEventType) => {
    this.setState({ agentJobTitle: event.target.value });
  };

  validateJobTitle = () => {
    const { agentJobTitle } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(agentJobTitle)) {
      this.setState({ isAgencyJobTitle: true });
    } else {
      this.setState({ isAgencyJobTitle: false });
    }
  };

  handleDOIncoporation = (event: InputEventType) => {
    this.setState({ agentDOIncoporation: event.target.value });
  }

  validateDOIDate = () => {
    const { agentDOIncoporation } = this.state;
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(agentDOIncoporation)) {
      this.setState({ isDOIinvalid: true });
    } else {
      this.setState({ isDOIinvalid: false });
    }
  }
  
  handleagentDateCommenced = (event: InputEventType) => {
    this.setState({ agentDateCommenced: event.target.value });
  }

  validateDateCommencedDate = () => {
    const { agentDateCommenced } = this.state;
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(agentDateCommenced)) {
      this.setState({ isDateCommencedInvalid: true });
    } else {
      this.setState({ isDateCommencedInvalid: false });
    }
  };

  handleAgentWebsiteAddress = (event: InputEventType) => {
    this.setState({ agentWebstieAddress: event.target.value });
  };

  handleAgentYearsofExperience = (event: SelectEventType) => {
    this.setState({ agentYearsofExperience: event.target.value });
  };

  handleAgentRegstrationNo = (event: InputEventType) => {
    this.setState({ agentRegistrationNo: event.target.value });
  };

  validateAgentRegNo = () => {
    const { agentRegistrationNo } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(agentRegistrationNo)) {
      this.setState({ isAencyRegNum: true });
    } else {
      this.setState({ isAencyRegNum: false });
    }
  };

  handleAgentICONumber = (event: InputEventType) => {
    this.setState({ agentICONumber: event.target.value });
  };

  validateICONo = () => {
    const { agentICONumber } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(agentICONumber)) {
      this.setState({ isAgencyICOValid: true });
    } else {
      this.setState({ isAgencyICOValid: false });
    }
  };

  handleICOExpiryDate = (event: InputEventType) => {
    this.setState({ agentICOExpiryDate: event.target.value });
  }

  validateIOCExprityDate = () => {
    const { agentICOExpiryDate } = this.state;
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(agentICOExpiryDate)) {
      this.setState({ isIOCInvalidDate: true });
    } else {
      this.setState({ isIOCInvalidDate: false });
    }
  };
 
  handleAgentHMRCRegNo = (event: InputEventType) => {
    this.setState({ agentHMRCRegNo: event.target.value });
  };

  validateHMRCRegNo = () => {
    const { agentHMRCRegNo } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(agentHMRCRegNo)) {
      this.setState({ isHMRCRegValid: true });
    } else {
      this.setState({ isHMRCRegValid: false });
    }
  };

  handleAgentHMRRenewalDate = (event: InputEventType) => {
    this.setState({ agentHMRRenewalDate: event.target.value });
  };

  validateHMRCDate = () => {
    const { agentHMRRenewalDate } = this.state;
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(agentHMRRenewalDate)) {
      this.setState({ isHMRCInvalidDate: true });
    } else {
      this.setState({ isHMRCInvalidDate: false });
    }
  };

  handleAgentPolicyAttachment = (event: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        let profileImage = reader.result as string;
        this.setState({ agentPolicyAttachment: profileImage });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  handleDisclaimerNote1 = (event: CheckEventType) => {
    this.setState({ disclaimerNote1: event.target.checked });
  };

  handleDisclaimerNote2 = (event: CheckEventType) => {
    this.setState({ disclaimerNote2: event.target.checked });
  };

  handleShowMoreText = () => {
    this.setState({ isShowMore: !this.state.isShowMore });
  };

  handleSolicitorCuntryCode = (event: SelectEventType) => {
    this.setState({ solicitorCountryCode: event.target.value });
  };

  handleSolicitorFirmName = (event: InputEventType) => {
    this.setState({ solicitorFirmName: event.target.value });
  };

  validateFirmName = () => {
    const { solicitorFirmName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(solicitorFirmName)) {
      this.setState({ isSolicitorFirmName: true });
    } else {
      this.setState({ isSolicitorFirmName: false });
    }
  };

  handleSolicitorFirmAddress = (event: InputEventType) => {
    this.setState({ solicitorFirmAddress: event.target.value });
  };

  handleNoOfSolicitor = (event: InputEventType) => {
    this.setState({ noOfSolicitor: event.target.value });
  };

  validateNoOfSolicitor = () => {
    const { noOfSolicitor } = this.state;
    const dateRegex = /^[0-9\b]+$/;
    if (!dateRegex.test(noOfSolicitor)) {
      this.setState({ isNumberOfSolicitor: true });
    } else {
      this.setState({ isNumberOfSolicitor: false });
    }
  };

  handleSolicitorLicenseNo = (event: InputEventType) => {
    this.setState({ solicitorLicenceNo: event.target.value });
  };

  validateLicenceNo = () => {
    const { solicitorLicenceNo } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(solicitorLicenceNo)) {
      this.setState({ isSolicitorLicenceNumber: true });
    } else {
      this.setState({ isSolicitorLicenceNumber: false });
    }
  };

  handleSolicitorYearsOfExp = (event: SelectEventType) => {
    this.setState({ solicitorYearsOfExp: event.target.value });
  };

  handleSolicitorExperties = (event: SelectEventType) => {
    this.setState({ solicitorExperties: event.target.value });
  };

  handleSolicitorAuthorities = (event: InputEventType) => {
    this.setState({ solicitorAuthorities: event.target.value, solicitorAuthoritiesIdNumber: "", solicitorAuthoritiesLicenseNo :""});
  };

  handleSolicitorAuthorityIdNo = (event: InputEventType) => {
    this.setState({ solicitorAuthoritiesIdNumber: event.target.value });
  };

  validateAuthorityNo = () => {
    const { solicitorAuthoritiesIdNumber } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(solicitorAuthoritiesIdNumber)) {
      this.setState({ isSolicitorSRAIdNo: true });
    } else {
      this.setState({ isSolicitorSRAIdNo: false });
    }
  };

  handleSolicitorAuthorityLicenseNo = (event: InputEventType) => {
    this.setState({ solicitorAuthoritiesLicenseNo: event.target.value });
  };

  validateAuthorityLicenceNo = () => {
    const { solicitorAuthoritiesLicenseNo } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(solicitorAuthoritiesLicenseNo)) {
      this.setState({ isSolicitorCLCLicence: true });
    } else {
      this.setState({ isSolicitorCLCLicence: false });
    }
  };

  handleSolicitorScheme = (event: InputEventType) => {
    this.setState({ solicitorScheme: event.target.value, solicitorSchemeName: "", solicitorSchemeMembershipNo :""});
  };

  handleIndemnityProvider = (event: InputEventType) => {
    this.setState({ solicitorIndemnityProvider: event.target.value });
  };

  validateIndemnityProvider = () => {
    const { solicitorIndemnityProvider } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(solicitorIndemnityProvider)) {
      this.setState({ isSolicitorIndemnity: true });
    } else {
      this.setState({ isSolicitorIndemnity: false });
    }
  };

  handleSchemePolicyNumber = (event: InputEventType) => {
    this.setState({ solicitorSchemePolicyNumber: event.target.value });
  };

  validateSchemePolicyNumber = () => {
    const { solicitorSchemePolicyNumber } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(solicitorSchemePolicyNumber)) {
      this.setState({ isSolicitorIndemnityNumber: true });
    } else {
      this.setState({ isSolicitorIndemnityNumber: false });
    }
  };

  handleSolicitorSchemeName = (event: InputEventType) => {
    this.setState({ solicitorSchemeName: event.target.value });
  };

  validateSchemeName = () => {
    const { solicitorSchemeName } = this.state;
    const dateRegex = /^[a-zA-Z0-9\s]*$/;
    if (!dateRegex.test(solicitorSchemeName)) {
      this.setState({ isSolicitorSchemeName: true });
    } else {
      this.setState({ isSolicitorSchemeName: false });
    }
  };

  handleSolicitorMembershipNo = (event: InputEventType) => {
    this.setState({ solicitorSchemeMembershipNo: event.target.value });
  };

  validateMembershipNo = () => {
    const { solicitorSchemeMembershipNo } = this.state;
    const dateRegex = /^[a-zA-Z0-9]*$/;
    if (!dateRegex.test(solicitorSchemeMembershipNo)) {
      this.setState({ isSolicitorSchemeNumber: true });
    } else {
      this.setState({ isSolicitorSchemeNumber: false });
    }
  };

  handleSolicitorContactNumber = (event: InputEventType) => {
    const phoneNumber = event.target.value;
    const contactRegx = /^[0-9\b]+$/;
    if (contactRegx.test(phoneNumber) && phoneNumber.length < 15) {
      this.setState({
        solicitorContactNumber: event.target.value,
        isContactError: false
      });
    } else {
      this.setState({
        isContactError: true,
        solicitorContactNumber: event.target.value
      });
    }
  };

  handleSolicitorAllError = () => {
    this.setState({ showErrorMessage: false });
  };

  handleAgentSolicitorAllError = () => {
    this.setState({ showAgentErroMessage: false });
  };
  
  showAgentSuccessNotification = () => {
    this.setState({ agentSuccessNotification: false });
  };

  handleDisclaimerValue = () =>{
    this.setState({ isDisclaimerChecked: false });
  };

  showSolicitorSuccessNotification = () => {
    this.setState({ solicitorSuccessNotification: false });
  };
  // Customizable Area End
}
