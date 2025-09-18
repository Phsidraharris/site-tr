import React from "react";

// Customizable Area Start

import { createTheme, styled } from "@material-ui/core/styles";
import { mainImg, circle, imglogo, crossicon } from './assets';
import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Link, Snackbar, TextField, Typography, } from "@material-ui/core";
import { RadioButtonUnchecked, CheckCircle, Visibility, VisibilityOff, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon } from '@material-ui/icons';

const LeftBox = styled(Grid)({
    width: "100vh",
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    backgroundSize: "cover",
    '@media (max-width: 720px)': {
        display: "none"
    }
})
const Maintitle = styled(Typography)({
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

// Customizable Area End

import EmailAccountRegistationController, {
    Props,
} from "./EmailAccountRegistrationController";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0000ff",
            contrastText: "#fff",
        },
    },
});

export default class EmailAccountRegistration extends EmailAccountRegistationController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        const {
            containsCapital, containsLowercase,
            containsNumber, hasMinLength,
            showPassword, passwordMatchError,
            confirmPassword, emailError,
            showConfirmPassword, emailExists,
            email, emailBlurred, finishedTyping
        } = this.state;

        const passwordInputType = showPassword ? "text" : "password";
        const confirmPasswordInputType = showConfirmPassword ? "text" : "password";
        const passwordMatchErrorBorderColor = passwordMatchError ? "#FF0404" : undefined;
        const buttonBackgroundColor = this.getButtonBackgroundColor();
        const showError = (emailError || emailExists) && finishedTyping;
        const shouldShowRedBorder = showError && emailBlurred;

        return (
            // Customizable Area Start
            <Box width="100%" style={{ height: "100%" }}>
                <Grid container style={{ height: "100%" }}>
                    <LeftBox item xs={12} sm={6}>
                        <div style={webStyle.Imglogo as React.CSSProperties}>
                            <img src={imglogo} />
                        </div>
                        <div style={{ textAlign: "center", position: "absolute", bottom: "85px", margin: "auto", width: "100%" }}>
                            <Maintitle>Simplicity and Transparency at your fingertips.</Maintitle>
                            <img src={circle} style={{ marginTop: "25px" }} />
                        </div>
                    </LeftBox>
                    <Grid item xs={12} sm={6} style={webStyle.rightBox}>
                        <Box style={webStyle.rightContent}>
                            <Typography style={webStyle.rightHeading as React.CSSProperties}>Create your account</Typography>
                            <Typography style={webStyle.smallHeading as React.CSSProperties}>Enter the fields below te get started</Typography>
                            <Box style={{ display: "flex", marginBottom: "10px", gap: "10px", width: "100%" }}>
                                <div style={{ marginRight: "10px", flex: 1 }}>
                                    <Typography style={webStyle.label as React.CSSProperties}>First Name</Typography>
                                    <TextArea variant="outlined"
                                        value={this.state.firstName}
                                        onChange={this.handleFirstNameChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography style={webStyle.label as React.CSSProperties}>Last Name</Typography>
                                    <TextArea variant="outlined"
                                        value={this.state.lastName}
                                        onChange={this.handleLasttNameChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </Box>
                            <Typography style={webStyle.label as React.CSSProperties}>
                                Email
                            </Typography>
                            <TextArea
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
                                        <Typography style={webStyle.errorMessage as React.CSSProperties}>
                                            Field is empty.
                                        </Typography>
                                    )}
                                    {emailError && email && (
                                        <Typography style={webStyle.errorMessage as React.CSSProperties}>
                                            Email is not in the correct format.
                                        </Typography>
                                    )}
                                    {emailExists && (
                                        <Typography style={webStyle.errorMessage as React.CSSProperties}>
                                            Email already exists.
                                        </Typography>
                                    )}
                                </>
                            )}
                            <Typography style={webStyle.label as React.CSSProperties}>Password</Typography>
                            <TextArea
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
                            <Typography style={webStyle.label as React.CSSProperties}>Confirm Password</Typography>
                            <TextArea
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
                                <Typography style={webStyle.errorMessage as React.CSSProperties}>
                                    Passwords do not match
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
                                        label={<span style={webStyle.checkText as React.CSSProperties}>At least one capital letter</span>}
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
                                        label={<span style={webStyle.checkText as React.CSSProperties}>At least one lowercase letter</span>}
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
                                        label={<span style={webStyle.checkText as React.CSSProperties}>At least one number</span>}
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
                                        label={<span style={webStyle.checkText as React.CSSProperties}>Minimum character length is 8</span>}
                                    /></div>
                            </div>
                            <div style={{ display: "flex", marginTop: "10px" }}>
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon style={{ color: this.state.checkboxError ? "#FF0404" : "#273567" }} />}
                                    checkedIcon={<CheckBoxIcon style={{ color: this.state.checkboxError ? "#FF0404" : "#273567" }} />}
                                    style={webStyle.squareCheckbox}
                                    checked={this.state.checkboxChecked}
                                    onChange={this.handleCheckboxChange}
                                />

                                <Typography
                                    style={{
                                        ...webStyle.terms,
                                        color: this.state.checkboxError ? "#FF0404" : "#273567",
                                    }}
                                >
                                    I hereby consent to the
                                    <Link
                                        data-test-id="test123"
                                        onClick={() => this.handleprivacy()}
                                        style={{
                                            ...webStyle.linktext,
                                            color: this.state.checkboxError ? "#FF0404" : "#0000EE",
                                        }}
                                    >
                                        Privacy Policy
                                    </Link>
                                    and
                                    <Link
                                        data-test-id="test3"
                                        onClick={() => this.handleterm()}
                                        style={{
                                            ...webStyle.linktext,
                                            color: this.state.checkboxError ? "#FF0404" : "#0000EE",
                                        }}
                                    >
                                        Terms of Use.
                                    </Link>
                                </Typography>
                            </div>
                            <Button
                                style={{
                                    ...webStyle.btnLogin,
                                    backgroundColor: buttonBackgroundColor,
                                }}
                                disabled={this.isButtonDisabled()}
                                onClick={this.handleCreateAccount}
                            >
                                Create Account
                            </Button>

                            <Snackbar
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                                open={this.state.isSnackbarOpen}
                                autoHideDuration={5000}
                                onClose={this.closeSnackbar}
                            >
                                <div
                                    style={webStyle.popup as React.CSSProperties}
                                >
                                    <img src={crossicon} style={{ marginRight: "5px" }} />
                                    Select Privacy Policy and Terms of use
                                </div>
                            </Snackbar>

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
                                    style={webStyle.popups as React.CSSProperties}
                                >
                                    <img src={crossicon} style={{ marginRight: "5px", }} />
                                    <p style={{ marginLeft: "5px", color: "#0F172A", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
                                        Email already exists</p>
                                </div>
                            </Snackbar>

                            <div style={{ display: "flex", marginTop: "25px" }}>
                                <Typography style={webStyle.haveAcc}>Already have an account?</Typography>
                                <Typography style={webStyle.signlink as React.CSSProperties} onClick={this.handleClickLogin}>Login</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            // Customizable Area End
        );
    }
}

