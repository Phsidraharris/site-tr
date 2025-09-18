import React from "react";

// Customizable Area Start
import EmailAccountRegistationController, {
    Props
} from "./EmailAccountRegistrationController";
import { Box, Button, Card, CardContent, Grid, Typography, createTheme, styled } from "@material-ui/core";
import { mainImg, imglogo, circle, selwhite, selblue, buywhite, buyblue,agentwhite,agentblue,soliwhite,soliblue, inactivecircle, activecircle } from './assets';

const LeftGrid = styled(Grid)({
    width: "100vh",
    height:"100vh",
    backgroundImage: `url(${mainImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "center",
    position: "relative",
    '@media (max-width: 600px)': { 
        display:"none"
    }
})

const RightText = styled(Typography)({
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
    }
})
// Customizable Area End


export default class ChooseType extends EmailAccountRegistationController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    handleGridClick = (gridId: number) => () => {
        this.setState({ activeGridId: gridId });
    };

    render() {
        // Customizable Area Start
        const { activeGridId } = this.state;

        return (
            <Box width="100%" height={'100%'}>
                <Grid container style={{height:'100%'}}>
                    <LeftGrid item xs={12} sm={6}>
                        <div style={{ textAlign: "right", paddingRight: "50px", paddingTop: "50px" }}><img src={imglogo} /></div>
                        <div style={{ textAlign: "center", position: "absolute", bottom:"85px",margin:"auto",width:"100%"   }}>
                            <RightText >Simplicity and Transparency at your fingertips.</RightText>
                            <img src={circle} style={{ marginTop: "25px", }} />
                        </div>
                    </LeftGrid>
                    <Grid item xs={12} sm={6} style={webStyles.rightGrid}>
                        <RightContent>
                            <Typography style={webStyles.leftText as React.CSSProperties}>Choose your role</Typography>
                            <Grid container spacing={2} style={{ marginTop: "20px" }}>
                                <Grid item xs={12} sm={6} md={6} key={1} style={{ marginBottom:"10px"}}>
                                    <Card style={{
                                        ...webStyles.mainBox,
                                        ...(activeGridId === 1 ? webStyles.activebox : {}),
                                    }}
                                        onClick={this.handleGridClick(1)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                        <div style={webStyles.cirCont as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 1 ? activecircle : inactivecircle}
                                                    style={webStyles.cirImg}
                                                />
                                            </div>
                                            <div style={webStyles.centerText as React.CSSProperties}>
                                                {activeGridId === 1 ? <img src={selwhite} /> : <img src={selblue} />}
                                                <Typography style={webStyles.cardText as React.CSSProperties}>
                                                Seller
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} key={2} style={{ marginBottom:"10px"}}>
                                    <Card style={{
                                        ...webStyles.mainBox,
                                        ...(activeGridId === 2 ? webStyles.activebox : {}) as React.CSSProperties
                                    }}
                                        onClick={this.handleGridClick(2)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                        <div style={webStyles.cirCont as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 2 ? activecircle : inactivecircle}
                                                    style={webStyles.cirImg}
                                                />
                                            </div>
                                            <div style={webStyles.centerText as React.CSSProperties}>
                                                {activeGridId === 2 ? <img src={buywhite} /> : <img src={buyblue} />}
                                                <Typography style={webStyles.cardText as React.CSSProperties}>
                                                Buyer
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>                           
                                <Grid item xs={12} sm={6} md={6} key={3} style={{ marginBottom:"10px"}}>
                                    <Card style={{
                                        ...webStyles.mainBox,
                                        ...(activeGridId === 3 ? webStyles.activebox : {}),
                                    }}
                                        onClick={this.handleGridClick(3)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                        <div style={webStyles.cirCont as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 3 ? activecircle : inactivecircle}
                                                    style={webStyles.cirImg}
                                                />
                                            </div>
                                            <div style={webStyles.centerText as React.CSSProperties}>
                                                {activeGridId === 3 ? <img src={agentwhite} /> : <img src={agentblue} />}
                                                <Typography style={webStyles.cardText as React.CSSProperties}>
                                                   Agent
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} key={4} style={{ marginBottom:"10px"}}>
                                    <Card style={{
                                        ...webStyles.mainBox,
                                        ...(activeGridId === 4 ? webStyles.activebox : {}) as React.CSSProperties
                                    }}
                                        onClick={this.handleGridClick(4)}
                                    >
                                        <CardContent style={webStyles.boxCont as React.CSSProperties}>
                                        <div style={webStyles.cirCont as React.CSSProperties}>
                                                <img
                                                    src={activeGridId === 4 ? activecircle : inactivecircle}
                                                    style={webStyles.cirImg}
                                                />
                                            </div>

                                            <div style={webStyles.centerText as React.CSSProperties}>
                                                {activeGridId === 4 ? <img src={soliwhite} /> : <img src={soliblue} />}
                                                <Typography style={webStyles.cardText as React.CSSProperties}>
                                                Solicitor
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Button style={webStyles.button as React.CSSProperties} onClick={this.handleNextClick}>Next</Button>
                        </RightContent>
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
const RightContent =styled(Box)({
    margin: "0 auto",
    maxWidth: "550px",
    '@media (max-width: 600px)': { 
        maxWidth:"330px"
    }
})
const webStyles = {
    mainBox: {
        position: "relative" as "relative",
        cursor: "pointer",
        fontFamily: "Poppins",
        textAlign: "center" as "center",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        borderRadius: "8px",
        fontSize: "20px",
        fontWeight: "bold" as "bold",
        height: "180px",
        color: "black",
    },
    activebox: {
        backgroundColor: "#273567",
        color: "white"
    },
    
    rightGrid: {
        margin:"auto",
        padding:"10px"
    },
    leftText: {
        letterSpacing: "0em",
        fontSize: "28px",
        fontWeight: 600,
        fontFamily: "Poppins",
        lineHeight: "42px",
        color: "#273567",
        textAlign: "left",
    },
    leftsubText: {
        textAlign: "left",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: 400,
        color: "#848FAC",
        letterSpacing: "0em",
        lineHeight: "21px",
    },
    button: {
        width: "100%",
        backgroundColor: "#273567",
        fontWeight: 400,
        color: "#FFFFFF",
        height: "50px",
        fontSize: "16px",
        lineHeight: "24px",
        marginTop: "35px",
        borderRadius: "8px",
        fontFamily: "Poppins",
    },
    boxCont: {
        position: "relative",
    },
    cirCont: {
        position: "absolute",
        right: "10px",
        top: "10px", 
    },
    cirImg: {
        height: "20px",
        width: "20px",
    },
    cardText: {
        paddingTop: "10px",
        textAlign: "center",
        fontFamily:"Poppins",
        fontWeight:400,
        lieHeight:"30px",
        fontSize:"20px"
    },
    centerText: {
        display: "flex",
        marginTop:"40px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
};
// Customizable Area End