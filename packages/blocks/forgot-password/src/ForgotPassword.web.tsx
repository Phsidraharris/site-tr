import React from "react";

// Customizable Area Start

import { Box, Button, Grid, TextField, Typography, styled, Snackbar } from "@material-ui/core";
import { mainImg, logo, circle, crossicon } from './assets';


// Customizable Area End

import ForgotPasswordController, {
    Props
} from "./ForgotPasswordController";

export default class ForgotPassword extends ForgotPasswordController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        const {
            email,
            emailError,
            emailExists,
            emailBlurred,
            finishedTyping
        } = this.state;

        const showError = (emailError || emailExists) && finishedTyping;
        const shouldShowRedBorder = showError && emailBlurred;

        return (
            <Box width="100%">
                <Grid container>
                    <ImageBox item xs={12} sm={6} >
                        <div style={webStyles.LogoMain as React.CSSProperties}><img src={logo} /></div>
                        <div style={{ textAlign: "center", position: "absolute", bottom:"85px",margin:"auto",width:"100%"   }}>
                            <Maintitle >Simplicity and Transparency at your fingertips.</Maintitle>
                            <img src={circle} style={webStyles.leftCircle} />
                        </div>
                    </ImageBox>
                    <Grid item xs={12} sm={6} style={webStyles.boxCont}>
                        <RightBox>
                            <Typography style={webStyles.forgotText as React.CSSProperties}>Forgot Password</Typography>
                            <Typography style={webStyles.forgotSubText as React.CSSProperties}>
                                No worries, we’ll send a recovery link to your email.
                            </Typography>
                            <Typography style={webStyles.text}>Email</Typography>
                            <TextField
                                variant="outlined"
                                type="email"
                                value={email}
                                style={{
                                    width: "100%",
                                    borderColor: shouldShowRedBorder ? "#FF0404" : undefined,
                                }}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleEmailBlur}
                                onFocus={this.handleEmailFocus}
                                error={showError && emailBlurred}
                            />
                            {showError && (
                                <>
                                    {emailError && !email && (
                                        <Typography style={webStyles.errorMessage as React.CSSProperties}>
                                            Field is empty.
                                        </Typography>
                                    )}
                                    {emailError && email && (
                                        <Typography style={webStyles.errorMessage as React.CSSProperties}>
                                            Email is not in the correct format.
                                        </Typography>
                                    )}
                                    {emailExists && (
                                        <Typography style={webStyles.errorMessage as React.CSSProperties}>
                                            Email already exists.
                                        </Typography>
                                    )}
                                </>
                            )}

                            <Button
                                style={{
                                    ...webStyles.buttonNext,
                                    backgroundColor: (showError || this.state.emailMatchError||this.state.emailError||this.state.email==="") ? "#939AB3" : "#273567",
                                    cursor: (showError || this.state.emailMatchError) ? "not-allowed" : "pointer",
                                }}
                                data-testid="nextbtn"
                                disabled={showError || this.state.emailMatchError||this.state.emailError||this.state.email===""}
                                onClick={this.handleForgetCLick} 
                            >
                                Send a recovery link
                            </Button>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                                open={this.state.isSnackbarOpens}
                                autoHideDuration={5000}
                                onClose={this.closeSnackbars}
                            >
                                <div
                                    style={webStyles.popups as React.CSSProperties}
                                >
                                    <img src={crossicon} style={{ marginRight: "5px" }} />
                                    Email not found
                                </div>
                            </Snackbar>
                        </RightBox>
                    </Grid>
                </Grid>
            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const Maintitle = styled(Typography)({
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
const ImageBox = styled(Grid)({
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
const RightBox= styled(Box)({
    maxWidth: "550px",
    margin: "0 auto",
    '@media (max-width: 600px)': { 
        marginTop:"200px"
    }
})
const webStyles = {
    popups: { 
        lineHeight: "24px",
        paddingLeft: "10px",
        height: "52px",
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "26px",
        color: "#0F172A",
        borderRadius: "4px",
        paddingRight: "10px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "382px",
    },
    leftCont: {
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover"
    },
    boxCont: {
        margin:"0 auto",
        padding:"10px",
        alignSelf:"center"
    },
    rightCont: {
        maxWidth: "550px",
        margin: "0 auto",
    },
    forgotText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "42px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    forgotSubText: {
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: 400,
        textAlign: "left",
        lineHeight: "21px",
        color: "#848FAC",
        letterSpacing: "0em",
    },
    buttonNext: {
        backgroundColor: "#273567",
        borderRadius: "8px",
        fontSize: "16px",
        color: "#FFFFFF",
        marginTop: "35px",
        fontFamily: "Poppins",
        fontWeight: 400,
        lineHeight: "24px",
        height: "50px",
        width: "100%",
    },
    circle: {
        position: "absolute",
        top: "10px",
        right: "10px",
    },
    LogoMain: {
        textAlign: "right",
        paddingRight: "50px",
        paddingTop: "50px"
    },
    leftCircle: {
        marginTop: "25px",
    },
    text: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        marginTop: "20px",
        fontWeight:400
    },
    errorMessage: {
        color: "#FF0404",
        marginTop: "0px",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
        letterSpacing: "0em",
        textAlign: "left"
    },
};
// Customizable Area End