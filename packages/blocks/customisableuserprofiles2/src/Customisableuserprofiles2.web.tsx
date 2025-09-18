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
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  createStyles,
  Snackbar
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, withStyles } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { KeyboardArrowDown } from "@material-ui/icons";
import { bgImage, logoImage, cancelIcon, greenTick } from "./assets";

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
// Customizable Area End

import Customisableuserprofiles2Controller, {
  Props,
  configJSON,
} from "./Customisableuserprofiles2Controller";

class Customisableuserprofiles2 extends Customisableuserprofiles2Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderSnackBarMessage = (classes: Record<string, string>) => {
    return (
      <Box className={classes.snackBarContainer}>
        <img src={cancelIcon} alt="CancelIcon" onClick={this.handleSnackBarClose} />
        <Typography className={classes.snackBarMessage}>{configJSON.contactErrorMessage}</Typography>
      </Box>
    );
  };

  renderSucessfullSnackBarMessage = (classes: Record<string, string>) => {
    return (
      <Box className={classes.snackBarContainer}>
        <img src={greenTick} alt="tickIcon"/>
        <Typography className={classes.successfullMessage}>{configJSON.putSellerProfileSucessfulMessage}</Typography>
      </Box>
    );
  };

  renderSellerProfile = (classes: Record<string, string>) => {
    return (
      <Box className={classes.sellerProfileContainer}>
        <Box className={classes.opacityContainer}>
          <Box className={classes.sellerProfileformContainer}>
            <Typography variant="h4" className={classes.userProfileHeading}>
              {configJSON.userProfileHeading}</Typography>
            <Typography variant="h6" className={classes.userProfileSubHeading}>
              {configJSON.userProfileSubHeading}
            </Typography>
            <Box className={classes.formContainer}>
              <Snackbar
                open={this.state.isContactError}
                autoHideDuration={2000}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                className={classes.customSnackbar}
                message={this.renderSnackBarMessage(classes)}
              />
              <Snackbar
                open={this.state.profileUpdateNotification}
                autoHideDuration={2000}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                onClose={this.showSellerSuccessNotification}
                className={classes.customSnackbar}
                message={this.renderSucessfullSnackBarMessage(classes)}
              />
              <form className={classes.formMainContainer}>
                <Grid container spacing={1}>
                  <Grid item lg={12} md={12} sm={12} className={classes.formItem}>
                    <FormControl className={classes.formItem}>
                      <label className={classes.labelText}>{configJSON.sellerProfileContact}</label>
                      <Box className={this.state.isContactError ? classes.contactContainer2 : classes.contactContainer}>
                        <Select
                          variant='standard'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          disableUnderline
                          fullWidth
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "left",
                            },
                            getContentAnchorEl: null,
                            style: { maxHeight: "300px", marginTop: "8px" }
                          }}
                          data-testId="countryCodeTestId"
                          IconComponent={KeyboardArrowDown}
                          className={classes.contactSelect}
                          onChange={this.handleSellerCountryCode}
                          value={this.state.sellerCountryCode}
                          defaultValue={this.state.sellerCountryCode}
                        >
                          <MenuItem value="+44">&#127468;&#127463; {configJSON.defautlCoutryCode}</MenuItem>
                          {
                            this.state.getCountryCodeData.map((item: { attributes: { country_code: string, emoji_flag: string } }, index: number) => {
                              return (
                                <MenuItem value={item.attributes.country_code} key={index}
                                  data-testId={`countryCodeItemTestId${index}`}
                                >
                                  {`${item.attributes.emoji_flag} +${item.attributes.country_code}`}
                                </MenuItem>
                              )
                            })
                          }
                        </Select>
                        <TextField
                          variant='standard'
                          data-testId="contactNumberTestId"
                          fullWidth
                          InputProps={{ disableUnderline: true }}
                          value={this.state.sellerContactNumber}
                          onChange={this.handleSellerContactNumber}
                          className={classes.contactInput}
                        />
                      </Box>
                    </FormControl>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className={classes.formItem}>
                    <FormControl className={classes.formItem}>
                      <label className={classes.labelText}>{configJSON.sellerProfileAddress}</label>
                      <TextField
                        variant="outlined"
                        value={this.state.sellerAddress}
                        fullWidth
                        data-testId="sellerAddressTestId"
                        className={classes.AddressInput}
                        onChange={this.handleSellerAddress}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} className={classes.formItem}>
                    <FormControl className={classes.formItem}>
                      <label className={classes.labelText}>{configJSON.sellerProfileSellingTime}</label>
                      <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                        value={this.state.sellerSellingTime}
                        fullWidth
                        data-testId="sellingTimeTestId"
                        IconComponent={KeyboardArrowDown}
                        onChange={this.handleSellerSellingTime}
                      >
                        {
                          this.state.sellerProfileSellingTimeData.map((item: string, index: number) => {
                            return <MenuItem value={item} key={index}>
                              {item}
                            </MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} className={classes.formItem}>
                    <FormControl className={classes.formItem}>
                      <label className={classes.labelText}>{configJSON.sellerProfileMovingTime}</label>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="outlined"
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                        IconComponent={KeyboardArrowDown}
                        data-testId="movingTimeTestId"
                        onChange={this.handleSellerMovingTime}
                        value={this.state.sellerMovingTime}
                      >
                        {
                          this.state.sellerProfileMovingTimeData.map((item: string, index: number) => {
                            return <MenuItem value={item} key={index}>
                              {item}
                            </MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} className={classes.formItem}>
                    <FormControl className={classes.formItem}>
                      <label className={classes.labelText}>{configJSON.sellerProfileMortgage}</label>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="outlined"
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                        IconComponent={KeyboardArrowDown}
                        data-testId="mortgageValueTestId"
                        value={this.state.sellerMortgageValue}
                        onChange={this.handleSellerMortage}
                        className={classes.selectMenuContainer}
                      >
                        {
                          this.state.sellerProfileMortgageData.map((item: string, index: number) => {
                            return <MenuItem value={item} key={index} className="Hellome " >
                              {item}
                            </MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Box className={classes.buttonContainer}>
                    <Button
                      variant="outlined"
                      type="button"
                      className={classes.skipButton}
                    >
                      {configJSON.skipText}
                    </Button>
                    <Button
                      variant="outlined"
                      data-testId="saveButtonId"
                      type="button"
                      className={classes.saveButton}
                      onClick={this.sellerProfileSave}
                    >
                      {configJSON.saveText}
                      <ArrowForwardIcon style={{ marginLeft: "5px" }} />
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  // Customizable Area End

  render() {
    // Customizable Area Start
    const { classes } = this.props
    // Customizable Area End
    return (
      // Customizable Area Start
      <>
        <Box className={classes.header}>
          <img src={logoImage} className={classes.logo} alt="logo" />
        </Box>
        {this.renderSellerProfile(classes)}
      </>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyles = createStyles({
  header: {
    height: "70px",
    borderBottom: "1px solid #2735674D",
    padding: "17px 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: "129px",
    height: "46px"
  },

  mainWrapper: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    background: "#fff",
  },

  inputStyle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  sellerProfileContainer: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "100% 200%",
    backgroundRepeat: "no-repeat",
    height: "100%",
    backgroundPosition: "center",
    alignItems: "center",
    display: "flex",
    padding: "20px",
    justifyContent: "center",
    "& .MuiContainer-maxWidthSm": {
      maxWidth: "min-content !important"
    },
  },

  userProfileHeading: {
    fontSize: "30px",
    fontWeight: 600,
    fontFamily: "Poppins",
    color: "#273567",
    lineHeight: "40px",
  },

  userProfileSubHeading: {
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "Poppins",
    color: "#848FAC",
    lineHeight: "26px",
  },

  sellerProfileformContainer: {
    height: "572px",
    width: "600px",
    margin: "40px 0",
    borderRadius: "10px",
    padding: "20px 53px",
    zIndex: 9999,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    "@media(max-width:768px)": {
      height: "auto",
      width: "350px",
    },
  },

  formMainContainer: {
    width: "100%",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0097CB",
    },
    "& .MuiPopover-paper": {
      padding: "0px !important",
    },
  },

  selectMenuContainer: {
    "& .MuiPopover-paper": {
      padding: "0px !important",
    },
    "& .MuiSelect-root .MuiPopover-paper": {
      padding: "0px",
    },
  },

  formContainer: {
    width: "100%",
    padding: "20px 0 20px 0px",
  },

  contactContainer: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    height: "53px",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid black",
      cursor: "pointer"
    },
    "&:active": {
      border: "2px solid #0097CB",
      cursor: "pointer"
    }
  },

  contactContainer2: {
    border: "1px solid red",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    height: "53px",
    cursor: "pointer",
  },

  formItem: {
    width: "100%",
  },

  labelText: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontweight: "400",
    lineHeight: "24px",
    color: "#273567",
    margin: "5px 0",
  },

  contactSelect: {
    width: "140px",
    textAlign: "center",
    borderWidth: "0px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px !important"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "white",
    }
  },

  contactInput: {
    width: "100%",
    "& fieldSet": { border: 'none' }
  },

  buttonContainer: {
    marginTop: "30px",
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    width:"100%",
    "@media(max-width:575px)": {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
    }
  },

  skipButton: {
    display: "flex",
    height: "44px",
    padding: "10px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    border: "1px solid #273567",
    backgroundColor: "white",
    textTransform: "capitalize",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    "@media(max-width:575px)": {
      width: "100%",
      justifyContent: "center",
    },
  },

  saveButton: {
    display: "flex",
    height: "44px",
    padding: "10px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    backgroundColor: "#273567",
    color: "white",
    background: "#273567",
    textTransform: "capitalize",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    "&:hover": {
      background: "#273567",
    },
    "@media(max-width:575px)": {
      width: "100%",
      justifyContent: "center",
    },
  },

  snackBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:"10px"
  },

  snackBarMessage: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    color: "#0F172A",
  },

  successfullMessage: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 400,
    color: "#0F172A",
  },

  customSnackbar: {
    padding: "20px",
    "& .MuiSnackbarContent-message": {
      width: "100%",
      fontSize: "20px",
    },
    "& .MuiSnackbarContent-root": {
      backgroundColor: "white",
      borderRadius: "8px",
    }
  }
})
export default withStyles(webStyles)(Customisableuserprofiles2);
export { Customisableuserprofiles2 };
// Customizable Area End
