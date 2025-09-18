import React from "react";

// Customizable Area Start
import { Box, Typography } from "@material-ui/core";
import { createTheme, styled, ThemeProvider } from "@material-ui/core/styles";
import { slider1, backArrow, locationCarousel, play } from "./assets";
import Carousel from "react-material-ui-carousel";
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";
import Footer from "../../landingpage/src/Footer.web";
import ReactPlayer from "react-player";
// Customizable Area End

import CarouselDisplayController, {
  Props,
  configJSON,
} from "./CarouselDisplayController";

export default class CarouselDisplay extends CarouselDisplayController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    console.log(slider1);
    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <NavigationMenu id="" navigation={this.props.navigation} />
        <CarouselDisplayContainer>
          <div className="fullCarouselClass">
            <Box className="carouselHeader">
              <div
                data-testid="backButton"
                onClick={this.goBackToCatalogue}
                className="backButton"
              >
                <img src={backArrow} alt="back" style={webStyle.backArrow} />
              </div>
              <Typography className="carouselDisplayTitle">
                Beautiful Apartment
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={locationCarousel}
                  alt="location"
                  className="locationImg"
                />
                <Typography className="cardLocationLand">
                  Shree Garder 1132, UK, 756856
                </Typography>
              </div>
              <Typography className="carouselSubtitle">Farmhouse</Typography>
            </Box>
            <Carousel
              data-testid="fullWidthCarousel"
              animation="slide"
              swipe={true}
              index={this.state.index}
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              onChange={() => this.playPauseVideo(false)}
              navButtonsProps={{
                style: {
                  backgroundColor: "rgb(255 255 255 / 42%)",
                  zIndex: 13,
                },
              }}
            >
              {this.state.imgData.map((item: any) => (
                <div key={item.id}>
                  {item.type === "img" && (
                    <img
                      src={item.src}
                      alt="Image 1"
                      style={webStyle.FullCarouselImg as React.CSSProperties}
                    />
                  )}
                  {item.type === "vid" && (
                    <div style={{ outline: "none" }}>
                      {!this.state.isPlaying && (
                        <button
                          className="playButton"
                          onClick={this.handlePause}
                          style={{ zIndex: 11 }}
                        >
                          <img src={play} alt="play" className="fullPlayIcon" />
                        </button>
                      )}
                      <ReactPlayer
                        ref={this.handleRef}
                        className="reactPlayer"
                        data-testid={`fullWidthVideo`}
                        onKeyUp={this.playPauseVideo}
                        onEnded={() => this.setState({ isPlaying: false })}
                        playing={this.state.isPlaying}
                        url={item.src}
                        style={webStyle.fullCarouselVideo}
                        height={"auto"}
                        width={"100%"}
                        controls
                        onClick={this.handleVideoClick}
                        onPause={() => this.setState({ isPlaying: false })}
                        onPlay={() => this.setState({ isPlaying: true })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
          <div className="carouselFooter">
            <Footer navigation={undefined} id={""} />
          </div>
        </CarouselDisplayContainer>
      </ThemeProvider>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      margin: "20px 0px",
    },
  },
});

const CarouselDisplayContainer = styled(Box)(() => ({
  padding: "0 50px 30px 50px",
  "& .reactPlayer video": {
    outline: "none",
    position: "relative",
    zIndex: 10,
  },
  "& .playButton": {
    border: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    background: "none",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  },
  "& .carouselHeader": {
    padding: "20px 0",
  },
  "& .fullCarouselClass": {
    marginBottom: "20px",
  },
  "& .backButton": {
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "15px",
  },
  "& .carouselDisplayTitle": {
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "44px",
    color: "rgba(39, 53, 103, 1)",
  },
  "& .cardLocationLand": {
    textAlign: "left",
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "0em",
    marginLeft: "10px",
    marginTop: "14px",
    color: "#848FAC",
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  "& .locationImg": {
    height: "20px",
    paddingTop: "12px",
  },
  "& .carouselSubtitle": {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "28px",
    color: "rgba(132, 143, 172, 1)",
    marginTop: "14px",
  },
  "& .fullPlayIcon": {
    zIndex: 11,
    height: "60px",
    weight: "60px",
  },
  "& .carouselFooter": {
    display: "none",
  },
  "@media (max-width: 768px)": {
    padding: "0",
    "& .carouselHeader": {
      padding: "20px 24px",
    },
    "& .backButton": {
      height: "24px",
      width: "24px",
      marginBottom: "36px",
    },
    "& .carouselDisplayTitle": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .cardLocationLand": {
      fontSize: "12px",
      lineHeight: "18px",
      marginTop: "8px",
    },
    "& .locationImg": {
      height: "16px",
      paddingTop: "8px",
    },
    "& .carouselSubtitle": {
      fontSize: "12px",
      lineHeight: "18px",
      marginTop: "8px",
    },
    "& .fullPlayIcon": {
      height: "30px",
      width: "30px",
    },
    "& .carouselFooter": {
      display: "flex",
      marginTop: "54px",
    },
  },
}));

const webStyle = {
  backArrow: {
    width: "100%",
  },

  FullCarouselImg: {
    width: "100%",
    objectFit: "cover",
  },

  fullCarouselVideo: {
    border: "none",
  },
};
// Customizable Area End
