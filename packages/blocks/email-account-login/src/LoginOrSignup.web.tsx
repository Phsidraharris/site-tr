import React from "react";

// Customizable Area Start
import EmailAccountLoginController, {
    Props
} from "./EmailAccountLoginController";
import { Box, Button, Card, CardContent, Grid, Typography, createTheme, styled } from "@material-ui/core";
import { mainImg, imgLogo, circle, logWhite, logBlue, addWhite, addBlue, inactivecircle, activecircle } from './assets';

const ImageBox = styled(Grid)({
    width: "100vh",
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition: " center",
    position: "relative",
    height:"100vh",
    '@media (max-width: 600px)': { 
        display:"none"
    }
})
interface State {
    activeGridID: number;
}
// Customizable Area End


export default class LoginOrSignup extends EmailAccountLoginController {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...this.state,
            activeGridId: 1,
        };
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        const { activeGridId } = this.state;

        return (
            <Box>
                <Grid container>
                    <ImageBox item xs={12} sm={6}>
                        <div style={webStyles.Imglogo as React.CSSProperties}><img src={imgLogo} /></div>
                        <div style={{ textAlign: "center", position: "absolute", bottom:"85px",margin:"auto",width:"100%"   }}>
                            <Maintitle >Simplicity and Transparency at your fingertips.</Maintitle>
                            <img src={circle} style={webStyles.mainCircle} />
                        </div>
                    </ImageBox>
                    <Grid item xs={12} sm={6} style={webStyles.ContentBox}>
                        <MainContent>
                            <Typography style={webStyles.welcomeText as React.CSSProperties}>Welcome</Typography>
                            <Typography style={webStyles.subText as React.CSSProperties}>Please log in or sign up to continue.</Typography>
                            <Grid container spacing={2} style={{ marginTop: "20px" }}>
                                <Grid item xs={12} sm={6} md={6} key={1}>
                                    <Card style={{
                                        ...webStyles.gridBox,
                                        ...(activeGridId === 1 ? webStyles.hightlightBox : {}),
                                    }}
                                        onClick={this.handleGridClick(1)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                            <div style={webStyles.circle as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 1 ? activecircle : inactivecircle}
                                                    style={webStyles.cirimg}
                                                />
                                            </div>
                                            <div style={webStyles.centerBoxContent as React.CSSProperties}>
                                                {activeGridId === 1 ? <img src={logWhite} /> : <img src={logBlue} />}
                                                <Typography style={webStyles.boxTxt as React.CSSProperties}>
                                                    Log in
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} key={2}>
                                    <Card style={{
                                        ...webStyles.gridBox,
                                        ...(activeGridId === 2 ? webStyles.hightlightBox : {}) as React.CSSProperties
                                    }}
                                        onClick={this.handleGridClick(2)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                            <div style={webStyles.circle as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 2 ? activecircle : inactivecircle}
                                                    style={webStyles.cirimg}
                                                />
                                            </div>

                                            <div style={webStyles.centerBoxContent as React.CSSProperties}>
                                                {activeGridId === 2 ? <img src={addWhite} /> : <img src={addBlue} />}
                                                <Typography style={webStyles.boxTxt as React.CSSProperties}>
                                                    Sign up
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Button style={webStyles.buttonNext as React.CSSProperties} onClick={this.handleClick}>
                                Next
                            </Button>
                        </MainContent>
                    </Grid>
                </Grid>
            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const theme = createTheme({
    palette: {
        primary: {
            main: "#0000ff",
            contrastText: "#fff",
        },
    },
})
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
const MainContent = styled (Box)({
    maxWidth: "550px",
    margin: "0 auto",
    '@media (max-width:600px)':{
        maxWidth:"314px",
        marginTop:"100px"
    }, 
})
const webStyles = {
    gridBox: {
        position: "relative" as "relative",
        cursor: "pointer",
        fontWeight: 500,
        textAlign: "center" as "center",
        height: "180px",
        borderRadius: "8px",
        color: "black",
        fontFamily: "Poppins",
        fontSize: "20px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        lineHeight:"30px"
    },
    ContentBox: {
        margin:"auto",
        padding:"10px"
    },
    hightlightBox: {
        backgroundColor: "#273567",
        color: "white"
    },
    welcomeText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "42px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    subText: {
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
    boxCont: {
        position: "relative",
    },
    circle: {
        position: "absolute",
        top: "10px",
        right: "10px",
    },
    boxTxt: {
        paddingTop: "10px",
        textAlign: "center",
    },
    cirimg: {
        width: "20px",
        height: "20px",
    },
    centerBoxContent: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px"
    },
    Imglogo: {
        textAlign: "right",
        paddingRight: "50px",
        paddingTop: "50px"
    },
    mainCircle: {
        marginTop: "25px",
    },
};
// Customizable Area End