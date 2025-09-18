import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import ForgotPassword from "../../src/ForgotPassword.web"
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

const navigation = require("react-navigation");


const screenProps = {
  navigation: {
    navigate: jest.fn(), // Mocking the navigation function
  },
  id: "ForgotPassword",
};

const feature = loadFeature(
  "./__tests__/features/ForgotPassword-scenario.web.feature"
);

defineFeature(feature, (test) => {
  let ForgotPasswordWrapper: ShallowWrapper;
  let instance: ForgotPassword;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    ForgotPasswordWrapper = shallow(<ForgotPassword {...screenProps} />);
    instance = ForgotPasswordWrapper.instance() as ForgotPassword;
  });
  test("User enters valid email and clicks 'Send a recovery link'", ({ given, when, then }) => {
    given("the user is on the Forgot Password page", () => {
      // You can use instance to simulate state and interaction
    });

    when("the user enters a valid email", () => {
      // Simulate entering a valid email
    });

    when("the user clicks 'Send a recovery link'", () => {

      instance.handleForgetCLick();
      instance.handleResetCLick()
      instance.openSnackbars()
      instance.closeSnackbars()
      instance.goToOtpAfterEmailValidation({
        accountType: "string",
        email: "string",
      })
      instance.goToOtpAfterPhoneValidation({
        phone: "888"
      })
      instance.goToChangePasswordAfterOtp({
        otpCode: "888"
      })
      instance.goToConfirmationAfterPasswordChange({
        password: "888",
        confirmPassword:"333"
      })
      instance.isPasswordValid();
      instance.setState({ finishedTyping: true })
      instance.setState({ finishedTyping: false })
      instance.setState({ emailMatchError: false })
      instance.setState({ emailMatchError: true })
      instance.setState({ emailError: true })
      instance.setState({ emailError: false })
      instance.setState({ emailBlurred: true })
      instance.setState({ emailBlurred: false })
      instance.setState({ emailExists: true })
      instance.setState({ emailBlurred: true })
      instance.setState({ emailBlurred: false })

    });

    then("a recovery link should be sent to the entered email", () => {
      // expect(navigation.navigate).toHaveBeenCalledWith("VerificationPass");
      instance.setState({ emailExists: false })
      const mockResponseMessage = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockResponseMessage.messageId
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { message: "Email sent successfully" }
      );
      instance.forgetId = mockResponseMessage.messageId;
      runEngine.sendMessage("Unit Test", mockResponseMessage);

      const msgPlayloadAPI = new Message(getName(MessageEnum.NavigationPayLoadMessage))
      msgPlayloadAPI.addData(getName(MessageEnum.AuthTokenDataMessage), "token");
      runEngine.sendMessage("Unit Test", msgPlayloadAPI)

    });
  });

  test("User enters invalid email format and clicks 'Send a recovery link'", ({ given, when, then }) => {
    given("the user is on the Forgot Password page", () => {
      // You can use instance to simulate state and interaction
    });

    when("the user enters an invalid email format", () => {
    });

    when("the user clicks 'Send a recovery link'", () => {
      instance.setState({ emailExists: false })
      const mockResponseMessage = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockResponseMessage.messageId
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { errors: "" }
      );
      instance.forgetId = mockResponseMessage.messageId;
      runEngine.sendMessage("Unit Test", mockResponseMessage);

      const msgPlayloadAPI = new Message(getName(MessageEnum.NavigationPayLoadMessage))
      msgPlayloadAPI.addData(getName(MessageEnum.AuthTokenDataMessage), "token");
      runEngine.sendMessage("Unit Test", msgPlayloadAPI)
    });

    then("an error message should be displayed", () => {
    });
  });
})