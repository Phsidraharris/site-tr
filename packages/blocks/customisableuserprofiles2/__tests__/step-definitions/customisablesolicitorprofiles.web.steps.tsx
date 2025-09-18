import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { CustomisableSolicitorProfiles } from "../../src/CustomisableSolicitorProfiles.web";
const navigation = require("react-navigation");

const screenProps = {
    navigation: navigation,
    id: "SolicitorUserProfile",
    classes: {

    }
};

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

const solicitorProfileResponse = {
    data: {
        id: "72",
        type: "profile",
        attributes: {
            country: "+44",
            address: "LiG square",
            user_profile_data: {
                law_firm_name: "Dummy firm name",
                law_firm_address: "Dummy address",
                no_of_solicitors: "3",
                license_number: "7622",
                years_of_experience: "1 to 5yrs",
                specific_experience: "Residential",
                regulation_for_onboarding_scheme: "Property Redress Scheme",
                regulation_for_onboarding_authorities: "Council of Licensed Conveyancers (CLC)",
            }
        }
    },
    meta: {
        message: "Profile Updated Successfully"
    }
};

const countryCodeErrorResponse = {
    errors: "string"
};

const errorRes = {
    errors: [
        {
            token: 'string'
        }
    ]
};

const feature = loadFeature(
    "./__tests__/features/customisablesolicitorprofiles-scenario.web.feature"
);

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
    
    test("User navigates to customisable solicitor profile screen with success network requests", ({ given, when, then }) => {
        let solicitorProfileWrapper: ShallowWrapper;
        let solicitorProfileInstance: CustomisableSolicitorProfiles;
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";
        let solicitorProfileCallId: string = "solicitorProfileApiCallId";

        given("I am a User loading customisable solicitor profile", () => {
            solicitorProfileWrapper = shallow(<CustomisableSolicitorProfiles {...screenProps} />)
            solicitorProfileInstance = solicitorProfileWrapper.instance() as CustomisableSolicitorProfiles
        });

        when("The user gets the country code list", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            countryCode1.simulate("click", mockAPICall(solicitorProfileInstance, getCountryCodeCallId, countryCodeResponse));
        });

        then("Country code list fetched successfully", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            expect(countryCode1.text()).toMatch("+44");
        });

        when("The user is choosing Country Code in the drop-down", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            countryCode1.simulate('change', { target: { value: "+44" } });
        });

        then("Country code is selected", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            expect(countryCode1.props().value).toEqual("+44");
        });

        when("The user enters phone number in input box", () => {
            let solicitorContactNo = findByTestID(solicitorProfileWrapper, "contactNumberTestId");
            solicitorContactNo.simulate('change', { target: { value: "9893078987" } });
        });

        then("Phone number is render in input box", () => {
            let solicitorContactNo = findByTestID(solicitorProfileWrapper, "contactNumberTestId");
            expect(solicitorContactNo.props().value).toEqual("9893078987");
        });

        when("The user enters firm name in input box", () => {
            let solicitorFirmName = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            solicitorFirmName.simulate('change', { target: { value: "Dummy name" } });
        });

        then("Firm name is render in input box", () => {
            let solicitorFirmName = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            expect(solicitorFirmName.props().value).toEqual("Dummy name");
        });

        when("The user enter correct firm name in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            contactNumber.simulate('blur', { target: { value: "Dummy name" } });
        });

        then("Correct firm name is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            expect(contactNumber.props().value).toEqual("Dummy name");
        });

        when("The user enters office address in input box", () => {
            let solicitorOfficeAddress = findByTestID(solicitorProfileWrapper, "firmAddressTestId");
            solicitorOfficeAddress.simulate('change', { target: { value: "Dummy address" } });
        });

        then("Office address is render in input box", () => {
            let solicitorOfficeAddress = findByTestID(solicitorProfileWrapper, "firmAddressTestId");
            expect(solicitorOfficeAddress.props().value).toEqual("Dummy address");
        });

        when("The user enters number of solicitors in input box", () => {
            let noOfSolicitor = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            noOfSolicitor.simulate('change', { target: { value: "6" } });
        });

        then("Number of solicitors is render in input box", () => {
            let noOfSolicitor = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            expect(noOfSolicitor.props().value).toEqual("6");
        });

        when("The user enters license no in input box", () => {
            let licenseNo = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            licenseNo.simulate('change', { target: { value: "AS5767" } });
        });

        then("License no is render in input box", () => {
            let licenseNo = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            expect(licenseNo.props().value).toEqual("AS5767");
        });

        when("The user select years of conveyancing experience in the drop-down", () => {
            let solicitorOfficeAddress = findByTestID(solicitorProfileWrapper, "yearsOfExperienceTestId");
            solicitorOfficeAddress.simulate('change', { target: { value: "1 to 5 years" } });
        });

        then("Years of conveyancing experience is selected", () => {
            let solicitorOfficeAddress = findByTestID(solicitorProfileWrapper, "yearsOfExperienceTestId");
            expect(solicitorOfficeAddress.props().value).toEqual("1 to 5 years");
        });

        when("The user select specific experties in the drop-down", () => {
            let specificExperties = findByTestID(solicitorProfileWrapper, "specificExpertiseTestId");
            specificExperties.simulate('change', { target: { value: "residential" } });
        });

        then("Specific experties is selected", () => {
            let specificExperties = findByTestID(solicitorProfileWrapper, "specificExpertiseTestId");
            expect(specificExperties.props().value).toEqual("residential");
        });

        when("The user selects regulatory authorities option", () => {
            let regulatoryAuthorities = findByTestID(solicitorProfileWrapper, "authorityTestId");
            regulatoryAuthorities.simulate('change', { target: { value: "Solicitors Regulation Authority (SRA)" } });
        });

        then("Regulatory authoritie option is selected", () => {
            let regulatoryAuthorities = findByTestID(solicitorProfileWrapper, "authorityTestId");
            expect(regulatoryAuthorities.props().value).toEqual("Solicitors Regulation Authority (SRA)");
        });

        when("The user enters regulatory authorities id number in input box", () => {
            let authortyIdNo = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            authortyIdNo.simulate('change', { target: { value: "23" } });
        });

        then("Regulatory authorities id number is render in input box", () => {
            let authortyIdNo = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            expect(authortyIdNo.props().value).toEqual("23");
        });

        when("The user enters regulatory authorities license number in input box", () => {
            let authortyLicenseNo = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            authortyLicenseNo.simulate('change', { target: { value: "237383" } });
        });

        then("Regulatory authorities license number is render in input box", () => {
            let authortyLicenseNo = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            expect(authortyLicenseNo.props().value).toEqual("237383");
        });

        when("The user selects scheme option", () => {
            let schemeValue = findByTestID(solicitorProfileWrapper, "schemeTestId");
            schemeValue.simulate('change', { target: { value: "Property Redress Scheme" } });
        });

        then("Scheme option is selected", () => {
            let schemeValue = findByTestID(solicitorProfileWrapper, "schemeTestId");
            expect(schemeValue.props().value).toEqual("Property Redress Scheme");
        });

        when("The user enters property redress scheme name in input box", () => {
            let schemeName = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            schemeName.simulate('change', { target: { value: "Dummy name" } });
        });

        then("Property redress scheme name is render in input box", () => {
            let schemeName = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            expect(schemeName.props().value).toEqual("Dummy name");
        });

        when("The user enters property redress membership number in input box", () => {
            let schemeMembershipNo = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            schemeMembershipNo.simulate('change', { target: { value: "678903" } });
        });

        then("Property redress membership number is render in input box", () => {
            let schemeMembershipNo = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            expect(schemeMembershipNo.props().value).toEqual("678903");
        });

        when("The user enters insurance indemnity provider in input box", () => {
            let insuranceProvider = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            insuranceProvider.simulate('change', { target: { value: "Dummy data" } });
        });

        then("Insurance indemnity provider is render in input box", () => {
            let insuranceProvider = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            expect(insuranceProvider.props().value).toEqual("Dummy data");
        });

        when("The user enters insurance policy number in input box", () => {
            let policyNumber = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            policyNumber.simulate('change', { target: { value: "65898" } });
        });

        then("Insurance policy number is render in input box", () => {
            let policyNumber = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            expect(policyNumber.props().value).toEqual("65898");
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(solicitorProfileWrapper, "solicitorSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(solicitorProfileInstance, solicitorProfileCallId, solicitorProfileResponse));
        });

        then("Solicitor details is submitted successfully", () => {
            let saveButton = findByTestID(solicitorProfileWrapper, "solicitorSaveButtonTestId");
            expect(saveButton.text()).toMatch("Save");
        });
    });

    test("User navigates to customisable solicitor profile screen with failure network requests", ({ given, when, then }) => {
        let solicitorProfileWrapper: ShallowWrapper;
        let solicitorProfileInstance: CustomisableSolicitorProfiles;
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";
        let solicitorProfileCallId: string = "solicitorProfileApiCallId";

        given("I am a User loading customisable solicitor profile with error", () => {
            solicitorProfileWrapper = shallow(<CustomisableSolicitorProfiles {...screenProps} />)
            solicitorProfileInstance = solicitorProfileWrapper.instance() as CustomisableSolicitorProfiles
        });

        when("The user gets the country code list", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            countryCode1.simulate("click", mockAPICall(solicitorProfileInstance, getCountryCodeCallId, countryCodeErrorResponse));
        });

        then("Country code list is not fetched successfully", () => {
            let countryCode = findByTestID(
                solicitorProfileWrapper,
                "contactNumberTestId"
            );
            let countryCode2 = new ShallowWrapper(
                countryCode.props().InputProps.startAdornment
            );
            let countryCode1 = findByTestID(countryCode2, "countryCodeTestId");
            expect(countryCode1.text()).toMatch("+44");        
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(solicitorProfileWrapper, "solicitorSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(solicitorProfileInstance, solicitorProfileCallId, errorRes));
        });

        then("Solicitor details is not submitted", () => {
            let saveButton = findByTestID(solicitorProfileWrapper, "solicitorSaveButtonTestId");
            expect(saveButton.text()).toMatch("Save");
        });
    });

    test("User enters invalid Data", ({ given, when, then }) => {
        let solicitorProfileWrapper: ShallowWrapper;
        let solicitorProfileInstance: CustomisableSolicitorProfiles;

        given("I am a user loading customisable solicitor profile with invalid data", () => {
            solicitorProfileWrapper = shallow(<CustomisableSolicitorProfiles {...screenProps} />)
            solicitorProfileInstance = solicitorProfileWrapper.instance() as CustomisableSolicitorProfiles
        });

        when("The user enter incorrect phone number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "contactNumberTestId");
            contactNumber.simulate('change', { target: { value: "989898989832323234" } });
        });

        then("Error message is display on the screen", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "contactNumberTestId");
            expect(contactNumber.props().value).toEqual("989898989832323234");
        });

        when("The user enters firm name in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Firm name is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect firm name in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect firm name is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "firmNameTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters number of solicitor in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Number of solicitor is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect number of solicitor in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect number of solicitor is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "numberOfSolicitorTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters licence number in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Licence number is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect licence number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect licence number is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "licenseNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters authority number in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Authority number is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect authority number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect authority number is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "authorityIdNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters scheme name in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Scheme name is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect scheme name in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect scheme name is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeNameTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters scheme membership number in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Scheme membership number is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect scheme membership number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect scheme membership number is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeMembershipTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters scheme idemnity in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Scheme idemnity is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect scheme idemnity in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect scheme idemnity is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemeIndemnityTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters scheme policy number in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Scheme policy number is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect scheme policy number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect scheme policy number is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "schemePolicyNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });

        when("The user enters authority licence number in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            dateofIncorporation.simulate('change', { target: { value: "abc@" } });
        });

        then("Authority licence number is render in input box", () => {
            let dateofIncorporation = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            expect(dateofIncorporation.props().value).toEqual("abc@");
        });

        when("The user enter incorrect authority licence number in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            contactNumber.simulate('blur', { target: { value: "abc@" } });
        });

        then("Incorrect authority licence number is rendered in input box", () => {
            let contactNumber = findByTestID(solicitorProfileWrapper, "authorityLicenceNoTestId");
            expect(contactNumber.props().value).toEqual("abc@");
        });
    });
});
