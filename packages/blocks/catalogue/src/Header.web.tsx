import React from "react";
// Customizable Area Start
import {
  Box,
  Button,
  Link,
} from "@material-ui/core";
import {logo} from './assets'
// Customizable Area End

import CatalogueController, { Props } from "./CatalogueController";

export default class Header extends CatalogueController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    const {activeLink}=this.state
    return (
      //Merge Engine DefaultContainer
      <>
      <Box style={webStyles.header}>
            <img src={logo} style={webStyles.logo} alt="logo"/>
            <Box>
                <Button id="hoverableDark" style={webStyles.listProperty as React.CSSProperties}>
                  List my property
                </Button>
                <Button  variant="contained"
                    color="primary"
                    id="hoverableLight"
                         style={webStyles.myHub as React.CSSProperties}>
                     Log in
                </Button>
            </Box>
        </Box>
        <Box style={webStyles.navbarBox}>
            <Link
              href="#"
              data-test-id="testid1"
              onClick={() => this.handleClick("Browse Properties")}
              style={{
                ...webStyles.navLink,
                color: activeLink === "Browse Properties" ? "#273567" : "#848FAC",
                textDecoration: "none",
                borderBottom: activeLink === "Browse Properties" ? "1px solid #0097CB":"none",
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
                textDecoration: "none",
                borderBottom: activeLink === "Valuation" ? "1px solid #0097CB":"none",
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
                textDecoration: "none",
                borderBottom: activeLink === "Market Insights" ? "1px solid #0097CB":"none",
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
                textDecoration: "none",
                borderBottom: activeLink === "About us" ? "1px solid #0097CB":"none",
              }}
            >
              About us
            </Link>
          </Box>
        </>
      //Merge Engine End DefaultContainer
    );
  }
}

// Customizable Area Start
const webStyles = {
    header:{
        paddingBottom:"20px",
        borderBottom:"1px solid #2735674D",
        paddingLeft:"50px",
        paddingRight:"50px",
        display:"flex",
        justifyContent:"space-between",
        paddingTop:"20px",
      },
      logo:{    
        width:"129px",
        height:"46px"
      },
      listProperty:{
        backgroundColor:"#141D40",
        borderRadius:"8px",
        color:"#FFFFFF",
        lineHeight:"24px",
        marginRight:"8px",
        height:"44px",
        fontFamily:"Poppins",
        fontWeight:"bold",
        padding: "10px 16px 10px 16px",
        textTransform:"none",
      },
      myHub:{
        border:"1px solid #273567",
        backgroundColor:"F4F5F7",
        color:"#273567",
        borderRadius:"8px",
        height:"44px",
        boxShadow:"none",
        fontFamily:"Poppins",
        fontWeight:"bold",
        textTransform:"none",
        padding: "10px 16px 10px 16px"
      },
      navbarBox: {
        paddingLeft: "50px",
        paddingTop: "20px",
        paddingBottom: "20px",
      },
      navLink: {
        color: "#273567",
        marginRight: "20px",
        pointer: "cursor",
        fontFamily: "Poppins"
      },
};
// Customizable Area End
