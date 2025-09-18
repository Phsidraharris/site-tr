import React from "react";

// Customizable Area Start

import LandingPageController, {
  Props,
  configJSON
} from "./LandingPageController";
import {
  Box,
  Typography,
  MenuItem,
  ButtonGroup,
  Button,
  Card,
  Grid,
  CardContent,
  Slide,
  Zoom,
  styled,
  Menu,
  Modal,
  Tabs,
  Tab
} from "@material-ui/core";
import {
  homepic,
  location,
  background,
  bed,
  couch,
  bathroom,
  land,
  landblue,
  landwhite,
  gridblue,
  gridwhite,
  arrow,
  FirstPic,
  viewRect,
  imageOne,
  imageTwo,
  crossIcon
} from "./assets";
import Footer from "./Footer.web";
import "./LandingPage.web.css";
import Carousel from "react-material-ui-carousel";
import FilterItemBox from "./FilterItemBox.web";
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";

const ScrollBox = styled(Box)({
  "& div::-webkit-scrollbar": {
    width: "10px",
    paddingLeft: "-20px"
  },
  "& div::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    borderRadius: "10px"
  },
  "& div::-webkit-scrollbar-thumb": {
    backgroundColor: "#848FAC80",
    borderRadius: "10px"
  }
});
// Customizable Area End

