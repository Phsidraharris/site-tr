import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import VerificationPass from "../../src/VerificationPass.web"

const navigation = require("react-navigation");

const screenProps = {
    navigation: {
      navigate: jest.fn(), // Mocking the navigation function
    },
    id: "VerificationPass",
  };
  

const feature = loadFeature(
  "./__tests__/features/VerificationPass-scenario.web.feature"
);

defineFeature(feature, (test) => {
    let VerificationPassWrapper: ShallowWrapper;
    let instance: VerificationPass;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    VerificationPassWrapper = shallow(<VerificationPass {...screenProps} />);
    instance = VerificationPassWrapper.instance() as VerificationPass;
  });

  test("Click Resend e-mail link", ({ given, when, then }) => {
    given("the VerificationPass component is rendered", () => {
      // Nothing specific to do, as it's already set up in beforeEach
    });

    when("the user clicks the resend link", (linkText) => {
       

        // Check if navigation function was called with the expected route
      // Implement logic to simulate clicking the specified link
    });

    then("the email verification process is initiated", () => {
      // Implement logic to assert that the email verification process starts
    });
  });

  test("Click Back to Log in link", ({ given, when, then }) => {
    given("the VerificationPass component is rendered", () => {
    });

    when("the user clicks the login link", (linkText) => {
        VerificationPassWrapper.find('[data-testid="back-to-login"]').simulate("click");
   });

    then("the user is redirected to the login page", () => {
        // expect(navigation.navigate).toHaveBeenCalledWith("EmailAccountLoginBlock");
    });
  });
})