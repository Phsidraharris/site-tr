import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { CustomisableAgentProfiles } from "../../src/CustomisableAgentProfiles.web";
const navigation = require("react-navigation");

const screenProps = {
    navigation: navigation,
    id: "BuyerUserProfile",
    classes: {

    }
};

const agentProfileResponse = {
    data: {
        id: "72",
        type: "profile",
        attributes: {
            country: "+44",
            address: "LiG square",
            user_profile_data: {
                agency_name: "Dummy Name",
                trading_name: "Dummy Name",
                name_of_director: "Dummy Name",
                branch_address: "Dummy address",
                contact_name: "Dummy Name",
                job_title: "Dummy title",
                date_of_incorporation: "01/12/2023",
                date_commenced_trading: "01/12/2023",
                website_address: "www.google.com",
                years_of_experience: "1yrs to 5yrs",
                location_of_your_property_stock: "Dummy stock",
                redres_scheme_memeber: "Dummy Name",
                registration_number: "HKD343",
                ico_registration_number: "HKD343",
                ico_registration_expiry_date: "01/11/2023",
                insurance_indemnity_policy: "Yes",
                insurance_indemnity_policy_attachment: "string",
                hmrc_anti_money_laundery: "Dummy Name",
                hmrc_supervised_registration_number: "HKD343",
                hmrc_supervised_registration_expiry_date: "01/11/2023",
                disclaimer_accepted: "Yes",
            }
        }
    },
    meta: {
        message: "Profile Updated Successfully"
    }
};

const errorRes = {
    errors: [
        {
            token: 'string'
        }
    ]
};

const feature = loadFeature(
    "./__tests__/features/customisableagentprofiles-scenario.web.feature"
);

const countryCodeResponse = {
    data:
        [
            {
                id: "AF",
                type: "country_code_and_flag",
                attributes: {
                    name: "Afghanistan",
                    emoji_flag: "flag",
                    country_code: "93",
                }
            }
        ]
};

const countryCodeErrorResponse = {
    errors: "string"
};

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-testId") === testID).first();