export default class LandingPage extends LandingPageController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderCookieBanner = () => {
    return (
      <MainCookieModal
        open={this.state.openCookieModal}
        data-testId="cookieBannerTestId"
      >
        <ModalContainer>
          <CookiesMainHeading>{configJSON.cookiesHeading}</CookiesMainHeading>
          <CookiesText>{configJSON.cookiesSubText}</CookiesText>
          <CookieAcceptButton
            onClick={this.acceptAllCookies}
            data-testId="acceptCookieTestId"
          >
            {configJSON.cookiesAcceptButton}
          </CookieAcceptButton>
          <CookieRejectButton
            onClick={this.rejectAllCookies}
            data-testId="rejectCookieTestId"
          >
            {configJSON.cookiesRejectButton}
          </CookieRejectButton>
          <ManageSetting
            onClick={this.handleManageSetting}
            data-testId="cookieSettingTestId"
          >
            {configJSON.manageSettingText}
          </ManageSetting>
        </ModalContainer>
      </MainCookieModal>
    );
  };

  renderCookieSetting = () => {
    return (
      <div>
        <CookiesSettingModal open={this.state.openSettingModal}>
          <CookiesSettingModalBox>
            <CookiesSettingHeadingContainer>
              <CookiesSettingModalHeadingTxt>
                {configJSON.cookiesSettingHeading}
              </CookiesSettingModalHeadingTxt>
              <img
                src={crossIcon}
                onClick={this.handleClosManageSetting}
                data-testId="crossSettingTestId"
              />
            </CookiesSettingHeadingContainer>
            <CookiesSettingModalContent>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={this.state.activeTabIndex}
                onChange={this.handleChange}
                className="tabsStyle"
                indicatorColor="primary"
                data-testId="tabChangeTestId"
              >
                <Tab
                  label={configJSON.tabText1}
                  onClick={() => this.handleActiveTab(configJSON.tabText1)}
                  data-testId="privacyTestId"
                  className={
                    this.state.activeTab === "Your Privacy"
                      ? "activeTabStyle"
                      : "normalTabStyle"
                  }
                />
                <Tab
                  label={configJSON.tabText2}
                  onClick={() => this.handleActiveTab(configJSON.tabText2)}
                  data-testId="strictlyNecessaryTestId"
                  className={
                    this.state.activeTab === "Strictly Necessary"
                      ? "activeTabStyle"
                      : "normalTabStyle"
                  }
                />
                <Tab
                  label={configJSON.tabText3}
                  onClick={() => this.handleActiveTab(configJSON.tabText3)}
                  data-testId="functionalTestId"
                  className={
                    this.state.activeTab === "Functional"
                      ? "activeTabStyle"
                      : "normalTabStyle"
                  }
                />
                <Tab
                  label={configJSON.tabText4}
                  onClick={() => this.handleActiveTab(configJSON.tabText4)}
                  data-testId="targetingTestId"
                  className={
                    this.state.activeTab === "Targeting"
                      ? "activeTabStyle"
                      : "normalTabStyle"
                  }
                />
              </Tabs>
              <Box className="tabPanelBox">
                <Box
                  style={{
                    display: this.state.activeTabIndex === 0 ? "block" : "none"
                  }}
                >
                  <Box className="tabContent">
                    <Typography className="tabHeading">
                      {configJSON.tabText1}
                    </Typography>
                    <Typography className="tabDescription">
                      {configJSON.tabText1Description}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: this.state.activeTabIndex === 1 ? "block" : "none"
                  }}
                >
                  <Box className="tabContent">
                    <Typography className="tabHeading">
                      {configJSON.tabText2}
                    </Typography>
                    <Typography className="tabDescription">
                      {configJSON.tabText2Description}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: this.state.activeTabIndex === 2 ? "block" : "none"
                  }}
                >
                  <Box className="tabContent">
                    <Typography className="tabHeading">
                      {configJSON.tabText3}
                    </Typography>
                    <Typography className="tabDescription">
                      {configJSON.tabText3Description}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: this.state.activeTabIndex === 3 ? "block" : "none"
                  }}
                >
                  <Box className="tabContent">
                    <Typography className="tabHeading">
                      {configJSON.tabText4}
                    </Typography>
                    <Typography className="tabDescription">
                      {configJSON.tabText4Description}
                    </Typography>
                    <Typography className="tabDescription">
                      {configJSON.tabText5Description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CookiesSettingModalContent>
            <CookiesSettingBottomContainer>
              <Button className="saveButton" onClick={this.acceptAllCookies}>
                {configJSON.saveText}
              </Button>
            </CookiesSettingBottomContainer>
          </CookiesSettingModalBox>
        </CookiesSettingModal>
      </div>
    );
  };
  // Customizable Area End

  render() {
    // Customizable Area Start
    const { anchorElSort } = this.state;

    const cards = [
      {
        id: 1,
        price: "£600,999",
        title: "Beautiful Apartments",
        content: "Shree Garden 1132, UK",
        bed: 2,
        bath: 4,
        couch: 4,
        sqft: "187sq.ft.",
        PropertyFeature: "Graden",
        epcRating: "A"
      },
      {
        id: 2,
        price: "£600,999",
        title: "Comfortable Apartments",
        content: "Shree Garden 1132, UK",
        bed: 3,
        bath: 2,
        couch: 4,
        sqft: "150sq.ft.",
        PropertyFeature: "Parking",
        epcRating: "B"
      },
      {
        id: 3,
        price: "£750,999",
        title: "Beautiful Area",
        content: "Shree Garden 1132, UK",
        bed: 6,
        bath: 4,
        couch: 4,
        sqft: "200sq.ft.",
        PropertyFeature: "Balcony",
        epcRating: "C"
      },
      {
        id: 4,
        price: "£690,999",
        title: "Dream House",
        content: "Shree Garden 1132, UK",
        bed: 9,
        bath: 9,
        couch: 4,
        sqft: "300sq.ft.",
        PropertyFeature: "Graden",
        epcRating: "D"
      },
      {
        id: 5,
        price: "£600,999",
        title: "Sweet Home",
        content: "Shree Garden 1132, UK",
        bed: 3,
        bath: 2,
        couch: 4,
        sqft: "187sq.ft.",
        PropertyFeature: "Parking",
        epcRating: "E"
      },
      {
        id: 6,
        price: "£10,789999",
        title: "Luxury Home",
        content: "Shree Garden 1132, UK",
        bed: 7,
        bath: 9,
        couch: 4,
        sqft: "200sq.ft.",
        PropertyFeature: "Conservtory",
        epcRating: "F"
      },
      {
        id: 7,
        price: "£509,999",
        title: "Dream Home",
        content: "Shree Garden 1132, UK",
        bed: 4,
        bath: 4,
        couch: 4,
        sqft: "180sq.ft.",
        PropertyFeature: "Graden"
      },
      {
        id: 8,
        price: "£1,7599999",
        title: "Luxury Home",
        content: "Shree Garden 1132, UK",
        bed: 1,
        bath: 1,
        couch: 4,
        sqft: "250sq.ft.",
        PropertyFeature: "Balcony"
      },
      {
        id: 9,
        price: "£107,8999",
        title: "Dream House",
        content: "Shree Garden 1132, UK",
        bed: 3,
        bath: 3,
        couch: 4,
        sqft: "100sq.ft.",
        PropertyFeature: "Conservtory"
      }
    ];

    const cardsTwo = [
      {
        id: 1,
        rate: "£402,999",
        name: "Beautiful Apartments",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 2,
        rate: "£600,999",
        name: "Comfortable Apartments",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 3,
        rate: "£402,999",
        name: "Beautiful Area",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 4,
        rate: "£402,999",
        name: "Dream House",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 5,
        rate: "£402,999",
        name: "Sweet Home",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 6,
        rate: "£402,999",
        name: "Luxury Home",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 7,
        rate: "£402,999",
        name: "Dream Home",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 8,
        rate: "£402,999",
        name: "Luxury Home",
        loc: "Shree Garden 1132, UK"
      },
      {
        id: 9,
        rate: "£402,999",
        name: "Dream House",
        loc: "Shree Garden 1132, UK"
      }
    ];

    const {
      isGridView,
      firstTypographyEntered,
      showFilters,
      showProperties,
      isGridVisible,
      seemoreproperty
    } = this.state;

    const carouselItems = [
      <img src={homepic} alt="Image 1" style={webStyles.cardImg} />,
      <img src={homepic} alt="Image 2" style={webStyles.cardImg} />,
      <img src={homepic} alt="Image 3" style={webStyles.cardImg} />
    ];

    const carouselItemsTwo = [
      { src: FirstPic, srcTwo: imageOne, srcThree: imageTwo },
      { src: FirstPic, srcTwo: imageOne, srcThree: imageTwo },
      { src: FirstPic, srcTwo: imageOne, srcThree: imageTwo }
    ];

    const iconLine = () => {
      return (
        <>
          <Grid container>
            <Grid item xs={12} sm={1} style={{ display: "flex" }}>
              <img src={couch} alt="couch" style={webStyles.iconImg} />
            </Grid>
            <Grid item xs={12} sm={1}>
              <p style={webStyles.bedText as React.CSSProperties}>2</p>
            </Grid>
            <Grid item xs={12} sm={1} style={{ display: "flex" }}>
              <img src={bed} alt="bed" style={webStyles.bedBathIcon} />
            </Grid>
            <Grid item xs={12} sm={1}>
              <p style={webStyles.bedText as React.CSSProperties}>4</p>
            </Grid>
            <Grid item xs={12} sm={1} style={{ display: "flex" }}>
              <img src={bathroom} alt="bath" style={webStyles.bedBathIcon} />
            </Grid>
            <Grid item xs={12} sm={1}>
              <p style={webStyles.bedText as React.CSSProperties}>4</p>
            </Grid>
            <Grid item xs={12} sm={1} style={{ display: "flex" }}>
              <img src={land} style={webStyles.bedBathIcon} />
            </Grid>
            <Grid item xs={12} sm={1}>
              <p style={webStyles.sqftText as React.CSSProperties}>187sq.ft.</p>
            </Grid>
          </Grid>
        </>
      );
    };
    return (
      <div>
        {this.renderCookieBanner()}
        {this.renderCookieSetting()}
        <Box style={{ background: "#FAFAFA" }}>
          <NavigationMenu navigation={this.props.navigation} id={""} />
          <div style={{ background: "#FAFAFA" }}>
            <BannerBox>
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  height: "100%",
                  width: "55%"
                }}
                src={viewRect}
              />
              <Slide
                direction="up"
                in={true}
                timeout={1000}
                onEntered={this.handleFirstTypographyEntered}
              >
                <MainTitle>
                  Discover your Ideal <br />
                  <span style={{ color: "#0097CB" }}>Property</span>
                </MainTitle>
              </Slide>
              {firstTypographyEntered && (
                <Slide direction="up" in={true} timeout={1000}>
                  <SmallTitle>
                    Explore Properties for Sale across the UK & worldwide
                  </SmallTitle>
                </Slide>
              )}
            </BannerBox>
            {showFilters && (
              <Slide direction="up" in={showFilters} timeout={1000}>
                <FilterItemBox navigation={undefined} id={""} />
              </Slide>
            )}
            <Slide direction="up" in={showProperties} timeout={1000}>
              <Box style={webStyles.secondBox}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                    background: "#FAFAFA"
                  }}
                >
                  <Typography
                    style={webStyles.propertySaleTitle as React.CSSProperties}
                  >
                    Properties for sale
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <ButtonGroup
                      aria-label="view toggle"
                      style={{
                        marginRight: "40px",
                        width: "63px",
                        height: "32px",
                        marginTop: "9px"
                      }}
                    >
                      <Button
                        onClick={this.toggleView}
                        variant={isGridView ? "contained" : "outlined"}
                        style={{
                          background: isGridView ? "#273567" : "white",
                          color: isGridView ? "white" : "#273567",
                          borderRadius: "8px 0px 0px 8px"
                        }}
                      >
                        <img
                          src={isGridView ? gridwhite : gridblue}
                          alt="Toggle Icon"
                        />
                      </Button>
                      <Button
                        onClick={this.toggleView}
                        variant={!isGridView ? "contained" : "outlined"}
                        style={{
                          background: !isGridView ? "#273567" : "white",
                          color: !isGridView ? "white" : "#273567",
                          borderRadius: "0px 8px 8px 0px"
                        }}
                      >
                        <img
                          src={!isGridView ? landwhite : landblue}
                          alt="Toggle Icon"
                        />
                      </Button>
                    </ButtonGroup>

                    <div>
                      <Button
                        variant="contained"
                        aria-haspopup="true"
                        onClick={this.handleClickSort}
                        style={webStyles.buttonSortBy as React.CSSProperties}
                      >
                        Sort by
                        <img src={arrow} />
                      </Button>
                      <Menu
                        id="custom-select"
                        anchorEl={anchorElSort}
                        open={Boolean(anchorElSort)}
                        onClose={this.handleCloseSort}
                        data-test-id="handleClose11"
                        style={webStyles.menuStyle as React.CSSProperties}
                        className="MenuList"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                      >
                        <MenuItem
                          id="listhover"
                          data-test-id="listhover14"
                          onClick={() => this.handleOptionClickSort("Price")}
                        >
                          Price Low to High
                        </MenuItem>
                        <MenuItem
                          id="listhover"
                          data-test-id="listhover15"
                          onClick={() => this.handleOptionClickSort("Price")}
                        >
                          Price High to Low
                        </MenuItem>
                        <MenuItem
                          id="listhover"
                          data-test-id="listhover16"
                          onClick={() => this.handleOptionClickSort("Date")}
                        >
                          Date New to Old
                        </MenuItem>
                        <MenuItem
                          id="listhover"
                          data-test-id="listhover17"
                          onClick={() => this.handleOptionClickSort("Date")}
                        >
                          Date Old to New
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </Box>
              </Box>
            </Slide>
            <Box style={{ background: "FAFAFA" }}>
              {isGridView ? (
                <ScrollBox>
                  <Box style={webStyles.cardContainer}>
                    <Box
                      style={webStyles.scrollContainer as React.CSSProperties}
                    >
                      <Grid container spacing={2}>
                        {cards.map((card, index) => (
                          <Zoom
                            key={card.id}
                            in={isGridVisible} // Adjust the number of items to display with animation
                            timeout={(index + 1) * 1000} // Adjust the timeout for each item
                          >
                            <Grid item xs={12} sm={6} md={4} key={card.id}>
                              <Card style={webStyles.singleCard}>
                                <Carousel
                                  autoPlay={false}
                                  navButtonsAlwaysVisible={true}
                                  activeIndicatorIconButtonProps={{
                                    style: {
                                      color: "white",
                                      fill: "white"
                                    }
                                  }}
                                  indicatorIconButtonProps={{
                                    style: {
                                      border: "1px solid white",
                                      color: "transparent",
                                      width: "10px",
                                      height: "10px",
                                      marginRight: "5px"
                                    }
                                  }}
                                  indicatorContainerProps={{
                                    style: {
                                      background: "#ffffff52",
                                      padding: "10px 0",
                                      zIndex: 1,
                                      position: "relative",
                                      bottom: "10px"
                                    }
                                  }}
                                  navButtonsProps={{
                                    style: {
                                      backgroundColor: "rgb(255 255 255 / 42%)"
                                    }
                                  }}
                                >
                                  {carouselItems.map((item, index) => (
                                    <div
                                      key={index}
                                      style={{ height: "253px" }}
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </Carousel>
                                <CardContent>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      marginTop: "-20px",
                                      marginBottom: "10px",
                                      alignItems: "end"
                                    }}
                                  >
                                    <Typography
                                      style={
                                        webStyles.Equity as React.CSSProperties
                                      }
                                    >
                                      Equity Loan
                                    </Typography>
                                    <div
                                      style={
                                        webStyles.NewBuild as React.CSSProperties
                                      }
                                    >
                                      New Build
                                    </div>
                                  </div>
                                  <Typography
                                    style={
                                      webStyles.cardPrice as React.CSSProperties
                                    }
                                  >
                                    <b>{card.price}</b>
                                  </Typography>
                                  <Typography
                                    style={
                                      webStyles.cardTitle as React.CSSProperties
                                    }
                                  >
                                    <b>{card.title}</b>
                                  </Typography>
                                  <div style={{ display: "flex" }}>
                                    <img
                                      src={location}
                                      alt="location"
                                      style={webStyles.locationImg}
                                    />
                                    <Typography
                                      style={
                                        webStyles.cardLocation as React.CSSProperties
                                      }
                                    >
                                      {card.content}
                                    </Typography>
                                  </div>
                                  <div style={{ display: "flex" }}>
                                    <img
                                      src={couch}
                                      alt="couch"
                                      style={webStyles.iconImg}
                                    />
                                    <p
                                      style={
                                        webStyles.bedText as React.CSSProperties
                                      }
                                    >
                                      {card.couch}
                                    </p>
                                    <img
                                      src={bed}
                                      alt="bed"
                                      style={webStyles.bedBathIcon}
                                    />
                                    <p
                                      style={
                                        webStyles.bedText as React.CSSProperties
                                      }
                                    >
                                      {card.bed}
                                    </p>
                                    <img
                                      src={bathroom}
                                      alt="bath"
                                      style={webStyles.bedBathIcon}
                                    />
                                    <p
                                      style={
                                        webStyles.bedText as React.CSSProperties
                                      }
                                    >
                                      {card.bath}
                                    </p>
                                    <img
                                      src={land}
                                      style={webStyles.bedBathIcon}
                                    />
                                    <p
                                      style={
                                        webStyles.sqftText as React.CSSProperties
                                      }
                                    >
                                      {card.sqft}
                                    </p>
                                  </div>

                                  <Button
                                    id="hoverableLight"
                                    style={
                                      webStyles.arrangeButton as React.CSSProperties
                                    }
                                  >
                                    Arrange a viewing
                                  </Button>
                                  <Button
                                    id="hoverableDark"
                                    onClick={this.handlePropertyPage}
                                    style={
                                      webStyles.viewDetail as React.CSSProperties
                                    }
                                  >
                                    View full details
                                  </Button>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Zoom>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </ScrollBox>
              ) : (
                <div>
                  <ScrollBox>
                    <Box style={webStyles.cardContainer}>
                      <Box
                        style={webStyles.scrollContainer as React.CSSProperties}
                      >
                        {cardsTwo.map((card, index) => (
                          <Zoom
                            key={card.id}
                            in={isGridVisible} // Adjust the number of items to display with animation
                            timeout={(index + 1) * 1000} // Adjust the timeout for each item
                          >
                            <Card
                              style={{
                                marginBottom: "20px",
                                position: "relative"
                              }}
                            >
                              <Grid
                                container
                                style={
                                  webStyles.landViewCard as React.CSSProperties
                                }
                              >
                                <Grid item xs={12} sm={12} md={8}>
                                  <Grid
                                    container
                                    style={{ position: "relative" }}
                                  >
                                    <Carousel
                                      autoPlay={false}
                                      navButtonsAlwaysVisible={true}
                                      className="custom-carousel"
                                      activeIndicatorIconButtonProps={{
                                        style: {
                                          color: "white",
                                          fill: "white"
                                        }
                                      }}
                                      indicatorIconButtonProps={{
                                        style: {
                                          border: "1px solid white",
                                          color: "transparent",
                                          width: "10px",
                                          height: "10px",
                                          marginRight: "5px"
                                        }
                                      }}
                                      indicatorContainerProps={{
                                        style: {
                                          background: "#ffffff52",
                                          padding: "10px 0",
                                          zIndex: 1,
                                          position: "absolute",
                                          bottom: "0px"
                                        }
                                      }}
                                      navButtonsProps={{
                                        style: {
                                          backgroundColor:
                                            "rgb(255 255 255 / 42%)"
                                        }
                                      }}
                                    >
                                      {carouselItemsTwo.map((item, index) => (
                                        <div key={index}>
                                          <Grid
                                            container
                                            style={{
                                              maxHeight: 380,
                                              borderRadius: "8px"
                                            }}
                                          >
                                            <Grid item xs={12} sm={8}>
                                              <img
                                                src={item.src}
                                                alt="Image 1"
                                                style={
                                                  webStyles.LandcardImgFirst
                                                }
                                              />
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                              <img
                                                src={item.srcTwo}
                                                alt="Image 2"
                                                style={webStyles.LandcardImgSub}
                                              />
                                              <img
                                                src={item.srcThree}
                                                alt="Image 3"
                                                style={
                                                  webStyles.LandcardImgSubTwo
                                                }
                                              />
                                            </Grid>
                                          </Grid>
                                        </div>
                                      ))}
                                    </Carousel>
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={4}
                                  style={webStyles.landscapRight}
                                >
                                  <Typography
                                    style={
                                      webStyles.cardPriceLand as React.CSSProperties
                                    }
                                  >
                                    <b>{card.rate}</b>
                                  </Typography>
                                  <Typography
                                    style={
                                      webStyles.cardTitleLand as React.CSSProperties
                                    }
                                  >
                                    <b>{card.name}</b>
                                  </Typography>
                                  <div style={{ display: "flex" }}>
                                    <img
                                      src={location}
                                      alt="location"
                                      style={webStyles.locationImg}
                                    />
                                    <Typography
                                      style={
                                        webStyles.cardLocationLand as React.CSSProperties
                                      }
                                    >
                                      {card.loc}
                                    </Typography>
                                  </div>
                                  {iconLine()}
                                  <Button
                                    id="hoverableLight"
                                    style={
                                      webStyles.arrangeButton as React.CSSProperties
                                    }
                                  >
                                    Arrange a viewing
                                  </Button>
                                  <Button
                                    id="hoverableDark"
                                    style={
                                      webStyles.viewDetail as React.CSSProperties
                                    }
                                  >
                                    View full details
                                  </Button>
                                </Grid>
                              </Grid>
                            </Card>
                          </Zoom>
                        ))}
                      </Box>
                    </Box>
                  </ScrollBox>
                </div>
              )}
            </Box>
            <Slide in={seemoreproperty} direction="up" timeout={1000}>
              <Box style={webStyles.lastButtonContainer as React.CSSProperties}>
                <Button
                  id="hoverableLight"
                  style={webStyles.MoreProperty as React.CSSProperties}
                >
                  See More Properties
                </Button>
              </Box>
            </Slide>
          </div>
        </Box>
        <Footer navigation={undefined} id={""} />
      </div>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
const BannerBox = styled(Box)({
  backgroundImage: `url(${background})`,
  margin: 0,
  padding: 0,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "100% 100%",
  backgroundColor: "#FAFAFA",
  position: "relative",
  "@media (max-width: 2560px)": {
    height: "479px"
  },
  "@media (max-width: 1440px)": {
    height: "432px"
  },
  "@media (max-width: 1132px)": {
    height: "419px"
  },
  "@media (max-width: 1024px)": {
    height: "310px"
  },
  "@media (max-width: 768px)": {
    height: "310px"
  },
  "@media (max-width: 425px)": {
    height: "267px"
  },
  "@media (max-width: 320px)": {
    height: "267px"
  }
});
const MainTitle = styled(Typography)({
  color: "#FFFFFF",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "56px",
  paddingTop: "128px",
  paddingLeft: "50px",
  position: "relative",
  zIndex: 3,
  "@media (max-width: 2560px)": {
    fontSize: "42px",
    lineHeight: "58px"
  },
  "@media (max-width: 1440px)": {
    fontSize: "40px",
    lineHeight: "56px",
    paddingTop: "108px"
  },
  "@media (max-width: 1132px)": {
    fontSize: "37px",
    lineHeight: "56px",
    paddingTop: "97px"
  },
  "@media (max-width: 1024px)": {
    fontSize: "40px",
    paddingTop: "50px",
    lineHeigth: "50px"
  },
  "@media (max-width: 768px)": {
    fontSize: "32px",
    lineHeight: "47px",
    paddingTop: "50px"
  },
  "@media (max-width: 425px)": {
    paddingTop: "47px",
    fontSize: "27px",
    lineHeight: "30px"
  },
  "@media (max-width: 320px)": {
    lineHeight: "27px",
    fontSize: "19px",
    paddingTop: "50px"
  }
});
const SmallTitle = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 400,
  fontFamily: "Poppins",
  paddingLeft: "50px",
  position: "relative",
  zIndex: 3,
  "@media (max-width: 2560px)": {
    fontSize: "24px"
  },
  "@media (max-width: 1440px)": {
    fontSize: "20px"
  },
  "@media (max-width: 1132px)": {
    fontSize: "18px"
  },
  "@media (max-width: 1024px)": {
    fontSize: "22px"
  },
  "@media (max-width: 768px)": {
    fontSize: "22px"
  },
  "@media (max-width: 425px )": {
    fontSize: "14px"
  },
  "@media (max-width: 320px)": {
    fontSize: "14px"
  }
});

const webStyles = {
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "56px",
    paddingTop: "128px",
    paddingLeft: "50px",
    position: "relative",
    zIndex: 3
  },
  subTitle: {
    color: "#FFFFFF",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "bold",
    fontFamily: "Poppins",
    paddingLeft: "50px",
    position: "relative",
    zIndex: 3
  },
  buttonStyle: {
    justifyContent: "space-between",
    fontFamily: "Poppins",
    height: "54px",
    border: "1px solid lightgrey",
    display: "flex",
    color: "#1E1E1E",
    width: "100%",
    paddingRight: "0px",
    alignItems: "center",
    boxShadow: "none",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    borderRadius: "8px"
  },
  NewBuild: {
    border: "1px solid #273567",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    fontFamily: "Poppins",
    color: "#273567",
    padding: "2px 7px",
    borderRadius: "8px"
  },
  buttonSortBy: {
    display: "flex",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    justifyContent: "space-between",
    border: "none",
    alignItems: "center",
    fontWeight: 400,
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#1E1E1E",
    height: "44px",
    fontFamily: "Poppins",
    textTransform: "none",
    fontSize: "16px",
    width: "120px"
  },
  menuStyle: {
    marginTop: "55px",
    maxHeight: "400px"
  },
  secondBox: {
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "30px",
    background: "#FAFAFA"
  },
  propertySaleTitle: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "44px",
    letterSpacing: "-0.01em",
    textAlign: "left"
  },
  sortby: {
    height: "24px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    padding: "10px 16px 10px 16px",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer"
  },
  cardContainer: {
    marginTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },
  singleCard: {
    padding: "10px",
    borderRadius: "8px"
  },
  cardImg: {
    borderRadius: "8px",
    width: "100%",
    height: "285.36px"
  },
  Equity: {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#273567"
  },
  cardPrice: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#0097CB"
  },
  cardPriceLand: {
    fontSize: "26px",
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: "39px",
    textAlign: "left",
    color: "#0097CB",
    letterSpacing: "0em"
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#273567",
    marginTop: "10px"
  },
  cardTitleLand: {
    fontSize: "20px",
    textAlign: "left",
    fontWeight: 500,
    lineHeight: "30px",
    marginTop: "10px",
    letterSpacing: "0em",
    fontFamily: "Poppins",
    color: "#273567"
  },
  cardLocation: {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "10px",
    color: "#848FAC",
    marginLeft: "10px"
  },
  cardLocationLand: {
    textAlign: "left",
    fontSize: "18px",
    lineHeight: "27px",
    letterSpacing: "0em",
    marginLeft: "10px",
    marginTop: "10px",
    color: "#848FAC",
    fontWeight: 400,
    fontFamily: "Poppins"
  },
  arrangeButton: {
    width: "100%",
    border: "1px solid #273567",
    borderRadius: "8px",
    backgroundColor: "#F4F5F7",
    color: "#273567",
    borderColor: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    marginTop: "10px",
    height: "44px",
    cursor: "pointer",
    textTransform: "none"
  },
  viewDetail: {
    boder: "1px solid #141D40",
    backgroundColor: "#141D40",
    color: "#FFFFFF",
    width: "100%",
    borderRadius: "8px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "10px",
    height: "44px",
    cursor: "pointer",
    textTransform: "none"
  },
  iconImg: {
    height: "16px",
    marginRight: "8px",
    paddingTop: "20"
  },
  bedBathIcon: {
    height: "21px",
    marginRight: "8px",
    paddingTop: "17px"
  },
  bedText: {
    paddingRight: "15px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    borderRight: "1px solid #848FAC",
    marginRight: "15px"
  },
  sqftText: {
    fontFamily: "Poppins",
    textAlign: "left",
    color: "#273567",
    letterSpacing: "0em",
    fontSize: "16px",
    paddingRight: "15px",
    fontWeight: 400,
    lineHeight: "24px"
  },
  locationImg: {
    height: "20px",
    paddingTop: "12px"
  },
  lastButtonContainer: {
    marginTop: "50px",
    textAlign: "center",
    background: "#FAFAFA"
  },
  MoreProperty: {
    border: "1px solid #273567",
    height: "44px",
    padding: "10px 16px 10px 16px",
    fontFamilt: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    borderRadius: "8px",
    color: "#273567",
    cursor: "pointer",
    backgroundColor: "#EFF0F2",
    textTransform: "none"
  },
  landViewCard: {
    padding: "20px",
    background: "#FFFFFF",
    borderRadius: "8px",
    position: "relative"
  },
  landscapRight: {
    paddingLeft: "1rem",
    margin: "auto"
  },
  LandcardImgFirst: {
    width: "100%",
    maxHeight: "380px",
    height: "100%"
  },
  LandcardImgSub: {
    width: "105%",
    marginLeft: "-12px",
    maxHeight: "190px"
  },
  LandcardImgSubTwo: {
    width: "105%",
    marginLeft: "-12px",
    maxHeight: "186px"
  },
  scrollContainer: {
    marginTop: "1rem",
    height: "1876px",
    paddingRight: "10px",
    overflowY: "scroll"
  }
};

const MainCookieModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: "30px",
  backgroundColor: "transparent"
});

const ModalContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "15px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  width: "647px",
  height: "416px",
  outline: "none",
  justifyContent: "center",
  gap: "20px",
  "@media(max-width:650px)": {
    width: "100%"
  }
});

const CookiesMainHeading = styled(Typography)({
  color: "#273567",
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: 500,
  "@media(max-width:660px)": {
    fontSize: "24px"
  }
});

const CookiesText = styled(Typography)({
  color: "#848FAC",
  textAlign: "center",
  fontFamily: "Poppins",
  fontsize: "16px",
  fontWeight: 400
});

const CookieAcceptButton = styled(Button)({
  display: "flex",
  width: "607px",
  height: "44px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: "#141D40",
  color: "white",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "capitalize",
  "&:hover": {
    background: "#141D40"
  },
  "@media(max-width:650px)": {
    width: "100%"
  }
});

const CookieRejectButton = styled(Button)({
  display: "flex",
  width: "607px",
  height: "44px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: "rgba(39, 53, 103, 0.05)",
  border: "1px solid #273567",
  color: "#273567",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "capitalize",
  "&:hover": {
    background: "rgba(39, 53, 103, 0.05)"
  },
  "@media(max-width:650px)": {
    width: "100%"
  }
});

