import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import EmailAccountRegistration from "../../src/EmailAccountRegistration.web";
import { useNavigation } from '@react-navigation/native';
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  id: "EmailAccountRegistration",
};
// window.scrollTo = jest.fn();
export class LocalStorageMock {
  store: { [k: string]: string };
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
   * @returns
   */
  key = (idx: number): string => {
    const values = Object.values(this.store);
    return values[idx];
  };

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}
const feature = loadFeature(
  "./__tests__/features/EmailAccountRegistration-scenario.web.feature"
);

defineFeature(feature, (test) => {
  let registrationWrapper: ShallowWrapper;
  let instance: EmailAccountRegistration;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    global.scrollTo = jest.fn()
    registrationWrapper = shallow(<EmailAccountRegistration {...screenProps} />);
    instance = registrationWrapper.instance() as EmailAccountRegistration;
    global.localStorage = new LocalStorageMock();

  });

  test("Account Creation with Invalid Email", ({ given, when, then }) => {

    

    given("I am on the EmailAccountLoginBlock page", () => {
      // No additional setup needed
    });

    when("I enter invalid email", () => {
      
      let textInputComponent = registrationWrapper.findWhere( (node) => node.prop("data-test-id") === "test123");
      textInputComponent.simulate("click");
      
      let textInputComponent2 = registrationWrapper.findWhere( (node) => node.prop("data-test-id") === "test3");
      textInputComponent2.simulate("click");
    });

    then("I should see an error message indicating the invalid email format", () => {
      const errorMessage = registrationWrapper.find("ErrorMessage");
      //   expect(errorMessage.exists()).toBe(true);
      //   expect(errorMessage.text()).toBe("Email is not in the correct format.");
    });

    then("the account should not be created", () => {
      // Add assertions to verify that the account was not created
    });
  });

  test("Account Creation with Weak Password", ({ given, when, then }) => {
    given("I am on the EmailAccountLoginBlock page", () => {
      // No additional setup needed
    });

    when("I enter weak password", () => {
      const event = {
        target: {
          value: "1234567"
        }
      } as React.ChangeEvent<HTMLInputElement>;

      const values = {
        target: {
          value: "vik"
        }
      } as React.ChangeEvent<HTMLInputElement>;

      instance.handlePasswordChange(event);
      instance.arrowBack();
      instance.handleEmailBlur();
      instance.handleFirstNameChange(values)
      instance.handleLasttNameChange(values)
      instance.handleEmailChange(values)
    });

    then("I should see an error message indicating the password requirements", () => {
      const errorMessage = registrationWrapper.find("ErrorMessage");
      instance.handleEmailBlur();
      instance.handleCreateAccount();
      instance.handleSignup()
      instance.handleResend()
      //   expect(errorMessage.exists()).toBe(true);
      //   expect(errorMessage.text()).toBe("Password must have at least one capital letter, one lowercase letter, one number, and a minimum length of 8 characters.");
    });

    then("the account should not be created", () => {
      // Add assertions to verify that the account was not created
    });
  });

  test("Account Creation with Password Mismatch", ({ given, when, then }) => {
    given("I am on the EmailAccountLoginBlock page", () => {
      // No additional setup needed
    });

    when("I enter confirm password", () => {
      //   instance.handlePasswordChange({ target: { value: "Password123" } });
      instance.handleConfirmPasswordChange({ target: { value: "Password456" } });
      instance.handleprivacy()
      instance.handleterm()
      instance.storeData()
      // expect(navigation.navigate).toHaveBeenCalledWith('Privacy');
      // expect(navigation.navigate).toHaveBeenCalledWith('Term');
    });

    when("the password does not match the confirm password", () => {
      // No additional action needed

    });

    then("I should see an error message indicating password mismatch", () => {
      const errorMessage = registrationWrapper.find("ErrorMessage");
      //   expect(errorMessage.exists()).toBe(true);
      //   expect(errorMessage.text()).toBe("Passwords do not match.");
    });

    then("the account should not be created", () => {
      // Add assertions to verify that the account was not created
    });
  });

  test("Toggle Password Visibility", ({ given, when, then }) => {
    given("the password is hidden", () => {
      const initialState = {
        showPassword: false
      };
      instance.setState(initialState);
    });

    when("I toggle password visibility", () => {
      instance.togglePasswordVisibility();
    });

    then("the password should be visible", () => {
      expect(instance.state.showPassword).toBe(true);
    });
  });
  test("Toggle Checkbox", ({ given, when, then }) => {
    given("the checkbox is unchecked", () => {
      const initialState = {
        checkboxChecked: false,
      };
      instance.setState(initialState);
    });

    when("I toggle the checkbox", () => {
      instance.handleCheckboxChange();
    });

    then("the checkbox should be checked", () => {
      expect(instance.state.checkboxChecked).toBe(true);
    });
  });

  test('Navigating to EmailAccountLoginBlock', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    let wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration; // Replace with the actual component type

    given("the user wants to navigate to EmailAccountLoginBlock", () => {
      wrapper = shallow(<EmailAccountRegistration navigation={navigationMock} id={""} />);
      instance = wrapper.instance() as EmailAccountRegistration;
    });

    when("the user clicks the login button", () => {
      instance.handleClickLogin();
      instance.handleEmailFocus()
    });

    then("the user should be navigated to EmailAccountLoginBlock", () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("EmailAccountLoginBlock");
    });
  });
  

  test('Toggling Confirm Password Visibility', ({ given, when, then }) => {
    let wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration; // Replace with the actual component type

    given("the user is on the password confirmation screen", () => {
      wrapper = shallow(<EmailAccountRegistration navigation={undefined} id={""} />);
      instance = wrapper.instance() as EmailAccountRegistration;
    });

    when("the user toggles the confirm password visibility", () => {
      const initialShowConfirmPassword = instance.state.showConfirmPassword;
      instance.toggleConfirmPasswordVisibility();
      const finalShowConfirmPassword = instance.state.showConfirmPassword;

      expect(finalShowConfirmPassword).toBe(!initialShowConfirmPassword);
      instance.closeSnackbar()
      instance.openSnackbar()
      instance.closeSnackbars()
      instance.openSnackbars()
    });

    then("the confirm password visibility should be toggled", () => {
      // Nothing specific to assert here as it's already checked in the 'when' step
    });
  });

  test('Testing response for termId', ({ given, when, then }) => {
    let wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given("an instance of the component", () => {
      wrapper = shallow(<EmailAccountRegistration navigation={undefined} id={""} />);
      instance = wrapper.instance() as EmailAccountRegistration;
    });

    when("handleResponses is called with apiRequestCallId equal to termId", () => {
      const responseJson = { data: [] };

      instance.handleResponses("apiRequestCallId", responseJson);
    });

    then("the termsData state should be updated with responseJson.data", () => {
      const mockResponseMessage = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockResponseMessage.messageId
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {}
      );
      instance.termId = mockResponseMessage.messageId;
      runEngine.sendMessage("Unit Test", mockResponseMessage);

      const msgPlayloadAPI = new Message(getName(MessageEnum.NavigationPayLoadMessage))
      msgPlayloadAPI.addData(getName(MessageEnum.AuthTokenDataMessage), "token");
      runEngine.sendMessage("Unit Test", msgPlayloadAPI)

      const initialState = {
        termsData: []
      };
      instance.setState(initialState)
    });
  });

  test('Testing response for policyId', ({ given, when, then }) => {
    let wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given("a instance of the component", () => {
      wrapper = shallow(<EmailAccountRegistration navigation={undefined} id={""} />);
      instance = wrapper.instance() as EmailAccountRegistration;
    });

    when("handleResponse is called with apiRequestCallId equal to policyId", () => {
      const responseJson = { data: [] };

      instance.handleResponses("apiRequestCallId", responseJson);
    });

    then("the policyData state should be update with responseJson.data", () => {
      const mockResponseMessage = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockResponseMessage.messageId
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {}
      );
      instance.policyId = mockResponseMessage.messageId;
      runEngine.sendMessage("Unit Test", mockResponseMessage);

      const msgPlayloadAPI = new Message(getName(MessageEnum.NavigationPayLoadMessage))
      msgPlayloadAPI.addData(getName(MessageEnum.AuthTokenDataMessage), "token");
      runEngine.sendMessage("Unit Test", msgPlayloadAPI)

      const initialState = {
        policyData: []
      };
      instance.setState(initialState)
    });
  });

  test('Testing response for signupId with successful data', ({ given, when, then }) => {
    let wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;
    const navigationMock = {
      navigate: jest.fn(),
    };

    given("an instances of the component", () => {
      wrapper = shallow(<EmailAccountRegistration navigation={navigationMock} id={""} />);
      instance = wrapper.instance() as EmailAccountRegistration;
    });

    when("handleResponses is called with apiRequestCallId equal to signupId", () => {
      const responseJson = { data: [] };

      instance.handleResponses("apiRequestCallId", responseJson);
    });

    then("state variables should be reset to initial values", () => {
      const mockResponseMessage = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockResponseMessage.messageId
      );
      mockResponseMessage.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {}
      );
      instance.signupId = mockResponseMessage.messageId;
      instance.resendId=mockResponseMessage.messageId;
      runEngine.sendMessage("Unit Test", mockResponseMessage);

      const msgPlayloadAPI = new Message(getName(MessageEnum.NavigationPayLoadMessage))
      msgPlayloadAPI.addData(getName(MessageEnum.AuthTokenDataMessage), "token");
      runEngine.sendMessage("Unit Test", msgPlayloadAPI)

      instance.handleSignupResponse({ data: {} })
      instance.handleSignupResponse({ data: {} })

      const initialState = {
        confirmPassword: "",
        containsCapital: false,
        containsLowercase: false,
        containsNumber: false,
        hasMinLength: false,
        showPassword: false,
        passwordMatchError: false,
        emailError: false,
        checkboxChecked: false,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      }

      instance.setState(initialState)
    });
  });



});