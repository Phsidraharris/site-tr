import React from "react";

// Customizable Area Start
import EmailAccountRegistrationController, {
    Props
} from "./EmailAccountRegistrationController";
import { Box, Typography } from "@material-ui/core";
import { imglogo } from './assets';
import ArrowBack from "@material-ui/icons/ArrowBack";
// Customizable Area End


export default class Privacy extends EmailAccountRegistrationController {
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
                <Box style={webStyles.topbox}>
                    <img src={imglogo} style={webStyles.logoImg} />
                </Box>
                <Box style={{ padding: "50px" }}>
                    <div style={{display:"flex"}}>
                    <ArrowBack style={{marginRight:"30px", color:"#273567", cursor:"pointer" }} onClick={this.arrowBack}/>
                    <Typography style={webStyles.title as React.CSSProperties}>
                        Privacy policy
                    </Typography>
                    </div>
                    <Typography style={webStyles.paragh as React.CSSProperties}>
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        <br/><br/>

                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        <br/><br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not .
                        <br/><br/>
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry.
                        <br/><br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not .
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not .
                    </Typography>
                </Box>
            </Box>
        )
        // Customizable Area End
    }
}

// Customizable Area Start
const webStyles = {
    topbox: {
        padding: "10px",
        borderBottom: "1px solid #2735674D"
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "20px",
        color: "#0097CB",
        lineHeight: "30px"
    },
    paragh: {
        color: "#848FAC",
        letterSpacing: "0em",
        fontWeight: 400,
        fontFamily: "Poppins",
        fontSize: "16px",
        marginTop:"50px",
        lineHeight: "24px",    
        textAlign: "left",
    },
    logoImg: {
        paddingLeft: "50px"
    },
};
// Customizable Area End