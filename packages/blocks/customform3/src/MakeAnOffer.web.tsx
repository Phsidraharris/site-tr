import React from "react";
import {
    Box,
    // Customizable Area Start
    createStyles,
    withStyles,
    Typography,
    FormControl,
    Select,
    MenuItem,
    FormControlLabel,
    RadioGroup,
    TextField,
    Grid,
    Radio,
    InputAdornment,
    Button,
    FormHelperText
    // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";
import Footer from "../../landingpage/src/Footer.web";
import { rightAparmentImg, locationImg, crossImg, uploadIcon } from "./assets";
import { KeyboardArrowDown } from "@material-ui/icons";
// Customizable Area End

import Customform3Controller, {
    Props, configJSON,
} from "./Customform3Controller";


class MakeAnOffer extends Customform3Controller {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    renderMakeAnOffer = (style: Record<string, string>) => {
        return (
            <Box className={style.leftFormContainer}>
                <Box className={style.headingContainer}>
                    <Box className={style.headingSubContainer}>
                        <Typography variant="h4" className={style.mainHeading}>
                            {configJSON.heading}
                        </Typography>
                        <Typography className={style.subHeading}>
                            {configJSON.subHeading}
                        </Typography>
                    </Box>
                    <Box>
                        <img src={crossImg} className={style.crossImg} />
                    </Box>
                </Box>
                <form className={style.formContainer}>
                    <Grid container spacing={1}>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem} error={this.state.showAllError.isOfferPrice}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.offerPriceLable}
                                </label>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={this.state.isOfferPriceValid ? style.invalidField : style.validField}
                                    onChange={this.handleOfferPrice}
                                    value={this.state.offerPrice}
                                    error={this.state.isOfferPriceValid || this.state.showAllError.isOfferPrice}
                                    data-testId="offerPriceTestId"  
                                />
                                {this.state.showAllError.isOfferPrice && <FormHelperText>{configJSON.offerPriceError}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem2}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.financingLable}
                                </label>
                                <Select
                                    variant='outlined'
                                    disableUnderline
                                    fullWidth
                                    MenuProps={{
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left",
                                        },
                                        getContentAnchorEl: null,
                                        style: { maxHeight: "300px", marginTop: "8px" }
                                    }}
                                    IconComponent={KeyboardArrowDown}
                                    className={style.validField}
                                    onChange={this.handleFinancing}
                                    value={this.state.financingValue}
                                    data-testId="financeTestId"
                                >
                                    {
                                        this.state.financingData.map((item: string, index: number) => {
                                            return <MenuItem value={item} key={index}>
                                                {item}
                                            </MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem} error={this.state.showAllError.isChainFee}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.chainFreeLable}
                                </label>
                                <RadioGroup
                                    row
                                    name="radio-buttons-group"
                                    className={style.chainFreeRadioButtonGroup}
                                    onChange={this.handleChainFee}
                                    value={this.state.chainFeeValue}
                                    data-testId="chainFeeTestId"
                                >
                                    <FormControlLabel value={configJSON.chainFreeOption1} className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.chainFreeOption1} />
                                    <FormControlLabel value={configJSON.chainFreeOption2} className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.chainFreeOption2} />
                                </RadioGroup>
                                {this.state.showAllError.isChainFee && <FormHelperText>{configJSON.radioFieldError}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem} error={this.state.showAllError.isProofOfFinace}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.proofOfFinance}
                                </label>
                                <RadioGroup
                                    row
                                    name="radio-buttons-group"
                                    className={style.chainFreeRadioButtonGroup}
                                    onChange={this.handleProofOfFinance}
                                    value={this.state.proofOfFinance}
                                    data-testId="proofOfFinanceTestId"
                                >
                                    <FormControlLabel className={style.chainFreeRadioButton} value={configJSON.proofOfFinanceOption1} control={<Radio />} label={configJSON.proofOfFinanceOption1} />
                                    <FormControlLabel className={style.chainFreeRadioButton} value={configJSON.proofOfFinanceOption2} control={<Radio />} label={configJSON.proofOfFinanceOption2} />
                                    <FormControlLabel className={style.chainFreeRadioButton} value={configJSON.proofOfFinanceOption3} control={<Radio />} label={configJSON.proofOfFinanceOption3} />

                                </RadioGroup>
                                {this.state.showAllError.isProofOfFinace && <FormHelperText>{configJSON.radioFieldError}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} className={style.makeOfferFormItem}>
                            <FormControl className={style.makeOfferFormItem}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={style.validField}
                                    data-testId="proofOfFinaceDataTestId"
                                    error={this.state.showAllError.isProofOfFinanceFile}
                                    value={this.state.proofOfFinanceData}
                                    helperText={this.state.showAllError.isProofOfFinanceFile ? configJSON.proofOfFinanceError : ''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Box color="primary" component="label">
                                                    <img src={uploadIcon} />
                                                    <input
                                                        type="file"
                                                        multiple
                                                        accept="image/*, application/pdf"
                                                        style={{ display: "none" }}
                                                        id="file-input"
                                                        onChange={this.handleProofofFinanceFiles}
                                                        data-testId="proofOfFinaceFilesTestId"
                                                    />
                                                </Box>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem} error={this.state.showAllError.isProofOfIdentity}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.proofOfIdentity}
                                </label>
                                <RadioGroup
                                    row
                                    name="radio-buttons-group"
                                    className={style.chainFreeRadioButtonGroup}
                                    onChange={this.handleProofOfIndentity}
                                    value={this.state.proofOfIdentity}
                                    data-testId="proofOfIdentityTestId"
                                >
                                    <FormControlLabel value="Passport" className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.proofOfIdentityOption1} />
                                    <FormControlLabel value="Full Driving License" className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.proofOfIdentityOption2} />
                                    <FormControlLabel value="National ID" className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.proofOfIdentityOption3} />
                                </RadioGroup>
                                {this.state.showAllError.isProofOfIdentity && <FormHelperText>{configJSON.radioFieldError}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} className={style.makeOfferFormItem}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={style.validField}
                                data-testId="proofOfIdentityDataTestId"
                                error={this.state.showAllError.isProofOfIdentityFile}
                                value={this.state.proofOfIdentityAttachment}
                                helperText={this.state.showAllError.isProofOfIdentityFile ? configJSON.proofOfIdentityError : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Box color="primary" component="label">
                                                <img src={uploadIcon} />
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*, application/pdf"
                                                    style={{ display: "none" }}
                                                    id="file-input"
                                                    onChange={this.handleProofofIndentityFiles}
                                                    data-testId="proofOfIdentityFilesTestId"
                                                />
                                            </Box>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            className={style.makeOfferFormItem}
                        >
                            <FormControl className={style.makeOfferFormItem} error={this.state.showAllError.isProofOfAddress}>
                                <label className={style.offerPriceLabel}>
                                    {configJSON.proofOfAddress}
                                </label>
                                <RadioGroup
                                    row
                                    name="radio-buttons-group"
                                    className={style.chainFreeRadioButtonGroup}
                                    onChange={this.handleProofOfAddress}
                                    value={this.state.proofOfAddress}
                                    data-testId="proofOfAddressTestId"
                                >
                                    <FormControlLabel value={configJSON.proofOfAddressOption1} className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.proofOfAddressOption1} />
                                    <FormControlLabel value={configJSON.proofOfAddressOption2} className={style.chainFreeRadioButton} control={<Radio />} label={configJSON.proofOfAddressOption2} />
                                </RadioGroup>
                                {this.state.showAllError.isProofOfAddress && <FormHelperText>{configJSON.radioFieldError}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} className={style.makeOfferFormItem}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={style.validField}
                                data-testId="proofOfAddressDataTestId"
                                error={this.state.showAllError.isProofOfAddressFile}
                                value={this.state.proofOfAddressAttachment}
                                helperText={this.state.showAllError.isProofOfAddressFile ? configJSON.proofOfAddressError : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Box color="primary" component="label">
                                                <img src={uploadIcon} />
                                                <input
                                                    type="file"
                                                    multiple
                                                    style={{ display: "none" }}
                                                    id="file-input"
                                                    accept="image/*, application/pdf"
                                                    data-testId="proofOfAddressFileTestId"
                                                    onChange={this.handleProofofAddressFiles}
                                                />
                                            </Box>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} className={style.makeOfferFormItem}>
                            <Box className={style.makeAnOfferContainer}>
                                <Button
                                    variant="outlined"
                                    type="button"
                                    className={style.makeAnOfferButton}
                                    onClick={this.submitMakeAnOffer}
                                    data-testId="submitMakeAnOfferTestId">
                                    <p className={style.saveText}>{configJSON.submitText}</p>
                                </Button>
                            </Box>
                        </Grid >
                    </Grid>
                </form>
            </Box>
        )
    }

    renderApartmentDetails = (style: Record<string, string>) => {
        return (
            <Box className={style.rightImgContainer}>
                <img src={rightAparmentImg} className={style.apartmentImg} />
                <Box className={style.priceContainer}>
                    <Typography className={style.priceValue}>{configJSON.apartmentPrice}</Typography>
                </Box>
                <Typography className={style.apartmentText}>{configJSON.apartmentText}</Typography>
                <Box className={style.addressContainer}>
                    <img src={locationImg} className={style.locationImg} />
                    <Typography className={style.locationAddress}>{configJSON.apartmentAddress}</Typography>
                </Box>
            </Box>
        )
    }
    // Customizable Area End

    render() {
        // Customizable Area Start

        const { classes } = this.props
        return (
            <Box>
                <NavigationMenu id="" navigation={this.props.navigation} />
                <Box className={classes.makeAnOfferMainContainer}>
                    <Grid container spacing={8}>
                        <Grid item lg={7} sm={12} md={7}>
                            {this.renderMakeAnOffer(classes)}
                        </Grid>
                        <Grid item lg={5} sm={12} md={5}>
                            {this.renderApartmentDetails(classes)}
                        </Grid>
                    </Grid>
                </Box>
                <Footer navigation={undefined} id={""} />
            </Box>
        );

        // Customizable Area End
    }
}

