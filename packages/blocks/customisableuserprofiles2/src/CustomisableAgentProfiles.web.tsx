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
    Checkbox,
    Button,
    Snackbar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown } from "@material-ui/icons";
import clsx from 'clsx';
import { bgImage, logoImage, arrowIcon, uploadIcon, cancelIcon, greenTick } from "./assets";
import Customisableuserprofiles2Controller, {
    Props,
    configJSON,
} from "./Customisableuserprofiles2Controller";
type HandleDateType = () => void;
// Customizable Area End

class CustomisableAgentProfiles extends Customisableuserprofiles2Controller {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start

        // Customizable Area End
    }

    // Customizable Area Start
    renderCustomRadio = (classes: Record<string, string>) => {
        return (
            <Radio className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
            />
        )
    }

    agentContactErrorMessage = (classes: Record<string, string>) => {
        return (
            <Box className={classes.agentSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={this.handleSnackBarClose} />
                <Typography className={classes.agentSnackBarMessage}>{configJSON.contactErrorMessage}</Typography>
            </Box>
        )
    };

    renderAgentAllErrorMessage = (classes: Record<string, string>) => {
        return (
            <Box className={classes.agentSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={this.handleAgentSolicitorAllError} />
                <Typography className={classes.agentSnackBarMessage}>{configJSON.errorMessageForAll}</Typography>
            </Box>
        );
    };

    renderDateErrorMessage = (classes: Record<string, string>, message: string, action: HandleDateType) => {
        return (
            <Box className={classes.agentSnackBarContainer}>
                <img src={cancelIcon} alt="CancelIcon" onClick={action} />
                <Typography className={classes.agentSnackBarMessage}>{message}</Typography>
            </Box>
        );
    };

    renderAgentSucessfullSnackbar = (classes: Record<string, string>) => {
        return (
            <Box className={classes.agentSnackBarContainer}>
                <img src={greenTick} alt="tickIcon" />
                <Typography className={classes.agentSnackBarMessage}>{configJSON.putSellerProfileSucessfulMessage}</Typography>
            </Box>
        );
    };

    renderMiddlePartAgentProfile = (classes: Record<string, string>) => {
        return (
            <>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentContactNumber}
                        </label>
                        <Box className={this.state.isContactError || this.state.showAgentAllError.isContactNo ? classes.agentContactContainer2 : classes.agentContactContainer}>
                            <Select
                                variant='standard'
                                disableUnderline
                                fullWidth
                                data-testId="countryCodeTestId"
                                IconComponent={KeyboardArrowDown}
                                className={classes.agentContactSelect}
                                value={this.state.agentCountryCode}
                                onChange={this.handleAgentCountryCode}
                                defaultValue={this.state.agentCountryCode}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left",
                                    },

                                    getContentAnchorEl: null,

                                    style: { maxHeight: "300px", marginTop: "8px" }
                                }}
                            >
                                <MenuItem value="+44">&#127468;&#127463; {configJSON.defautlCoutryCode}</MenuItem>
                                {this.state.getCountryCodeData.map((item: { attributes: { country_code: string, emoji_flag: string } }, index: number) => {
                                    return (
                                        <MenuItem value={item.attributes.country_code} key={index}>
                                            {`${item.attributes.emoji_flag} +${item.attributes.country_code}`}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            <TextField
                                variant='standard'
                                data-testId="contactNumberTestId"
                                fullWidth
                                InputProps={{ disableUnderline: true }}
                                className={classes.agentContactInput}
                                value={this.state.agentContactNumber}
                                onChange={this.handleAgentContactNumber}
                            />
                        </Box>
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentDOI}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="contactDOITestID"
                            placeholder={configJSON.datePlaceholder}
                            value={this.state.agentDOIncoporation}
                            onChange={this.handleDOIncoporation}
                            onBlur={this.validateDOIDate}
                            className={this.state.isDOIinvalid ? classes.invalidDateField : classes.validDateField}
                            fullWidth
                            error={this.state.isDOIinvalid}
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentDateCommenced}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="agentDateCommencedTestId"
                            value={this.state.agentDateCommenced}
                            placeholder={configJSON.datePlaceholder}
                            onChange={this.handleagentDateCommenced}
                            error={this.state.isDateCommencedInvalid}
                            onBlur={this.validateDateCommencedDate}
                            className={this.state.isDateCommencedInvalid ? classes.invalidDateField : classes.validDateField}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentWebsiteAddress}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="webstieAddressTestId"
                            value={this.state.agentWebstieAddress}
                            onChange={this.handleAgentWebsiteAddress}
                            className={classes.validDateField}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
            </>
        )
    };

    renderBottomAgentProfilePart = (classes: Record<string, string>) => {
        return (
            <>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentICONumber}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="agentICONumberTestId"
                            value={this.state.agentICONumber}
                            onChange={this.handleAgentICONumber}
                            fullWidth
                            onBlur={this.validateICONo}
                            className={this.state.isAgencyICOValid ? classes.invalidDateField : classes.validDateField}
                            error={this.state.showAgentAllError.isICORegNo || this.state.isAgencyICOValid}
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentICOExpiryDate}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="icoExpiryDateTestId"
                            value={this.state.agentICOExpiryDate}
                            onChange={this.handleICOExpiryDate}
                            onBlur={this.validateIOCExprityDate}
                            placeholder={configJSON.datePlaceholder}
                            className={this.state.isIOCInvalidDate ? classes.invalidDateField : classes.validDateField}
                            error={this.state.showAgentAllError?.isICOExpiryDate || this.state.isIOCInvalidDate}
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={classes.agentLabelText}>
                            {configJSON.agentProfessionalInsurance}
                        </label>
                        <RadioGroup
                            row
                            className={classes.insuranceRadio}
                            value={this.state.agentPolicyValue}
                            data-testId="policyValueTestId"
                            onChange={this.handleAgentPolicyValue}
                        >
                            <FormControlLabel
                                value="Yes"
                                control={this.renderCustomRadio(classes)}
                                label={configJSON.agentInsuranceValue1}
                            />
                            <FormControlLabel
                                value="No"
                                control={this.renderCustomRadio(classes)}
                                label={configJSON.agentInsuranceValue2}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </>
        )
    };

    renderUploadDocument = (classes: Record<string, string>) => {
        return (
            <>
                {this.state.agentPolicyValue === "Yes" &&
                    <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        className={classes.agentFormItem}
                    >
                        <FormControl className={classes.agentFormItem}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                data-testId="attachmentTestId"
                                onChange={this.handleAgentPolicyAttachment}
                                style={{ display: "none" }}
                            />
                            <label htmlFor="contained-button-file">
                                <Button className={classes.uploadButton} component="span">
                                    <p className={classes.uploadText}>{configJSON.uploadText}</p>
                                    <img src={uploadIcon} alt="uploadIcon" />
                                </Button>
                            </label>

                        </FormControl>
                    </Grid>
                }
            </>
        )
    };

    renderBottomRestAgentProfilePart = (classes: Record<string, string>) => {
        return (
            <>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={this.state.agentHMRCvalue === "No" ? classes.agentLabelDisableText : classes.agentLabelText}>
                            {configJSON.agentHMRCRegNo}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="agentHMRCRegNoTestId"
                            value={this.state.agentHMRCRegNo}
                            onChange={this.handleAgentHMRCRegNo}
                            fullWidth
                            onBlur={this.validateHMRCRegNo}
                            className={this.state.isHMRCRegValid ? classes.invalidDateField : classes.validDateField}
                            error={this.state.showAgentAllError.isHMRCRegNo || this.state.isHMRCRegValid}
                            disabled={this.state.agentHMRCvalue === "No" ? true : false}
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControl className={classes.agentFormItem}>
                        <label className={this.state.agentHMRCvalue === "No" ? classes.agentLabelDisableText : classes.agentLabelText}>
                            {configJSON.agentHMRRenewalDate}
                        </label>
                        <TextField
                            variant="outlined"
                            data-testId="agentHMRRenewalDateTestId"
                            value={this.state.agentHMRRenewalDate}
                            onChange={this.handleAgentHMRRenewalDate}
                            error={this.state.showAgentAllError.isHMRCRenewalDate || this.state.isHMRCInvalidDate}
                            fullWidth
                            onBlur={this.validateHMRCDate}
                            className={this.state.isHMRCInvalidDate ? classes.invalidDateField : classes.validDateField}
                            placeholder={configJSON.datePlaceholder}
                            disabled={this.state.agentHMRCvalue === "No" ? true : false}
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControlLabel
                        data-testId="disclaimerNote2MainTestId"
                        control={
                            <Checkbox
                                defaultChecked
                                checked={this.state.disclaimerNote1}
                                value={this.state.disclaimerNote1}
                                data-testId="disclaimerNote1TestId"
                                onChange={this.handleDisclaimerNote1}
                            />}
                        label={configJSON.noteText1}
                        labelPlacement="end"
                        className={classes.customCheck}
                    />
                </Grid>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className={classes.agentFormItem}
                >
                    <FormControlLabel
                        data-testId="disclaimerNoteMainTestId"
                        control={
                            <Checkbox
                                checked={this.state.disclaimerNote2}
                                value={this.state.disclaimerNote2}
                                data-testId="disclaimerNote2TestId"
                                onChange={this.handleDisclaimerNote2} />
                        }
                        label={configJSON.noteText2}
                        labelPlacement="end"
                        className={this.state.isDisclaimerChecked ? classes.customCheckValidation : classes.customCheck2}
                    />
                    {
                        this.state.isShowMore ?
                            <div>
                                <p className={this.state.isDisclaimerChecked ? classes.readErrorMoreContent : classes.readMoreContent}>{configJSON.noteText3}</p>
                                <p className={classes.lessMoreText} onClick={this.handleShowMoreText}>{configJSON.lessText}</p>
                            </div>
                            :
                            <p className={classes.readMoreText} onClick={this.handleShowMoreText}>{configJSON.readMoreText}</p>
                    }

                </Grid>
            </>
        )

    };

    renderAgentProfile = (classes: Record<string, string>) => {
        return (
            <Box className={classes.agentProfileContainer}>
                <Box className={classes.agentProfileformContainer}>
                    <Typography variant="h4" className={classes.userAgentProfileHeading}>
                        {configJSON.userProfileHeading}
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.userAgentProfileSubHeading}
                    >
                        {configJSON.userProfileSubHeading}
                    </Typography>
                    <Box className={classes.agentFormContainer}>
                        <Snackbar
                            open={this.state.isContactError}
                            autoHideDuration={8000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.agentContactErrorMessage(classes)}
                        />
                        <Snackbar
                            open={this.state.agentSuccessNotification}
                            autoHideDuration={2000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            onClose={this.showAgentSuccessNotification}
                            className={classes.agentCustomSnackbar}
                            message={this.renderAgentSucessfullSnackbar(classes)}
                        />
                        <Snackbar
                            open={this.state.showAgentErroMessage}
                            autoHideDuration={3000}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderAgentAllErrorMessage(classes)}
                            onClose={this.handleAgentSolicitorAllError}
                        />
                        <Snackbar
                            open={this.state.isDisclaimerChecked}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.disclaimerInvalidText, this.handleDisclaimerValue)}
                            onClose={this.handleDisclaimerValue}
                        />
                        <Snackbar
                            open={this.state.isDOIinvalid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.dateInvaildText, this.validateDOIDate)}
                        />
                        <Snackbar
                            open={this.state.isDateCommencedInvalid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.dateInvaildText, this.validateDateCommencedDate)}
                        />
                        <Snackbar
                            open={this.state.isIOCInvalidDate}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.dateInvaildText, this.validateIOCExprityDate)}
                        />
                        <Snackbar
                            open={this.state.isHMRCInvalidDate}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.dateInvaildText, this.validateHMRCDate)}
                        />
                        <Snackbar
                            open={this.state.isAgentRegNo}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateRegNo)}
                        />
                        <Snackbar
                            open={this.state.isAgencyName}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateAgencyName)}
                        />
                        <Snackbar
                            open={this.state.isAgencyTradingValid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateTradingName)}
                        />
                        <Snackbar
                            open={this.state.isAgencyDirectorNameValid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateDirectorName)}
                        />
                        <Snackbar
                            open={this.state.isAgencyContactName}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateContactName)}
                        />
                        <Snackbar
                            open={this.state.isAgencyJobTitle}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateJobTitle)}
                        />
                        <Snackbar
                            open={this.state.isAencyRegNum}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateAgentRegNo)}
                        />
                        <Snackbar
                            open={this.state.isHMRCRegValid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateHMRCRegNo)}
                        />
                        <Snackbar
                            open={this.state.isAgencyICOValid}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            className={classes.agentCustomSnackbar}
                            message={this.renderDateErrorMessage(classes, configJSON.invalidText, this.validateICONo)}
                        />
                        <form className={classes.formAgentMainContainer}>
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentAgencyName}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="agencyNameTestId"
                                            fullWidth
                                            value={this.state.agentAgencyName}
                                            onChange={this.handleAgentAgencyName}
                                            onBlur={this.validateAgencyName}
                                            className={this.state.isAgencyName ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isAgencyName || this.state.isAgencyName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>{configJSON.agentTradingName}</label>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            data-testId="tradingNameTestId"
                                            value={this.state.agentTradingName}
                                            onChange={this.handleAgentTradingName}
                                            className={this.state.isAgencyName ? classes.invalidDateField : classes.validDateField}
                                            onBlur={this.validateTradingName}
                                            error={this.state.isAgencyTradingValid}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentDirectorName}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="directorNameTestId"
                                            fullWidth
                                            value={this.state.agentDirectorTradingName}
                                            onChange={this.handleAgentDirectorName}
                                            onBlur={this.validateDirectorName}
                                            className={this.state.isAgencyDirectorNameValid ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isNameofDirector || this.state.isAgencyDirectorNameValid}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentCompanyRegistration}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="companyRegisterNumberTestId"
                                            fullWidth
                                            value={this.state.agentCompanyRegisterNumber}
                                            onChange={this.handleAgentCompanyRegNo}
                                            onBlur={this.validateRegNo}
                                            className={this.state.isAgentRegNo ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isCompanyRegNo || this.state.isAgentRegNo}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentRegOfficeAddress}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="principalAddressTestId"
                                            fullWidth
                                            onChange={this.handleAgentPrincipalAdd}
                                            value={this.state.agentPrincipalAdd}
                                            className={classes.validDateField}
                                            error={this.state.showAgentAllError.isCompanyRegAddress}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentBranchAddress}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="branchAddTestId"
                                            fullWidth
                                            value={this.state.agentBranchAdd}
                                            onChange={this.handleBranchAdd}
                                            className={classes.validDateField}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentContactName}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="contactNameTestId"
                                            fullWidth
                                            value={this.state.agentContactName}
                                            onChange={this.handleContactName}
                                            onBlur={this.validateContactName}
                                            className={this.state.isAgencyContactName ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isContactName || this.state.isAgencyContactName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentJobTitle}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="jobTitleTestId"
                                            fullWidth
                                            value={this.state.agentJobTitle}
                                            onChange={this.handleJobTitle}
                                            onBlur={this.validateJobTitle}
                                            className={this.state.isAgencyJobTitle ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isJobTitle || this.state.isAgencyJobTitle}
                                        />
                                    </FormControl>
                                </Grid>
                                {this.renderMiddlePartAgentProfile(classes)}
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem2}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentYearOfExperience}
                                        </label>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            data-testId="yearsOfExperienceTestId"
                                            value={this.state.agentYearsofExperience}
                                            onChange={this.handleAgentYearsofExperience}
                                            IconComponent={KeyboardArrowDown}
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            error={this.state.showAgentAllError.isYearofExp}
                                        >
                                            {
                                                this.state.agentYearsOfExperienceData.map((item: string, index: number) => {
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
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentLocationStock}
                                        </label>
                                        <RadioGroup
                                            row
                                            className={classes.propertyRadio}
                                            data-testId="locationStockTestId"
                                            value={this.state.agentLocationOfStock}
                                            onChange={this.handleAgentLocationStock}
                                        >
                                            <FormControlLabel
                                                value="England"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentStockCity1}
                                            />
                                            <FormControlLabel
                                                value="Wales"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentStockCity2}
                                            />
                                            <FormControlLabel
                                                value="Scotland"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentStockCity3}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentRedressMember}
                                        </label>
                                        <RadioGroup
                                            row
                                            data-testId="redressTestId"
                                            className={classes.redressRadio}
                                            value={this.state.agentRedressMember}
                                            onChange={this.handleAgentRedressMember}
                                        >
                                            <FormControlLabel
                                                value="The Property Ombudsman"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentRedress1}
                                            />
                                            <FormControlLabel
                                                value="The Property Redress Scheme"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentRedress2}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    sm={6}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentRegNumber}
                                        </label>
                                        <TextField
                                            variant="outlined"
                                            data-testId="registraionNoTestId"
                                            value={this.state.agentRegistrationNo}
                                            onChange={this.handleAgentRegstrationNo}
                                            fullWidth
                                            onBlur={this.validateAgentRegNo}
                                            className={this.state.isAencyRegNum ? classes.invalidDateField : classes.validDateField}
                                            error={this.state.showAgentAllError.isJobTitle || this.state.isAencyRegNum}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentICONote}
                                        </label>
                                    </FormControl>
                                </Grid>
                                {this.renderBottomAgentProfilePart(classes)}
                                {this.renderUploadDocument(classes)}
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    className={classes.agentFormItem}
                                >
                                    <FormControl className={classes.agentFormItem}>
                                        <label className={classes.agentLabelText}>
                                            {configJSON.agentHMRCNote}
                                        </label>
                                        <RadioGroup
                                            row
                                            className={classes.insuranceRadio}
                                            value={this.state.agentHMRCvalue}
                                            data-testId="hmrcValueTestId"
                                            onChange={this.handleAgentHMRCValue}
                                        >
                                            <FormControlLabel
                                                value="Yes"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentInsuranceValue1} />
                                            <FormControlLabel
                                                value="No"
                                                control={this.renderCustomRadio(classes)}
                                                label={configJSON.agentInsuranceValue2}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {this.renderBottomRestAgentProfilePart(classes)}
                                <Grid item lg={12} md={12} sm={12} className={classes.agentFormItem}>
                                    <Box className={classes.agentButtonContainer}>
                                        <Button
                                            variant="outlined"
                                            type="button"
                                            onClick={this.agentProfileSave}
                                            className={classes.agentSaveButton}
                                            data-testId="agentSaveButtonTestId">
                                            <p className={classes.saveText}>{configJSON.saveText}</p>
                                            <img src={arrowIcon} alt="arrowIcon" />
                                        </Button></Box>
                                </Grid >
                            </Grid></form>
                    </Box></Box>
            </Box >
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
                {this.renderAgentProfile(classes)}
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
            padding: "0px !important"
        }
    },

    agentFormItem: {
        width: "100%"
    },

    agentFormItem2: {
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB",
        }
    },

    agentProfileContainer: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 125%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        height: "100%",
        alignItems: "center",
        padding: "0px 30px",
        justifyContent: "center",
        "& .MuiContainer-maxWidthSm": {
            maxWidth: "min-content !important"
        },
        "@media(max-width:575px)": {
            padding: "30px",
        }
    },

    userAgentProfileHeading: {
        fontSize: "30px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#273567",
        lineHeight: "40px"
    },

    userAgentProfileSubHeading: {
        fontSize: "18px",
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#848FAC",
        lineHeight: "26px"
    },

    agentProfileformContainer: {
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

    formAgentMainContainer: {
        width: "100%",
    },

    agentFormContainer: {
        width: "100%",
        padding: "20px 0 20px 0px"
    },

    agentLabelText: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontweight: "400",
        lineHeight: "24px",
        color: "#273567",
        margin: "5px 0"
    },

    agentLabelDisableText: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontweight: "400",
        lineHeight: "24px",
        color: "#AEAEAE",
        margin: "5px 0"
    },

    agentContactSelect: {
        width: "170px",
        textAlign: "center",
        borderWidth: "0px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px !important"
        },
        "& .MuiSelect-select:focus": {
            backgroundColor: "white"
        }
    },

    agentContactInput: {
        width: "100%",
        "& fieldSet": { border: 'none' }
    },

    agentContactContainer: {
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

    agentContactContainer2: {
        border: "1px solid red",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        height: "53px",
        cursor: "pointer"
    },

    agentButtonContainer: {
        marginTop: "30px",
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
        "@media(max-width:575px)": {
            width: "100%",
        }
    },

    agentSnackBarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    },

    agentSnackBarMessage: {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        color: "#0F172A",
    },

    agentSuccessfullMessage: {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: 400,
        color: "#0F172A",
    },

    agentCustomSnackbar: {
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

    customSuccessfullSnackbarForBuyer: {
        padding: "20px",
        "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf4f"
        }
    },

    propertyRadio: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        "& .MuiFormControlLabel-root": {
            width: "170px",
            color: "#273567",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400
        },
    },

    redressRadio: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        "& .MuiFormControlLabel-root": {
            color: "#273567",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400
        },
    },

    insuranceRadio: {
        width: "63%",
        display: "flex",
        justifyContent: "space-between",
        "& .MuiFormControlLabel-root": {
            color: "#273567",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400
        },
    },

    icon: {
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

    checkedIcon: {
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

    customCheck: {
        marginRight: "0px",
        "& .Mui-checked": {
            color: "#273567",
        },

        "& .MuiTypography-root": {
            marginTop: "20px",
            color: "#273567",
            fontSize: "15px",
            fontFamily: "Poppins",
        },
    },

    customCheck2: {
        marginRight: "0px",
        "& .Mui-checked": {
            color: "#273567",
        },

        "& .MuiTypography-root": {
            color: "#273567",
            fontSize: "15px",
            fontFamily: "Poppins",
        },
    },

    customCheckValidation: {
        marginRight: "0px",
        "& .Mui-checked": {
            color: "#273567",
        },
        "& .MuiCheckbox-root": {
            color: "#FF0404"
        },
        "& .MuiTypography-root": {
            color: "#FF0404",
            fontSize: "15px",
            fontFamily: "Poppins",
        },
    },

    readMoreText: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: 400,
        margin: "-5px 0px 0px 29px",
        cursor: "pointer",
    },

    readMoreContent: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: 400,
        margin: "-10px 0px 0px 29px",
        "@media(max-width:575px)": {
            margin: "0px 0px 0px 29px",
        }
    },

    readErrorMoreContent: {
        color: "#FF0404",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: 400,
        margin: "-10px 0px 0px 29px",
    },

    lessMoreText: {
        color: "#848FAC",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontWeight: 400,
        margin: "5px",
        display: "flex",
        cursor: "pointer",
        justifyContent: "flex-end",
    },

    uploadButton: {
        borderRadius: "8px",
        border: "1px solid #273567",
        background: "white",
        padding: "10px 16px",
        justifyContent: "space-evenly",
        width: "auto",
        alignItems: "center",
        gap: "10px",
        "& .MuiButton-label": {
            display: "flex",
            gap: "10px",
        }
    },

    uploadText: {
        color: "#273567",
        fontFamily: "Poppins",
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight: 400,
        margin: "0px"
    },

    agentSaveButton: {
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

    validDateField: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0097CB"
        }
    },

    invalidDateField: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            borderWidth: "1px"
        }
    },
});
export default withStyles(buyerWebStyles)(CustomisableAgentProfiles);
export { CustomisableAgentProfiles };
// Customizable Area End