const mockAPICall = jest.fn().mockImplementation(
    (
        instance: any,
        apiCallId: string,
        mockData: object = {},
        messageType: any = MessageEnum.RestAPIResponceSuccessMessage
    ) => {
        const messageRestApiCall = new Message(
            getName(MessageEnum.RestAPIResponceMessage)
        );

        messageRestApiCall.addData(
            getName(MessageEnum.RestAPIResponceDataMessage),
            messageRestApiCall.messageId
        );

        messageRestApiCall.addData(
            getName(messageType),
            mockData
        );

        instance[apiCallId] = messageRestApiCall.messageId;

        const { receive: mockResponse } = instance;
        mockResponse("mockAPICallTest", messageRestApiCall);
    }
)

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    });

    test("User navigates to customisableAgentprofiles2 screen with success network requests", ({ given, when, then }) => {
        let agentProfileWrapper: ShallowWrapper;
        let agentProfileInstance: CustomisableAgentProfiles;
        let agentProfileCallId: string = "agentProfileApiCallId";
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";

        given("I am a User loading customisableAgentprofiles2", () => {
            agentProfileWrapper = shallow(<CustomisableAgentProfiles {...screenProps} />)
            agentProfileInstance = agentProfileWrapper.instance() as CustomisableAgentProfiles
        });

        when("The user gets the country code list", () => {
            let countryCodeList = findByTestID(agentProfileWrapper, "countryCodeTestId");
            countryCodeList.simulate("click", mockAPICall(agentProfileInstance, getCountryCodeCallId, countryCodeResponse));
        });

        then("Country code list fetched successfully", () => {
            let countryCodeList = findByTestID(agentProfileWrapper, "countryCodeTestId");
            expect(countryCodeList.text()).toMatch("+44");
        });

        when("The user is choosing Country Code in the drop-down", () => {
            let buyerCountryCode = findByTestID(agentProfileWrapper, "countryCodeTestId");
            buyerCountryCode.simulate('change', { target: { value: "+44" } });
        });

        then("Country code is selected", () => {
            let buyerCountryCode = findByTestID(agentProfileWrapper, "countryCodeTestId");
            expect(buyerCountryCode.props().value).toEqual("+44");
        });

        when("The user enters phone number in input box", () => {
            let buyerContanctNumber = findByTestID(agentProfileWrapper, "contactNumberTestId");
            buyerContanctNumber.simulate('change', { target: { value: "9893078987" } });
        });

        then("Phone number is render in input box", () => {
            let buyerContanctNumber = findByTestID(agentProfileWrapper, "contactNumberTestId");
            expect(buyerContanctNumber.props().value).toEqual("9893078987");
        });

        when("The user enters agency name in input box", () => {
            let agentAgencyName = findByTestID(agentProfileWrapper, "agencyNameTestId");
            agentAgencyName.simulate('change', { target: { value: "Dummy agency name" } });
        });

        then("Agency name is render in input box", () => {
            let agentAgencyName = findByTestID(agentProfileWrapper, "agencyNameTestId");
            expect(agentAgencyName.props().value).toEqual("Dummy agency name");
        });

        when("The user enters trading name in input box", () => {
            let agencyTradingName = findByTestID(agentProfileWrapper, "tradingNameTestId");
            agencyTradingName.simulate('change', { target: { value: "Dummy trading name" } });
        });

        then("Trading name is render in input box", () => {
            let agencyTradingName = findByTestID(agentProfileWrapper, "tradingNameTestId");
            expect(agencyTradingName.props().value).toEqual("Dummy trading name");
        });

        when("The user enters name of director in input box", () => {
            let agencyDirectorName = findByTestID(agentProfileWrapper, "directorNameTestId");
            agencyDirectorName.simulate('change', { target: { value: "Dummy director name" } });
        });

        then("Name of director is render in input box", () => {
            let agencyDirectorName = findByTestID(agentProfileWrapper, "directorNameTestId");
            expect(agencyDirectorName.props().value).toEqual("Dummy director name");
        });

        when("The user enters company register number in input box", () => {
            let companyRegNumber = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            companyRegNumber.simulate('change', { target: { value: "987678909" } });
        });

        then("Company register number is render in input box", () => {
            let companyRegNumber = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            expect(companyRegNumber.props().value).toEqual("987678909");
        });

        when("The user enters principal office address in input box", () => {
            let principalAddress = findByTestID(agentProfileWrapper, "principalAddressTestId");
            principalAddress.simulate('change', { target: { value: "ABC 102 Flat no" } });
        });

        then("Principal office address is render in input box", () => {
            let principalAddress = findByTestID(agentProfileWrapper, "principalAddressTestId");
            expect(principalAddress.props().value).toEqual("ABC 102 Flat no");
        });

        when("The user enters branch address in input box", () => {
            let branchAddress = findByTestID(agentProfileWrapper, "branchAddTestId");
            branchAddress.simulate('change', { target: { value: "ARC 105 Flat no" } });
        });

        then("Branch address is render in input box", () => {
            let branchAddress = findByTestID(agentProfileWrapper, "branchAddTestId");
            expect(branchAddress.props().value).toEqual("ARC 105 Flat no");
        });

        when("The user enters contact name in input box", () => {
            let contactName = findByTestID(agentProfileWrapper, "contactNameTestId");
            contactName.simulate('change', { target: { value: "username" } });
        });

        then("Contact name is render in input box", () => {
            let contactName = findByTestID(agentProfileWrapper, "contactNameTestId");
            expect(contactName.props().value).toEqual("username");
        });

        when("The user enters job title in input box", () => {
            let jobTitle = findByTestID(agentProfileWrapper, "jobTitleTestId");
            jobTitle.simulate('change', { target: { value: "Dummy title" } });
        });

        then("Job title is render in input box", () => {
            let jobTitle = findByTestID(agentProfileWrapper, "jobTitleTestId");
            expect(jobTitle.props().value).toEqual("Dummy title");
        });

        when("The user chooses the location of property stock from the options", () => {
            let propertyStock = findByTestID(agentProfileWrapper, "locationStockTestId");
            propertyStock.simulate('change', { target: { value: "England" } });
        });

        then("The location of the property stock is selected from the options", () => {
            let propertyStock = findByTestID(agentProfileWrapper, "locationStockTestId");
            expect(propertyStock.props().value).toEqual("England");
        });

        when("The user chooses redress scheme from the options", () => {
            let redressScheme = findByTestID(agentProfileWrapper, "redressTestId");
            redressScheme.simulate('change', { target: { value: "The Property Ombudsman" } });
        });

        then("The redress scheme is selected from the options", () => {
            let redressScheme = findByTestID(agentProfileWrapper, "redressTestId");
            expect(redressScheme.props().value).toEqual("The Property Ombudsman");
        });

        when("The user chooses the idemnity Policy value from the options", () => {
            let idemnityPolicy = findByTestID(agentProfileWrapper, "policyValueTestId");
            idemnityPolicy.simulate('change', { target: { value: "No" } });
        });

        then("Idemnity Policy is selected from the options", () => {
            let idemnityPolicy = findByTestID(agentProfileWrapper, "policyValueTestId");
            expect(idemnityPolicy.props().value).toEqual("No");
        });

        when("The user chooses HMRC's register value from the options", () => {
            let hmrcRegistration = findByTestID(agentProfileWrapper, "hmrcValueTestId");
            hmrcRegistration.simulate('change', { target: { value: "Yes" } });
        });

        then("The HMRC's register value is selected from the options", () => {
            let hmrcRegistration = findByTestID(agentProfileWrapper, "hmrcValueTestId");
            expect(hmrcRegistration.props().value).toEqual("Yes");
        });

        when("The user enters date of incorporation in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactDOITestID");
            dateofIncorporation.simulate('change', { target: { value: "01/11/2023" } });
        });

        then("Date of incorporation is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactDOITestID");
            expect(dateofIncorporation.props().value).toEqual("01/11/2023");
        });

        when("The user enters date Commenced Trading in input box", () => {
            let dateofCommenced = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            dateofCommenced.simulate('change', { target: { value: "11/11/2023" } });
        });

        then("Date Commenced Trading is render in input box", () => {
            let dateofCommenced = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            expect(dateofCommenced.props().value).toEqual("11/11/2023");
        });

        when("The user enters website address in input box", () => {
            let websiteAddress = findByTestID(agentProfileWrapper, "webstieAddressTestId");
            websiteAddress.simulate('change', { target: { value: "www.google.com" } });
        });

        then("Website address is render in input box", () => {
            let websiteAddress = findByTestID(agentProfileWrapper, "webstieAddressTestId");
            expect(websiteAddress.props().value).toEqual("www.google.com");
        });

        when("The user is choosing years of experience in the drop-down", () => {
            let yearsOfExperience = findByTestID(agentProfileWrapper, "yearsOfExperienceTestId");
            yearsOfExperience.simulate('change', { target: { value: "1yrs to 5yrs" } });
        });

        then("Years of experience is selected", () => {
            let yearsOfExperience = findByTestID(agentProfileWrapper, "yearsOfExperienceTestId");
            expect(yearsOfExperience.props().value).toEqual("1yrs to 5yrs");
        });

        when("The user enters registration number in input box", () => {
            let registraionNo = findByTestID(agentProfileWrapper, "registraionNoTestId");
            registraionNo.simulate('change', { target: { value: "HTY372" } });
        });

        then("Registration number is render in input box", () => {
            let registraionNo = findByTestID(agentProfileWrapper, "registraionNoTestId");
            expect(registraionNo.props().value).toEqual("HTY372");
        });

        when("The user enters ICO registration number in input box", () => {
            let icoRegistraionNo = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            icoRegistraionNo.simulate('change', { target: { value: "HTY3756782" } });
        });

        then("ICO registration number is render in input box", () => {
            let icoRegistraionNo = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            expect(icoRegistraionNo.props().value).toEqual("HTY3756782");
        });

        when("The user enters ICO registration expiry date in input box", () => {
            let icoExpiryDate = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            icoExpiryDate.simulate('change', { target: { value: "10/20/2023" } });
        });

        then("ICO registration expiry date is render in input box", () => {
            let icoExpiryDate = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            expect(icoExpiryDate.props().value).toEqual("10/20/2023");
        });

        when("The user enters HMRC registration number in input box", () => {
            let hmrcRegistraionNo = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            hmrcRegistraionNo.simulate('change', { target: { value: "GH776hJ" } });
        });

        then("HMRC registration number is render in input box", () => {
            let hmrcRegistraionNo = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            expect(hmrcRegistraionNo.props().value).toEqual("GH776hJ");
        });

        when("The user enters HMRC renewal date in input box", () => {
            let hmrcRenewalDate = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            hmrcRenewalDate.simulate('change', { target: { value: "10/20/2023" } });
        });

        then("HMRC renewal date is render in input box", () => {
            let hmrcRenewalDate = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            expect(hmrcRenewalDate.props().value).toEqual("10/20/2023");
        });

        when("The user check the disclaimer information", () => {
            let noteInformation = findByTestID(agentProfileWrapper, "disclaimerNoteMainTestId");
            let child: ShallowWrapper;
            child = shallow(noteInformation.props().control);
            let checkbox = child.findWhere(
                (node) => node.prop("data-testId") === "disclaimerNote2TestId"
            )
            checkbox.simulate('change', { target: { checked: true } });
        });

        then("The disclaimer information is checked", () => {
            let noteInformation = findByTestID(agentProfileWrapper, "disclaimerNoteMainTestId");
            let child: ShallowWrapper;
            child = shallow(noteInformation.props().control);
            let checkbox = child.findWhere(
                (node) => node.prop("data-testId") === "disclaimerNote2TestId"
            )
            expect(checkbox.props().checked).toBe(true);
        });

        when("The user check the first disclaimer information", () => {
            let noteInformation = findByTestID(agentProfileWrapper, "disclaimerNote2MainTestId");
            let child: ShallowWrapper;
            child = shallow(noteInformation.props().control);
            let checkbox = child.findWhere(
                (node) => node.prop("data-testId") === "disclaimerNote1TestId"
            )
            checkbox.simulate('change', { target: { checked: true } });
        });

        then("The first disclaimer information is checked", () => {
            let noteInformation = findByTestID(agentProfileWrapper, "disclaimerNote2MainTestId");
            let child: ShallowWrapper;
            child = shallow(noteInformation.props().control);
            let checkbox = child.findWhere(
                (node) => node.prop("data-testId") === "disclaimerNote1TestId"
            )
            expect(checkbox.props().checked).toBe(true);
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(agentProfileWrapper, "agentSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(agentProfileInstance, agentProfileCallId, agentProfileResponse));
        });

        then("Agent details is submitted successfully", () => {
            let saveButton = findByTestID(agentProfileWrapper, "agentSaveButtonTestId");
            expect(saveButton.text()).toMatch("Save");
        });
    }); 
    
    test("User navigates to customisableagentprofiles screen with failure network requests", ({ given, when, then }) => {
        let agentProfileWrapper: ShallowWrapper;
        let agentProfileInstance: CustomisableAgentProfiles;
        let agentProfileCallId: string = "agentProfileApiCallId";
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";

        given("I am a User loading customisableagentprofiles with error", () => {
            agentProfileWrapper = shallow(<CustomisableAgentProfiles {...screenProps} />)
            agentProfileInstance = agentProfileWrapper.instance() as CustomisableAgentProfiles
        });

        when("The user gets the country code list", () => {
            let countryCodeList = findByTestID(agentProfileWrapper, "countryCodeTestId");
            countryCodeList.simulate("click", mockAPICall(agentProfileInstance, getCountryCodeCallId, countryCodeErrorResponse));
        });

        then("Country code list is not fetched successfully", () => {
            let countryCodeList = findByTestID(agentProfileWrapper, "countryCodeTestId");
            expect(countryCodeList.text()).toMatch("+44");
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(agentProfileWrapper, "agentSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(agentProfileInstance, agentProfileCallId, errorRes));
        });

        then("Agent details is not submitted", () => {
            let saveButton = findByTestID(agentProfileWrapper, "agentSaveButtonTestId");
            expect(saveButton.text()).toMatch("Save");
        });
    });

    test("User enters invalid Data", ({ given, when, then }) => {
        let agentProfileWrapper: ShallowWrapper;
        let agentProfileInstance: CustomisableAgentProfiles;

        given("I am a User loading customisableagentprofiles with invalid data", () => {
            agentProfileWrapper = shallow(<CustomisableAgentProfiles {...screenProps} />)
            agentProfileInstance = agentProfileWrapper.instance() as CustomisableAgentProfiles
        });

        when("The User enter incorrect phone number in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactNumberTestId");
            contactNumber.simulate('change', { target: { value: "989898989832323234" } });
        });

        then("incorrect number is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactNumberTestId");
            expect(contactNumber.props().value).toEqual("989898989832323234");
        });

        when("The user enters agency name in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agencyNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "hemant@" } });
        });

        then("Agency name is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agencyNameTestId");
            expect(dateofIncorporation.props().value).toEqual("hemant@");
        });

        when("The user enter incorrect agency name in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agencyNameTestId");
            contactNumber.simulate('blur', { target: { value: "hemant@" } });
        });

        then("Incorrect agency name is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agencyNameTestId");
            expect(contactNumber.props().value).toEqual("hemant@");
        });

        when("The user enters trading name in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "tradingNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Trading name is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "tradingNameTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect trading name in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "tradingNameTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect trading name is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "tradingNameTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters director name in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "directorNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Director name is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "directorNameTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect director name in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "directorNameTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect director name is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "directorNameTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters company register number in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Company register number is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect company register number in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect company register number is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "companyRegisterNumberTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters contact name in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Contact name is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactNameTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect contact name in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactNameTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect contact name is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactNameTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters job title in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "jobTitleTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Job title is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "jobTitleTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect job title in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "jobTitleTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect job title is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "jobTitleTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters registration no in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "registraionNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Registration no is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "registraionNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect registration no in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "registraionNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect registration no is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "registraionNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters ICO registration number in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("ICO registration number is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect ICO registration number in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect ICO registration number is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentICONumberTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters HMRC registration number in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("HMRC registration number is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect HMRC registration number in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect HMRC registration number is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentHMRCRegNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });
