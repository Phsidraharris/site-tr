import React from "react";
// Customizable Area Start
// eslint-disable-line react-native/no-inline-styles
import {
  logo,
  image,
  bathroom,
  bed,
  couch,
  land,
  location,
  menu,
  greenTick
} from "./assets";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  Grid,
  Input,
  Snackbar,
  Typography
} from "@material-ui/core";
import { ArrowForwardIos, CheckCircle, Close } from "@material-ui/icons";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const theme = createTheme({
  overrides: {
    MuiInput: {
      root: {
        border: "1px solid rgba(39, 53, 103, 0.4)",
        borderRadius: "8px",
        width: "100%",
        height: "50px",
        padding: "unset",
        paddingLeft: "15px",
        paddingRight: "15px",
        "&:hover": {
          border: "1px solid rgba(0, 151, 203, 1)",
          boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.2)"
        },
        "&.Mui-focused": {
          border: "1px solid rgba(0, 151, 203, 1)",
          boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.2)"
        }
      }
    }
  }
});

// Customizable Area End
import DashboardController, { Props } from "./DashboardController";

export default class AcceptedOffer extends DashboardController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    const createEditSolicitorDetailsFormSchema = {
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
      firmName: Yup.string().required("Firm Name is required")
    };

    const memorandumDecline = () => {
      return (
        <div>
          <Box style={webStyle.blueBox}>
            <div style={{ display: "flex" }}>
              <img src={menu} />
              <Typography style={webStyle.memorandum}>
                Memorandum of Sale
              </Typography>
            </div>
            <div>
              <ArrowForwardIos style={{ height: "20px", width: "20px" }} />
            </div>
          </Box>
          <Box style={{ textAlign: "right", marginTop: "20px" }}>
            <Button style={webStyle.declinebtn}>Decline</Button>
          </Box>
        </div>
      );
    };

    const cardContent = () => {
      return (
        <div>
          <Typography style={webStyle.title}>Beautiful Apartments</Typography>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <img src={location} style={{ width: "16px", height: "20px" }} />
            <Typography style={webStyle.location}>
              Shree Garden 1132, UK
            </Typography>
          </div>
          <div style={{ marginTop: "10px", display: "flex" }}>
            <img src={couch} />
            <Typography style={webStyle.bedText}>2</Typography>
            <img src={bed} />
            <Typography style={webStyle.bedText}>2</Typography>
            <img src={bathroom} />
            <Typography style={webStyle.bedText}>4</Typography>
            <img src={land} />
            <Typography style={webStyle.landtext}>187sq.ft.</Typography>
          </div>
        </div>
      );
    };

    const ButtonCardContent = ({
      children
    }: {
      children: React.ReactElement;
    }) => {
      return (
        <Card style={{ padding: "10px", marginTop: "30px" }}>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <img src={image} style={{ width: "100%", height: "100%" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              style={{
                padding: "20px",
                alignItems: "center",
                display: "flex"
              }}
            >
              {cardContent()}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
                display: "flex"
              }}
            >
              {children}
            </Grid>
          </Grid>
        </Card>
      );
    };

    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Grid container style={webStyle.header}>
            <Grid item xs={12} sm={6} style={{ textAlign: "start" }}>
              <img src={logo} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
              <Button style={webStyle.listProperty}>List my property</Button>
              <Button style={webStyle.myHub}>
                <PersonOutlineIcon />
                My Hub
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{ paddingLeft: "50px", marginTop: "20px", display: "flex" }}
          >
            <Typography style={webStyle.navText}>Browse Properties</Typography>
            <Typography style={webStyle.navText}>Valuation</Typography>
            <Typography style={webStyle.navText}>Market Insights</Typography>
            <Typography style={webStyle.navText}>About us</Typography>
          </Grid>
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                background: "#141D40",
                marginTop: "20px",
                paddingLeft: "50px",
                width: "273px",
                maxHeight: "100%"
              }}
            >
              <Typography style={webStyle.leftBoxText}>Dashboard</Typography>
              <Typography style={webStyle.leftBoxText}>My Enquires</Typography>
              <Typography style={webStyle.leftBoxText}>My Bids</Typography>
              <Typography style={webStyle.leftBoxActiveText}>
                Accepted Offers
              </Typography>
              <Typography style={webStyle.leftBoxText}>Task Tracker</Typography>
              <Typography style={webStyle.leftBoxText}>Settings</Typography>
              <Typography style={webStyle.leftBoxText}>My Profile</Typography>
            </Box>
            <Box style={{ padding: "50px", width: "100%" }}>
              <Box style={{ display: "flex" }}>
                <Typography style={webStyle.myHubText}>My Hub</Typography>
                <ArrowForwardIos
                  style={{
                    color: "#273567",
                    marginRight: "5px",
                    width: "20px",
                    height: "20px",
                    marginTop: "5px"
                  }}
                />
                <Typography style={webStyle.accepted}>
                  Accepted Offers
                </Typography>
              </Box>
              <ButtonCardContent>
                <Button
                  style={webStyle.assignBtn}
                  onClick={() => this.openModal()}
                  data-testid="createSolicitorButton"
                >
                  Assign Solicitor
                </Button>
              </ButtonCardContent>
              {memorandumDecline()}
              <ButtonCardContent>
                <div>
                  <Button
                    onClick={() => this.openModal(true)}
                    style={webStyle.assignBtn}
                    data-testid="updateSolicitorButton"
                  >
                    Update Solicitor details
                  </Button>
                  <Typography style={webStyle.harryleo}>Harry Leo</Typography>
                </div>
              </ButtonCardContent>
              {memorandumDecline()}
            </Box>
          </Box>
          <Dialog
            open={this.state.isModalOpen}
            onClose={this.closeModal}
            fullWidth
          >
            <DialogContent style={{ padding: "40px 40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "50px"
                }}
              >
                {this.state.isEditModal ? (
                  <>
                    <Typography style={webStyle.solicitorInfoTitle}>
                      Update Solicitor Details
                    </Typography>
                    <Button
                      data-test-id="modalButton"
                      style={{
                        ...webStyle.deallocateBtn,
                        pointerEvents: this.state.enableDeallocateButton
                          ? "auto"
                          : "none"
                      }}
                      onClick={this.openDeallocateModal}
                    >
                      Deallocate
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography style={webStyle.solicitorInfoTitle}>
                      Assign Solicitor
                    </Typography>
                    <Box
                      style={{ cursor: "pointer" }}
                      onClick={this.closeModal}
                    >
                      <Close width="22px" height="22px" />
                    </Box>
                  </>
                )}
              </div>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  firmName: ""
                }}
                validationSchema={Yup.object().shape(
                  createEditSolicitorDetailsFormSchema
                )}
                onSubmit={values => {
                  console.log(values);
                  this.handleSuccessfulSnackbar(true)
                }}
                data-test-id='formikComponent'
              >
                {({
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  errors,
                  touched
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    data-test-id="solicitorInformationForm"
                  >
                    <Box style={webStyle.inputContainer}>
                      <Typography style={webStyle.label}>First Name</Typography>
                      <Field name="firstName">
                        {() => (
                          <Input
                            name="firstName"
                            disableUnderline
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="firstName"
                          />
                        )}
                      </Field>
                      {touched.firstName && errors.firstName && (
                        <Typography style={{ color: "red" }}>
                          {errors.firstName}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.inputContainer}>
                      <Typography style={webStyle.label}>Last Name</Typography>
                      <Field name="lastName">
                        {() => (
                          <Input
                            name="lastName"
                            disableUnderline
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        )}
                      </Field>
                      {touched.lastName && errors.lastName && (
                        <Typography style={{ color: "red" }}>
                          {errors.lastName}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.inputContainer}>
                      <Typography style={webStyle.label}>Email ID</Typography>
                      <Field name="email" type="email">
                        {() => (
                          <Input
                            name="email"
                            disableUnderline
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        )}
                      </Field>
                      {touched.email && errors.email && (
                        <Typography style={{ color: "red" }}>
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.inputContainer}>
                      <Typography style={webStyle.label}>Firm Name</Typography>
                      <Field name="firmName">
                        {() => (
                          <Input
                            name="firmName"
                            disableUnderline
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        )}
                      </Field>
                      {touched.firmName && errors.firmName && (
                        <Typography style={{ color: "red" }}>
                          {errors.firmName}
                        </Typography>
                      )}
                    </Box>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "42px"
                      }}
                    >
                      {this.state.isEditModal && (
                        <Button
                          onClick={this.closeModal}
                          style={webStyle.cancelBtn}
                          type="button"
                        >
                          Cancel
                        </Button>
                      )}
                      <Button style={webStyle.submitBtn} type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={this.state.isSuccessfulSnackbarOpen}
                data-test-id="snackBar"
                autoHideDuration={3000}
                onClose={() => this.handleSuccessfulSnackbar(false)}
              >
                <Box sx={webStyle.snackBarContainer}>
                  <img src={greenTick} alt="tickIcon" />
                  <Typography style={webStyle.snackBarSuccessfulMessage}>
                    {this.state.isEditModal
                      ? "Solicitor has been edited"
                      : "Solicitor has been assigned and email will be sent shortlyto create an account on the platform"}
                  </Typography>
                </Box>
              </Snackbar>
            </DialogContent>
          </Dialog>
          <Dialog
            open={this.state.isDeallocateModalOpen}
            onClose={this.closeDeallocateModal}
            style={{ padding: "20px" }}
          >
            <DialogContent style={{ padding: "5px", textAlign: "center" }}>
              <Typography style={webStyle.popTitle}>
                Are you sure you want to deallocate the Solicitor?
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  data-test-id="buttonclick"
                  onClick={() => {
                    this.closeDeallocateModal();
                    this.handleSnackbarOpen();
                  }}
                  style={webStyle.yesBtn}
                >
                  Yes
                </Button>
                <Button
                  onClick={this.closeDeallocateModal}
                  style={webStyle.noBtn}
                >
                  No
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            open={this.state.isSnackbarOpen}
            data-test-id="btnSnackBar"
            autoHideDuration={3000}
            onClose={this.handleSnackbarClose}
          >
            <div style={webStyle.popup}>
              <CheckCircle style={{ marginRight: "10px", color: "#34D399" }} />
              Solicitor Deallocated
            </div>
          </Snackbar>
        </Box>
      </ThemeProvider>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  header: {
    borderBottom: "1px solid #2735674D",
    padding: "20px 50px"
  },
  listProperty: {
    backgroundColor: "#141D40",
    borderRadius: "8px",
    color: "#FFFFFF",
    lineHeight: "24px",
    marginRight: "8px",
    height: "44px",
    fontFamily: "Poppins",
    fontWeight: "bold",
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
    fontWeight: "bold",
    padding: "10px 16px 10px 16px",
    textTransform: "none"
  },
  navText: {
    color: "#273567",
    paddingRight: "10px",
    cursor: "pointer",
    fontFamily: "Poppins"
  },
  leftBoxText: {
    color: "#BDBDBD",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "bold",
    paddingTop: "20px"
  },
  leftBoxActiveText: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "bold",
    paddingTop: "20px"
  },
  myHubText: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    marginRight: "5px"
  },
  accepted: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    marginRight: "5px",
    fontWeight: "bolder"
  },
  assignBtn: {
    border: "1px solid #273567",
    backgroundColor: "#FFFFFF",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bolder",
    lineHeight: "24px",
    height: "44px",
    borderRadius: "8px",
    textTransform: "none"
  },
  title: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bolder"
  },
  location: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: "bold",
    marginLeft: "5px"
  },
  bedText: {
    paddingRight: "10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    borderRight: "1px solid #848FAC",
    marginRight: "15px",
    paddingLeft: "5px"
  },
  landtext: {
    paddingRight: "10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    marginRight: "15px",
    paddingLeft: "5px"
  },
  memorandum: {
    fontFamily: "Poppins",
    color: "#0097CB",
    fontWeight: "bolder",
    textDecoration: "underline",
    fontSize: "16px",
    lineHeight: "24px",
    marginLeft: "25px"
  },
  blueBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#F2F7F8",
    borderRadius: "8px"
  },
  declinebtn: {
    backgroundColor: "#273567",
    padding: "10px 16px 10px 16px",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "none"
  },
  label: {
    color: "#273567",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily: "Poppins"
  },
  popTitle: {
    color: "#273567",
    fontSize: "24px",
    lineHeight: "36px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginRight: "50px"
  },
  deallocateBtn: {
    border: "1px solid #273567",
    backgroundColor: "#FFFFFF",
    color: "#273567",
    width: "150px",
    height: "50px",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    borderRadius: "8px",
    textTransform: "none"
  },
  cancelBtn: {
    color: "#273567",
    border: "1px solid #273567",
    borderRadius: "8px",
    width: "100%",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    height: "50px",
    marginRight: "10px",
    fontWeight: "bold",
    textTransform: "none"
  },
  submitBtn: {
    height: "50px",
    color: "#FFFFFF",
    borderColor: "#273567",
    borderRadius: "8px",
    width: "100%",
    backgroundColor: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    textTransform: "none"
  },
  yesBtn: {
    marginTop: "20px",
    color: "#273567",
    border: "1px solid #273567",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    height: "50px",
    marginRight: "10px",
    fontWeight: "bold",
    textTransform: "none"
  },
  noBtn: {
    height: "50px",
    marginTop: "20px",
    color: "#FFFFFF",
    borderColor: "#273567",
    borderRadius: "8px",
    backgroundColor: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    textTransform: "none"
  },
  popup: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    width: "342px",
    height: "46px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "30px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  harryleo: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bolder",
    lineHeight: "24px",
    top: "10px",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    right: "68px",
    color: "#273567"
  },
  inputContainer: {
    marginTop: "16px"
  },
  solicitorInfoTitle: {
    fontWeight: 400,
    fontSize: "24px",
    fontFamily: "Poppins",
    color: "#273567"
  },
  snackBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    padding:"8px 16px 8px 8px"
  },
  snackBarSuccessfulMessage: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 400,
    color: "#0F172A",
  },
};
// Customizable Area End
