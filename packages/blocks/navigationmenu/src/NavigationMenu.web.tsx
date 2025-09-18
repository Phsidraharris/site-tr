import React from "react";

// Customizable Area Start
import { Box, Button, Divider, Drawer, Link, styled } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { close, logo, menu } from "./assets";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
// Customizable Area End

import NavigationMenuController, {
  Props,
  configJSON,
} from "./NavigationMenuController";

export default class NavigationMenu extends NavigationMenuController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    this.state = {
      ...this.state,
      activeLink: "Browse Properties",
      token: "",
    };
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    const { activeLink } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <ResponsiveNavbarContainer>
          <Drawer
            data-testid="drawer"
            PaperProps={{ style: { width: "100%" } }}
            anchor={"left"}
            open={this.state.webDrawer}
            onClose={() => this.setState({ webDrawer: false })}
          >
            <div className="drawerClass" style={webStyles.drawerClass}>
              <img
                data-testid="closeBtn"
                src={close}
                alt="close"
                className="closeBtn"
                style={webStyles.closeBtn}
                onClick={() => this.setState({ webDrawer: false })}
              />
              <Box style={webStyles.drawerNavbarBox as React.CSSProperties}>
                <Link
                  href="#"
                  data-testid="drawerBrowseProperties"
                  style={webStyles.drawerLinks}
                  onClick={() => this.handleClick("Browse Properties")}
                >
                  Browse Properties
                </Link>
                <Link
                  href="#"
                  data-testid="drawerValuation"
                  style={webStyles.drawerLinks}
                  onClick={() => this.handleClick("Valuation")}
                >
                  Valuation
                </Link>
                <Link
                  href="#"
                  data-testid="drawerMarketInsight"
                  style={webStyles.drawerLinks}
                  onClick={() => this.handleClick("Market Insights")}
                >
                  Market Insights
                </Link>
                <Link
                  href="#"
                  data-testid="drawerAboutus"
                  style={webStyles.drawerLinks}
                  onClick={() => this.handleClick("About us")}
                >
                  About us
                </Link>
              </Box>
              <Divider style={webStyles.divider} />
              <div
                className="drawerButtonBox"
                style={webStyles.drawerButtonBox as React.CSSProperties}
              >
                <Button
                  style={webStyles.drawerListProperty as React.CSSProperties}
                  onClick={this.handleListProperty}
                >
                  List my property
                </Button>
                {this.state.token?.length > 0 ? (
                  <ButtonHub
                    data-testid="myHubDrawer"
                    variant="contained"
                    color="primary"
                    startIcon={<PersonOutlineIcon style={{ color: "#fff" }} />}
                    style={webStyles.drawerMyHub as React.CSSProperties}
                    onClick={() => this.handleMyHub("Categoriessubcategories")}
                  >
                    My Hub
                  </ButtonHub>
                ) : (
                  <ButtonHub
                    data-testid="loginDrawer"
                    variant="contained"
                    color="primary"
                    style={webStyles.drawerMyHub as React.CSSProperties}
                    onClick={() => this.handleMyHub("EmailAccountLoginBlock")}
                  >
                    Login
                  </ButtonHub>
                )}
              </div>
            </div>
          </Drawer>
        </ResponsiveNavbarContainer>

        <NavbarContainer>
          <Box className="header">
            <div className="logoDiv">
              <img
                data-testid="menuImg"
                src={menu}
                className="menu"
                alt="menu"
                onClick={() => this.setState({ webDrawer: true })}
              />
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ButtonBox>
              <Button
                data-testid="listMyProperties"
                id="hoverableDark"
                style={webStyles.listProperty as React.CSSProperties}
                onClick={this.handleListProperty}
              >
                List my property
              </Button>
              {this.state.token?.length > 0 ? (
                <ButtonHub
                  data-testid="fullMyHub"
                  variant="contained"
                  color="primary"
                  id="hoverableLight"
                  startIcon={<PersonOutlineIcon style={{ color: "#273567" }} />}
                  style={webStyles.myHubStyle as React.CSSProperties}
                  onClick={() => this.handleMyHub("Categoriessubcategories")}
                >
                  My Hub
                </ButtonHub>
              ) : (
                <ButtonHub
                  data-testid="fullLogin"
                  variant="contained"
                  color="primary"
                  id="hoverableLight"
                  style={webStyles.myHubStyle as React.CSSProperties}
                  onClick={() => this.handleMyHub("EmailAccountLoginBlock")}
                >
                  Login
                </ButtonHub>
              )}
            </ButtonBox>
          </Box>
          <Box style={webStyles.navbarBox} className="navbarBox">
            <Link
              href="#"
              data-testid="testid1"
              onClick={() => this.handleClick("Browse Properties")}
              style={{
                ...webStyles.navLink,
                color:
                  activeLink === "Browse Properties" ? "#273567" : "#848FAC",
                borderBottom:
                  activeLink === "Browse Properties"
                    ? "1px solid #0097CB"
                    : "none",
              }}
            >
              Browse Properties
            </Link>
            <Link
              href="#"
              data-testid="valuation"
              onClick={() => this.handleClick("Valuation")}
              style={{
                ...webStyles.navLink,
                color: activeLink === "Valuation" ? "#273567" : "#848FAC",
                borderBottom:
                  activeLink === "Valuation" ? "1px solid #0097CB" : "none",
              }}
            >
              Valuation
            </Link>
            <div style={{ position: "relative" }} className="marketInsight">
              <div
                data-testid="marketInsight"
                onClick={() => this.handleClick("Market Insights")}
                style={{
                  ...webStyles.navLink,
                  color:
                    activeLink === "Market Insights" ? "#273567" : "#848FAC",
                  borderBottom:
                    activeLink === "Market Insights"
                      ? "1px solid #0097CB"
                      : "none",
                }}
              >
                Market Insights
              </div>
              <div className="subDivMenu">
                <div className="subMenu">
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    Tax
                  </Link>
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    Market Trends
                  </Link>
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    Policies
                  </Link>
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    Buying Process
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }} className="aboutUs">
              <div
                data-testid="aboutus"
                onClick={() => this.handleClick("About us")}
                style={{
                  ...webStyles.navLink,
                  color: activeLink === "About us" ? "#273567" : "#848FAC",
                  borderBottom:
                    activeLink === "About us" ? "1px solid #0097CB" : "none",
                }}
              >
                About us
              </div>
              <div className="subDivMenu">
                <div className="subMenu">
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    What we do
                  </Link>
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    History
                  </Link>
                  <Link
                    href="#"
                    style={webStyles.subLink as React.CSSProperties}
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        </NavbarContainer>
      </ThemeProvider>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
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
const ResponsiveNavbarContainer = styled(Box)(() => ({
  "& .muiDrawer": {
    "&>*:nth-child(3)": {
      width: "100%",
    },
  },
}));