// Customizable Area Start
const TextArea = styled(TextField)({
    "& .MuiFilledInput-root": {
        background: "#FFFFFF"
    },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#A9AEC2',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0097CB',
        },
      },
})
const webStyle = {
    mainTitle: {
        color: "#FFFFFF",
        fontFamily: "Poppins",
        letterSpacing: "-0.015em",
        fontWeight: 500,
        lineHeight: "56px",
        fontSize: "40px",
        textAlign: "center",
        maxWidth: "618px",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            lineHeight: "35px",
            maxWidth: "450px",
            fontSize: "28px"
        },
    },
    rightBox: {
        margin: "auto",
        padding: "75px 50px 75px 50px"
    },
    rightContent: {
        margin: "0 auto",
    },
    smallHeading: {
        fontSize: "14px",
        color: "#848FAC",
        marginBottom: "20px",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        marginTop: "10px",
        fontWeight: 400,
        fontFamily: "Poppins",
    },
    label: {
        fontSize: "16px",
        marginTop: "20px",
        letterSpacing: "0em",
        fontWeight: 400,
        lineHeight: "24px",
        color: "#273567",
        textAlign: "left",
        fontFamily: "Poppins",
    },
    btnLogin: {
        borderRadius: "8px",
        backgroundColor: "#273567",
        width: "100%",
        fontFamily: "Poppins",
        color: "#FFFFFF",
        height: "50px",
        fontWeight: 400,
        marginTop: "30px",
        fontSize: "16px",
    },
    haveAcc: {
        color: "#273567",
        fontSize: "16px",
        fontFamily: "Poppins",
        lineHeight: "24px",
        fontWeight: 400
    },
    rightHeading: {
        color: "#273567",
        fontWeight: 600,
        fontFamily: "Poppins",
        fontSize: "28px",
        letterSpacing: "0em",
        lineHeight: "42px",
        textAlign: "left"
    },

    squareCheckbox: {
        borderRadius: 0,
        paddingLeft: "0px",
        '&$checked': {
            color: '#273567',
        },
    },
    checked: {
        color: "#273567",
    },
    checkText: {
        color: "848FAC",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
    },
    signlink: {
        fontWeight: 600,
        color: "#0097CB",
        fontFamily: "Poppins",
        marginLeft: "5px",
        fontSize: "16px",
        lineHeight: "24px",
        cursor: "pointer"
    },
    terms: {
        color: "#273567",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        fontFamily: "Poppins",
        paddingTop: "10px",
    },
    linktext: {
        color: "#0000EE",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        fontFamily: "Poppins",
        textDecoration: "underline",
        marginLeft: "5px",
        cursor: "pointer",
        marginRight: "5px"
    },
    Imglogo: {
        textAlign: "right",
        paddingRight: "50px",
        paddingTop: "50px"
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
    popup: {
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
        width: "300px",
    }
}
// Customizable Area End