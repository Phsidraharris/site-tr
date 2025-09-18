import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { slider1, slider2, slider3, video4, video1 } from "./assets";
import ReactPlayer from "react-player";
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
  index: number;
  imgData: any;
  groupedImgData: any[];
  isPlaying: boolean;
  isFullCarousel: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class CarouselDisplayController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  swiper: any;
  public player: ReactPlayer | null = null;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      isFullCarousel: false,
      isPlaying: false,
      index: 0,
      imgData: [
        { id: 1, src: slider1, type: "img" },
        { id: 2, src: video1, type: "vid" },
        { id: 3, src: slider2, type: "img" },
        { id: 4, src: slider3, type: "img" },
        { id: 5, src: video4, type: "vid" },
      ],
      groupedImgData: [
        {
          scrOne: { id: 0, src: slider1, type: "img" },
          srcTwo: { id: 1, src: video1, type: "vid" },
          srcThree: { id: 2, src: slider2, type: "img" },
        },
        {
          scrOne: { id: 3, src: slider3, type: "img" },
          srcTwo: { id: 4, src: video4, type: "vid" },
        },
      ],
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Recived", message);
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.setState({
      index: parseInt(this.props.navigation.getParam("imgId", 0)),
    });
  }
  handleRef = (ref: any) => {
    this.player = ref;
  };
  handleVideoClick = (e: any) => {
    e.preventDefault();
    this.setState({ isPlaying: !this.state.isPlaying });
  };
  playPauseVideo = (e: any) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      this.setState({ isPlaying: !this.state.isPlaying });
    }
  };
  handlePause = () => {
    if (this.player) {
      this.player.getInternalPlayer().focus();
      this.setState({
        isPlaying: true,
      });
    }
  };
  getBreakPoints = (itemTwo: any, itemThree: any) => {
    if (itemTwo) {
      if (itemThree) {
        return 12;
      } else return 7;
    } else return 12;
  };
  getThreeBreakpoint = (itemThree: any) => {
    if (itemThree) {
      return 6;
    } else return 12;
  };
  getCount = () => {
    return (
      (this.state.groupedImgData.length - 2) * 3 +
      Object.keys(
        this.state.groupedImgData[this.state.groupedImgData.length - 1]
      ).length -
      this.state.index * 3
    );
  };
  handleGoToSlide = (id: any) => {
    this.props.navigation.navigate("CarouselDisplay", { imgId: id });
  };
  goBackToCatalogue = () => {
    this.props.navigation.navigate("Catalogue");
  };
  handleShareClick = (e: any) => {
    e.stopPropagation();
  };
  handleLocationClick = (e: any) => {
    e.stopPropagation();
  };
  // Customizable Area End
}