const ManageSetting = styled(Typography)({
  color: " #0097CB",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 400
});

const CookiesSettingModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  alignItems: "center",
  height: "100%",
  width: "100%",
  cursor: "pointer",
  padding: "25px"
});

const CookiesSettingModalBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
  boxShadow: "1px 1px 5px 0px rgba(197,197,197,0.75)",
  "@media(max-width:700px)": {
    width: "90%"
  },
  gap: "20px",
  height: "auto"
});

const CookiesSettingHeadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "20px",
  "@media(max-width:991px)": {
    marginBottom: "0px"
  }
});

const CookiesSettingModalHeadingTxt = styled(Typography)({
  color: "#273567",
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: 500
});

const CookiesSettingModalContent = styled(Box)({
  display: "flex",
  gap: "20px",
  "@media(max-width:991px)": {
    flexDirection: "column",
    "& .MuiTabs-flexContainerVertical": {
      flexDirection: "row",
      justifyContent: "space-between",
      overflowX: "auto",
      whiteSpace: "nowrap",
      webkitOverflowScrolling: "touch",
      gap: "10px",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    }
  },
  "@media(max-width:450px)": {
    gap: "10px"
  },
  "& .tabsStyle": {
    "& .MuiTabs-indicator": {
      display: "none"
    },
    "& .MuiTab-textColorInherit": {
      opacity: "1.0"
    }
  },
  "& .activeTabStyle": {
    backgroundColor: "#273567",
    color: "white",
    borderRadius: "8px",
    minHeight: "44px",
    textTransform: "inherit",
    width: "212px",
    padding: "10px 16px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: 600,
    "& .MuiTab-wrapper": {
      display: "flex",
      alignItems: "flex-start"
    },
    "@media(max-width:991px)": {
      width: "auto",
      fontSize: "16px",
      padding: "5px 4px",
      marginBottom: "0px",
      "& .MuiTab-wrapper": {
        display: "flex",
        alignItems: "center"
      }
    }
  },
  "& .normalTabStyle": {
    color: "#848FAC",
    borderRadius: "8px",
    minHeight: "44px",
    textTransform: "inherit",
    width: "212px",
    padding: "10px 16px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "20px",
    "& .MuiTabs-indicator": {
      display: "none"
    },
    "& .MuiTab-wrapper": {
      display: "flex",
      alignItems: "flex-start"
    },
    "@media(max-width:991px)": {
      width: "auto",
      fontSize: "16px",
      padding: "5px 4px",
      marginBottom: "0px",
      "& .MuiTab-wrapper": {
        display: "flex",
        alignItems: "center"
      }
    }
  },
  "& .tabContent": {
    width: "660px",
    "@media(max-width:991px)": {
      width: "auto"
    }
  },
  "& .tabHeading": {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: 400,
    "@media(max-width:991px)": {
      display: "none"
    }
  },
  "& .tabDescription": {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "30px",
    "@media(max-width:991px)": {
      textAlign: "center"
    }
  }
});

const CookiesSettingBottomContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& .saveButton": {
    backgroundColor: "#273567",
    color: "white",
    textTransform: "inherit",
    borderRadius: "8px",
    marginTop: "10px",
    height: "44px",
    padding: "10px 16px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    "@media(max-width:660px)": {
      width: "100%"
    },
    "&:hover": {
      backgroundColor: "#273567"
    }
  },
  "@media(max-width:660px)": {
    justifyContent: "center"
  }
});

// Customizable Area End
