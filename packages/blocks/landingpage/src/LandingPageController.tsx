import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import React from "react";
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
  activeLink: string;
  selectedLocation: string;
  selectedPropertyType: string;
  selectedPrice: string;
  selectedPriceMaximun: string;
  showMoreFilters: boolean;
  isGridView: boolean;
  limit: string;
  firstTypographyEntered: boolean;
  showFilters: boolean;
  showProperties: boolean;
  scrolledToProperties: boolean;
  isGridVisible: boolean;
  seemoreproperty: boolean;
  loremVisible: boolean;
  selectedOption: string;
  isOpen: boolean;
  isPriceOpen: boolean;
  isPriceMaxOpen: boolean;
  isBedMiniOpen: boolean;
  isBedMaxOpen: boolean;
  bathroomMini: number;
  bathroomMax: number;
  isBathMiniOpen: boolean;
  isBathMaxOpen: boolean;
  sqFtMini: string;
  sqFtMax: string;
  isSqFtMinOpen: boolean;
  isSqFtMaxOpen: boolean;
  propertyFeature: string;
  isPropFeatOpen: boolean;
  ecp: string;
  isEcpOPen: boolean;
  tenure: string;
  isTenureOpen: boolean;
  islocOpen: boolean;
  sortBy: string;
  isDropdownOpen: boolean;
  selectedOptionLoc: string;
  cities: string[];
  size: string[];
  anchorElSort: null | HTMLElement;
  selectedOptionSort: string;
  proptyTypeValue: string;
  bedminValue: string;
  bedmaxValue: string;
  bathminValue: string;
  bathmaxValue: string;
  SqminValue: string;
  SqmaxValue: string;
  featValue: string;
  EpcValue: string;
  TenureValue: string;
  openCookieModal: boolean;
  openSettingModal: boolean;
  activeTab: string;
  activeTabIndex: number;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class LandingPageController extends BlockComponent<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [getName(MessageEnum.NavigationPayLoadMessage)];

    this.state = {
      activeLink: "Browse Properties",
      selectedLocation: "London",
      islocOpen: false,
      selectedPropertyType: "Select~",
      selectedPrice: "20 L",
      selectedPriceMaximun: "Maximum",
      bedminValue: "Minimum",
      bedmaxValue: "Maximum",
      bathminValue: "Minimum",
      bathmaxValue: "Maximum",
      SqminValue: "Minimum",
      SqmaxValue: "Maximum",
      showMoreFilters: false,
      isGridView: true,
      limit: "",
      firstTypographyEntered: false,
      showFilters: false,
      showProperties: false,
      scrolledToProperties: false,
      isGridVisible: false,
      seemoreproperty: false,
      loremVisible: false,
      selectedOption: "",
      isOpen: false,
      isPriceOpen: false,
      isPriceMaxOpen: false,
      isBedMiniOpen: false,
      isBedMaxOpen: false,
      bathroomMini: 0,
      bathroomMax: 0,
      isBathMiniOpen: false,
      isBathMaxOpen: false,
      sqFtMini: "",
      sqFtMax: "",
      isSqFtMinOpen: false,
      isSqFtMaxOpen: false,
      propertyFeature: "",
      isPropFeatOpen: false,
      ecp: "",
      isEcpOPen: false,
      tenure: "",
      isTenureOpen: false,
      sortBy: "",
      isDropdownOpen: false,

      selectedOptionLoc: "London",

      anchorElSort: null,
      selectedOptionSort: "",
      cities: ["New York", "Los Angeles", "London"],
      size: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      proptyTypeValue: "Select~",
      featValue: "Select~",
      EpcValue: "Select~",
      TenureValue: "Select~",
      openCookieModal: false,
      openSettingModal: false,
      activeTab: "Your Privacy",
      activeTabIndex: 0
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Recived", message);
    // Customizable Area End
  }

  // Customizable Area Start
  dropdownRef: React.RefObject<HTMLSelectElement> = React.createRef();

  async componentDidMount() {
    const delay = 3000;
    const cookies = document.cookie.split(";");
    const cookieExists = cookies.some(cookie => {
      return cookie.trim().startsWith("cookie1=");
    });
    if (!cookieExists) {
      setTimeout(() => {
        this.setState({ openCookieModal: true });
      }, delay);
    }
  }

  handleManageSetting = () => {
    this.setState({ openSettingModal: true, openCookieModal: false });
  };

  acceptAllCookies = () => {
    document.cookie =
      "cookie1=accepted; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    this.setState({ openCookieModal: false, openSettingModal: false });
  };

  rejectAllCookies = () => {
    this.setState({ openCookieModal: false });
  };

  handleActiveTab = (activeTab: string) => {
    this.setState({ activeTab: activeTab });
  };

  handleClosManageSetting = () => {
    this.setState({ openSettingModal: false });
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ activeTabIndex: newValue });
  };

  handleFirstTypographyEntered = () => {
    this.setState({ firstTypographyEntered: true }, () => {
      setTimeout(() => {
        this.setState({ showFilters: true }, () => {
          this.handleShowProperties();
        });
      }, 1000);
    });
  };
  handleMyHub = () => {
    this.props.navigation.navigate("EmailAccountLoginBlock");
    this.setState({});
  };
  handleShowProperties = () => {
    setTimeout(() => {
      this.setState({ showProperties: true }, () => {
        setTimeout(() => {
          this.setState({ isGridVisible: true, seemoreproperty: true });
        }, 1000);
      });
    }, 1000);
    this.setState({ scrolledToProperties: true });
  };

  goToHome() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationHomeScreenMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }
  handleClick = (text: string) => {
    this.setState({ activeLink: text });
  };

  handleLimitChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    this.setState({ limit: event.target.value as string });
  };
  handleShowMoreFilters = () => {
    this.setState(prevState => ({
      showMoreFilters: !prevState.showMoreFilters
    }));
  };
  toggleView = () => {
    this.setState(prevState => ({
      isGridView: !prevState.isGridView
    }));
  };

  toggleLandscapeView = () => {
    this.setState({
      isGridView: false
    });
  };

  handleSortChange = (event: { target: { value: string } }) => {
    this.setState({ sortBy: event.target.value });
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  handleClickSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElSort: event.currentTarget });
  };
  handleOptionClickSort = (option: string) => {
    this.setState({
      selectedOptionSort: option,
      anchorElSort: null
    });
  };
  handleCloseSort = () => {
    this.setState({ anchorElSort: null });
  };
  handleListProperty = () => {
    this.props.navigation.navigate("ListMyProperty");
  };
  handlePropertyPage = () => {
    this.props.navigation.navigate("Catalogue");
  };
  handleClickPropTypeFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ proptyTypeValue: event.target.value as string });
  };
  handlePricMinFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ selectedPrice: event.target.value as string });
  };
  handlePriceMaxFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ selectedPriceMaximun: event.target.value as string });
  };
  handleBedMinFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ bedminValue: event.target.value as string });
  };
  handleBedMaxFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ bedmaxValue: event.target.value as string });
  };
  handleBathMinFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ bathminValue: event.target.value as string });
  };
  handleBathMaxFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ bathmaxValue: event.target.value as string });
  };
  handleSqMinFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ SqminValue: event.target.value as string });
  };
  handleSqMaxFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ SqmaxValue: event.target.value as string });
  };
  handleFeatFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ featValue: event.target.value as string });
  };
  handleEpcFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ EpcValue: event.target.value as string });
  };
  handleTenureFunc = (event: React.ChangeEvent<{ value: unknown }>) => {
    this.setState({ TenureValue: event.target.value as string });
  };
  // Customizable Area End
}
