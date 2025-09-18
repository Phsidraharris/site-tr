import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { MakeAnOffer } from "../../src/MakeAnOffer.web";
const navigation = require("react-navigation");

const screenProps = {
    navigation: navigation,
    id: "MakeAnOffer",
    classes: {

    }
};

const feature = loadFeature(
    "./__tests__/features/makeAnOffer-scenario.web.feature"
);

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-testId") === testID).first();

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    });

    test("User navigates to make an offer screen with success network requests", ({ given, when, then }) => {
        let makeAnOfferWrapper: ShallowWrapper;
        let makeAnOfferInstance: MakeAnOffer;

        given("I am a User loading make an offer form", () => {
            makeAnOfferWrapper = shallow(<MakeAnOffer {...screenProps} />)
            makeAnOfferInstance = makeAnOfferWrapper.instance() as MakeAnOffer
        });

        when("The user enters offer price in the field", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            offerPrice.simulate('change', { target: { value: "123.23" } });
        });

        then("The field renders the offer price", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            expect(offerPrice.props().value).toEqual("123.23");
        });

        when("The user chooses financing value in the field", () => {
            let financeValue = findByTestID(makeAnOfferWrapper, "financeTestId");
            financeValue.simulate('change', { target: { value: "cash" } });
        });

        then("The field renders the financing value", () => {
            let financeValue = findByTestID(makeAnOfferWrapper, "financeTestId");
            expect(financeValue.props().value).toEqual("cash");
        });

        when("The user selects the chain fee from the given options", () => {
            let chainFee = findByTestID(makeAnOfferWrapper, "chainFeeTestId");
            chainFee.simulate('change', { target: { value: "Yes" } });
        });

        then("The field renders the chain fee value", () => {
            let chainFee = findByTestID(makeAnOfferWrapper, "chainFeeTestId");
            expect(chainFee.props().value).toEqual("Yes");
        });

        when("The user selects the proof of finance from the given options", () => {
            let proofOfFinance = findByTestID(makeAnOfferWrapper, "proofOfFinanceTestId");
            proofOfFinance.simulate('change', { target: { value: "Certified Bank Statements" } });
        });

        then("The field renders the proof of finance", () => {
            let proofOfFinance = findByTestID(makeAnOfferWrapper, "proofOfFinanceTestId");
            expect(proofOfFinance.props().value).toEqual("Certified Bank Statements");
        });

        when("The user select the image for proof of finance", () => {
            let proofOfFinanceFile = findByTestID(makeAnOfferWrapper,"proofOfFinaceDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfFinanceFile.props().InputProps.endAdornment);
            let proofOfFinanceFile1 = findByTestID(fileWrapper, "proofOfFinaceFilesTestId");
            proofOfFinanceFile1.simulate('change', { target: { files: [] } });
        });

        then("The field renders the image name on screen", () => {
            let proofOfFinanceFile = findByTestID(makeAnOfferWrapper, "proofOfFinaceDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfFinanceFile.props().InputProps.endAdornment);
            let proofOfFinanceFile1 = findByTestID(fileWrapper, "proofOfFinaceFilesTestId");
            expect(proofOfFinanceFile1.props().accept).toBe('image/*, application/pdf');
        });

        when("The user selects the proof of identity from the given options", () => {
            let proofOfIdentity = findByTestID(makeAnOfferWrapper, "proofOfIdentityTestId");
            proofOfIdentity.simulate('change', { target: { value: "Passport" } });
        });

        then("The field renders the proof of identity", () => {
            let proofOfIdentity = findByTestID(makeAnOfferWrapper, "proofOfIdentityTestId");
            expect(proofOfIdentity.props().value).toEqual("Passport");
        });

        when("The user select the image for proof of identity", () => {
            let proofOfIdentity = findByTestID(makeAnOfferWrapper, "proofOfIdentityDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfIdentity.props().InputProps.endAdornment);
            let proofOfIdentity1 = findByTestID(fileWrapper, "proofOfIdentityFilesTestId");
            proofOfIdentity1.simulate('change', { target: { files: [] } });
        });

        then("The field renders the image name on screen", () => {
            let proofOfIdentity = findByTestID(makeAnOfferWrapper, "proofOfIdentityDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfIdentity.props().InputProps.endAdornment);
            let proofOfIdentity1 = findByTestID(fileWrapper, "proofOfIdentityFilesTestId");
            expect(proofOfIdentity1.props().accept).toBe('image/*, application/pdf');
        });

        when("The user selects the proof of address from the given options", () => {
            let proofOfAddress = findByTestID(makeAnOfferWrapper, "proofOfAddressTestId");
            proofOfAddress.simulate('change', { target: { value: "Bank Statement" } });
        });

        then("The field renders the proof of address", () => {
            let proofOfAddress = findByTestID(makeAnOfferWrapper, "proofOfAddressTestId");
            expect(proofOfAddress.props().value).toEqual("Bank Statement");
        });

        when("The user select the image for proof of address", () => {
            let proofOfAddress = findByTestID(makeAnOfferWrapper, "proofOfAddressDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfAddress.props().InputProps.endAdornment);
            let proofOfAddress1 = findByTestID(fileWrapper, "proofOfAddressFileTestId");
            proofOfAddress1.simulate('change', { target: { files: [] } });
        });

        then("The field renders the image name on screen", () => {
            let proofOfAddress = findByTestID(makeAnOfferWrapper, "proofOfAddressDataTestId");
            let fileWrapper = new ShallowWrapper(proofOfAddress.props().InputProps.endAdornment);
            let proofOfAddress1 = findByTestID(fileWrapper, "proofOfAddressFileTestId");
            expect(proofOfAddress1.props().accept).toBe('image/*, application/pdf');
        });

        when("The user clicks on submit button", () => {
            let saveButton = findByTestID(makeAnOfferWrapper, "submitMakeAnOfferTestId");
            saveButton.simulate("click");
        });

        then("Make an offer form details is submitted", () => {
            let saveButton = findByTestID(makeAnOfferWrapper, "submitMakeAnOfferTestId");
            expect(saveButton.text()).toMatch("Submit");
        });
        
    });

    test("User enters invalid Data", ({ given, when, then }) => {
        let makeAnOfferWrapper: ShallowWrapper;
        let makeAnOfferInstance: MakeAnOffer;
        given("I am a user loading make an offer screen with invalid data", () => {
            makeAnOfferWrapper = shallow(<MakeAnOffer {...screenProps} />)
            makeAnOfferInstance = makeAnOfferWrapper.instance() as MakeAnOffer
        });

        when("The user enter incorrect offer price in the field", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            offerPrice.simulate('change', { target: { value: "123.23@" } });
        });

        then("Incorrect offer price is rendered in the field", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            expect(offerPrice.props().value).toEqual("123.23@");
        });

        when("The user select nothing in the offer price field", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            offerPrice.simulate('change', { target: { value: "" } });
        });

        then("The field renders the blank offer price", () => {
            let offerPrice = findByTestID(makeAnOfferWrapper, "offerPriceTestId");
            expect(offerPrice.props().value).toEqual("");
        });

        when("The user clicks on submit button", () => {
            let saveButton = findByTestID(makeAnOfferWrapper, "submitMakeAnOfferTestId");
            saveButton.simulate("click");
        });

        then("Make an offer form details is submitted", () => {
            let saveButton = findByTestID(makeAnOfferWrapper, "submitMakeAnOfferTestId");
            expect(saveButton.text()).toMatch("Submit");
        });
    });
});
