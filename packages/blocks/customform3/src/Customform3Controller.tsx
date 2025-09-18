import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
import {
  BuyerSectionOtherInformation,
  CountryCodeResType,
  CountryCodeResTypeData,
  FileEventType,
  InputEventType,
  MakeAnOfferErrorType,
  MemorandumFormValues,
  MemorandumOfSaleResTypeData,
  PropertyTenure,
  SelectEventType,
  SelectedMemorandumOfSale,
  StatusMemorandumOfSale,
  UserInformation,
} from "./helpers/types";
import moment from "moment";
import { pick } from "lodash";

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
  selectedOption: string;
  page: number;
  countryCode: string;
  isSnackbarOpen: boolean;
  getCountryCodeData: Array<CountryCodeResType>;
  formData: {
    fullPropertyAddress: string;
    monthCount: string;
    fullName: string;
    email: string;
    telephoneNum: string;
    message: string;
    contactPreference: string;
  };
  // Customizable Area Start
  financingData: Array<string>;
  offerPrice: string;
  financingValue: string | unknown;
  chainFeeValue: string;
  proofOfFinance: string;
  proofOfFinanceData: Array<string>;
  proofOfIdentity: string;
  proofOfIdentityAttachment: Array<string>;
  proofOfAddress: string;
  proofOfAddressAttachment: Array<string>;
  isOfferPriceValid: boolean;
  showAllError: MakeAnOfferErrorType;
  memorandumOfSaleFormSubmittedSuccessfully: boolean;
  selectedMemorandumOfSale: SelectedMemorandumOfSale | null;
  isSeller: boolean;
  isAcceptingProcess: boolean;
  isRevisionProcess: boolean;
  selectedMemorandumOfSaleId: string | null;
  isDeclineModalOpen: boolean;
  isAcceptModalOpen: boolean;
  isMemorandumOfSaleCompleted: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class Customform3Controller extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  getCountryCodeApiCallId: string = "";
  createMemorandumOfSaleApiCallId: string = "";
  getMemorandumOfSaleApiCallId: string = "";
  updateMemorandumOfSaleApiCallId: string = "";
  acceptDeclineMemorandumOfSaleApiCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area End
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      page: 1,
      enableField: false,
      selectedOption: "",
      isSnackbarOpen: false,
      getCountryCodeData: [],
      countryCode: "",
      formData: {
        fullPropertyAddress: '',
        monthCount: '',
        fullName: '',
        email: '',
        telephoneNum: '',
        message: '',
        contactPreference: '',
      },
      // Customizable Area Start
      financingData: ["Mortgage in principle", "Cash"],
      offerPrice: "",
      financingValue: "",
      chainFeeValue: "",
      proofOfFinance: "",
      proofOfFinanceData: [],
      proofOfIdentity: "",
      proofOfIdentityAttachment: [],
      proofOfAddress: "",
      proofOfAddressAttachment: [],
      isOfferPriceValid: false,
      showAllError: {
        isOfferPrice: false,
        isChainFee: false,
        isProofOfFinanceFile: false,
        isProofOfIdentityFile: false,
        isProofOfAddressFile: false,
        isProofOfFinace: false,
        isProofOfIdentity: false,
        isProofOfAddress: false
      },
      memorandumOfSaleFormSubmittedSuccessfully: false,
      selectedMemorandumOfSale: null,
      isSeller: true, //should depend on the user's role, now I don't understand how to do this
      isAcceptingProcess: false,
      isRevisionProcess: false,
      isMemorandumOfSaleCompleted: false,
      selectedMemorandumOfSaleId: null, //change after we finish the catalogue, it should come from the catalogue
      isDeclineModalOpen: false,
      isAcceptModalOpen: false,
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
      if (this.invalidResponse(responseJson)) {
        this.responseFailure(apiRequestCallId, responseJson);
      } else if (this.isValidRes(responseJson)) {
        this.responseSucess(apiRequestCallId, responseJson);
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

  setPage = (page: number) => {
    this.setState({ page: this.state.page + 1 });
  };

  setFormData = (field: string, value: string) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
    }));
  };

  setSelection = (option: string) => {
    this.setState({ selectedOption: option });
  };

  // Customizable Area Start
  async componentDidMount() {
    this.getCountryCodes();
    this.getMemorandumOfSale();
  }

  getCountryCodes = async () => {
    this.getCountryCodeApiCallId = await this.callApi({
      contentType: configJSON.apiGetCountryCodeContentTyp,
      method: configJSON.apiGetCountryMethod,
      endPoint: configJSON.apiGetCountryCodeEndPoint,
    });
  };
  callApi = async (data: any) => {
    const { method, endPoint, body, type = "", contentType } = data;
    const token = localStorage.getItem("token");
    const header = {
      "Content-Type": contentType,
      token: token,
    };
    const reqMessage = new Message(getName(MessageEnum.RestAPIRequestMessage));

    reqMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    reqMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    reqMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    reqMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );

    if (body && type !== "formData") {
      reqMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      );
    } else {
      reqMessage.addData(getName(MessageEnum.RestAPIRequestBodyMessage), body);
    }

    runEngine.sendMessage(reqMessage.id, reqMessage);

    return reqMessage.messageId;
  };

  isValidRes = (responseJson: any) => {
    return (
      (responseJson && responseJson.data) ||
      (responseJson && responseJson.message)
    );
  };

  invalidResponse = (responseJson: any) => {
    return responseJson && responseJson.errors;
  };

  responseSucess = async (apiRequestCallId: string, responseJson: any) => {
    if (apiRequestCallId === this.getCountryCodeApiCallId) {
      this.getCountryCodeSuccess(responseJson);
    }

    if (apiRequestCallId === this.createMemorandumOfSaleApiCallId) {
      this.createMemorandumOfSaleSuccess(responseJson);
    }

    if (apiRequestCallId === this.getMemorandumOfSaleApiCallId) {
      this.getMemorandumOfSaleSuccess(responseJson);
    }

    if (apiRequestCallId === this.updateMemorandumOfSaleApiCallId) {
      this.updateMemorandumOfSaleSuccess(responseJson);
    }

    if (apiRequestCallId === this.acceptDeclineMemorandumOfSaleApiCallId) {
      this.acceptDeclineMemorandumOfSaleSuccess(responseJson);
    }
  };

  responseFailure = async (apiRequestCallId: string, responseJson: any) => {
    if (apiRequestCallId === this.getCountryCodeApiCallId) {
      this.getCountryCodeFailure(responseJson);
    }

    if (apiRequestCallId === this.createMemorandumOfSaleApiCallId) {
      this.createMemorandumOfSaleFailure(responseJson);
    }

    if (apiRequestCallId === this.getMemorandumOfSaleApiCallId) {
      this.getMemorandumOfSaleSuccessFailure(responseJson);
    }

    if (apiRequestCallId === this.updateMemorandumOfSaleApiCallId) {
      this.updateMemorandumOfSaleFailure(responseJson);
    }

    if (apiRequestCallId === this.acceptDeclineMemorandumOfSaleApiCallId) {
      this.acceptDeclineMemorandumOfSaleFailure(responseJson);
    }
  };

  getCountryCodeSuccess = async (response: CountryCodeResTypeData) => {
    this.setState({ getCountryCodeData: response.data });
  };

  getCountryCodeFailure = async (errorReponse: string) => {
    this.setState({ getCountryCodeData: [] });
  };

  handleOfferPrice = (event: InputEventType) => {
    const offerPrice = event.target.value;
    const priceRegex = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/;
    if (offerPrice === '' || priceRegex.test(offerPrice)) {
      this.setState({
        offerPrice: event.target.value,
        isOfferPriceValid: false
      })
    } else {
      this.setState({
        isOfferPriceValid: true,
        offerPrice: event.target.value
      });
    }
  };

  handleFinancing = (event: SelectEventType) => {
    this.setState({ financingValue: event.target.value });
  };

  handleChainFee = (event: InputEventType) => {
    this.setState({ chainFeeValue: event.target.value });
  };

  handleProofOfFinance = (event: InputEventType) => {
    this.setState({ proofOfFinance: event.target.value });
  };

  handleProofofFinanceFiles = (event: FileEventType) => {
    const files = event.target.files;
    if (files !== null) {
      let selectedFiles: string[] = [];
      for (const file of files) {
        selectedFiles.push(file.name);
      }
      this.setState({
        proofOfFinanceData: [...this.state.proofOfFinanceData, ...selectedFiles]
      });
    }
  };

  handleProofOfIndentity = (event: InputEventType) => {
    this.setState({ proofOfIdentity: event.target.value });
  };

  handleProofofIndentityFiles = (event: FileEventType) => {
    const files = event.target.files;
    if (files !== null) {
      let selectedFiles: string[] = [];
      for (const file of files) {
        selectedFiles.push(file.name);
      }
      this.setState({
        proofOfIdentityAttachment: [...this.state.proofOfIdentityAttachment, ...selectedFiles]
      });
    }
  };

  handleProofOfAddress = (event: InputEventType) => {
    this.setState({ proofOfAddress: event.target.value });
  };

  handleProofofAddressFiles = (event: FileEventType) => {
    const files = event.target.files;
    if (files !== null) {
      let selectedFiles: string[] = [];
      for (const file of files) {
        selectedFiles.push(file.name);
      }
      this.setState({
        proofOfAddressAttachment: [...this.state.proofOfAddressAttachment, ...selectedFiles]
      });
    }
  };

  submitMakeAnOffer = async () => {
    const showAllError = {
      isOfferPrice: this.state.offerPrice.trim() === '' ? true : false,
      isChainFee: this.state.chainFeeValue.trim() === '' ? true : false,
      isProofOfFinace: this.state.proofOfFinance.trim() === '' ? true : false,
      isProofOfIdentity: this.state.proofOfIdentity.trim() === '' ? true : false,
      isProofOfAddress: this.state.proofOfAddress.trim() === '' ? true : false,
      isProofOfFinanceFile: this.state.proofOfFinanceData.length === 0 ? true : false,
      isProofOfIdentityFile: this.state.proofOfIdentityAttachment.length === 0 ? true : false,
      isProofOfAddressFile: this.state.proofOfAddressAttachment.length === 0 ? true : false
    };
    this.setState({ showAllError: showAllError });
  };


  handleSnackbarOpen = () => {
    this.setState({isSnackbarOpen: true});
  };
  handleSnackbarClose = () => {
    this.setState({isSnackbarOpen: false});
  };

  createMemorandumOfSaleSuccess = async (response: any) => {
    this.setState({ memorandumOfSaleFormSubmittedSuccessfully: true });
  };

  createMemorandumOfSaleFailure = async (errorResponse: string) => {
    console.log(errorResponse);
  };

  updateMemorandumOfSaleSuccess = async (response: any) => {
    this.setState({ memorandumOfSaleFormSubmittedSuccessfully: true });
  };

  updateMemorandumOfSaleFailure = async (errorResponse: string) => {
    console.log(errorResponse);
  };

  acceptDeclineMemorandumOfSaleSuccess = async (response: any) => {
    this.setState({ memorandumOfSaleFormSubmittedSuccessfully: true });
  };

  acceptDeclineMemorandumOfSaleFailure = async (errorResponse: string) => {
    console.log(errorResponse);
  };

  getMemorandumOfSaleSuccessFailure = async (errorResponse: string) => {
    console.log(errorResponse);
  };

  generateSellerBody = (formData: MemorandumFormValues) => {
    return {
      ...formData.sellerSection,
      ...formData.sellerSectionOtherInformation,
      how_much_deposit_paid: formData.sellerSectionOtherInformation
        .holding_deposit_paid
        ? formData.sellerSectionOtherInformation.how_much_deposit_paid
        : 0,
      has_deposit_been_verified: formData.sellerSectionOtherInformation
        .has_deposit_been_verified
        ? "Yes"
        : "No",
      expected_date_for_completion: moment(
        formData.sellerSectionOtherInformation.expected_date_for_completion
      ).format("DD/MM/YYYY"),
      expected_date_for_exchange: moment(
        formData.sellerSectionOtherInformation.expected_date_for_exchange
      ).format("DD/MM/YYYY"),
      if_yes_please_specify: formData.sellerSectionOtherInformation
        .legal_issues_to_note
        ? formData.sellerSectionOtherInformation.if_yes_please_specify
        : "",
    };
  };

  generateBuyerBody = (
    do_you_have_a_conveyancer: boolean,
    buyerSection: UserInformation,
    buyerSectionOtherInformation: BuyerSectionOtherInformation
  ) => {
    return {
      ...buyerSection,
      ...buyerSectionOtherInformation,
      do_you_have_a_conveyancer,
      is_quick_property_sale:
        buyerSectionOtherInformation.is_quick_property_sale ? "Yes" : "No",
      decision_in_principle_in_place:
        buyerSectionOtherInformation.decision_in_principle_in_place
          ? "Yes"
          : "No",
      contact_number_of_mortgage_broker:
        // buyerSectionOtherInformation.countryNumberOfMortgage +
        buyerSectionOtherInformation.contact_number_of_mortgage_broker,
      has_ownership_been_checked:
        buyerSectionOtherInformation.has_ownership_been_checked ? "Yes" : "No",
      is_property_being_bought_in_company_name:
        buyerSectionOtherInformation.is_property_being_bought_in_company_name
          ? "Yes"
          : "No",
    };
  };

  initialUserInformationSectionValues = () => ({
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
  });

  initialSellerSectionOtherInformationValues = () => ({
    details_of_onward_chase: "",
    expected_date_for_completion: moment().format("yyyy-MM-DD"),
    expected_date_for_exchange: moment().format("yyyy-MM-DD"),
    extra_notes: "",
    fixtures_and_fittings_including_in_sale: "",
    has_deposit_been_verified: true,
    holding_deposit_paid: true,
    how_much_deposit_paid: "",
    if_yes_please_specify: "",
    legal_issues_to_note: true,
    special_conditions_for_sale: "",
    vendor_buying_another_property: "",
  });

  initialBuyerSectionOtherInformationValues = () => ({
    amount_of_mortgage_to_be_granted: "",
    extra_notes: "",
    any_legal_issue_to_note: true,
    contact_number_of_mortgage_broker: "",
    countryNumberOfMortgage: "",
    decision_in_principle_in_place: true,
    has_ownership_been_checked: true,
    is_property_being_bought_in_company_name: true,
    is_quick_property_sale: true,
    legal_issue_details: "",
    name_of_mortgage_broker: "",
    special_conditions_for_sale: "",
  });

  getMemorandumOfSaleSuccess = async (
    response: MemorandumOfSaleResTypeData
  ) => {
    const attributes = response.data.attributes;
    const selectedMemorandumOfSale: SelectedMemorandumOfSale = {
      ...pick(attributes, ["id", "status", "price", "property_tenure"]),
      do_you_have_a_conveyancer: attributes.buyer_section
        ? attributes.buyer_section.do_you_have_a_conveyancer
        : true,
      years_remaining_on_lease: attributes.years_remaining_on_lease.toString(),
      catalogue_id: attributes.catalogue_id,
      registryNumber: "Not Found",
      sellerInformation: {
        ...pick(attributes.seller_section, [
          "residential_address",
          "email",
          "name",
          "phone_number",
        ]),
      },
      sellerSection: {
        ...pick(attributes.seller_section, [
          "residential_address",
          "email",
          "name",
          "phone_number",
        ]),
      },
      sellerSectionOtherInformation: {
        ...pick(attributes.seller_section, [
          "details_of_onward_chase",
          "expected_date_for_completion",
          "expected_date_for_exchange",
          "extra_notes",
          "extra_notes",
          "fixtures_and_fittings_including_in_sale",
          "legal_issues_to_note",
          "holding_deposit_paid",
          "how_much_deposit_paid",
          "if_yes_please_specify",
          "special_conditions_for_sale",
          "vendor_buying_another_property",
        ]),
        has_deposit_been_verified:
          attributes.seller_section.has_deposit_been_verified === "Yes",
      },
      buyerInformation: attributes.buyer_section
        ? {
            ...pick(attributes.buyer_section, [
              "residential_address",
              "email",
              "name",
              "phone_number",
            ]),
          }
        : this.initialUserInformationSectionValues(),
      buyerSection: attributes.buyer_section
        ? {
            ...pick(attributes.buyer_section, [
              "residential_address",
              "email",
              "name",
              "phone_number",
            ]),
          }
        : this.initialUserInformationSectionValues(),
      buyerSectionOtherInformation: attributes.buyer_section
        ? {
            ...pick(attributes.buyer_section, [
              "amount_of_mortgage_to_be_granted",
              "extra_notes",
              "legal_issue_details",
              "name_of_mortgage_broker",
              "phone_number",
              "special_conditions_for_sale",
              "any_legal_issue_to_note",
            ]),
            decision_in_principle_in_place:
              attributes.buyer_section.decision_in_principle_in_place === "Yes",
            has_ownership_been_checked:
              attributes.buyer_section.has_ownership_been_checked === "Yes",
            is_property_being_bought_in_company_name:
              attributes.buyer_section
                .is_property_being_bought_in_company_name === "Yes",
            is_quick_property_sale:
              attributes.buyer_section.is_quick_property_sale === "Yes",
            contact_number_of_mortgage_broker:
              attributes.buyer_section.contact_number_of_mortgage_broker.toString(),
            countryNumberOfMortgage:
              attributes.buyer_section.contact_number_of_mortgage_broker.toString(),
          }
        : this.initialBuyerSectionOtherInformationValues(),
    };

    this.setState({
      selectedMemorandumOfSale,
      isAcceptingProcess: !attributes.status && !!attributes.buyer_section,
      isMemorandumOfSaleCompleted: !!attributes.buyer_section,
    });
  };

  setMemorandumOfSaleFormInitialValues = () => {
    const selectedMemorandumOfSale: SelectedMemorandumOfSale = {
      catalogue_id: 0,
      id: 0,
      status: null,
      price: "",
      registryNumber: "",
      property_tenure: PropertyTenure.LEASEHOLD,
      years_remaining_on_lease: "",
      do_you_have_a_conveyancer: true,
      sellerInformation: this.initialUserInformationSectionValues(),
      buyerInformation: this.initialUserInformationSectionValues(),
      sellerSection: this.initialUserInformationSectionValues(),
      sellerSectionOtherInformation:
        this.initialSellerSectionOtherInformationValues(),
      buyerSection: this.initialUserInformationSectionValues(),
      buyerSectionOtherInformation:
        this.initialBuyerSectionOtherInformationValues(),
    };
    this.setState({ selectedMemorandumOfSale });
  };

  createMemorandumOfSale = async (formData: MemorandumFormValues) => {
    const body = {
      catalogue_id: 2,
      price: formData.price,
      property_tenure: formData.property_tenure,
      years_remaining_on_lease:
        formData.property_tenure === PropertyTenure.LEASEHOLD
          ? formData.years_remaining_on_lease
          : 0,
      seller_section_attributes: this.generateSellerBody(formData),
      buyer_section_attributes: null,
    };

    this.createMemorandumOfSaleApiCallId = await this.callApi({
      contentType: configJSON.apiCreateMemorandumOfSaleContentType,
      method: configJSON.apiCreateMemorandumOfSaleMethod,
      endPoint: configJSON.apiCreateMemorandumOfSaleEndPoint,
      body,
    });
  };

  updateMemorandumOfSale = async (formData: MemorandumFormValues) => {
    const body = {
      catalogue_id: 2, //change after we finish the catalogue
      price: formData.price,
      property_tenure: formData.property_tenure,
      years_remaining_on_lease:
        formData.property_tenure === PropertyTenure.LEASEHOLD
          ? formData.years_remaining_on_lease
          : 0,
      seller_section_attributes: this.generateSellerBody(formData),
      buyer_section_attributes: this.generateBuyerBody(
        formData.do_you_have_a_conveyancer,
        formData.buyerSection,
        formData.buyerSectionOtherInformation
      ),
    };

    this.updateMemorandumOfSaleApiCallId = await this.callApi({
      contentType: configJSON.apiUpdateMemorandumOfSaleContentType,
      method: configJSON.apiUpdateMemorandumOfSaleMethod,
      endPoint:
        configJSON.apiUpdateMemorandumOfSaleEndPoint +
        "/" +
        this.state.selectedMemorandumOfSaleId,
      body,
    });
  };

  getMemorandumOfSale = async () => {
    if (this.state.selectedMemorandumOfSaleId) {
      this.getMemorandumOfSaleApiCallId = await this.callApi({
        contentType: configJSON.apiGetMemorandumOfSaleContentType,
        method: configJSON.apiGetMemorandumOfSaleMethod,
        endPoint:
          configJSON.apiGetMemorandumOfSaleEndPoint +
          "/" +
          this.state.selectedMemorandumOfSaleId,
      });
    } else this.setMemorandumOfSaleFormInitialValues();
  };

  acceptDeclineMemorandumOfSale = async (
    status: StatusMemorandumOfSale,
    reason?: string
  ) => {
    const body = {
      id: this.state.selectedMemorandumOfSaleId,
      status,
      message: reason ? reason : null,
    };
    this.acceptDeclineMemorandumOfSaleApiCallId = await this.callApi({
      contentType: configJSON.apiAcceptDeclineMemorandumOfSaleContentType,
      method: configJSON.apiAcceptDeclineMemorandumOfSaleMethod,
      endPoint: configJSON.apiAcceptDeclineMemorandumOfSaleEndPoint,
      body,
    });
  };

  handleAcceptModalOpen = (isOpen: boolean) => {
    this.setState({ isAcceptModalOpen: isOpen });
  };

  handleDeclineModalOpen = (isOpen: boolean) => {
    this.setState({ isDeclineModalOpen: isOpen });
  };

  handleRevisionProcess = (isRevisionProcess: boolean) => {
    this.setState({ isRevisionProcess });
  };
  // Customizable Area End
}
