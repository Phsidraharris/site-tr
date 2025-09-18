import React from "react";

// Customizable Area Start
import { Box, Typography, Modal, Button } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { FacebookShareButton, FacebookIcon } from "react-share";

const cancelLogo = require('../assets/cancel.svg');
const copyLogo = require('../assets/copy.svg');
const emailLogo = require('../assets/email.svg');
const whatsappLogo = require('../assets/whatsapp.svg');
const facebookLogo = require('../assets/facebook.svg');
const placeLogo = require('../assets/place.svg')
const itemImg = require('../assets/homepic.png')

const styleModal = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  padding: "32px 40px",
  transform: "translate(-50%, -50%)",
  width: "828px",
  height: "auto",
  gap: "42px",
  bgcolor: "background.paper",
  borderRadius: "8px",
  background: "white",
  boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  p: 4,
};
// Customizable Area End

import ShareController, { Props, configJSON } from "./ShareController.web";

export default class Share extends ShareController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
        <>
          <Button data-test-id="btnShowModal" onClick={this.showModal}>Show Share Modal</Button>
          <Modal open={this.state.isVisibleShareModal} onClose={this.hideModal}>
            <Box sx={styleModal}>
              <Box
                data-test-id='btnShare'
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={webStyle.h3}>Share your property</Typography>
                <Button onClick={this.hideModal} data-test-id="btnHideModal">
                  <img src={cancelLogo} alt="" />
                </Button>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#f9f5fb",
                  paddingBottom:'13px'
                }}
              >
                <img
                  style={{ marginBottom: "20px", borderRadius: "20px", objectFit:'cover'}}
                  src={itemImg}
                  width={"100%"}
                  height={"301px"}
                />
                <span style={webStyle.span}>$402.999</span>
                <Typography variant={"h6"} style={webStyle.h6}>
                  Beautiful Apartment
                </Typography>
                <Box style={{ marginLeft: "20px", display: "flex", gap: "10px" }}>
                  <img src={placeLogo} alt="" />
                  <span style={webStyle.spanCenter}>
                    Shree Garden 1132, UK, 756552
                  </span>
                </Box>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box style={webStyle.btnWrapper}>
                  <Button style={webStyle.btn}>
                    <img src={copyLogo} alt="" />
                  </Button>
                  <span style={webStyle.btnInfo}>Copy link</span>
                </Box>
                <Box style={webStyle.btnWrapper}>
                  <Button style={webStyle.btn}>
                    <img src={emailLogo} alt="" />
                  </Button>
                  <span style={webStyle.btnInfo}>Email</span>
                </Box>
                <Box style={webStyle.btnWrapper}>
                  <Button style={webStyle.btn}>
                    <img src={whatsappLogo} alt="" />
                  </Button>
                  <span style={webStyle.btnInfo}>Whatsapp</span>
                </Box>
                <Box style={webStyle.btnWrapper}>
                  <Button style={webStyle.btn}>
                    <img src={facebookLogo} alt="" />
                  </Button>
                  <span style={webStyle.btnInfo}>Facebook</span>
                </Box>
              </Box>
            </Box>
          </Modal>
        </>
      // Customizable Area End
    );
  }
}

// Customizable Area Start

const webStyle = {
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80px",
    height: "114px",
  } as const,
  btn: {
    width: "80px",
    height: "80px",
    border: "1px solid #848FAC",
    borderRadius: "50%",
    background: "transparent",
  },
  btnInfo: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  h3: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  },
  span: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    marginLeft: "20px",
  },
  h6: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "44px",
    letterSpacing: "-0.24px",
    marginLeft: "20px",
  },
  spanCenter: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  },
};
// Customizable Area End