///////
        when("The user enters date of incorporation in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactDOITestID");
            dateofIncorporation.simulate('change', { target: { value: "12/23/20052" } });
        });

        then("Date of incorporation is render in input box", () => {
            let dateofIncorporation = findByTestID(agentProfileWrapper, "contactDOITestID");
            expect(dateofIncorporation.props().value).toEqual("12/23/20052");
        });

        when("The user enter incorrect date incorporation in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactDOITestID");
            contactNumber.simulate('blur', { target: { value: "12/23/20052" } });
        });

        then("Incorrect date incorporation is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "contactDOITestID");
            expect(contactNumber.props().value).toEqual("12/23/20052");
        });

        when("The user enters date Commenced Trading in input box", () => {
            let dateofCommenced = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            dateofCommenced.simulate('change', { target: { value: "09-09-2000" } });
        });

        then("Date Commenced Trading is render in input box", () => {
            let dateofCommenced = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            expect(dateofCommenced.props().value).toEqual("09-09-2000");
        });

        when("The user enter incorrect date commenced trading in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            contactNumber.simulate('blur', { target: { value: "09-09-2000" } });
        });

        then("Incorrect date commenced trading is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentDateCommencedTestId");
            expect(contactNumber.props().value).toEqual("09-09-2000");
        });

        when("The user enters ICO registration expiry date in input box", () => {
            let icoExpiryDate = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            icoExpiryDate.simulate('change', { target: { value: "09-09-20002" } });
        });

        then("ICO registration expiry date is render in input box", () => {
            let icoExpiryDate = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            expect(icoExpiryDate.props().value).toEqual("09-09-20002");
        });

        when("The user enter incorrect ICO expiry date in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            contactNumber.simulate('blur', { target: { value: "09-09-20002" } });
        });

        then("Incorrect ICO expiry date is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "icoExpiryDateTestId");
            expect(contactNumber.props().value).toEqual("09-09-20002");
        });

        when("The user enters HMRC renewal date in input box", () => {
            let hmrcRenewalDate = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            hmrcRenewalDate.simulate('change', { target: { value: "09-09-2000" } });
        });

        then("HMRC renewal date is render in input box", () => {
            let hmrcRenewalDate = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            expect(hmrcRenewalDate.props().value).toEqual("09-09-2000");
        });

        when("The user enter incorrect HMRC renewable date in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            contactNumber.simulate('blur', { target: { value: "09-09-2000" } });
        });

        then("Incorrect HMRC renewable date is rendered in input box", () => {
            let contactNumber = findByTestID(agentProfileWrapper, "agentHMRRenewalDateTestId");
            expect(contactNumber.props().value).toEqual("09-09-2000");
        });
    });
});
