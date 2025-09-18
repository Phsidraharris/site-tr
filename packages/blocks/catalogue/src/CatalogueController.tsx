import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import React, { ChangeEvent } from 'react'
interface InputFieldErr {
  [key: string]: boolean
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
  arrayHolder: any;
  token: string;
  // Customizable Area Start
  activeLink: string;
  propertyTitle: string;
  selectedBed: string;
  selectedOption: string;
  selectedPropStatus: string;
  selectedPriceModi: string;
  selectedBathroom: string;
  propType: string;
  propTenure: string;
  reception: string;
  parking: string;
  epcrating: string;
  porpstatus: string;
  selectedImage: string | null;
  selectedImageSecond: string[];
  selectedForDeletion: number | null;
  keyFeature: string[];
  selectedButton: number;
  postcodeOne: string;
  postcodeTwo: string;
  propNumber: string;
  streetname: string;
  city: string;
  propPrice: string;
  isPropertyTitleFilled: boolean;
  isPostcodeOneFilled: boolean;
  isPostcodeTwoFilled: boolean;
  isNextButtonDisabled: boolean;
  isPropNumberFilled: boolean;
  isStreetFilled: boolean;
  isCityFilled: boolean;
  isPropPriceFilled: boolean;
  isPriceModifierFilled: boolean;
  isMainImageFilled: boolean;
  isKeyFilled: boolean;
  isbedFilled: boolean;
  isBathroomFilled: boolean;
  isPropTypeFilled: boolean;
  isDescriptionFilled: boolean;
  description: string;
  isTenureFilled: boolean;
  isStatusFilled: boolean;
  isSnackbarOpen: boolean;
  agentName: string;
  phoneNumber: string;
  address: string;
  inputFieldError: InputFieldErr;
  selectedImageToDelete: boolean[];
  selectedFloorImage: string | null;
  selectedImgeEpc: string | null;
  extensiontype: string[];
  selectedImageFilename: string;
  selectedAgent: string | null;
  save: boolean;
  isagentfilled: boolean;
  isaddressfilled: boolean;
  userLink: string;
  isnumberValid: boolean;
  isBoxOpen: boolean;
  isImageBoxOpen: boolean;
  propDesInfo: boolean;
  tourlink: string;
}

interface SS {
  id: any;
}
// Customizable Area End