// Customizable Area Start

const makeAnOfferWebstyle = createStyles({
    makeAnOfferMainContainer: {
        padding: "65px"
    },

    leftFormContainer: {
        height: "100%",
        borderRadius: "8px",
        padding: "22px 22px 0px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        background: "#FFF",
        boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)"
    },

    rightImgContainer: {
        height: "auto",
        borderRadius: "8px",
        padding: "22px",
        boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
    },

    apartmentImg: {
        width: "100%",
        height: "310px",
        borderRadius: "8px",
    },

    priceContainer: {
        borderRadius: "8px",
        padding: "30px 5px 30px 0px",
        background: "#FAFAFA"
    },

    priceValue: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 400
    },

    apartmentText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 400
    },

    addressContainer: {
        margin: "8px 0px 5px 0px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
    },

    makeOfferFormItem: {
        width: "100%",
    },

    makeOfferFormItem2: {
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB",
        }
    },

    locationImg: {
        width: "14px",
        height: "18px"
    },

    locationAddress: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "17px",
        fontWeight: 400
    },

    offerPriceLabel: {
        margin: "5px 0px",
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
    },

    chainFreeRadioButtonGroup: {
        '& .Mui-checked': {
            color: '#031B59',
        },
    },

    chainFreeRadioButton: {
        color: "#64748B",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontHeight: 400,
        lineHeight: "22px",
        marginRight: "40px"
    },

    headingContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px"
    },

    mainHeading: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "30px",
        fontWeight: 400
    },

    subHeading: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontWeight: 400
    },

    validField: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB"
        }
    },

    invalidField: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            borderWidth: "1px"
        }
    },

    crossImg: {
        height: "30px",
        width: "30px"
    },

    makeAnOfferContainer: {
        marginTop: "30px",
        width: "100%",
        display: "flex",
    },

    makeAnOfferButton: {
        borderRadius: "8px",
        height: "44px",
        background: "#273567",
        padding: "10px 16px",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        color: "white",
        "& .MuiButton-label": {
            display: "flex",
            gap: "10px",
        },
        "&:hover": {
            background: "#273567",
        }
    },

    saveText: {
        color: "white",
        fontFamily: "Poppins",
        fontSize: "16px",
        textTransform: "capitalize",
        fontWeight: 400,
        margin: "0px"
    },

    formContainer: {
        padding: " 0 22px",
        "& .MuiFormHelperText-contained": {
            marginLeft: "0px",
            marginRight: "0px"
        },
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#FF0404"
        }
    }
}

);
export default withStyles(makeAnOfferWebstyle)(MakeAnOffer);
export { MakeAnOffer };

// Customizable Area End
