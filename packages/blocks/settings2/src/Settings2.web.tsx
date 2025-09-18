import React from "react";

import {
  Container,
  Box,
  Input,
  Button,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
  // Customizable Area Start
  Switch,
  styled,
  SwitchProps,
  Modal,
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

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


const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#273567",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const styleLogOut = {
  display: "flex",
  flexDirection: "column",
  gap: "42px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  bgcolor: "background.paper",
  borderRadius: "8px",
  background: "white",
  boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  p: 4,
};
const styleDeactivate = {
  display: "flex",
  flexDirection: "column",
  gap: "36px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 590,
  bgcolor: "background.paper",
  borderRadius: "8px",
  background: "white",
  boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  p: 4,
};

// Customizable Area End

import Settings2Controller, {
  Props,
} from "./Settings2Controller";

export default class Settings2 extends Settings2Controller {
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
      <ThemeProvider theme={theme}>
        <>
          <Box style={webStyle.settingsWrapper}>
            <Box data-test-id="btnAddExample" style={webStyle.topItem}>
              <Typography style={webStyle.span}>Email notifications</Typography>
              <IOSSwitch />
            </Box>
            <Box
              style={webStyle.item}
              onClick={() => this.props.navigation.navigate("About")}
              data-test-id="btnAboutExample"
            >
              <Typography style={webStyle.span}>About</Typography>
            </Box>
            <Box
              data-test-id="btnShowDeactivateModal"
              onClick={this.showDeactivateModal}
              style={webStyle.item}
            >
              <Typography style={webStyle.span}>
                Deactivate my account
              </Typography>
              <Modal
                open={this.state.isVisibleDeactivateModal}
                onClose={this.hideDeactivateModal}
              >
                <Box style={{ padding: "20px" }} sx={styleDeactivate}>
                  <Box>
                    <Typography variant={"h3"} style={webStyle.typoOne}>
                      Enter your password to deactivate your account
                    </Typography>
                    <Typography variant={"h3"} style={webStyle.typoTwo}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, debitis!
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Typography style={webStyle.typoThree}>Password</Typography>
                    <Input
                      data-test-id={"txtInput"}
                      disableUnderline={true}
                      fullWidth={true}
                      style={{
                        border: "1px solid lightgray",
                        borderRadius: "8px",
                        padding: "5px",
                      }}
                      type={this.state.enableField ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toogle password visibility"
                            onClick={this.setEnableField}
                            edge="end"
                          >
                            {this.state.enableField ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      data-test-id="btnHideDeactivateModal"
                      onClick={this.hideDeactivateModal}
                      style={webStyle.btnDeactivateCancel}
                    >
                      Cancel
                    </Button>
                    <Button style={webStyle.btnDeactivate}>Deactivate</Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
            <Box style={webStyle.item}>
              <Typography style={webStyle.span}>Change password</Typography>
            </Box>
            <Box
              data-test-id="btnShowModal"
              onClick={this.showModal}
              style={webStyle.item}
            >
              <Typography style={webStyle.span}>Log Out</Typography>
              <Modal
                open={this.state.isVisibleLogoutModal}
                onClose={this.hideModal}
              >
                <Box sx={styleLogOut}>
                  <Typography style={webStyle.typoFour}>
                    Are you sure you want to Log Out of your account?
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Button
                      onClick={this.hideModal}
                      data-test-id="btnHideModal"
                      style={webStyle.btnCancel}
                    >
                      Cancel
                    </Button>
                    <Button style={webStyle.btnLogout}>Log Out</Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </>
      </ThemeProvider>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  settingsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  } as const,
  topItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgba(0, 151, 203, 0.05)",
    borderRadius: "8px",
    padding: "15px 20px",
    cursor: "pointer",
  },
  item: {
    background: "rgba(0, 151, 203, 0.05)",
    borderRadius: "8px",
    padding: "15px 20px",
    cursor: "pointer",
  },
  span: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
  } as const,
  btnCancel: {
    background: "white",
    border: "1px solid #273567",
    color: "#273567",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  } as const,
  btnLogout: {
    background: "#273567",
    color: "white",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  } as const,
  btnDeactivateCancel: {
    background: "white",
    border: "1px solid #273567",
    color: "#273567",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    width: "50%",
  } as const,
  btnDeactivate: {
    background: "#273567",
    color: "white",
    width: "50%",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  } as const,
  typoOne: {
    color: "#273567",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  } as const,
  typoTwo: {
    width: "90%",
    color: "#848FAC",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    margin: "0 auto",
  } as const,
  typoThree: {
    fontFamily: "Poppins",
    fontSize: "17px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#273567",
  } as const,
  typoFour: {
    color: "#273567",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  } as const,
};
// Customizable Area End
