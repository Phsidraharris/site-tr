import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { Customisablebuyerprofiles } from "../../src/Customisablebuyerprofiles.web";
const navigation = require("react-navigation");

const screenProps = {
    navigation: navigation,
    id: "BuyerUserProfile",
    classes: {

    }
};

const buyerProfileResponse = {
    data: {
        id: "72",
        type: "profile",
        attributes: {
            country: "+44",
            address: "LiG square",
            user_profile_data: {
                preferred_location: "Dummy Address 345",
                property_preference: "Flat",
                budget_in: "50K-100K",
                financing_status: "Cash Buyer",
                no_of_bedrooms: "3",
                no_of_bathrooms: "4",
                additional_features: "parking",
                purpose_of_buying: "Investment",
                mortgage_pre_approval_status: "Approved",
                prefered_moving_timeframe: "1 to 2 weeks",
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

const feature = loadFeature(
    "./__tests__/features/customisablebuyerprofiles-scenario.web.feature"
);

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-testId") === testID).first();

const mockAPICall = (instance: any, apiCallID: string, apiData: object, sendErrorResponse?: boolean) => {
    const msgSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
    msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgSucessRestAPI.messageId);
    msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), apiData);
    if (sendErrorResponse)
        msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceErrorMessage), {});
    instance[apiCallID] = msgSucessRestAPI.messageId
    runEngine.sendMessage("Unit Test", msgSucessRestAPI)
}

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    });

    test("User navigates to customisablebuyerprofiles screen with success network requests", ({ given, when, then }) => {
        let buyerProfileWrapper: ShallowWrapper;
        let buyerProfileInstance: Customisablebuyerprofiles;
        let buyerProfileCallId: string = "buyerProfileApiCallId";
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";

        given("I am a User loading customisablebuyerprofiles", () => {
            buyerProfileWrapper = shallow(<Customisablebuyerprofiles {...screenProps} />)
            buyerProfileInstance = buyerProfileWrapper.instance() as Customisablebuyerprofiles
        });

        when("The user gets the country code list", () => {
            mockAPICall(buyerProfileInstance, getCountryCodeCallId, countryCodeResponse);
        });

        then("Country code list fetched successfully", () => {
            expect(buyerProfileInstance.state.getCountryCodeData.length).toBeGreaterThan(0);
        });

        when("The user is choosing Country Code in the drop-down", () => {
            let buyerCountryCode = findByTestID(buyerProfileWrapper, "countryCodeTestId");
            buyerCountryCode.simulate('change', { target: { value: "+44" } });
        });

        then("Country code is selected", () => {
            let buyerCountryCode = findByTestID(buyerProfileWrapper, "countryCodeTestId");
            expect(buyerCountryCode.props().value).toEqual("+44");
        });

        when("The user enters phone number in input box", () => {
            let buyerContanctNumber = findByTestID(buyerProfileWrapper, "contactNumberTestId");
            buyerContanctNumber.simulate('change', { target: { value: "9893078987" } });
        });

        then("Phone number is render in input box", () => {
            let buyerContanctNumber = findByTestID(buyerProfileWrapper, "contactNumberTestId");
            expect(buyerContanctNumber.props().value).toEqual("9893078987");
        });

        when("The user enters Address in input box", () => {
            let buyerAddress = findByTestID(buyerProfileWrapper, "buyerAddressTestId");
            buyerAddress.simulate('change', { target: { value: "Dummy Address" } });
        });

        then("Address is render in input box", () => {
            let buyerAddress = findByTestID(buyerProfileWrapper, "buyerAddressTestId");
            expect(buyerAddress.props().value).toEqual("Dummy Address");
        });

        when("The user is choosing Property Prefernce in the drop-down", () => {
            let buyerProfilePreference = findByTestID(buyerProfileWrapper, "buyerProfilePreferenceTestId");
            buyerProfilePreference.simulate('change', { target: { value: "Flat" } });
        });

        then("Property Prefernce is selected", () => {
            let buyerProfilePreference = findByTestID(buyerProfileWrapper, "buyerProfilePreferenceTestId");
            expect(buyerProfilePreference.props().value).toEqual("Flat");
        });

        when("The user is choosing Property Budget in the drop-down", () => {
            let buyerPropertyBudget = findByTestID(buyerProfileWrapper, "buyerProfileBudgetTestId");
            buyerPropertyBudget.simulate('change', { target: { value: "50k-100k" } });
        });

        then("Property Budget is selected", () => {
            let buyerPropertyBudget = findByTestID(buyerProfileWrapper, "buyerProfileBudgetTestId");
            expect(buyerPropertyBudget.props().value).toEqual("50k-100k");
        });

        when("The user is choosing Financing Status in the drop-down", () => {
            let buyerProfileFinanceStatus = findByTestID(buyerProfileWrapper, "buyerProfileFinancingStatusTestId");
            buyerProfileFinanceStatus.simulate('change', { target: { value: "50k-100k" } });
        });

        then("Financing Status is selected", () => {
            let buyerProfileFinanceStatus = findByTestID(buyerProfileWrapper, "buyerProfileFinancingStatusTestId");
            expect(buyerProfileFinanceStatus.props().value).toEqual("50k-100k");
        });

        when("The user is choosing Bedrooms count in the drop-down", () => {
            let buyerProfileBedroomCount = findByTestID(buyerProfileWrapper, "buyerProfileBedroomsTestId");
            buyerProfileBedroomCount.simulate('change', { target: { value: "1" } });
        });

        then("Bedrooms count Status is selected", () => {
            let buyerProfileBedroomCount = findByTestID(buyerProfileWrapper, "buyerProfileBedroomsTestId");
            expect(buyerProfileBedroomCount.props().value).toEqual("1");
        });

        when("The user is choosing Bathrooms count in the drop-down", () => {
            let buyerProfileBathroomsCount = findByTestID(buyerProfileWrapper, "buyerProfileBathroomsTestId");
            buyerProfileBathroomsCount.simulate('change', { target: { value: "1" } });
        });

        then("Bathrooms count Status is selected", () => {
            let buyerProfileBathroomsCount = findByTestID(buyerProfileWrapper, "buyerProfileBathroomsTestId");
            expect(buyerProfileBathroomsCount.props().value).toEqual("1");
        });

        when("The user is choosing AdditionalFeature in the drop-down", () => {
            let buyerAdditionalFeature = findByTestID(buyerProfileWrapper, "buyerProfileAdditionalFeaturesTestId");
            buyerAdditionalFeature.simulate('change', { target: { value: "1" } });
        });

        then("AdditionalFeature is selected", () => {
            let buyerAdditionalFeature = findByTestID(buyerProfileWrapper, "buyerProfileAdditionalFeaturesTestId");
            expect(buyerAdditionalFeature.props().value).toEqual("1");
        });

        when("The user is choosing Buying For Status in the drop-down", () => {
            let buyerProfileBuyingStatus = findByTestID(buyerProfileWrapper, "buyerProfileBuyingTestId");
            buyerProfileBuyingStatus.simulate('change', { target: { value: "Investment" } });
        });

        then("Buying For Status is selected", () => {
            let buyerProfileBuyingStatus = findByTestID(buyerProfileWrapper, "buyerProfileBuyingTestId");
            expect(buyerProfileBuyingStatus.props().value).toEqual("Investment");
        });

        when("The user is choosing Mortgage status in the drop-down", () => {
            let buyerProfileMortgage = findByTestID(buyerProfileWrapper, "buyerProfileMortgageTestId");
            buyerProfileMortgage.simulate('change', { target: { value: "Approved" } });
        });

        then("Mortgage status is selected", () => {
            let buyerProfileMortgage = findByTestID(buyerProfileWrapper, "buyerProfileMortgageTestId");
            expect(buyerProfileMortgage.props().value).toEqual("Approved");
        });

        when("The user is choosing Moving time frame in the drop-down", () => {
            let buyerProfileMovingTime = findByTestID(buyerProfileWrapper, "buyerProfileMovingTimeTestId");
            buyerProfileMovingTime.simulate('change', { target: { value: "1 to 2 weeks" } });
        });

        then("Moving time frame is selected", () => {
            let buyerProfileMovingTime = findByTestID(buyerProfileWrapper, "buyerProfileMovingTimeTestId");
            expect(buyerProfileMovingTime.props().value).toEqual("1 to 2 weeks");
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(buyerProfileWrapper, "buyerSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(buyerProfileInstance, buyerProfileCallId, buyerProfileResponse));
        });

        then("buyer details is submitted", () => {
            expect(buyerProfileInstance.state.buyerSuccessNotification).toBe(true);
        });
    });

    test("User navigates to customisablebuyerprofiles screen with failure network requests", ({ given, when, then }) => {
        let buyerProfileWrapper: ShallowWrapper;
        let buyerProfileInstance: Customisablebuyerprofiles;
        let buyerProfileCallId: string = "buyerProfileApiCallId";
        let getCountryCodeCallId: string = "getCountryCodeApiCallId";

        given("I am a User loading customisablebuyerprofiles with error", () => {
            buyerProfileWrapper = shallow(<Customisablebuyerprofiles {...screenProps} />)
            buyerProfileInstance = buyerProfileWrapper.instance() as Customisablebuyerprofiles
        });

        when("The user gets the country code list", () => {
            mockAPICall(buyerProfileInstance, getCountryCodeCallId, countryCodeErrorResponse);
        });

        then("Country code list was not fetched successfully", () => {
            expect(buyerProfileInstance.state.getCountryCodeData.length).toBe(0);
        });

        when("The user clicks on save button", () => {
            let saveButton = findByTestID(buyerProfileWrapper, "buyerSaveButtonTestId");
            saveButton.simulate("click", mockAPICall(buyerProfileInstance, buyerProfileCallId, errorRes));
        });

        then("buyer details is submitted with error", () => {
            expect(buyerProfileInstance.state.buyerSuccessNotification).toBe(false);
        });
    });

    test("User enters invalid Data", ({ given, when, then }) => {
        let buyerProfileWrapper: ShallowWrapper;
        let buyerProfileInstance: Customisablebuyerprofiles;

        given("I am a User loading customisablebuyerprofiles with invalid data", () => {
            buyerProfileWrapper = shallow(<Customisablebuyerprofiles {...screenProps} />)
            buyerProfileInstance = buyerProfileWrapper.instance() as Customisablebuyerprofiles
        });

        when("The User enter incorrect phone number in input box", () => {
            let contactNumber = findByTestID(buyerProfileWrapper, "contactNumberTestId");
            contactNumber.simulate('change', { target: { value: "989898989832323234" } });
        });

        then("incorrect number is rendered in input box", () => {
            let contactNumber = findByTestID(buyerProfileWrapper, "contactNumberTestId");
            expect(contactNumber.props().value).toEqual("989898989832323234");
        });
    });
});
