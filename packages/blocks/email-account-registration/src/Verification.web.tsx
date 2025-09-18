import React from "react";

// Customizable Area Start
import EmailAccountRegistationController, {
    Props
} from "./EmailAccountRegistrationController";
import { Box, Grid, Link, Typography, styled } from "@material-ui/core";
import { mainImg, imglogo, circle } from './assets';

interface State {
    activeGridID: number;
}
// Customizable Area End


export default class Verification extends EmailAccountRegistationController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        return (
            <Box width="100%">
                <Grid container>
                    <LeftContBox item xs={12} sm={6} >
                        <div style={webStyles.leftdiv as React.CSSProperties}>
                            <img src={imglogo} /></div>
                        <div style={{ textAlign: "center", position: "absolute", bottom: "85px", margin: "auto", width: "100%" }}>
                            <MainTitle >
                                Simplicity and Transparency at your fingertips.
                            </MainTitle>
                            <img src={circle} style={{ marginTop: "25px" }} />
                        </div>
                    </LeftContBox>
                    <Grid item xs={12} sm={6} style={webStyles.rightBox}>
                        <RightTitle style={webStyles.rightContent}>
                            <Typography style={webStyles.checkEmail as React.CSSProperties}>
                                Check your email
                            </Typography>
                            <Typography style={webStyles.sub as React.CSSProperties}>
                                We have sent a link to your email for verifying your account.
                            </Typography>
                            <Typography onClick={this.handleResend}
                            style={webStyles.resend as React.CSSProperties}>
                                Resend e-mail
                            </Typography>
                            <Typography style={webStyles.back as React.CSSProperties}>
                                Back to
                                <Link onClick={this.handleClickLogin} style={webStyles.link as React.CSSProperties}>
                                    Login
                                </Link>
                            </Typography>
                        </RightTitle>
                    </Grid>
                </Grid>

            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const MainTitle = styled(Typography)({
    color: "#FFFFFF",
    fontFamily: "Poppins",
    margin: "auto",
    fontWeight: 500,
    fontSize: "40px",
    letterSpacing: "-0.015em",
    textAlign: "center",
    maxWidth: "618px",
    lineHeight: "56px",
    '@media (max-width:600px)': {
        lineHeight: "35px",
        maxWidth: "450px",
        fontSize: "28px"
    },
})
const LeftContBox = styled(Grid)({
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${mainImg})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vh",
    height: "100vh",
    '@media (max-width: 600px)': {
        display: "none"
    }
})
const RightTitle = styled(Box)({
    maxWidth: "317px",
    margin: "0 auto",
    '@media (max-width: 600px)': {
        marginTop: "250px"
    }
})
const webStyles = {
    rightBox: {
        margin: "auto",
        padding: "10px"
    },
    rightContent: {
        maxWidth: "317px",
        margin: "0 auto",
    },
    leftdiv: {
        textAlign: "right",
        paddingRight: "50px",
        paddingTop: "50px"
    },
    checkEmail: {
        color: "#273567",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "42px"
    },
    sub: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "14px",
        lineHeight: "14px",
        fontWeight: 400,
        marginTop: "10px"
    },
    resend: {
        color: "#0097CB",
        fontSize: "16px",
        fontFamily: "Poppins",
        fontWeight: 600,
        marginTop: "20px",
        lineHeight: "24px",
        cursor: "pointer"
    },
    back: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        marginTop: "15px",
        lineHeight: "24px",
    },
    link: {
        color: "#0097CB",
        fontSize: "16px",
        fontWeight: 600,
        fontFamily: "Poppins",
        lineHeight: "24px",
        cursor: "pointer",
        marginLeft: "5px"
    }
};
// Customizable Area End