import React from "react";

// Customizable Area Start
import { logo } from "./assets";
import { Box, Button, Link, styled } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./LandingPage.web.css";

// Customizable Area End

import LandingPageController, { Props } from "./LandingPageController";

export default class Navbar extends LandingPageController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    this.state = {
      ...this.state,
      activeLink: "Browse Properties"
    };
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    const { activeLink } = this.state;
    return (
      <>
        <Box style={webStyles.header}>
            <img src={logo} style={webStyles.logo} alt="logo"/>
            <ButtonBox>
                <Button id="hoverableDark" style={webStyles.listProperty as React.CSSProperties}>
                  List my property
                </Button>
                <ButtonHub  variant="contained"
                    color="primary"
                    id="hoverableLight"
                         startIcon={<PersonOutlineIcon style={{ color: '#273567' }}/>}
                         style={webStyles.myHub as React.CSSProperties}
                         onClick={this.handleMyHub}>
                     My Hub
                </ButtonHub>
            </ButtonBox>
        </Box>
        <Box style={webStyles.navbarBox}>
          <Link
            href="#"
            data-test-id="testid1"
            onClick={() => this.handleClick("Browse Properties")}
            style={{
              ...webStyles.navLink,
              color: activeLink === "Browse Properties" ? "#273567" : "#848FAC",
              borderBottom:
                activeLink === "Browse Properties"
                  ? "1px solid #0097CB"
                  : "none"
            }}
          >
            Browse Properties
          </Link>
          <Link
            href="#"
            data-test-id="testid2"
            onClick={() => this.handleClick("Valuation")}
            style={{
              ...webStyles.navLink,
              color: activeLink === "Valuation" ? "#273567" : "#848FAC",
              borderBottom:
                activeLink === "Valuation" ? "1px solid #0097CB" : "none"
            }}
          >
            Valuation
          </Link>
          <Link
            href="#"
            data-test-id="testid3"
            onClick={() => this.handleClick("Market Insights")}
            style={{
              ...webStyles.navLink,
              color: activeLink === "Market Insights" ? "#273567" : "#848FAC",
              borderBottom:
                activeLink === "Market Insights" ? "1px solid #0097CB" : "none"
            }}
          >
            Market Insights
          </Link>
          <Link
            href="#"
            data-test-id="testid4"
            onClick={() => this.handleClick("About us")}
            style={{
              ...webStyles.navLink,
              color: activeLink === "About us" ? "#273567" : "#848FAC",
              borderBottom:
                activeLink === "About us" ? "1px solid #0097CB" : "none"
            }}
          >
            About us
          </Link>
        </Box>
      </>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
const ButtonBox = styled(Box)({
  "@media (max-width: 500px)": {
    marginLeft: "33px"
  }
});
const ButtonHub = styled(Button)({
  "@media (max-width: 500px)": {
    marginTop: "10px"
  }
});
const webStyles = {
  header: {
    borderBottom: "1px solid #2735674D",
    paddingLeft: "50px",
    paddingRight: "50px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  logo: {
    width: "129px",
    height: "46px"
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
    textTransform: "none"
  },
  myHub: {
    border: "1px solid #273567",
    backgroundColor: "F4F5F7",
    color: "#273567",
    borderRadius: "8px",
    height: "44px",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: 400,
    textTransform: "none",
    padding: "10px 16px 10px 16px"
  },
  navbarBox: {
    paddingLeft: "50px",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  navLink: {
    color: "#273567",
    marginRight: "20px",
    pointer: "cursor",
    fontFamily: "Poppins",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px"
  }
};
// Customizable Area End
