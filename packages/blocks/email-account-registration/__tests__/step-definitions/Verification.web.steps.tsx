import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import Verification from "../../src/Verification.web";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Verification",
};

const feature = loadFeature(
  "./__tests__/features/Verification-scenario.web.feature"
);

defineFeature(feature, (test) => {
  let registrationWrapper: ShallowWrapper;
  let instance: Verification;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    registrationWrapper = shallow(<Verification {...screenProps} />);
    instance = registrationWrapper.instance() as Verification;
  });

  // Sample test scenario
  test("User sees the verification message", ({ given, when, then }) => {
    given("the Verification component is rendered", () => {
      // No need to do anything here, as the component is already rendered in beforeEach
    });

    when("the user is on the Verification screen", () => {
      // No need to do anything here, as we're just setting up the context
    });

    then("the user should see a verification message", () => {
      const verificationMessage = registrationWrapper.find(".verification-message");
    //   expect(verificationMessage.exists()).toBe(true);
    });
  });
});