import React from "react";
// Customizable Area Start
import {
    Box,
    Button,
    Typography,
    InputAdornment,
    Grid,
    TextField,
    Select,
    FormControl,
    MenuItem,
    createStyles,
    Snackbar
} from "@material-ui/core";
import { createTheme, withStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { KeyboardArrowDown } from "@material-ui/icons";
import { bgImage, logoImage, cancelIcon, locationIcon, greenTick } from "./assets";
import Customisableuserprofiles2Controller, {
    Props,
    configJSON,
} from "./Customisableuserprofiles2Controller";
// Customizable Area End

// Customizable Area Start
const theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
            contrastText: "#fff",
        }
    },
    typography: {
        h6: {
            fontWeight: 500,
        },
        subtitle1: {
            margin: "20px 0px",
        }
    }
});
// Customizable Area End

class Customisablebuyerprofiles extends Customisableuserprofiles2Controller {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    renderBuyerContactSnackBarMessage = (classes: Record<string, string>) => {
        return (
            <Box className={classes.buyerSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={this.handleSnackBarClose} />
                <Typography className={classes.buyerSnackBarMessage}>{configJSON.contactErrorMessage}</Typography>
            </Box>
        );
    };

    renderBuyerSucessfullSnackbar = (classes: Record<string, string>) => {
        return (
            <Box className={classes.buyerSnackBarContainer}>
                <img src={greenTick} alt="tickIcon" />
                <Typography className={classes.buyerSuccessfullMessage}>{configJSON.putSellerProfileSucessfulMessage}</Typography>
            </Box>
        );
    };

    renderBuyerProfile = (classes: Record<string, string>) => {
        return (
            <Box className={classes.buyerProfileContainer}>
                <Box className={classes.buyerProfileformContainer}>
                    <Typography variant="h4" className={classes.userBuyerProfileHeading}>
                        {configJSON.userProfileHeading}</Typography>
                    <Typography variant="h6" className={classes.userBuyerProfileSubHeading}>
                        {configJSON.userProfileSubHeading}</Typography>
                    <Box className={classes.buyerFormContainer}>
                        <Snackbar
                            open={this.state.isContactError}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.buyerCustomSnackbar}
                            message={this.renderBuyerContactSnackBarMessage(classes)}
                        />
                        <Snackbar
                            open={this.state.buyerSuccessNotification}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            onClose={this.showBuyerSuccessNotification}
                            className={classes.buyerCustomSnackbar}
                            message={this.renderBuyerSucessfullSnackbar(classes)}
                        />
                        <form className={classes.formBuyerMainContainer}>
                            <Grid container spacing={1}>
                                <Grid item lg={12} md={12} sm={12} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileContact}</label>
                                        <Box className={this.state.isContactError ? classes.contactContainer2 : classes.contactContainer}>
                                            <Select
                                                variant='standard'
                                                disableUnderline
                                                fullWidth
                                                data-testId="countryCodeTestId"
                                                IconComponent={KeyboardArrowDown}
                                                className={classes.contactSelect}
                                                value={this.state.buyerCountryCode}
                                                onChange={this.handleBuyerCountryCode}
                                                defaultValue={this.state.buyerCountryCode}
                                                MenuProps={{
                                                    anchorOrigin: {
                                                        vertical: "bottom",
                                                        horizontal: "left",
                                                    },
                                                    getContentAnchorEl: null,
                                                    style:{ maxHeight: "300px", marginTop:"8px" }
                                                }}

