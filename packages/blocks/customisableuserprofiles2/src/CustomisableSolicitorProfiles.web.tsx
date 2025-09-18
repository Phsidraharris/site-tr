import React from "react";
// Customizable Area Start
import {
    Box,
    Typography,
    Grid,
    TextField,
    Select,
    FormControl,
    MenuItem,
    createStyles,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button,
    Snackbar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown } from "@material-ui/icons";
import clsx from 'clsx';
import { bgImage, logoImage, arrowIcon, cancelIcon, greenTick } from "./assets";
import Customisableuserprofiles2Controller, {
    Props,
    configJSON,
} from "./Customisableuserprofiles2Controller";
type HandleDateType = () => void;
// Customizable Area End

class CustomisableSolicitorProfiles extends Customisableuserprofiles2Controller {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    renderSolicitorCustomRadio = (classes: Record<string, string>) => {
        return (
            <Radio className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.solicitorIcon, classes.solicitorCheckedIcon)} />}
                icon={<span className={classes.solicitorIcon} />}
            />
        )
    }

    solicitorContactErrorMessage = (classes: Record<string, string>) => {
        return (
            <Box className={classes.solicitorSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={this.handleSnackBarClose} />
                <Typography className={classes.solicitorSnackBarMessage}>{configJSON.contactErrorMessage}</Typography>
            </Box>
        );
    };

    renderAllErrorMessage = (classes: Record<string, string>) => {
        return (
            <Box className={classes.solicitorSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={this.handleSolicitorAllError} />
                <Typography className={classes.solicitorSnackBarMessage}>{configJSON.errorMessageForAll}</Typography>
            </Box>
        );
    };

    renderSolicitorSucessfullSnackbar = (classes: Record<string, string>) => {
        return (
            <Box className={classes.solicitorSnackBarContainer}>
                <img src={greenTick} alt="tickIcon" />
                <Typography className={classes.solicitorSnackBarMessage}>{configJSON.putSellerProfileSucessfulMessage}</Typography>
            </Box>
        );
    };

    renderErrorMessage = (classes: Record<string, string>, message: string, action: HandleDateType) => {
        return (
            <Box className={classes.solicitorSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={action} />
                <Typography className={classes.solicitorSnackBarMessage}>{message}</Typography>
            </Box>
        );
    };

    renderSolicitorFirstSection = (classes: Record<string, string>) =>{
        return (<>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>
                        {configJSON.solicitorContactNumber}
                    </label>
                    <TextField
                        variant="outlined"
                        error={this.state.isContactError || this.state.showAllError.contactNumber}
                        data-testId="contactNumberTestId"
                        className={this.state.isContactError || this.state.showAllError.contactNumber ? classes.solicitorContactContainer2 : classes.solicitorContactContainer}
                        value={this.state.solicitorContactNumber}
                        onChange={this.handleSolicitorContactNumber}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <Select
                                    variant='standard'
                                    disableUnderline
                                    fullWidth
                                    data-testId="countryCodeTestId"
                                    value={this.state.solicitorCountryCode}
                                    onChange={this.handleSolicitorCuntryCode}
                                    defaultValue={this.state.solicitorCountryCode}
                                    IconComponent={KeyboardArrowDown}
                                    className={classes.solicitorContactSelect}
                                    MenuProps={{
                                        getContentAnchorEl: null,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left",
                                        },
                                        style: { maxHeight: "300px", marginTop: "8px" }
                                    }
                                    }>
                                    <MenuItem value={configJSON.defautlCoutryCode}>&#127468;&#127463; {configJSON.defautlCoutryCode}</MenuItem>
                                    {
                                        this.state.getCountryCodeData.map((item: { attributes: { country_code: string, emoji_flag: string } }, index: number) => {
                                            return (
                                                <MenuItem value={item.attributes.country_code} key={index}>
                                                    {`${item.attributes.emoji_flag} +${item.attributes.country_code}`}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
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
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorFirmName}</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        data-testId="firmNameTestId"
                        value={this.state.solicitorFirmName}
                        onChange={this.handleSolicitorFirmName}
                        onBlur={this.validateFirmName}
                        error={this.state.showAllError.isFirmName || this.state.isSolicitorFirmName}
                        className={classes.validTextField}
                    />
                </FormControl>
            </Grid>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorOfficeAddress}</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        className={classes.validTextField}
                        data-testId="firmAddressTestId"
                        value={this.state.solicitorFirmAddress}
                        onChange={this.handleSolicitorFirmAddress}
                        error={this.state.showAllError.isFirmAddress}
                    />
                </FormControl>
            </Grid>
        </>)
    };

    renderSolicitorSecondSection = (classes: Record<string, string>) => {
        return (<>
            <Grid
                item
                lg={6}
                md={6}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorNumberOfSolicitors}</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        data-testId="numberOfSolicitorTestId"
                        value={this.state.noOfSolicitor}
                        onChange={this.handleNoOfSolicitor}
                        className={classes.validTextField}
                        error={this.state.isNumberOfSolicitor}
                        onBlur={this.validateNoOfSolicitor}
                    />
                </FormControl>
            </Grid>
            <Grid
                item
                lg={6}
                md={6}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorLicenseNumber}</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        data-testId="licenseNoTestId"
                        value={this.state.solicitorLicenceNo}
                        onChange={this.handleSolicitorLicenseNo}
                        error={this.state.showAllError.licenseNo || this.state.isSolicitorLicenceNumber}
                        className={classes.validTextField}
                        onBlur={this.validateLicenceNo}
                    />
                </FormControl>
            </Grid>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem2}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorYearsOfExp}</label>
                    <Select
                        variant="outlined"
                        fullWidth
                        data-testId="yearsOfExperienceTestId"
                        IconComponent={KeyboardArrowDown}
                        className={classes.selectStyle}
                        value={this.state.solicitorYearsOfExp}
                        onChange={this.handleSolicitorYearsOfExp}
                        error={this.state.showAllError.yearOfExp}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null,
                        }}
                    >
                        {
                            this.state.solicitorYearsOfExpData.map((item: string, index: number) => {
                                return <MenuItem value={item} key={index}>
                                    {item}
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Grid>
        </>)
    };

    renderSolicitorThirdSection = (classes: Record<string, string>) => {
        return (<>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem2}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorSpecificExpertise}</label>
                    <Select
                        variant="outlined"
                        fullWidth
                        data-testId="specificExpertiseTestId"
                        value={this.state.solicitorExperties}
                        onChange={this.handleSolicitorExperties}
                        IconComponent={KeyboardArrowDown}
                        className={classes.selectStyle}
                        error={this.state.showAllError.specificExperties}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null,
                        }}
                    >
                        {
                            this.state.solicitorSpecificExpertiseData.map((item: string, index: number) => {
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
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorAuthorities}</label>
                </FormControl>
            </Grid>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <RadioGroup
                        row
                        className={classes.authorityRadio}
                        data-testId="authorityTestId"
                        value={this.state.solicitorAuthorities}
                        onChange={this.handleSolicitorAuthorities}
                    >
                        <FormControlLabel
                            value={configJSON.solicitorAuthoritiesValue1}
                            control={this.renderSolicitorCustomRadio(classes)}
                            label={configJSON.solicitorAuthoritiesValue1} />
                        <FormControl className={classes.solicitorFormItem}>
                            <label className={this.state.solicitorAuthorities === "Council of Licensed Conveyancers (CLC)" ? classes.solicitorLabelDisableText : classes.solicitorLabelText}>{configJSON.solicitorAuthoritiesIdNo}</label>
                            <TextField
                                variant="outlined"
                                fullWidth
                                data-testId="authorityIdNoTestId"
                                value={this.state.solicitorAuthoritiesIdNumber}
                                className={classes.validTextField}
                                onChange={this.handleSolicitorAuthorityIdNo}
                                onBlur={this.validateAuthorityNo}
                                error={this.state.showAllError.authorityIdNo || this.state.isSolicitorSRAIdNo}
                                disabled={this.state.solicitorAuthorities === "Council of Licensed Conveyancers (CLC)" ? true : false}
                            />
                        </FormControl>
                        <FormControlLabel
                            value={configJSON.solicitorAuthoritiesValue2}
                            control={this.renderSolicitorCustomRadio(classes)}
                            label={configJSON.solicitorAuthoritiesValue2}
                        />
                        <FormControl className={classes.solicitorFormItem}>
                            <label className={this.state.solicitorAuthorities === "Solicitors Regulation Authority (SRA)" ? classes.solicitorLabelDisableText : classes.solicitorLabelText}>{configJSON.solicitorAuthoritiesLicenceNo}</label>
                            <TextField
                                variant="outlined"
                                fullWidth
                                data-testId="authorityLicenceNoTestId"
                                className={classes.validTextField}
                                value={this.state.solicitorAuthoritiesLicenseNo}
                                onChange={this.handleSolicitorAuthorityLicenseNo}
                                error={this.state.showAllError.authorityLicenseNo || this.state.isSolicitorCLCLicence}
                                onBlur={this.validateAuthorityLicenceNo}
                                disabled={this.state.solicitorAuthorities === "Solicitors Regulation Authority (SRA)" ? true : false}
                            />
                        </FormControl>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.solicitorFormItem}
            >
                <FormControl className={classes.solicitorFormItem}>
                    <label className={classes.solicitorLabelText}>{configJSON.solicitorScheme}</label>
                </FormControl>
            </Grid>
        </>)
    }


    renderSolicitorProfile = (classes: Record<string, string>) => {
        return (
            <Box className={classes.solicitorProfileContainer}>
                <Box className={classes.solicitorProfileformContainer}>
                    <Typography variant="h4" className={classes.userSolicitorProfileHeading}>
                        {configJSON.userProfileHeading}
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.userSolicitorProfileSubHeading}
                    >
                        {configJSON.userProfileSubHeading}
                    </Typography>
                    <Box className={classes.solicitorFormContainer}>
                        <Snackbar
                            open={this.state.isContactError}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.solicitorContactErrorMessage(classes)}
                        />
                        <Snackbar
                            open={this.state.showErrorMessage}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderAllErrorMessage(classes)}
                            onClose={this.handleSolicitorAllError}
                        />
                        <Snackbar
                            open={this.state.solicitorSuccessNotification}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            onClose={this.showSolicitorSuccessNotification}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderSolicitorSucessfullSnackbar(classes)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorFirmName}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateFirmName)}
                        />
                        <Snackbar
                            open={this.state.isNumberOfSolicitor}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateNoOfSolicitor)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorLicenceNumber}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateLicenceNo)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorSRAIdNo}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateAuthorityNo)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorCLCLicence}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateAuthorityLicenceNo)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorIndemnity}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateIndemnityProvider)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorIndemnityNumber}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateSchemePolicyNumber)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorSchemeName}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateSchemeName)}
                        />
                        <Snackbar
                            open={this.state.isSolicitorSchemeNumber}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.solicitorCustomSnackbar}
                            message={this.renderErrorMessage(classes, configJSON.invalidText, this.validateMembershipNo)}
                        />
                        <form className={classes.formSolicitorMainContainer}>
                            <Grid container spacing={1}>
                               {this.renderSolicitorFirstSection(classes)}
                                {this.renderSolicitorSecondSection(classes)}
                                {this.renderSolicitorThirdSection(classes)}                               
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.solicitorFormItem}
                                >
                                    <FormControl className={classes.solicitorFormItem}>
                                        <RadioGroup
                                            row
                                            className={classes.authorityRadio}
                                            data-testId="schemeTestId"
                                            value={this.state.solicitorScheme}
                                            onChange={this.handleSolicitorScheme}
                                        >
                                            <FormControlLabel
                                                value={configJSON.solicitorSchemeValue1}
                                                control={this.renderSolicitorCustomRadio(classes)}
                                                label={configJSON.solicitorSchemeValue1} />
                                            <FormControlLabel
                                                value={configJSON.solicitorSchemeValue2}
                                                control={this.renderSolicitorCustomRadio(classes)}
                                                label={configJSON.solicitorSchemeValue2}
                                            />
                                            <Grid container spacing={1}>
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    sm={12}
                                                    className={classes.solicitorFormItem}
                                                >
                                                    <FormControl className={classes.solicitorFormItem}>
                                                        <label className={this.state.solicitorScheme === "Conveyancing Quality Scheme (CQS)" || this.state.solicitorScheme === "Law Society (Lexcel)" ? classes.solicitorLabelDisableText : classes.solicitorLabelText}>{configJSON.solicitorSchemeName}</label>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            className={classes.validTextField}
                                                            data-testId="schemeNameTestId"
                                                            value={this.state.solicitorSchemeName}
                                                            onChange={this.handleSolicitorSchemeName}
                                                            error={this.state.isSolicitorSchemeName}
                                                            onBlur={this.validateSchemeName}
                                                            disabled={this.state.solicitorScheme === "Conveyancing Quality Scheme (CQS)" || this.state.solicitorScheme === "Law Society (Lexcel)" ? true : false}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={6}
                                                    md={6}
                                                    sm={12}
                                                    className={classes.solicitorFormItem}
                                                >
                                                    <FormControl className={classes.solicitorFormItem}>
                                                        <label className={this.state.solicitorScheme === "Conveyancing Quality Scheme (CQS)" || this.state.solicitorScheme === "Law Society (Lexcel)" ? classes.solicitorLabelDisableText : classes.solicitorLabelText} >{configJSON.solicitorSchemeMembershipNo}</label>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            data-testId="schemeMembershipTestId"
                                                            className={classes.validTextField}
                                                            value={this.state.solicitorSchemeMembershipNo}
                                                            onChange={this.handleSolicitorMembershipNo}
                                                            error={this.state.isSolicitorSchemeNumber}
                                                            onBlur={this.validateMembershipNo}
                                                            disabled={this.state.solicitorScheme === "Conveyancing Quality Scheme (CQS)" || this.state.solicitorScheme === "Law Society (Lexcel)" ? true : false}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <FormControlLabel
                                                value={configJSON.solicitorSchemeValue3}
                                                control={this.renderSolicitorCustomRadio(classes)}
                                                label={configJSON.solicitorSchemeValue3} />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.solicitorFormItem}
                                >
                                    <FormControl className={classes.solicitorFormItem}>
                                        <label className={classes.solicitorLabelText}>{configJSON.solicitorInsurance}</label>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.solicitorFormItem}
                                >
                                    <FormControl className={classes.solicitorFormItem}>
                                        <label className={classes.solicitorLabelText}>{configJSON.solicitorIndemnityProvider}</label>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            data-testId="schemeIndemnityTestId"
                                            value={this.state.solicitorIndemnityProvider}
                                            onChange={this.handleIndemnityProvider}
                                            onBlur={this.validateIndemnityProvider}
                                            error={this.state.showAllError.indemnityProvider || this.state.isSolicitorIndemnity}
                                            className={classes.validTextField}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.solicitorFormItem}
                                >
                                    <FormControl className={classes.solicitorFormItem}>
                                        <label className={classes.solicitorLabelText}>{configJSON.solicitorPolicyNumber}</label>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            data-testId="schemePolicyNoTestId"
                                            value={this.state.solicitorSchemePolicyNumber}
                                            onChange={this.handleSchemePolicyNumber}
                                            onBlur={this.validateSchemePolicyNumber}
                                            error={this.state.showAllError.policyNumber || this.state.isSolicitorIndemnityNumber}
                                            placeholder={configJSON.policyNoPlaceholder}
                                            className={classes.validTextField}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} className={classes.solicitorFormItem}>
                                    <Box className={classes.solicitorButtonContainer}>
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            onClick={this.solicitorProfileSave}
                                            className={classes.solicitorSaveButton}
                                            data-testId="solicitorSaveButtonTestId">
                                            <p className={classes.saveText}>{configJSON.saveText}</p>
                                            <img src={arrowIcon} alt="arrowIcon" />
                                        </Button>
                                    </Box >
                                </Grid ></Grid >
                        </form >
                    </Box ></Box >
            </Box>
        );
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
                {this.renderSolicitorProfile(classes)}
            </>
        );
        // Customizable Area End
    }
}