const NavbarContainer = styled(Box)(() => ({
  "& .header": {
    borderBottom: "1px solid #2735674D",
    paddingLeft: "50px",
    paddingRight: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  "& .logoDiv": {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  "& .logo": {
    width: 129,
    height: 46,
  },
  "& .menu": {
    display: "none",
  },
  "& .filterBtn": {
    display: "none",
  },
  "& .drawerClass": {},
  "& .closeBtn": {
    display: "none",
  },

  "& .drawerButtonBox": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  "& .marketInsight": {
    "& .subDivMenu": {
      display: "none",
    },
    "&:hover": {
      "& .subDivMenu": {
        paddingTop: "2px",
        display: "block",
        zIndex: 10,
        position: "absolute",
        backgroundColor: "transparent",
      },
    },
  },
  "& .subMenu": {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    border: "1px solid rgba(226, 232, 240, 1)",
    borderRadius: "2px",
    padding: "8px 12px",
    zIndex: 3,
    boxSizing: "border-box",
  },

  "& .aboutUs": {
    "& .subDivMenu": {
      display: "none",
    },
    "&:hover": {
      "& .subDivMenu": {
        paddingTop: "2px",
        display: "block",
        zIndex: 10,
        position: "absolute",
        backgroundColor: "transparent",
      },
    },
  },
  "& .navbarBox": {
    display: "flex",
  },
  "@media (max-width: 768px)": {
    "& .header": {
      paddingLeft: "24px",
      paddingRight: "24px",
      border: "none",
    },
    "& .navbarBox": {
      display: "none",
    },
    "& .logoDiv": {
      position: "inherit",
    },
    "& .logo": {
      width: 85,
      height: 30,
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
    },
    "& .menu": {
      display: "block",
      cursor: "pointer",
    },
    "& .filterBtn": {
      display: "block",
      cursor: "pointer",
    },
    "& .closeBtn": {
      display: "block",
    },
  },
}));

const ButtonBox = styled(Box)({
  "@media (max-width: 500px)": {
    marginLeft: "33px",
  },
  "@media (max-width: 768px)": {
    display: "none",
  },
});
const ButtonHub = styled(Button)({
  "@media (max-width: 500px)": {
    marginTop: "10px",
  },
});
const webStyles = {
  drawerClass: {
    backgroundColor: "rgba(39, 53, 103, 1)",
    height: "100%",
    padding: "20px 24px 0 24px",
  },
  drawerLinks: {
    fontFamily: "Poppins",
  },
  closeBtn: {
    cursor: "pointer",
  },
  divider: {
    borderTop: "0.5px dashed rgba(255, 255, 255, 1)",
    margin: "32px 0",
  },
  listProperty: {
    backgroundColor: "#141D40",
    borderRadius: "8px",
    color: "#FFFFFF",
    lineHeight: "24px",
    marginRight: "8px",
    height: "44px",
    fontFamily: "Poppins",
    fontWeight: 400,
    padding: "10px 16px 10px 16px",
    textTransform: "none",
  },
  drawerListProperty: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "8px",
    color: "rgba(39, 53, 103, 1)",
    lineHeight: "21px",
    height: "50px",
    width: "100%",
    fontFamily: "Poppins",
    fontWeight: 400,
    padding: "6px 10px",
    textTransform: "none",
  },
  myHubStyle: {
    border: "1px solid #273567",
    backgroundColor: "F4F5F7",
    color: "#273567",
    borderRadius: "8px",
    height: "44px",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: 400,
    textTransform: "none",
    padding: "10px 16px 10px 16px",
  },
  drawerMyHub: {
    border: "1px solid #fff",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    borderRadius: "8px",
    height: "50px",
    width: "100%",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: 400,
    textTransform: "none",
    padding: "6px 10px",
  },
  navbarBox: {
    paddingLeft: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  drawerNavbarBox: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    marginTop: "32px",
  },
  drawerButtonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  },
  navLink: {
    color: "#273567",
    marginRight: "20px",
    pointer: "cursor",
    fontFamily: "Poppins",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    cursor: "pointer",
  },
  subLink: {
    color: "rgba(39, 53, 103, 1)",
    padding: "9px 0px 9px 16px",
    fontSize: "12px",
    lineHeight: "22px",
    width: "116px",
    boxSizing: "border-box",
  },
};
// Customizable Area End
