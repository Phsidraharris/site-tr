import React from "react";

// Customizable Area Start
import { Box, Typography, Grid, Button, IconButton } from "@material-ui/core";
import { createTheme, styled, ThemeProvider } from "@material-ui/core/styles";
import { slider1, share, location, play, plus } from "./assets";
import Carousel from "react-material-ui-carousel";
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";
// Customizable Area End

import CarouselDisplayController, { Props } from "./CarouselDisplayController";

export default class ThreeImgCarouselDisplay extends CarouselDisplayController {
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
          <Carousel
            data-testid="threeImgCarousel"
            className="carouselRoot"
            animation="slide"
            swipe={true}
            index={this.state.index}
            onChange={(index: number) => this.setState({ index })}
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            indicators={false}
            navButtonsProps={{
              style: {
                backgroundColor: "rgb(255 255 255 / 42%)",
              },
            }}
          >
            {this.state.groupedImgData.map((item: any, index: any) => (
              <div key={index}>
                <Grid container spacing={1}>
                  <Grid
                    data-testid={`gridItem${index}`}
                    onClick={() => this.handleGoToSlide(item.scrOne.id)}
                    item
                    xs={this.getBreakPoints(item.srcTwo, item.srcThree)}
                    md={item.srcTwo ? 7 : 12}
                    style={{ position: "relative" }}
                  >
                    <Button className="availableBtn" variant="contained">
                      Available
                    </Button>
                    <div className="shareLocationDivMain">
                      <Button
                        data-testid="shareBtn"
                        className="shareIconBtn"
                        variant="contained"
                        startIcon={
                          <img src={share} alt="share" className="shareIcon" />
                        }
                        onClick={this.handleShareClick}
                      >
                        Share
                      </Button>
                      <IconButton
                        data-testid="locationCopy"
                        color="primary"
                        aria-label="location"
                        component="span"
                        className="locationBtn"
                        onClick={this.handleLocationClick}
                      >
                        <img
                          src={location}
                          alt="location"
                          className="locationIcon"
                        />
                      </IconButton>
                    </div>

                    {item.scrOne.type === "img" && (
                      <img
                        src={item.scrOne.src}
                        alt="Image 1"
                        style={webStyle.CarouselFirstImg}
                        className="carouselFirstImg"
                      />
                    )}
                    {item.scrOne.type === "vid" && (
                      <>
                        {
                          <button className="playButton">
                            <img src={play} alt="play" />
                          </button>
                        }
                        <video
                          src={item.scrOne.src}
                          className="carouselVideo firstVideo"
                          height={"auto"}
                          width={"100%"}
                        />
                      </>
                    )}
                  </Grid>

                  {item?.srcTwo && (
                    <Grid item xs={item.srcThree ? 12 : 5} md={5}>
                      <Grid
                        container
                        spacing={1}
                        className={`${!item.srcThree && "srcTwoClass"}`}
                      >
                        <Grid
                          data-testid={`gridSecondItem${index}`}
                          item
                          xs={this.getThreeBreakpoint(item.srcThree)}
                          sm={this.getThreeBreakpoint(item.srcThree)}
                          md={12}
                          style={{ position: "relative" }}
                          onClick={() => this.handleGoToSlide(item.srcTwo.id)}
                        >
                          {item.srcTwo.type === "img" && (
                            <img
                              src={item.srcTwo.src}
                              alt="Image 1"
                              style={webStyle.CarouselSecondImg}
                              className="carouselSecondImg"
                            />
                          )}
                          {item.srcTwo.type === "vid" && (
                            <div
                              style={{ position: "relative"}}
                            >
                              <button
                                className="playButton"
                                style={webStyle.FadePlayBtn}
                              >
                                <img
                                  src={play}
                                  alt="play"
                                  className="playIcon"
                                />
                              </button>
                              <video
                                src={item.srcTwo.src}
                                height={"auto"}
                                width={"100%"}
                                className="secondVideo"
                              />
                            </div>
                          )}
                        </Grid>
                        {item?.srcThree && (
                          <Grid
                            data-testid={`gridThirdItem${index}`}
                            item
                            xs={6}
                            md={12}
                            style={{ position: "relative" }}
                            onClick={() =>
                              this.handleGoToSlide(item.srcThree.id)
                            }
                          >
                            <div style={{ position: "relative" }}>
                              {this.getCount() !== 0 && (
                                <div
                                  style={
                                    webStyle.MoreImg as React.CSSProperties
                                  }
                                >
                                  <img
                                    src={plus}
                                    alt="plus"
                                    className="plusImage"
                                  />
                                  <Typography className="imageCount">
                                    {this.getCount()} more
                                  </Typography>
                                </div>
                              )}
                              {item.srcThree.type === "img" && (
                                <img
                                  src={item.srcThree.src}
                                  alt="Image 1"
                                  style={webStyle.CarouselThirdImg}
                                  className="carouselThirdImg"
                                />
                              )}
                              {item.srcThree.type === "vid" && (
                                <>
                                  <button className="playButton">
                                    <img src={play} alt="play" className="playIcon" />
                                  </button>
                                  <video
                                    src={item.srcThree.src}
                                    className="carouselVideo thirdVideo"
                                    height={"auto"}
                                    width={"100%"}
                                  />
                                </>
                              )}
                            </div>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </div>
            ))}
          </Carousel>
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

const CarouselDisplayContainer = styled(Box)(({ theme }) => ({
  padding: "0 50px 30px 50px",
  "& .reactPlayer video": {
    outline: "none",
    position: "relative",
    zIndex: 10,
  },
  "& .carouselRoot": {
    borderRadius: "8px",

    "& video": {
      objectFit: "cover",
    },
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
  "& .availableBtn": {
    position: "absolute",
    backgroundColor: "#059669",
    bottom: 30,
    left: 30,
    textTransform: "capitalize",
    border: "1px solid #fff",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.005em",
    height: "44px",
    width: "106px",
    boxSizing: "border-box",
  },

  "& .carouselVideo": {
    borderRadius: 8,
  },
  "& .carouselFirstImg": {
    height: "516px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  "& .firstVideo": {
    height: "516px",
    objectFit: "cover",
  },
  "& .carouselSecondImg": {
    height: "253px",
    objectFit: "cover",
  },
  "& .secondVideo": {
    height: "253px",
    objectFit: "cover",
  },
  "& .carouselThirdImg": {
    height: "253px",
    objectFit: "cover",
  },
  "& .thirdVideo": {
    height: "253px",
    objectFit: "cover",
  },

  "& .srcTwoClass": {
    height: "100%",
    "& .secondVideo": {
      height: "516px",
    },
    "& .carouselSecondImg": {
      height: "516px",
    },
  },
  "& .shareLocationDivMain": {
    position: "absolute",
    top: "9%",
    right: "4.5%",
    display: "flex",
    gap: "15px",
  },
  "& .shareIconBtn": {
    position: "relative",
    textTransform: "capitalize",
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "8px",
    boxSizing: "border-box",
    height: "44px",
    width: "111px",
    boxShadow: "none",
    zIndex: 4,
    fontFamily: "poppins",
    color: "#273567",
    backgroundColor: "#FFF",
  },
  "& .locationBtn": {
    position: "relative",
    borderRadius: "8px",
    padding: "10px 16px",
    backgroundColor: "#fff",
    zIndex: 4,
    boxSizing: "border-box",
    height: "44px",
    width: "52px",
  },
  "& .playIcon": {
    height: "60px",
    weight: "60px",
  },
  "& .imageCount": {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "32px",
  },
  "& .plusImage": {
    height: "24px",
    width: "24px",
  },
  "@media (max-width: 600px)": {
    "& .carouselFirstImg": {
      height: "274px",
    },
    "& .firstVideo": {
      height: "274px",
    },
    "& .carouselSecondImg": {
      height: "107px",
    },
    "& .secondVideo": {
      height: "107px",
    },
    "& .srcTwoClass": {
      "& .secondVideo": {
        height: "274px !important",
      },
      "& .carouselSecondImg": {
        height: "274px !important",
      },
    },
    "& .carouselThirdImg": {
      height: "107px",
    },
    "& .thirdVideo": {
      height: "107px",
    },
  },

  "@media (max-width: 959px)": {
    "& .carouselRoot": {
      borderRadius: 0,
    },
    "& .carouselFirstImg": {
      borderRadius: 0,
    },
  },
  "@media (max-width: 768px)": {
    padding: "0",
    "& .shareIconBtn": {
      height: "30px",
      width: "91px",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    "& .shareIcon, .locationIcon": {
      height: "16px",
      width: "16px",
    },

    "& .locationBtn": {
      height: "30px",
      width: "32px",
    },
    "& .availableBtn": {
      height: "30px",
      width: "72px",
      fonFamily: "Poppins",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    "& .playIcon": {
      height: "24px",
      weight: "24px",
    },
    "& .plusImage": {
      height: "12px",
      width: "12px",
    },
    "& .imageCount": {
      fontFamily: "Poppins",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "32px",
      letterSpacing: "-0.005em",
    },
  },
}));

const webStyle = {
  CarouselFirstImg: {
    width: "100%",
  },
  CarouselSecondImg: {
    width: "100%",
  },
  CarouselThirdImg: {
    width: "100%",
  },
  FadePlayBtn: {
    backgroundColor: "rgba(0,0,0,0.2)",
    height: "100%",
    width: "100%",
  },
  MoreImg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.45)",
    zIndex: 2,
  },
};
// Customizable Area End
