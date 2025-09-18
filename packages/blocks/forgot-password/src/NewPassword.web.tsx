import React, { CSSProperties } from "react";

// Customizable Area Start

import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Snackbar, TextField, Typography, styled } from "@material-ui/core";
import { mainImg, logo, circle } from './assets';
import { RadioButtonUnchecked, CheckCircle, Visibility, VisibilityOff } from '@material-ui/icons';


// Customizable Area End

import ForgotPasswordController, {
    Props
} from "./ForgotPasswordController";

export default class NewPassword extends ForgotPasswordController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        this.state = {
            ...this.state,
            password: "",
            containsCapital: false,
            containsLowercase: false,
            containsNumber: false,
            hasMinLength: false,
            showPassword: false,
            passwordMatchError: false,
            confirmPassword: "",
            showConfirmPassword: false,
        };
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        const {
            containsCapital,
            containsLowercase,
            containsNumber,
            hasMinLength,
            showPassword,
            passwordMatchError,
            confirmPassword,
            showConfirmPassword,
        } = this.state;

        const passwordInputType = showPassword ? "text" : "password";
        const confirmPasswordInputType = showConfirmPassword ? "text" : "password";
        const passwordMatchErrorBorderColor = passwordMatchError ? "#FF0404" : undefined;

        return (
            <Box width="100%">
                <Grid container>
                    <LeftContBox item xs={12} sm={6}>
                        <div style={webStyles.Astx as CSSProperties}><img src={logo} /></div>
                        <div style={{ textAlign: "center", position: "absolute", bottom: "85px", margin: "auto", width: "100%" }}>
                            <SecondTitle >Simplicity and Transparency at your fingertips.</SecondTitle>
                            <img src={circle} style={webStyles.leftSubCircle} />
                        </div>
                    </LeftContBox>
                    <Grid item xs={12} sm={6} style={webStyles.LeftBoxCont}>
                        <RightContBox>
                            <Typography style={webStyles.newPassText as CSSProperties}>New Password</Typography>
                            <Typography style={webStyles.forgotSubText as CSSProperties}>
                                Enter a new password for xyz@gmail.com
                            </Typography>
                            <Typography style={webStyles.boxlabel}>New Password</Typography>
                            <TextField
                                variant="outlined"
                                type={passwordInputType}
                                style={{ width: "100%", marginBottom: "10px" }}
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.togglePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography style={webStyles.boxlabel}>Confirm Password</Typography>
                            <TextField
                                variant="outlined"
                                type={confirmPasswordInputType}
                                style={{
                                    width: "100%",
                                    borderColor: passwordMatchErrorBorderColor,
                                }}
                                value={confirmPassword}
                                onChange={this.handleConfirmPasswordChange}
                                error={passwordMatchError}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={this.toggleConfirmPasswordVisibility}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {passwordMatchError && (
                                <Typography style={webStyles.redMsg as CSSProperties}>
                                    Passwords do not match.
                                </Typography>
                            )}

                            <div style={{ marginTop: "15px" }}>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle style={{ color: '#059669' }} />}
                                                checked={containsCapital}
                                            />
                                        }
                                        label={<span style={webStyles.conditionChecker as CSSProperties}>At least one capital letter.</span>}
                                    /></div>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle style={{ color: '#059669' }} />}
                                                checked={containsLowercase}
                                            />
                                        }
                                        label={<span style={webStyles.conditionChecker as CSSProperties}>At least one lowercase letter.</span>}
                                    /></div>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle style={{ color: '#059669' }} />}
                                                checked={containsNumber}
                                            />
                                        }
                                        label={<span style={webStyles.conditionChecker as CSSProperties}>At least one number.</span>}
                                    /></div>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                icon={<RadioButtonUnchecked />}
                                                checkedIcon={<CheckCircle style={{ color: '#059669' }} />}
                                                checked={hasMinLength}
                                            />
                                        }
                                        label={<span style={webStyles.conditionChecker as CSSProperties}>Minimum character length is 8.</span>}
                                    /></div>
                            </div>
                            <Button
                                style={{
                                    ...webStyles.nextButton,
                                    backgroundColor: this.isPasswordValid() ? "#273567" : "#939AB3",
                                    cursor: this.isPasswordValid() ? "pointer" : "not-allowed",
                                }}
                                disabled={!this.isPasswordValid()}
                                onClick={this.handlesetButton}
                            >
                                Set new password
                            </Button>

                        </RightContBox>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={this.state.isSnackbarOpen}
                    autoHideDuration={5000}
                    onClose={this.closeSnackbarTwo}
                >
                    <div
                        style={webStyles.popup as React.CSSProperties}
                    >
                        <CheckCircle style={{ marginRight: "5px", color: "#34D399" }} />
                        New Password Set Successfully
                    </div>
                </Snackbar>
            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const SecondTitle = styled(Typography)({
    color: "#FFFFFF",
    fontFamily: "Poppins",
    letterSpacing: "-0.015em",
    fontWeight: 500,
    lineHeight: "56px",
    fontSize: "40px",
    textAlign: "center",
    maxWidth: "618px",
    margin: "auto",
    '@media (max-width:600px)': {
        lineHeight: "35px",
        maxWidth: "450px",
        fontSize: "28px"
    },
})
const LeftContBox = styled(Grid)({
    width: "100vh",
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    backgroundSize: "cover",
    height: "100vh",
    '@media (max-width: 600px)': {
        display: "none"
    }
})
const RightContBox = styled(Box)({
    maxWidth: "550px",
    margin: "0 auto",
    '@media (max-width: 600px)': {
        marginTop: "50px"
    }
})
const webStyles = {
    rightContBox: {
        maxWidth: "550px",
        margin: "0 auto",
    },
    LeftBoxCont: {
        margin: "auto",
        padding: "10px"
    },
    newPassText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "42px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    nextButton: {
        backgroundColor: "#273567",
        color: "#FFFFFF",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: 400,
        marginTop: "35px",
        fontFamily: "Poppins",
        height: "50px",
        lineHeight: "24px",
        width: "100%",
    },
    popup:{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        color: "#0F172A",
        borderRadius: "4px",
        width: "362px",
        height: "42px",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    forgotSubText: {
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: 400,
        textAlign: "left",
        lineHeight: "21px",
        color: "#848FAC",
        letterSpacing: "0em",
        marginBottom: "50px"
    },
    leftSubCircle: {
        marginTop: "25px",
    },
    Astx: {
        textAlign: "right",
        paddingRight: "50px",
        paddingTop: "50px"
    },
    boxlabel: {
        marginTop: "20px",
        color: "#273567",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Poppins",
        fontWeight: 400
    },
    conditionChecker: {
        color: "848FAC",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
    },
    redMsg: {
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