                                            >
                                                <MenuItem value="+44">&#127468;&#127463; {configJSON.defautlCoutryCode}</MenuItem>
                                                {
                                                    this.state.getCountryCodeData.map((item: { attributes: { country_code: string, emoji_flag: string } }, index: number) => {
                                                        return <MenuItem value={item.attributes.country_code} key={index}>
                                                            {`${item.attributes.emoji_flag} +${item.attributes.country_code}`}
                                                        </MenuItem>
                                                    })
                                                }
                                            </Select>
                                            <TextField
                                                variant='standard'
                                                data-testId="contactNumberTestId"
                                                fullWidth
                                                InputProps={{ disableUnderline: true }}
                                                className={classes.contactInput}
                                                value={this.state.buyerContactNumber}
                                                onChange={this.handleBuyerContactNumber}
                                            />
                                        </Box>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileLocation}</label>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            data-testId="buyerAddressTestId"
                                            className={classes.AddressInput}
                                            value={this.state.buyerAddress}
                                            onChange={this.handleBuyerAddress}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <img src={locationIcon} alt="location" className={classes.locationIcon} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfilePreference}</label>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            data-testId="buyerProfilePreferenceTestId"
                                            IconComponent={KeyboardArrowDown}
                                            value={this.state.buyerPropertyPrefernce}
                                            onChange={this.handleBuyerPropertyPrefernce}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerPropertyPrefernceData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileBudget}</label>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            IconComponent={KeyboardArrowDown}
                                            data-testId="buyerProfileBudgetTestId"
                                            value={this.state.buyerPropertyBudget}
                                            onChange={this.handleBuyerPropertyBudget}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerPropertyBudgetData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileFinancingStatus}</label>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            data-testId="buyerProfileFinancingStatusTestId"
                                            IconComponent={KeyboardArrowDown}
                                            value={this.state.buyerFinancing}
                                            onChange={this.handleBuyerFinancing}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerFinancingData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileBedrooms}</label>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            IconComponent={KeyboardArrowDown}
                                            data-testId="buyerProfileBedroomsTestId"
                                            value={this.state.buyerBedrooms}
                                            onChange={this.handleBuyerBedrooms}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerBedroomsData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileBathrooms}</label>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            data-testId="buyerProfileBathroomsTestId"
                                            IconComponent={KeyboardArrowDown}
                                            value={this.state.buyerBathrooms}
                                            onChange={this.handleBuyerBathrooms}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerBathroomsData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileAdditionalFeatures}</label>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            IconComponent={KeyboardArrowDown}
                                            value={this.state.buyerAdditionalFeatures}
                                            onChange={this.handleBuyerAdditionalFeatures}
                                            data-testId="buyerProfileAdditionalFeaturesTestId"
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerAdditionalFeaturesData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileBuying}</label>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            data-testId="buyerProfileBuyingTestId"
                                            IconComponent={KeyboardArrowDown}
                                            value={this.state.buyerBuyingFor}
                                            onChange={this.handleBuyerBuyingFor}    
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerBuyingForData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileMortgage}</label>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            IconComponent={KeyboardArrowDown}
                                            data-testId="buyerProfileMortgageTestId"
                                            value={this.state.buyerMortgage}
                                            onChange={this.handleBuyerMortgage}
                                            MenuProps={{
                                                getContentAnchorEl: null,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                            }}
                                        >
                                            {
                                                this.state.buyerMortgageData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} className={classes.buyerFormItem}>
                                    <FormControl className={classes.buyerFormItem}>
                                        <label className={classes.labelText}>{configJSON.buyerProfileMovingTime}</label>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            IconComponent={KeyboardArrowDown}
                                            data-testId="buyerProfileMovingTimeTestId"
                                            value={this.state.buyerMovingTime}
                                            onChange={this.handleBuyerMovingTime}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null,
                                            }}
                                        >
                                            {
                                                this.state.buyerMovingData.map((item: string, index: number) => {
                                                    return <MenuItem value={item} key={index}>
                                                        {item}
                                                    </MenuItem>
                                                })
                                            } 
                                        </Select>
                                    </FormControl>
                                </Grid>
                                    <Box className={classes.buttonContainer}>
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            className={classes.buyerSkipButton}
                                        >
                                            {configJSON.skipText}
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            className={classes.buyerSaveButton}
                                            onClick={this.buyerProfileSave}
                                            data-testId="buyerSaveButtonTestId">
                                            {configJSON.saveText}
                                            <ArrowForwardIcon style={{ marginLeft: "5px" }} />
                                        </Button>
                                    </Box>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Box>
        )
    };
    // Customizable Area End

    render() {
        // Customizable Area Start
        const { classes } = this.props
        return (
            <>
                <Box className={classes.header}>
                    <img src={logoImage} className={classes.logo} alt="logo" />
                </Box>
                {this.renderBuyerProfile(classes)}
            </>
        );
        // Customizable Area End
    }
}

