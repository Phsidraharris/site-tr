import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import NewPassword from "../../src/NewPassword.web"

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "NewPassword",
};

const feature = loadFeature(
  "./__tests__/features/NewPassword-scenario.web.feature"
);

defineFeature(feature, (test) => {
  let ForgotPasswordWrapper: ShallowWrapper;
  let instance: NewPassword;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    ForgotPasswordWrapper = shallow(<NewPassword {...screenProps} />);
    instance = ForgotPasswordWrapper.instance() as NewPassword;
  });

  test('User enters valid email and clicks Send a recovery link', ({ given, when, then }) => {
    given('the user is on the Forgot Password page', () => {

    });

    when('the user enters a valid email', () => {
        instance.toggleConfirmPasswordVisibility();
        instance.togglePasswordVisibility();
        instance.handleConfirmPasswordChange({ target: { value: "Password456" } });
        const event = {
            target: {
              value: "1234567"
            }
          } as React.ChangeEvent<HTMLInputElement>;
    
          instance.handlePasswordChange(event);
          instance.handleEmailChange(event);
          instance.handleEmailBlur();
          instance.handleEmailFocus();
        //   instance.ButtonCLick();
        //   instance.handleClickLogin();
        instance.openSnackbarTwo()
        instance.closeSnackbarTwo()
        instance.handlesetButton()
        instance.goToHome()
    });

    when('the user clicks Send a recovery link', () => {

    });

    then('a recovery link should be sent to the entered email', () => {

    });
});

test('User enters invalid email format and clicks Send a recovery link', ({ given, when, then }) => {
    given('the user is on the Forgot Password page', () => {

    });

    when('the user enters an invalid email format', () => {

    });

    when('the user clicks Send a recovery link', () => {

    });

    then('an error message should be displayed', () => {

    });
  });
})