export default class CatalogueController extends BlockComponent<Props, S, SS> {
  getProductApiCallId: any;
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
      // Customizable Area Start

    ];
    // Customizable Area Start
    this.state = {
      arrayHolder: [],
      token: "",
      activeLink: "Browse Properties",
      propertyTitle: "",
      selectedBed: '',
      selectedOption: '',
      selectedPropStatus: 'Available',
      selectedPriceModi: '',
      selectedBathroom: '',
      propType: '',
      propTenure: '',
      reception: '',
      parking: '',
      epcrating: '',
      porpstatus: '',
      selectedImage: null,
      selectedImageSecond: [],
      selectedForDeletion: null,
      keyFeature: [],
      selectedButton: 0,
      postcodeOne: '',
      postcodeTwo: '',
      propNumber: '',
      streetname: '',
      city: '',
      propPrice: '',
      isPropertyTitleFilled: true,
      isPostcodeOneFilled: true,
      isPostcodeTwoFilled: true,
      isPropNumberFilled: true,
      isStreetFilled: true,
      isCityFilled: true,
      isNextButtonDisabled: false,
      isPropPriceFilled: true,
      isPriceModifierFilled: true,
      isKeyFilled: true,
      isMainImageFilled: true,
      isbedFilled: true,
      isBathroomFilled: true,
      isPropTypeFilled: true,
      isDescriptionFilled: true,
      description: '',
      isTenureFilled: true,
      isStatusFilled: true,
      isSnackbarOpen: false,
      agentName: '',
      phoneNumber: '',
      address: '',
      inputFieldError: {
        "Property Title": false,
        "Postcode One": true,
        "Postcode Two": true,
        "Property Number": true,
        "Streen name": false,
        "City": false,
        "Property Price": true,
        "Property Description": false,
        "selectedBed": false,
        "selectedBathroom": false,
        "propType": false,
        "propTenure": false,
        "porpstatus": false,
        "selectedImage": false,
        "keyFeature": false,
      },
      selectedImageToDelete: [],
      selectedFloorImage: null,
      selectedImgeEpc: null,
      selectedImageFilename: '',
      extensiontype: [],
      selectedAgent: "",
      save: false,
      isagentfilled: true,
      isaddressfilled: true,
      userLink: '',
      isnumberValid: true,
      isBoxOpen: false,
      isImageBoxOpen: false,
      propDesInfo: false,
      tourlink: '',
    };
    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area Start
    // Customizable Area End
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

  getListRequest = (token: any) => {
    const header = {
      "Content-Type": configJSON.productApiContentType,
      token: token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.getProductApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.productAPiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.apiMethodTypeGet
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Recived", message);
    if (getName(MessageEnum.SessionResponseMessage) === message.id) {
      let token = message.getData(getName(MessageEnum.SessionResponseToken));
      // let token = localStorage.getItem('authToken');
      this.setState({ token: token });
      this.getListRequest(token);
    }

    if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.getProductApiCallId != null &&
      this.getProductApiCallId ===
      message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (responseJson && !responseJson.errors && responseJson.data) {
        this.setState({ arrayHolder: responseJson.data });
        runEngine.debugLog("arrayHolder", this.state.arrayHolder);
      } else {
        var errorReponse = message.getData(
          getName(MessageEnum.RestAPIResponceErrorMessage)
        );
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  componentWillMount(): void {
    const formData = localStorage.getItem('formData');

    if (formData) {
      const parsedFormData = JSON.parse(formData);
      this.setState({
        propertyTitle: parsedFormData.propertyTitle,
        postcodeOne: parsedFormData.postcodeOne,
        postcodeTwo: parsedFormData.postcodeTwo,
        propNumber: parsedFormData.propNumber,
        streetname: parsedFormData.streetname,
        city: parsedFormData.city,
        selectedPropStatus: parsedFormData.selectedPropStatus,
        propPrice: parsedFormData.propPrice,
        selectedPriceModi: parsedFormData.selectedPriceModi,
        keyFeature: parsedFormData.keyFeature,
        description: parsedFormData.description,
        selectedBed: parsedFormData.selectedBed,
        selectedBathroom: parsedFormData.selectedBathroom,
        propType: parsedFormData.propType,
        propTenure: parsedFormData.propTenure,
        reception: parsedFormData.reception,
        parking: parsedFormData.parking,
        selectedFloorImage: parsedFormData.selectedFloorImage,
        selectedImgeEpc: parsedFormData.selectedImgeEpc,
        tourlink: parsedFormData.tourlink,
        porpstatus: parsedFormData.porpstatus,
        selectedImage: parsedFormData.selectedImage,
        selectedImageSecond: parsedFormData.selectedImageSecond,
        isKeyFilled: parsedFormData.isKeyFilled,
        isbedFilled: parsedFormData.isbedFilled,
        isPropTypeFilled: parsedFormData.isPropTypeFilled,
        isTenureFilled: parsedFormData.isTenureFilled,
        isStatusFilled: parsedFormData.isStatusFilled,
        isPostcodeOneFilled: parsedFormData.isPostcodeOneFilled,
        isPropertyTitleFilled: parsedFormData.isPropertyTitleFilled,
        isPostcodeTwoFilled: parsedFormData.isPostcodeTwoFilled,
        isPropNumberFilled: parsedFormData.isPropNumberFilled,
        isStreetFilled: parsedFormData.isStreetFilled,
        isCityFilled: parsedFormData.isCityFilled,
        isPropPriceFilled: parsedFormData.isPropPriceFilled,
        isBathroomFilled: parsedFormData.isBathroomFilled,
        isDescriptionFilled: parsedFormData.isDescriptionFilled,
        inputFieldError:parsedFormData.inputFieldError
      })
    }
  }

  handleClick = (text: string) => {
    this.setState({ activeLink: text });
  }
  openSnackbar = () => {
    this.setState({
      isSnackbarOpen: true,
    })
  }
  closeSnackbar = () => {
    this.setState({
      isSnackbarOpen: false,
    })
  }
  handleOptionChange = (event: string) => {
    this.setState({ selectedOption: event });
  }
  handleDescription = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;

    this.setState({
      description: selectedValue,
      isDescriptionFilled: true,
    })
    if (selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Description": true } }
      })
    }
    else if (!selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Description": false } }
      })
    }
    this.validation()
  }
  handleClickBed = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;

    this.setState({
      selectedBed: selectedValue,
      isbedFilled: true,
    })
    if (selectedValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedBed": true } }
      })
    }
    else if (!selectedValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedBed": false } }
      })
    }
    this.validation()
  }
  handleClickPropStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ selectedPropStatus: event.target.value as string, });
  }
  handleClickPriceModi = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;

    this.setState({
      selectedPriceModi: selectedValue,
    });
  }
  handleClickBathroom = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;

    this.setState({
      selectedBathroom: selectedValue,
      isBathroomFilled: true,
    })
    if (selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedBathroom": true } }
      })
    }
    else if (!selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedBathroom": false } }
      })
    }
    this.validation()
  }
  handleClickPropType = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;
    this.setState({
      propType: selectedValue,
      isPropTypeFilled: true,
    })
    if (selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "propType": true } }
      })
    }
    else if (!selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "propType": false } }
      })
    }
    this.validation()
  }
  handleClickTenure = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;
    this.setState({
      propTenure: selectedValue,
      isTenureFilled: true,
    })
    if (selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "propTenure": true } }
      })
    }
    else if (!selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "propTenure": false } }
      })
    }
    this.validation()
  }
  handleClickReception = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ reception: event.target.value as string, });
  }
  handleClickParking = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;
    this.setState({
      parking: selectedValue,
    })

  }
  handleClickEpcRating = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ epcrating: event.target.value as string, });
  }
  handleClickOnOff = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string;
    this.setState({
      porpstatus: selectedValue,
      isStatusFilled: true,
    })
    if (selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "porpstatus": true } }
      })
    }
    else if (!selectedValue.trim()) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "porpstatus": false } }
      })
    }
    this.validation()
  }

  handleFileRead = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      const base64 = await this.convertBase64(file);
      this.setState({ selectedImage: base64 })
    }
    if (this.state.selectedImage) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedImage": true } }
      })
    }
    else if (!this.state.selectedImage) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "selectedImage": false } }
      })
    }
    this.validation()
  }

  convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          resolve(fileReader.result);
        } else {
          reject(new Error("Unable to read file as base64"));
        }
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  handleImageUploadFloor = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const base64 = await this.convertBase64(file);
      this.setState({ selectedFloorImage: base64 })
    }
  }
  handleImageUploadEpc = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const base64 = await this.convertBase64(file);
      this.setState({ selectedImgeEpc: base64 })
    }
  }
  handleImageUploadAgent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const base64 = await this.convertBase64(file);
      this.setState({ selectedAgent: base64 })
    }
  }
  handleAddImageClick = () => {
    if (this.fileInputRef) {
      this.fileInputRef.click();
    }
  }
  handleDeleteImage = () => {
    this.setState({
      selectedImage: null,
    });
  }
  fileInputRef: HTMLInputElement | null = null;

  handleImageUploadSec = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const base64Images = await this.convertFilesToBase64(files);
      const arraytype = Array.from(files).map((file) => {
        const filename = file.name;
        const fileExtension = filename.split('.').pop();
        return fileExtension;
      });

      this.setState((prevState: any) => ({
        selectedImageSecond: [...prevState.selectedImageSecond, ...base64Images],
        extensiontype: [...prevState.extensiontype, ...arraytype],
      }));
    }
  }

  convertFilesToBase64 = (files: FileList): Promise<string[]> => {
    const base64Promises = Array.from(files).map((file) => this.convertBase64(file));
    return Promise.all(base64Promises);
  }

  handleDeleteImageSec = (index: number) => {
    this.setState((prevState) => {
      const updatedImages = [...prevState.selectedImageSecond];
      updatedImages.splice(index, 1);
      return { selectedImageSecond: updatedImages };
    })
  }
  fileInputRefSec: HTMLInputElement | null = null;
  handleAddImageClickSec = () => {
    if (this.fileInputRefSec) {
      this.fileInputRefSec.click();
    }
  }
  handleClickKey = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedValue = event.target.value as string[];

    this.setState({
      keyFeature: selectedValue,
      isKeyFilled: true,
    })
    if (this.state.keyFeature.length) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "keyFeature": true } }
      })
    }
    else if (!this.state.keyFeature.length) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "keyFeature": false } }
      })
    }
    this.validation()
  }


  handleButtonClick = (index: number) => {
    this.setState({ selectedButton: index });
  }
  handleImageClick = () => {
    this.setState((prevState) => ({
      isBoxOpen: !prevState.isBoxOpen,
    }));
  }
  handleImageInfo = () => {
    this.setState((prevState) => ({
      isImageBoxOpen: !prevState.isImageBoxOpen,
    }))
  }
  handleDesInfo = () => {
    this.setState((prevState) => ({
      propDesInfo: !prevState.propDesInfo,
    }))
  }
  handlePropTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ propertyTitle: inputValue });
    this.setState({ isPropertyTitleFilled: !!inputValue });
    if (inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Title": true } }
      })
    }
    else if (!inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Title": false } }
      })
    }
    this.validation()
  }
  handlePostcodeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    this.setState({ postcodeOne: inputValue });
    this.setState({ isPostcodeOneFilled: !!inputValue });

    if (inputValue.length >= 2 && inputValue.length <= 4) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Postcode One": true } };
      });
    } else {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Postcode One": false } };
      });
    }

    this.validation();
  }

  handlePostcodeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    this.setState({ postcodeTwo: inputValue });
    this.setState({ isPostcodeTwoFilled: !!inputValue });

    if (inputValue.length === 3) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Postcode Two": true } };
      });
    } else {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Postcode Two": false } };
      });
    }

    this.validation();
  }

  handlePropnumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ propNumber: inputValue });
    this.setState({ isPropNumberFilled: !!inputValue });
    if (/^\d*$/.test(inputValue)) {

      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Number": true } };
      });
    } else {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Number": false } };
      });
    }

    this.validation();
  }

  handlestreetname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ streetname: inputValue });
    this.setState({ isStreetFilled: !!inputValue });
    if (inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Streen name": true } }
      })
    }
    else if (!inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Streen name": false } }
      })
    }
    this.validation()
  }
  handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    this.setState({ city: inputValue });
    this.setState({ isCityFilled: !!inputValue });
    if (inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "City": true } }
      })
    }
    else if (!inputValue) {
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "City": false } }
      })
    }
    this.validation()
  }
  handlePropPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ propPrice: inputValue });
    this.setState({ isPropPriceFilled: !!inputValue });
    if (/^\d*$/.test(inputValue)) {

      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Price": true } };
      });
    } else {
      // If the input contains characters, set an error state
      this.setState((prev: any) => {
        return { ...prev, inputFieldError: { ...prev.inputFieldError, "Property Price": false } };
      });
    }

    this.validation();
  }
  handleNextClick = () => {

    if (!this.state.selectedBed) {
      this.setState({ isbedFilled: false });
    } else {
      this.setState({ isbedFilled: true });
    }
    if (!this.state.selectedBathroom) {
      this.setState({ isBathroomFilled: false });
    } else {
      this.setState({ isBathroomFilled: true });
    }
    if (!this.state.propType) {
      this.setState({ isPropTypeFilled: false });
    } else {
      this.setState({ isPropTypeFilled: true });
    }
    if (!this.state.propTenure) {
      this.setState({ isTenureFilled: false });
    } else {
      this.setState({ isTenureFilled: true });
    }

    if (!this.state.selectedImage) {
      this.setState({ isMainImageFilled: false });
    } else {
      this.setState({ isMainImageFilled: true });
    }
    this.checkTwo()
    this.checkValidationStatus()
    const flag = this.validation()
    console.log("bbbbbbbbbbbb", this.state.inputFieldError)
    if (!flag) {
      this.openSnackbar()
    }
    else {
      this.storeData()
      this.props.navigation.navigate("NextScreen")

    }
  }
  storeData = () => {
    const formData = {
      propertyTitle: this.state.propertyTitle,
      postcodeOne: this.state.postcodeOne,
      postcodeTwo: this.state.postcodeTwo,
      propNumber: this.state.propNumber,
      streetname: this.state.streetname,
      city: this.state.city,
      selectedPropStatus: this.state.selectedPropStatus,
      propPrice: this.state.propPrice,
      selectedPriceModi: this.state.selectedPriceModi,
      keyFeature: this.state.keyFeature,
      description: this.state.description,
      selectedBed: this.state.selectedBed,
      selectedBathroom: this.state.selectedBathroom,
      propType: this.state.propType,
      propTenure: this.state.propTenure,
      reception: this.state.reception,
      parking: this.state.parking,
      selectedFloorImage: this.state.selectedFloorImage,
      selectedImgeEpc: this.state.selectedImgeEpc,
      tourlink: this.state.tourlink,
      porpstatus: this.state.porpstatus,
      selectedImage: this.state.selectedImage,
      selectedImageSecond: this.state.selectedImageSecond,
      isKeyFilled: this.state.isKeyFilled,
      isbedFilled: this.state.isbedFilled,
      isPropTypeFilled: this.state.isPropTypeFilled,
      isTenureFilled: this.state.isTenureFilled,
      isStatusFilled: this.state.isStatusFilled,
      isPostcodeOneFilled: this.state.isPostcodeOneFilled,
      isPropertyTitleFilled: this.state.isPropertyTitleFilled,
      isPostcodeTwoFilled: this.state.isPostcodeTwoFilled,
      isPropNumberFilled: this.state.isPropNumberFilled,
      isStreetFilled: this.state.isStreetFilled,
      isCityFilled: this.state.isCityFilled,
      isPropPriceFilled: this.state.isPropPriceFilled,
      isBathroomFilled: this.state.isBathroomFilled,
      isDescriptionFilled: this.state.isDescriptionFilled,
      inputFieldError: this.state.inputFieldError,
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  checkTwo = () => {
    if (!this.state.porpstatus) {
      this.setState({ isStatusFilled: false });
    } else {
      this.setState({ isStatusFilled: true });
    }
    if (!this.state.keyFeature.length) {
      this.setState({ isKeyFilled: false });
    } else {
      this.setState({ isKeyFilled: true });
    }
  }
  validation = () => {
    let isValid
    isValid = Object.values(this.state.inputFieldError).every((element) => element === false ? false : true)
    this.setState({ isNextButtonDisabled: isValid });
    return isValid
  }

  checkValidationStatus = () => {
    const isPropertyTitleFilled = !!this.state.propertyTitle.trim();
    const isPostcodeOneFilled = !!this.state.postcodeOne.trim();
    const isPostcodeTwoFilled = !!this.state.postcodeTwo.trim();
    const isPropNumberFilled = !!this.state.propNumber.trim();
    const isStreetFilled = !!this.state.streetname.trim();
    const isCityFilled = !!this.state.city.trim();
    const isPropPriceFilled = !!this.state.propPrice.trim();
    const isDescriptionFilled = !!this.state.description.trim();

    this.setState({
      isPropertyTitleFilled,
      isPostcodeOneFilled,
      isPostcodeTwoFilled, isPropPriceFilled,
      isPropNumberFilled,
      isCityFilled, isStreetFilled, isDescriptionFilled,
    })
  }
  handleAgentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ agentName: inputValue });
    if (this.state.agentName) {
      this.setState({ isagentfilled: true })
    }
  }
  handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ address: inputValue });
    if (this.state.address) {
      this.setState({ isaddressfilled: true })
    }
  }
  handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      this.setState({ phoneNumber: inputValue, isnumberValid: true });
    }
    else {
      this.setState({ isnumberValid: false })
    }
  }

  toggleImageSelection = (index: number) => {
    this.setState((prevState) => {
      const updatedSelection = [...prevState.selectedImageToDelete];
      updatedSelection[index] = !updatedSelection[index];
      return { selectedImageToDelete: updatedSelection };
    })
  }
  handleAddImageFloor = () => {
    if (this.fileInputRefFloor) {
      this.fileInputRefFloor.click();
    }
  }
  fileInputRefFloor: HTMLInputElement | null = null;
  fileInputRefEpc: HTMLInputElement | null = null;

  handleAddImageEpc = () => {
    if (this.fileInputRefEpc) {
      this.fileInputRefEpc.click();
    }
  }
  handleAddImageAgent = () => {
    if (this.fileInputRefAgent) {
      this.fileInputRefAgent.click();
    }
  }
  handleDeleteFloor = () => {
    this.setState({
      selectedFloorImage: null,
    });
  }
  handleDeleteEpc = () => {
    this.setState({
      selectedImgeEpc: null,
    });
  }
  fileInputRefTwo: HTMLInputElement | null = null;
  handleDeleteAgent = () => {
    this.setState({
      selectedAgent: null,
    });
  }
  fileInputRefAgent: HTMLInputElement | null = null;

  deleteSelectedImages = () => {
    this.setState((prevState) => {
      const updatedImages = prevState.selectedImageSecond.filter((image, index) => !prevState.selectedImageToDelete[index]);
      return {
        selectedImageSecond: updatedImages,
        selectedImageToDelete: new Array(updatedImages.length).fill(false),
      }
    })
  }
  saveButton = () => {
    if (!this.state.agentName || !this.state.address) {
      this.setState({ isagentfilled: false, isaddressfilled: false })
      this.openSnackbar()
    }
    else {
      this.openSucces()
      localStorage.removeItem('formData');
    }
  }
  openSucces = () => {
    this.setState({ save: true })
  }
  closeSucc = () => {
    this.setState({ save: false })
  }
  // Customizable Area End
}
