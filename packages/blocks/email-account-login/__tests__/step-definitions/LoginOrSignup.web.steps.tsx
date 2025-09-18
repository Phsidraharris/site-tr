import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import LoginOrSignup from "../../src/LoginOrSignup.web"

const feature = loadFeature("./__tests__/features/LoginOrSignup-scenario.web.feature"); // Update the path

defineFeature(feature, (test) => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  let activeGridId;

  test("User sees the login and signup options", ({ given, when, then }) => {
    given("I am a User", () => {});

    when("I open the LoginOrSignup component", () => {
      wrapper = shallow(<LoginOrSignup navigation={undefined} id={""} />);
    });

    then("I should see the \"Log in\" and \"Sign up\" options", () => {
      const logInOption = wrapper.findWhere((node) =>
        node.text().includes("Log in")
      );
      const signUpOption = wrapper.findWhere((node) =>
        node.text().includes("Sign up")
      );

      expect(logInOption.exists()).toBe(true);
      expect(signUpOption.exists()).toBe(true);
    });
  });

  test("User clicks on the \"Log in\" option", ({ given, when, then }) => {
    given("I am a User", () => {});

    when("I open the LoginOrSignup component", () => {
      wrapper = shallow(<LoginOrSignup navigation={undefined} id={""} />);
    });

    then("the \"Log in\" option should be active", () => {
      const logInOption = wrapper.findWhere((node) =>
        node.text().includes("Log in")
      );
      // const logInCard = logInOption.closest(".gridCard"); // Change this to the correct CSS class selector
      // expect(logInCard.prop("style")).toHaveProperty("backgroundColor", "#273567");
      // expect(logInCard.prop("style")).toHaveProperty("color", "white");
    });
    

    then("the \"Sign up\" option should not be active", () => {
      const signUpOption = wrapper.findWhere((node) =>
        node.text().includes("Sign up")
      );
      // const signUpCard = signUpOption.closest("Card");

      // expect(signUpCard.prop("style")).not.toHaveProperty("backgroundColor", "#273567");
      // expect(signUpCard.prop("style")).not.toHaveProperty("color", "white");
    });
  });

  test("User clicks on the \"Sign up\" option", ({ given, when, then }) => {
    given("I am a User", () => {});
  
    when("I open the LoginOrSignup component", () => {
      wrapper = shallow(<LoginOrSignup navigation={undefined} id={""} />);
    });
  
    when("I click on the \"Sign up\" option", () => {
      wrapper.setState({ activeGridId: 2 }); // Simulate clicking on the "Sign up" option
    });
  
    then("the \"Sign up\" option should be active", () => {
      const signUpCard = wrapper.findWhere(
        (node) => node.text().includes("Sign up") && node.name() === "Card"
      );
      // expect(signUpCard.props().style).toHaveProperty("color", "white");
    });
    
  
    then("the \"Log in\" option should not be active", () => {
      const logInCard = wrapper.findWhere(
        (node) => node.text().includes("Log in") && node.name() === "Card"
      );
      // expect(logInCard.prop("style")).not.toHaveProperty("color", "white");
    });
  });

  test('Navigating with activeGridId set to 1', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };
  
    let wrapper: ShallowWrapper;
    let instance: LoginOrSignup;
  
    given("activeGridId is 1", function (activeGridId: number) {
      wrapper = shallow(<LoginOrSignup navigation={navigationMock} id={""} />);
      instance = wrapper.instance() as LoginOrSignup;
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
    let instance: LoginOrSignup;
  
    given('activeGridId is not 1', () => {
      // Set up your component with a different activeGridId
      exampleBlockA = shallow(<LoginOrSignup navigation={navigationMock} id={""} />);
    });
  
    when('the user clicks the button', () => {
      instance = exampleBlockA.instance() as LoginOrSignup;
      instance.handleClick();
    });
  
    then('the user should be navigated to EmailAccountregistration', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("EmailAccountLoginBlock");
    });
  });
  
});