import React from "react";

// Customizable Area Start
import ForgotPasswordController, {
    Props
} from "./ForgotPasswordController";
import { Box, Grid, Link, Typography, styled } from "@material-ui/core";
import { mainImg, logo, circle } from './assets';

// Customizable Area End


export default class VerificationPass extends ForgotPasswordController {
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
                    <LeftBox item xs={12} sm={6}>
                        <div style={styles.divLeft as React.CSSProperties}>
                            <img src={logo} /></div>
                            <div style={{ textAlign: "center", position: "absolute", bottom:"85px",margin:"auto",width:"100%"   }}>
                            <BigTitle >
                                Simplicity and Transparency at your fingertips.
                            </BigTitle>
                            <img src={circle} style={{ marginTop: "25px" }} />
                        </div>
                    </LeftBox>
                    <Grid item xs={12} sm={6} style={styles.BoxRight}>
                        <BoxRightContent>
                            <Typography style={styles.emailCheck as React.CSSProperties}>
                                Check your email
                            </Typography>
                            <Typography style={styles.subTitle as React.CSSProperties}>
                                We have sent a password reset link from support@as-tx.io
                            </Typography>
                            <Typography style={styles.resendText as React.CSSProperties}
                                onClick={this.handleResetCLick}
                            >
                                Resend e-mail
                            </Typography>
                            <Typography style={styles.backLine as React.CSSProperties}>
                                Back to 
                                <Link 
                                data-testid="back-to-login"
                                onClick={this.handleClickLogin} style={styles.linkText as React.CSSProperties}>
                                    Login
                                </Link>
                            </Typography>
                        </BoxRightContent>
                    </Grid>
                </Grid>
                
            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const BigTitle = styled(Typography)({
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
const LeftBox = styled(Grid)({
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
const BoxRightContent= styled(Box)({
    maxWidth: "317px",
        margin: "0 auto",
        '@media (max-width: 600px)': { 
            marginTop:"250px"
        }
})
const styles = {
    BoxRight: {
        margin:"auto",
         padding:"10px"
    },
    
    BoxRightContent: {
        maxWidth: "317px",
        margin: "0 auto",
    },
    divLeft:{ 
        textAlign: "right",
         paddingRight: "50px",
          paddingTop: "50px" 
    },
    emailCheck:{
        color:"#273567",
        fontFamily:"Poppins",
        fontWeight:600,
        fontSize:"28px",
        lineHeight:"42px"
    },
    subTitle:{
        color:"#848FAC",
        fontFamily:"Poppins",
        fontSize:"14px",
        lineHeight:"24px",
        fontWeight:400,
        marginTop:"10px"
    },
    resendText:{
        color:"#0097CB",
        fontSize:"16px",
        fontFamily:"Poppins",
        fontWeight:600,
        marginTop:"20px",
        lineHeight:"24px",
        cursor:"pointer",
    },
    backLine:{
        color:"#273567",
        fontFamily:"Poppins",
        fontSize:"16px",
        fontWeight:400,
        marginTop:"20px",
        lineHeight:"24px",
        marginRight:"5px"
    },
    linkText:{
        marginLeft:"5px",
        color:"#0097CB",
        fontSize:"16px",
        fontWeight:600,
        fontFamily:"Poppins",
        lineHeight:"24px",
        cursor:"pointer"
    }
};
// Customizable Area End