// Customizable Area Start
const buyerWebStyles = createStyles({
    header: {
        height: "70px",
        borderBottom: "1px solid #2735674D",
        padding: "17px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },

    logo: {
        width: "129px",
        height: "46px"
    },

    root: {
        "& .MuiPopover-paper": {
            padding: "0px !important",
        }
    },

    mainWrapper: {
        display: "flex",
        fontFamily: "Roboto-Medium",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "30px",
        background: "#fff"
    },

    inputStyle: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    buyerProfileContainer: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 125%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        alignItems: "center",
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        "& .MuiContainer-maxWidthSm": {
            maxWidth: "min-content !important"
        },
    },

    userBuyerProfileHeading: {
        fontSize: "30px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#273567",
        lineHeight: "40px"
    },

    userBuyerProfileSubHeading: {
        fontSize: "18px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#848FAC",
        lineHeight: "26px"
    },

    buyerProfileformContainer: {
        height: "auto",
        width: "600px",
        margin: "40px 0",
        borderRadius: "10px",
        padding: "20px 53px",
        zIndex: 9999,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        "@media(max-width:768px)": {
            height: "auto",
            width: "350px",
        }
    },

    formBuyerMainContainer: {
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB",
        }
    },

    buyerFormContainer: {
        width: "100%",
        padding: "20px 0 20px 0px"
    },

    contactContainer: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        height: "53px",
        cursor: "pointer",
        "&:hover": {
            border: "1px solid black",
            cursor: "pointer"
        },
        "&:active": {
            border: "2px solid #0097CB",
            cursor: "pointer"
        }
    },

    contactContainer2: {
        border: "1px solid red",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        height: "53px",
        cursor: "pointer"
    },

    buyerFormItem: {
        width: "100%"
    },

    labelText: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontweight: "400",
        lineHeight: "24px",
        color: "#273567",
        margin: "5px 0"
    },

    contactSelect: {
        width: "140px",
        textAlign: "center",
        borderWidth: "0px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px !important"
        },
        "& .MuiSelect-select:focus": {
            backgroundColor: "white",
        }
    },

    contactInput: {
        width: "100%",
        "& fieldSet": { border: 'none' }
    },

    buttonContainer: {
        marginTop: "30px",
        display: "flex",
        gap: "10px",
        width: "100%",
        justifyContent: "flex-end",
        "@media(max-width:575px)": {
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
        }
    },

    buyerSkipButton: {
        display: "flex",
        height: "44px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        border: "1px solid #273567",
        backgroundColor: "white",
        textTransform: "capitalize",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        "@media(max-width:575px)": {
            width: "100%",
            justifyContent: "center",
        },
    },

    buyerSaveButton: {
        display: "flex",
        height: "44px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        color: "white",
        backgroundColor: "#273567",
        textTransform: "capitalize",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        "@media(max-width:575px)": {
            width: "100%",
            justifyContent: "center",
        },
        "&:hover": {
            background: "#273567",
        }
    },

    buyerSnackBarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    },

    buyerSnackBarMessage: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        color: "#0F172A",
    },

    buyerSuccessfullMessage: {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 400,
        color: "#0F172A",
    },

    buyerCustomSnackbar: {
        padding: "20px",
        "& .MuiSnackbarContent-message": {
            width: "100%",
            fontSize: "20px",
        },
        "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            borderRadius: "8px",
        }
    },
   
    locationIcon: {
        cursor: "pointer"
    },
});
export default withStyles(buyerWebStyles)(Customisablebuyerprofiles);
export { Customisablebuyerprofiles };
// Customizable Area End