// Customizable Area Start
const solicitorWebStyles = createStyles({
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
            padding: "0px !important"
        }
    },

    solicitorFormItem: {
        width: "100%"
    },

    solicitorFormItem2: {
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB",
        }
    },

    solicitorProfileContainer: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 125%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiContainer-maxWidthSm": {
            maxWidth: "min-content !important"
        }
    },

    userSolicitorProfileHeading: {
        fontSize: "30px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#273567",
        lineHeight: "40px"
    },

    userSolicitorProfileSubHeading: {
        fontSize: "18px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#848FAC",
        lineHeight: "26px"
    },

    solicitorProfileformContainer: {
        height: "550px",
        overflowY: "auto",
        width: "620px",
        margin: "40px 0",
        borderRadius: "10px",
        padding: "20px 53px",
        zIndex: 9999,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        "@media(max-width:575px)": {
            height: "750px",
            width: "350px"
        }
    },

    formSolicitorMainContainer: {
        width: "100%"
    },

    validTextField: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB"
        }
    },

    solicitorFormContainer: {
        width: "100%",
        padding: "20px 0 20px 0px"
    },

    solicitorLabelText: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontweight: "400",
        lineHeight: "24px",
        color: "#273567",
        margin: "5px 0"
    },

    solicitorLabelDisableText: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontweight: "400",
        lineHeight: "24px",
        color: "#AEAEAE",
        margin: "5px 0"
    },

    solicitorContactSelect: {
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

    solicitorContactInput: {
        width: "100%",
        "& fieldSet": { border: 'none' }
    },

    solicitorContactContainer: {
        "& .MuiOutlinedInput-adornedStart": {
            paddingLeft: "0px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB"
        }
    },

    solicitorContactContainer2: {
        "& .MuiOutlinedInput-adornedStart": {
            paddingLeft: "0px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            borderWidth: "1px"
        }
    },

    solicitorButtonContainer: {
        marginTop: "30px",
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
        "@media(max-width:575px)": {
            width: "100%",
        }
    },

    snackBarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "42px",
        padding: "8px",
        gap: "8px",
        borderRadius: "0px",
        boxShadow: "0px 6px 15px -3px rgba(0, 0, 0, 0.15)"
    },

    snackBarMessage: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        color: "#0F172A"
    },

    customSnackbar: {
        "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            color: "black",
            padding: "0px",
            borderRadius: "8px"
        },
        "& .MuiSnackbarContent-message": {
            padding: "0px 0px"
        }
    },

    customSuccessfullSnackbarForBuyer: {
        padding: "20px",
        "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf4f"
        }
    },

    authorityRadio: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        "& .MuiFormControlLabel-root": {
            color: "#273567",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            width: "100%"
        },
    },

    solicitorIcon: {
        borderRadius: '50%',
        width: 20,
        height: 20,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },

    solicitorCheckedIcon: {
        backgroundColor: '#273567',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 20,
            height: 20,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#273567',
        },
    },

    solicitorSaveButton: {
        borderRadius: "8px",
        height: "44px",
        background: "#273567",
        padding: "10px 16px",
        justifyContent: "space-evenly",
        width: "auto",
        alignItems: "center",
        gap: "10px",
        "@media(max-width:575px)": {
            width: "100%",
            justifyContent: "center",
        },
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

    solicitorSnackBarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    },

    solicitorSnackBarMessage: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        color: "#0F172A",
    },

    solicitorSuccessfullMessage: {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 400,
        color: "#0F172A",
    },

    solicitorCustomSnackbar: {
        "& .MuiSnackbarContent-message": {
            width: "100%",
            fontSize: "20px",
        },
        "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            borderRadius: "8px",
            minWidth: "230px",
            padding: "6px 10px"
        }
    },
});
export default withStyles(solicitorWebStyles)(CustomisableSolicitorProfiles);
export { CustomisableSolicitorProfiles };
// Customizable Area End
