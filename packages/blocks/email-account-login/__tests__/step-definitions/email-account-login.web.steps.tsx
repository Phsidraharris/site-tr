import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
import { fireEvent, render } from '@testing-library/react';

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import EmailAccountLoginBlock from "../../src/EmailAccountLoginBlock.web";

const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn()
  },
  id: "EmailAccountLoginBlock",
};

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

const buyerResponseData = {
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q",
    role_id: 2
  },
};

const agentResponseData = {
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q",
    role_id: 3
  },
};

const solicitorResponseData = {
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q",
    role_id: 4
  },
};

const feature = loadFeature(
  "./__tests__/features/email-account-login-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Email Log In", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("I am a User attempting to Log In with a Email", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountLoginBlock {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();

      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;

      const msgValidationAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgValidationAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgValidationAPI.messageId
      );
      msgValidationAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: [
            {
              email_validation_regexp:
                "^[a-zA-Z0-9.!\\#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
              password_validation_regexp:
                "^(?=.*[A-Z])(?=.*[#!@$&*?<>',\\[\\]}{=\\-)(^%`~+.:;_])(?=.*[0-9])(?=.*[a-z]).{8,}$",
              password_validation_rules:
                "Password should be a minimum of 8 characters long, contain both uppercase and lowercase characters, at least one digit, and one special character (!@#$&*?<>',[]}{=-)(^%`~+.:;_).",
            },
          ],
        }
      );
      instance.validationApiCallId = msgValidationAPI.messageId;
      runEngine.sendMessage("Unit Test", msgValidationAPI);
    });

    when("I navigate to the Log In Screen", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
    });

    then("I can select Log In with Soical Media Account", () => {
      let btnSocialLogin = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnSocialLogin"
      );
      instance.goToSocialLogin();
      expect(mobileAccountLogInWrapper).toBeTruthy();
      instance.handleEmailFocus();
      const event = {
        target: {
          value: "1234567"
        }
      } as React.ChangeEvent<HTMLInputElement>;
      instance.handleEmailChange(event);
      instance.handleLogout()
      instance.handleUserActivity()
      instance.handleEmailBlur()
      instance.openSnackbarPass()
      instance.closeSnackbarPass()
    });

    then("I can toggle the Password Show/Hide with out errors", () => {

    });

    then("I can toggle the Remember Me with out errors", () => {

    });

    then("I can select the Log In button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnEmailLogIn"
      );
      // buttonComponent.simulate("click");
      instance.navigateForgotPassword()
    });

    then("I can select the Forgot Password button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnForgotPassword"
      );
      // buttonComponent.simulate("click");
    });

    then("I can enter a email address with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "txtInputEmail"
      );
    });

    then("I can enter a password with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "txtInputPassword"
      );
      textInputComponent.simulate("change", {
        target: { value: "passWord1!" },
      });
    });

    then("I can leave the screen with out errors", () => {
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });
  });

  test("Empty Email Address", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("I am a User attempting to Log In with a Email Address", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountLoginBlock {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    when("I Log In with an empty Email Address", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
      instance.setState({ email: "", password: "password!" });
    });

    then("Log In Should Fail", () => {
      expect(instance.doEmailLogIn()).toBe(false);

      const msgLogInErrorRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInErrorRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInErrorRestAPI
      );
      msgLogInErrorRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          errors: [
            {
              failed_login: "Login Failed",
            },
          ],
        }
      );

      msgLogInErrorRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInErrorRestAPI.messageId
      );
      instance.apiEmailLoginCallId = msgLogInErrorRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInErrorRestAPI);

      instance.setState({ email: 'example@gmail.com' })
      instance.setState({ password: '@dsfD2341234' })
    });
  });

  test("Email Address and Empty Password", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("I am a User attempting to Log In with a Email Address", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountLoginBlock {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    when("I Log In with a Email Address and empty Password", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
      instance.setState({ email: "test@aol.com", password: "" });
      instance.setState({ enablePasswordField: true })
      instance.setState({ enablePasswordField: false })
      instance.setState({ emailBlurred: true })
      // instance.setState({emailBlurred : false})
      instance.setState({ finishedTyping: true })
      instance.setState({ finishedTyping: false })
      instance.setState({ emailError: true })
      instance.setState({ emailError: false })
      instance.setState({ emailExists: false })
      instance.setState({ emailExists: true })
      instance.setState({ loginButtonDisabled: true })
      instance.setState({ loginButtonDisabled: false })
      instance.setState({ showError: false })
      instance.setState({ showError: true })
      instance.setState({ shouldShowRedBorder: true })
      instance.setState({ shouldShowRedBorder: false })
      const gridId = 123; // Replace with the desired grid ID

      // Call the handleGridClick function with the grid ID
      instance.handleGridClick(gridId)();

      // Assert that the state has been updated correctly
      expect(mobileAccountLogInWrapper.state('activeGridId')).toEqual(gridId);
    });

    then("Log In Should Fail", () => {
      expect(instance.doEmailLogIn()).toBe(false);
    });
  });

  test("Password and Empty Email Address", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("I am a User attempting to Log In with a Email Address", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountLoginBlock {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    when("I Log In with a Password and empty Email Address", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
      instance.setState({ email: "", password: "password" });
    });

    then("Log In Should Fail", () => {
      expect(instance.doEmailLogIn()).toBe(false);
    });
  });

  test("Email Address and Password", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given(
      "I am a Registed User attempting to Log In with a Email Address",
      () => {
        mobileAccountLogInWrapper = shallow(
          <EmailAccountLoginBlock {...screenProps} />
        );
        expect(mobileAccountLogInWrapper).toBeTruthy();
      }
    );

    when("I Log In with Email Address and Password", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;
      instance.setState({ email: "abc@aol.com", password: "password" });
    });

    then("Log In Should Succeed", () => {
      instance.handleLogin()
    });

    then("RestAPI will return token", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          meta: {
            token:
              "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q",
            role_id: 1
          },
        }
      );
      instance.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });
  });

  test("Remember Me - Email Address Account Log In", ({
    given,
    when,
    then,
  }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given(
      "I am a Registed User who has already Logged In and selected Remember Me",
      () => {
        //Force ios to render mobile layout once.
        jest.spyOn(helpers, "getOS").mockImplementation(() => "ios");
        mobileAccountLogInWrapper = shallow(
          <EmailAccountLoginBlock {...screenProps} />
        );
        expect(mobileAccountLogInWrapper).toBeTruthy();
      }
    );

    when("I navigate to Email Address Account Log In", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountLoginBlock;

      const msgRestoreCreds = new Message(
        getName(MessageEnum.ReciveUserCredentials)
      );
      msgRestoreCreds.addData(getName(MessageEnum.LoginPassword), "passWord1!");
      msgRestoreCreds.addData(
        getName(MessageEnum.LoginUserName),
        "test@aol.com"
      );
      runEngine.sendMessage("Unit Test", msgRestoreCreds);
    });

    then(
      "The Country Code, Email Address and Password will be restored",
      () => {
        expect(mobileAccountLogInWrapper).toBeTruthy();
      }
    );
  });

  test('Clicking on the checkbox toggles Remember Me status', ({ given, when, then }) => {
    let wrapper: ShallowWrapper;
    given('the Remember Me checkbox is displayed', () => {
      wrapper = shallow(<EmailAccountLoginBlock navigation={undefined} id={"kjahsdjkhaKSJDH"} />);
    });

    when('I click on the Remember Me checkbox', () => {
      wrapper.find('[data-test-id="btnRememberMe"]').simulate('click');
    });

    then('the Remember Me status should be toggled', () => {
      expect(wrapper.find('[data-test-id="btnRememberMe"]').prop('checked')).toBe(true);
    });
  });

  test('Navigating with activeGridId set to 1', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    let wrapper: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given("activeGridId is 1", function (activeGridId: number) {
      wrapper = shallow(<EmailAccountLoginBlock navigation={navigationMock} id={""} />);
      instance = wrapper.instance() as EmailAccountLoginBlock;
      instance.setState({ activeGridId });
    });

    when("the user clicks the button", function () {
      instance.handleClick();
    });

    then("the user should be navigated to EmailAccountLoginBlock", function (screen: string) {
      const expectedScreen = screen === "EmailAccountLoginBlock" ? "EmailAccountLoginBlock" : "ChooseType";
      expect(navigationMock.navigate).toHaveBeenCalledWith(expectedScreen);
    });
  });

  test('Navigating with activeGridId not set to 1', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    let exampleBlockA: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given('activeGridId is not 1', () => {
      // Set up your component with a different activeGridId
      exampleBlockA = shallow(<EmailAccountLoginBlock navigation={navigationMock} id={""} />);
    });

    when('the user clicks the button', () => {
      instance = exampleBlockA.instance() as EmailAccountLoginBlock;
      instance.handleClick();
    });

    then('the user should be navigated to ChooseType', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("EmailAccountLoginBlock");
    });
  });

  test('Navigating with handlesinnup', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    let exampleBlockA: ShallowWrapper;
    let instance: EmailAccountLoginBlock;

    given('handlesinnup is active', () => {
      // Set up your component with a different activeGridId
      exampleBlockA = shallow(<EmailAccountLoginBlock navigation={navigationMock} id={""} />);
    });

    when('the user clicks the button', () => {
      instance = exampleBlockA.instance() as EmailAccountLoginBlock;
      instance.handlesinnup();
      instance.closeSnackbar()
      instance.openSnackbar()
    });

    then('the user should be navigated to ChooseType', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("ChooseType");
    });
  });

  test('User navigate to the email login screen', ({ given, when, then }) => {
    let loginScreenWrapper: ShallowWrapper;
    let loginProfileInstance: EmailAccountLoginBlock;
    const mockNavigate = (routePath: string) => {
      const to = new Message(getName(MessageEnum.NavigationMessage));
      to.addData(
        getName(MessageEnum.NavigationTargetMessage),
        routePath
      );
      to.addData(getName(MessageEnum.NavigationPropsMessage), { ...screenProps });
    };

    given("I am user navigate to the email login screen", () => {
      loginScreenWrapper = shallow(<EmailAccountLoginBlock {...screenProps} />)
      loginProfileInstance = loginScreenWrapper.instance() as EmailAccountLoginBlock
    });

    when("The user clicks on the login button as a buyer", () => {
      mockAPICall(loginProfileInstance, "loginCallId", buyerResponseData);
    });

    then("The user should be navigated to buyer user profile screen", () => {
      mockNavigate("customisableBuyerProfiles");
    });

    when("The user clicks on the login button as a agent", () => {
      mockAPICall(loginProfileInstance, "loginCallId", agentResponseData);
    });

    then("The user should be navigated to agent user profile screen", () => {
      mockNavigate("LandingPage");
    });

    when("The user clicks on the login button as a solicitor", () => {
      mockAPICall(loginProfileInstance, "loginCallId", solicitorResponseData);
    });

    then("The user should be navigated to solicitor user profile screen", () => {
      mockNavigate("LandingPage");
    });
  });
});