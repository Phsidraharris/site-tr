// Customizable Area Start
import React from "react";
import { Box, InputAdornment, Snackbar, TextField, Typography, styled } from "@material-ui/core";
// Customizable Area End

import CatalogueController, { Props } from "./CatalogueController";
import { cloud, cross, delet, tick } from "./assets";
import Footer from "../../landingpage/src/Footer.web";
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";

export default class NextScreen extends CatalogueController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        const textAreaRowsTwo = this.state.selectedAgent ? 6 : 1

        return (
            <Box style={{ background: "#FAFAFA" }}>
                <NavigationMenu navigation={this.props.navigation} id={""} />

                <Box style={webStyles.MainBox as React.CSSProperties}>
                    <MainFormBox >
                        <Typography style={webStyles.title as React.CSSProperties}>List my property</Typography>
                        <Typography style={webStyles.subtitle as React.CSSProperties}>Enter your all information</Typography>
                        <div style={webStyles.propTitle}>
                            <Typography style={{ marginRight: "5px", }}>Contact Information</Typography>
                        </div>
                        <Typography style={webStyles.postcode as React.CSSProperties}>*Agent name</Typography>
                        <TextField variant="outlined"
                            fullWidth
                            value={this.state.agentName}
                            data-test-id='agent'
                            onChange={this.handleAgentName}
                            style={{
                                width: "100%", borderRadius: "8px", color: "#273567", marginTop: "5px",
                                border: this.state.isagentfilled ? "" : "1px solid #FF0404",
                            }} />

                        <Typography style={webStyles.postcode as React.CSSProperties}>*Address</Typography>
                        <div style={{ display: "flex", marginBottom: "10px", gap: "10px", width: "100%" }}>
                            <TextField variant="outlined"
                                value={this.state.address}
                                data-test-id='address'
                                onChange={this.handleAddress}
                                style={{ width: "100%", borderRadius: "8px", border: this.state.isaddressfilled ? "" : "1px solid #FF0404", }} />
                        </div>
                        <Typography style={webStyles.propNo as React.CSSProperties}>Phone Number</Typography>
                        <TextField variant="outlined"
                            value={this.state.phoneNumber}
                            data-test-id='number'
                            onChange={this.handlePhone}
                            style={{ width: "100%", marginTop: "5px", borderRadius: "8px",
                            border:this.state.isnumberValid ? "": "1px solid #FF0404" }} />
                            {!this.state.isnumberValid && (
                                <Typography style={{ color: "#FF0404", fontSize: "12px", fontFamily: "Poppins", marginLeft: "4px" }}>Enter only number</Typography>
                            ) }

                        <Typography style={webStyles.propNo as React.CSSProperties}>Agency photo</Typography>
                        <TextField variant="outlined" multiline
                            rows={textAreaRowsTwo}
                            style={{ width: "100%", marginTop: "5px" }}
                            InputProps={{
                                readOnly: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {this.state.selectedAgent && (
                                            <img
                                                src={this.state.selectedAgent}
                                                alt="Selected Image"
                                                style={{ height: '138px', borderRadius: '10px' }}
                                            />
                                        )}
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end" style={{ position: 'absolute', top: '28px', right: '16px' }}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={this.handleImageUploadAgent}
                                            style={{ display: 'none' }}
                                            ref={(input) => (this.fileInputRefAgent = input)}
                                        />
                                        {this.state.selectedAgent ? (
                                            <img src={delet} onClick={this.handleDeleteAgent} style={{ cursor: 'pointer' }} />
                                        ) : (
                                            <img src={cloud} onClick={this.handleAddImageAgent} style={{ cursor: 'pointer' }} />
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box style={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                            onClick={this.saveButton}
                        >
                            <button style={webStyles.nxtBtn}>Save</button>
                        </Box>
                    </MainFormBox>
                </Box >
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={this.state.isSnackbarOpen}
                    autoHideDuration={5000}
                    onClose={this.closeSnackbar}
                >
                    <div style={webStyles.popup as React.CSSProperties}>
                        <img src={cross} style={{ marginRight: "5px", marginLeft: "5px", color: "#0F172A", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }} />
                        Please fill all the mandatory fields
                    </div>
                </Snackbar>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={this.state.save}
                    autoHideDuration={5000}
                    onClose={this.closeSucc}
                >
                    <div style={webStyles.popup as React.CSSProperties}>
                        <img src={tick} style={{ marginRight: "5px", marginLeft: "5px", color: "#0F172A", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }} />
                        Listing Created Successfully
                    </div>
                </Snackbar>
                <Footer navigation={undefined} id={""} />
            </Box>
            // Customizable Area End
        )
    }
}

// Customizable Area Start

const webStyles = {
    propTitle: {
        marginTop: "25px",
        marginBottom: "20px",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400
    },

    postcode: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        marginTop: "10px"
    },
    title: {
        color: "#273567",
        fontSize: "30px",
        lineHeight: "40px",
        fontFamily: "Poppins",
        fontWeight: 400
    },
    MainBox: {
        background: "#FAFAFA",
        paddingTop: "30px",
        margin: "0 auto",
        borderRadius: "8px",
        display: "flex", justifyContent: "center"
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
    nxtBtn: {
        color: "#FFFFFF",
        fontFamily: "Poppins" as "Poppins",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        backgroundColor: "#273567",
        textTransform: "none" as "none",
        borderRadius: "8px",
        padding: "10px 16px",
        cursor: "pointer" as "pointer",
    },
    subtitle: {
        color: "#848FAC",
        fontSize: "18px",
        lineHeight: "26px",
        fontFamily: "Poppins",
        fontWeight: 400
    },
    propNo: {
        color: "#273567",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: "Poppins",
        marginTop: "20px"
    },
}
const MainFormBox = styled(Box)({
    width: "657px",
    background: "#FFFFFF",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
    padding: "30px",
    '@media (max-width: 723px)': {
        width: "510px",
    },
    '@media (max-width: 573px)': {
        width: "386px",
    },
    '@media (max-width: 447px)': {
        width: "292px",
    },
})
// Customizable Area End
