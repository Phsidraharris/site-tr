import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import { Customisableuserprofiles2 } from "../../src/Customisableuserprofiles2.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Customisableuserprofiles2",
  classes: {

  }
};
const sellerProfileResponse = {
  data: {
    id: "72",
    type: "profile",
    attributes: {
      country: "+44",
      address: "LiG square",
      user_profile_data: {
        preferred_selling_timeframe: "1-weeks",
        preferred_moving_timeframe: "1-months",
        mortgage_or_liens_exists: "yes"
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
  "./__tests__/features/customisableuserprofiles2-scenario.web.feature"
);

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
  wrapper.findWhere((node) => node.prop("data-testId") === testID).first();

const mockAPICall = (instance: any, apiCallID: string, apiData: object) => {
  const msgSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
  msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgSucessRestAPI.messageId);
  msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), apiData);
  instance[apiCallID] = msgSucessRestAPI.messageId
  runEngine.sendMessage("Unit Test", msgSucessRestAPI)
}

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to customisableuserprofiles2 screen with success network requests", ({ given, when, then }) => {
    let sellerProfileWrapper: ShallowWrapper;
    let sellerProfileInstance: Customisableuserprofiles2;
    let sellerProfileCallId: string = "sellerProfileApiCallId";
    let getCountryCodeCallId: string = "getCountryCodeApiCallId";

    given("I am a User loading customisableuserprofiles2", () => {
      sellerProfileWrapper = shallow(<Customisableuserprofiles2 {...screenProps} />)
      sellerProfileInstance = sellerProfileWrapper.instance() as Customisableuserprofiles2
    });

    when("The user gets the country code list", () => {
      mockAPICall(sellerProfileInstance, getCountryCodeCallId, countryCodeResponse);
    });

    then("Country code list fetched successfully", () => {
      expect(sellerProfileInstance.state.getCountryCodeData.length).toBeGreaterThan(0);
    });

    when("The user is choosing Country Code in the drop-down", () => {
      let countryCode = findByTestID(sellerProfileWrapper, "countryCodeTestId");
      countryCode.simulate('change', { target: { value: "+44" } });
    });

    then("Country code is selected", () => {
      let countryCode = findByTestID(sellerProfileWrapper, "countryCodeTestId");
      expect(countryCode.props().value).toEqual("+44");
    });

    when("The user enters phone number in input box", () => {
      let contactNumber = findByTestID(sellerProfileWrapper, "contactNumberTestId");
      contactNumber.simulate('change', { target: { value: "9898989898" } });
    });

    then("Phone number is rendered in input box", () => {
      let contactNumber = findByTestID(sellerProfileWrapper, "contactNumberTestId");
      expect(contactNumber.props().value).toEqual("9898989898");
    });

    when("The user enters Address in input box", () => {
      let sellerAddress = findByTestID(sellerProfileWrapper, "sellerAddressTestId");
      sellerAddress.simulate('change', { target: { value: "24 Dummy Address" } });
    });

    then("Address is rendered in input box", () => {
      let sellerAddress = findByTestID(sellerProfileWrapper, "sellerAddressTestId");
      expect(sellerAddress.props().value).toEqual("24 Dummy Address");
    });

    when("The user is choosing Selling Time in the drop-down", () => {
      let sellingTime = findByTestID(sellerProfileWrapper, "sellingTimeTestId");
      sellingTime.simulate('change', { target: { value: "1 week" } });
    });

    then("Selling Time is selected", () => {
      let sellingTime = findByTestID(sellerProfileWrapper, "sellingTimeTestId");
      expect(sellingTime.props().value).toEqual("1 week");
    });

    when("The user is choosing Moving Time in the drop-down", () => {
      let movingTime = findByTestID(sellerProfileWrapper, "movingTimeTestId");
      movingTime.simulate('change', { target: { value: "1 week" } });
    });

    then("Moving Time is selected", () => {
      let movingTime = findByTestID(sellerProfileWrapper, "movingTimeTestId");
      expect(movingTime.props().value).toEqual("1 week");
    });

    when("The user is choosing mortgage value in the drop-down", () => {
      let mortgageValue = findByTestID(sellerProfileWrapper, "mortgageValueTestId");
      mortgageValue.simulate('change', { target: { value: "yes" } });
    });

    then("Mortgage Value is selected", () => {
      let mortgageValue = findByTestID(sellerProfileWrapper, "mortgageValueTestId");
      expect(mortgageValue.props().value).toEqual("yes");
    });

    when("The user is click save button", () => {
      let saveButton = findByTestID(sellerProfileWrapper, "saveButtonId");
      saveButton.simulate("click", mockAPICall(sellerProfileInstance, sellerProfileCallId, sellerProfileResponse));
    });

    then("form value is submitted", () => {
      expect(sellerProfileInstance.state.profileUpdateNotification).toBe(true);
    });
  });

  test("User navigates to customisableuserprofiles2 screen with failure network requests", ({ given, when, then }) => {
    let sellerProfileWrapper: ShallowWrapper;
    let sellerProfileInstance: Customisableuserprofiles2;
    let sellerProfileCallId: string = "sellerProfileApiCallId";
    let getCountryCodeCallId: string = "getCountryCodeApiCallId";

    given("I am a user loading customisableuserprofiles2 with error", () => {
      sellerProfileWrapper = shallow(<Customisableuserprofiles2 {...screenProps} />)
      sellerProfileInstance = sellerProfileWrapper.instance() as Customisableuserprofiles2
    });

    when("The user gets the country code list", () => {
      mockAPICall(sellerProfileInstance, getCountryCodeCallId, countryCodeErrorResponse);
    });

    then("Country code list was not fetched successfully", () => {
      expect(sellerProfileInstance.state.getCountryCodeData.length).toBe(0);
    });

    when("The user is click save button with error", () => {
      let saveButton = findByTestID(sellerProfileWrapper, "saveButtonId");
      saveButton.simulate("click", mockAPICall(sellerProfileInstance, sellerProfileCallId, errorRes));
    });

    then("form value is submitted with error", () => {
      expect(sellerProfileInstance.state.profileUpdateNotification).toBe(false);
    });
  });

  test("User enters invalid Data", ({ given, when, then }) => {
    let sellerProfileWrapper: ShallowWrapper;
    let sellerProfileInstance: Customisableuserprofiles2;

    given("I am a user loading customisableuserprofiles2 with invalid data", () => {
      sellerProfileWrapper = shallow(<Customisableuserprofiles2 {...screenProps} />)
      sellerProfileInstance = sellerProfileWrapper.instance() as Customisableuserprofiles2
    });

    when("The user enter incorrect phone number in input box", () => {
      let contactNumber = findByTestID(sellerProfileWrapper, "contactNumberTestId");
      contactNumber.simulate('change', { target: { value: "989898989832323234" } });
    });

    then("incorrect number is rendered in input box", () => {
      let contactNumber = findByTestID(sellerProfileWrapper, "contactNumberTestId");
      expect(contactNumber.props().value).toEqual("989898989832323234");
    });
  });
});
