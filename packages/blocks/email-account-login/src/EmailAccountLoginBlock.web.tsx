import React from "react";

// Customizable Area Start
import { createTheme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { mainImg, imgLogo, circle, cross } from './assets';
import { Box, Button, Checkbox, Container, Grid, IconButton, TextField, ThemeProvider, Typography, Snackbar, styled } from "@material-ui/core";

const FirstBox = styled(Grid)({
  width: "100vh",
  backgroundImage: `url(${mainImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
  backgroundSize:"cover",
  height:"100vh",
  '@media (max-width: 600px)': { 
      display:"none"
  }
})
const Titlemain = styled(Typography)({
  color: "#FFFFFF",
    fontFamily: "Poppins",
    letterSpacing: "-0.015em",
    fontWeight: 500,
    lineHeight: "56px",
    fontSize: "40px",
    textAlign: "center",
    maxWidth:"618px",
    margin:"auto",
    '@media (max-width:600px)':{
        lineHeight:"35px",
        maxWidth:"450px",
        fontSize:"28px"
    }, 
})

import EmailAccountLoginController, {
  Props,
} from "./EmailAccountLoginController";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});


export default class EmailAccountLoginBlock extends EmailAccountLoginController {
  constructor(props: Props) {
    super(props);

  }

  render() {
    const {
      email,
      emailError,
      emailExists,
      emailBlurred,
      finishedTyping,
      
    } = this.state;
    const  showError= (emailError || emailExists) && finishedTyping;
    const shouldShowRedBorder= showError && emailBlurred ;
    return (
      <ThemeProvider theme={theme}>
        <Grid container>
          <FirstBox item xs={12} sm={6}>
            <div style={styles.Imglogo as React.CSSProperties}>
              <img src={imgLogo} />
            </div>
            <div style={{ textAlign: "center", position: "absolute", bottom:"85px",margin:"auto",width:"100%"   }}>
              <Titlemain >Simplicity and Transparency at your fingertips.</Titlemain>
              <img src={circle} style={{ marginTop: "25px" }} />
            </div>
          </FirstBox>

          <Grid item xs={12} sm={6} style={{margin:"auto"}}>
            <Container maxWidth="sm">
              <Right >
                <p style={styles.heading as React.CSSProperties}>
                  Welcome Back to As-Tx
                </p>
                <Typography variant="subtitle1" component="div" style={styles.subheading as React.CSSProperties}>
                  Sign in your account
                </Typography>

                <Box sx={{ width: "100%" }}>
                  <Box>
                    <Typography style={styles.BoxLabel as React.CSSProperties}>Email</Typography>
                    <InputField
                      variant="outlined"
                      type="email"
                      value={email}
                      style={{
                        width: "100%",
                        borderColor: shouldShowRedBorder ? "#FF0404" : undefined,
                        fontFamily:"Poppins",
                        fontWeight:500
                      }}
                      onChange={this.handleEmailChange}
                      onBlur={this.handleEmailBlur}
                      onFocus={this.handleEmailFocus}
                      error={showError && emailBlurred}
                    />
                    {showError && (
                      <>
                        {emailError && !email && (
                          <Typography style={styles.errmsg as React.CSSProperties}>
                            Field is empty.
                          </Typography>
                        )}
                        {emailError && email && (
                          <Typography style={styles.errmsg as React.CSSProperties}>
                            Email is not in the correct format.
                          </Typography>
                        )}
                        {emailExists && (
                          <Typography style={styles.errmsg as React.CSSProperties}>
                            Email already exists.
                          </Typography>
                        )}
                      </>
                    )}
                  </Box>
                  <Box>
                    <Typography style={styles.BoxLabel as React.CSSProperties}>Password</Typography>
                    <InputField
                      data-test-id="txtInputPassword"
                      type={this.state.enablePasswordField ? "password" : "text"}
                      fullWidth={true}
                      value={this.state.password}
                      error={this.state.passwordError}
                      variant="outlined"
                      onChange={this.handlePasswordChange}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            edge="end"
                          >
                            {this.state.enablePasswordField ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        ),
                      }}
                    />
                    <Typography
                      style={styles.errorText as React.CSSProperties}
                    >
                      {this.state.passwordErrorMessage}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      style={styles.remember as React.CSSProperties}
                    >
                      <Checkbox
                        data-test-id={"btnRememberMe"}
                        style={{ color: "#0097CB", paddingLeft: "0px" }}
                        onClick={() =>
                          this.setRememberMe(!this.state.checkedRememberMe)
                        }
                        checked={this.state.checkedRememberMe}
                      />
                      Remember Me
                    </Box>
                    <Box
                      data-test-id={"btnForgotPassword"}
                      style={styles.forgot as React.CSSProperties}
                      onClick={this.navigateForgotPassword}
                    >
                      Forgot Password ?
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      data-test-id={"btnEmailLogIn"}
                      variant="contained"
                      fullWidth
                      onClick={this.handleLogin}
                      style={{
                        ...styles.logButton,
                        backgroundColor: this.state.loginButtonDisabled||this.state.email===""||this.state.password==="" ? "#848FAC" : "#273567",
                        cursor: this.state.loginButtonDisabled ? "default" : "pointer",
                      }}
                      disabled={this.state.loginButtonDisabled||this.state.email===""||this.state.password===""}
                    >
                      Login
                    </Button>
                  </Box>
                  <Box style={styles.lastline}>

                    <Typography style={styles.anyAcc}>Don’t have an account? </Typography>
                    <Typography style={styles.signup as React.CSSProperties} onClick={this.handlesinnup}>Sign up</Typography>

                  </Box>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={this.state.isSnackbarOpen}
                    data-test-id={"btnSnackBar"}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                  >
                    <div
                      style={styles.popup as React.CSSProperties}
                    >
                      <img src={cross} style={{ marginRight: "10px" }} />
                      Account not found, or not activated
                    </div>
                  </Snackbar>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={this.state.pasSnackbar}
                    data-test-id={"btnSnackBar"}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbarPass}
                  >
                    <div
                      style={styles.popup as React.CSSProperties}
                    >
                      <img src={cross} style={{ marginRight: "10px" }} />
                      Password is not valid
                    </div>
                  </Snackbar>
                </Box>
              </Right>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

const Right = styled(Box)({
  margin:"auto",
  '@media (max-width: 600px)': { 
    marginTop:"100px"
  }
})
const InputField= styled(TextField)({
  
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#A9AEC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0097CB',
    },
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  "& .MuiFilledInput-root": {
    background: "#FFFFFF"
    }
})
const styles = {
  Titlemain: {
    color: "#FFFFFF",
    padding: "30px",
    fontSize: "40px",
    fontWeight: 500,
    lineHeight: "56px",
    fontFamily: "Poppins",
    letterSpacing: "-0.015em",
    textAlign: "center",
    maxWidth:"618px",
    margin:"auto",
        [theme.breakpoints.down('sm')]: {
            lineHeight:"35px",
            maxWidth:"450px",
            fontSize:"28px"
          },
  },
  heading: {
    color: "#273567",
    fontWeight: 600,
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: "28px",
    letterSpacing: "0em",
    lineHeight: "0px",
  },
  subheading: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "5px",
    marginBottom: "20px"
  },
  BoxLabel: {
    marginTop: "20px",
    fontSize: "16px",
    fontFamily: "Poppins",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    fontWeight: 400,
    color: "#273567",
  },
  anyAcc: {
    color: "#848FAC",
    lineHeight: "21px",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight:400,
  },
  signup: {
    color: "#0097CB",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    marginLeft: "5px",
    cursor: "pointer"
  },
  logButton: {
    backgroundColor: "#273567",
    marginTop: "30px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "8px",
    width: "100%",
    height: "50px",
    color: "#FFFFFF",
  },
  remember: {
    fontSize: "14px",
    color: "#273567",
    fontWeight: 400,
    fontFamily: "Poppins",
    paddingTop: "5px",
    lineHeight: "21px",
  },
  forgot: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    cursor: "pointer",
    paddingTop: "10px"
  },
  mainCircle: {
    marginTop: "25px",
  },
  Imglogo: {
    textAlign: "right",
    paddingRight: "50px",
    paddingTop: "50px"
  },
  lastline: {
    display: "flex",
    marginTop: "20px",
  },
  errorText: {
    fontSize: "12px",
    color: "#FF0404",
    lineHeight: "18px",
    fontFamily: "Poppins",
    fontWeight: 400,
    paddingLeft: "0px"
  },
  popup: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    width: "100%",
    height: "46px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "30px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  errmsg: {
    color: "#FF0404",
    marginTop: "0px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left"
  },
}
// Customizable Area End
