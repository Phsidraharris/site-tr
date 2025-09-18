import React from "react";

// Customizable Area Start
import EmailAccountRegistrationController, {
    Props
} from "./EmailAccountRegistrationController";
import { Box, Typography } from "@material-ui/core";
import { imglogo } from './assets';
import ArrowBack from "@material-ui/icons/ArrowBack";
// Customizable Area End


export default class Term extends EmailAccountRegistrationController {
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
                <Box style={webStyles.top}>
                    <img src={imglogo} style={webStyles.logo} />
                </Box>
                <Box style={{ padding: "50px" }}>
                    <div style={{display:"flex"}}>
                    <ArrowBack style={{marginRight:"30px", color:"#273567", cursor:"pointer"}} onClick={this.arrowBack}/>
                    <Typography style={webStyles.heading as React.CSSProperties}>
                        Terms and conditions
                    </Typography>
                    </div>
                    <Typography style={webStyles.para as React.CSSProperties}>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        <br/><br/>
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        <br/><br/>
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry.
                        <br/><br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not .
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
    top: {
        padding: "10px",
        borderBottom: "1px solid #2735674D"
    },
    logo: {
        paddingLeft: "50px"
    },
    heading: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "20px",
        color: "#0097CB",
        lineHeight: "30px"
    },
    para: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "left",
        marginTop:"50px"
    }
};
// Customizable Area End