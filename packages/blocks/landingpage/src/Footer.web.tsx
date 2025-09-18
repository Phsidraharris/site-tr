import React from "react";

// Customizable Area Start
import { logo, cicon } from "./assets";
import { Box, Grid, Typography } from "@material-ui/core";
import { Call, Email } from "@material-ui/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";
// Customizable Area End

import LandingPageController, { Props } from "./LandingPageController";

export default class Footer extends LandingPageController {
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
            <div>
                <Box style={webStyles.footer}>
                    <Grid container spacing={3} style={{ padding: "60px 50px 60px 50px", width: '100%' }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <img src={logo} alt="logo" />
                            <Typography style={webStyles.rightText as React.CSSProperties}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3} md={4} style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ display: "flex", justifyContent: "left" }}>
                                <div>
                                    <Typography style={webStyles.resource as React.CSSProperties}>Resources</Typography>
                                    <div style={{ height: "2px", borderRadius: "5px", background: "#0097CB", width: "74.06px" }} />
                                    <Link to={"term"} style={webStyles.textDecor as React.CSSProperties}><Typography style={webStyles.subText as React.CSSProperties} >Terms & Conditions</Typography></Link>
                                    <Link to={"privacy"} style={webStyles.textDecor as React.CSSProperties}><Typography style={webStyles.subText as React.CSSProperties}>Privacy policy</Typography></Link>
                                    <Typography style={webStyles.subText as React.CSSProperties}>FAQs</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} md={4} style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ display: "flex", justifyContent: "left" }}>
                                <div>
                                    <Typography style={webStyles.contactUs as React.CSSProperties}>Contact us</Typography>
                                    <div style={{ height: "2px", borderRadius: "5px", background: "#0097CB", width: "74.06px" }} />
                                    <div style={{ display: "flex", marginTop: "10px", }}>
                                        <Email style={{ color: "#273567" }} />
                                        <Typography style={webStyles.lastsubText as React.CSSProperties}>Abcd@gmail.com</Typography>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", }}>
                                        <Call style={{ color: "#273567" }} />
                                        <Typography style={webStyles.lastsubText as React.CSSProperties}>987654321</Typography>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", }}>
                                        <LocationOnIcon style={{ color: "#273567" }} />
                                        <Typography style={webStyles.lastsubText as React.CSSProperties}>abcdef345.xyz,london </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Box style={webStyles.lastFoot as React.CSSProperties}>
                    <div style={{ display: "flex", paddingTop: "22px", justifyContent: "center" }}>
                        <img src={cicon} style={{ width: "16px", height: "16px", marginRight: "5px", paddingTop: "3px" }} />
                        2022-2023 AS-TX Ltd
                    </div>
                </Box>
            </div>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const webStyles = {
    footer: {
        marginTop: "50px",
        background: "#EAEAEA"
    },
    rightText: {
        width: "100%",
        marginTop: "15px",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    resource: {
        boderBottom: "2px solid #0097CB",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "bold",
        width:"100%"
    },
    subText: {
        marginTop: "10px",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
    },
    lastsubText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        marginLeft: "8px"
    },
    contactUs: {
        boderBottom: "2px solid #0097CB",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "bold",
        width:"100%"
    },
    lastFoot: {
        background: "#1E1E1E",
        height: "62px",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: "bold",
    }, 
    textDecor:{
        textDecoration:"none"
    }
};
// Customizable Area End