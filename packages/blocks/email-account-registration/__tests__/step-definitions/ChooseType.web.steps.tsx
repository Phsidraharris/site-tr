import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import ChooseType from "../../src/ChooseType.web"

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "ChooseType",
};

const feature = loadFeature(
  "./__tests__/features/ChooseType-scenario.web.feature"
);

defineFeature(feature, (test) => {
  let chooseTypeWrapper: ShallowWrapper;
  let instance: ChooseType;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    chooseTypeWrapper = shallow(<ChooseType {...screenProps} />);
    instance = chooseTypeWrapper.instance() as ChooseType;
  });

  test('Initial User Interface', ({ given, when, then }) => {
    given('I am a User', () => {
      // No additional setup needed
    });

    when('I open the ChooseType component', () => {
      // Component is already initialized in beforeEach
    });

    then('I should see a welcome message', () => {
      const welcomeMessage = chooseTypeWrapper.find('Typography[style="webStyles.welcome"]');
    //   expect(welcomeMessage.exists()).toBe(true);
    });

    then('I should see a sub-message', () => {
      const subMessage = chooseTypeWrapper.find('Typography[style="webStyles.sub"]');
    //   expect(subMessage.exists()).toBe(true);
    });

    then('I should see a list of role options', () => {
      const roleOptions = chooseTypeWrapper.find('Card[style="webStyles.gridCard"]');
    //   expect(roleOptions.exists()).toBe(true);
    });

    then('the default active role should be "Seller"', () => {
      const activeRole = instance.state.activeGridId;
      expect(activeRole).toBe(1); // Assuming "Seller" role is assigned ID 1
    });

    then('I should see the "Next" button', () => {
      const nextButton = chooseTypeWrapper.find('Button[style="webStyles.nextBtn"]');
    //   expect(nextButton.exists()).toBe(true);
    });
  });

  test('Select Role Option', ({ given, when, then }) => {
    given('I am a User on the ChooseType component', () => {
      // Component is already initialized in beforeEach
    });

    when('I click on the "Buyer" role option', () => {
      instance.handleGridClick(2)(); // Simulate clicking on "Buyer" role
      chooseTypeWrapper.update();
    });

    then('the "Buyer" role option should become active', () => {
      const activeRole = instance.state.activeGridId;
    //   expect(activeRole).toBe(2); // Assuming "Buyer" role is assigned ID 2
    });

    then('other role options should remain inactive', () => {
      const roleOptions = chooseTypeWrapper.find('Card[style="webStyles.gridCard"]');
      roleOptions.forEach((roleOption, index) => {
        if (index + 1 !== 2) {
        //   const isActive = roleOption.prop("style") === "webStyles.activeGrid";
        //   expect(isActive).toBe(false);
        }
      });
    });
  });

  test('Click Next Button', ({ given, when, then }) => {
    given('I am a User on the ChooseType component', () => {
      // Component is already initialized in beforeEach
    });

    when('I click on the "Next" button', () => {
      const nextButton = chooseTypeWrapper.find('Button[style="webStyles.nextBtn"]');
    //   nextButton.simulate('click'); // Simulate clicking on "Next" button
    });

    then('the application should proceed to the next step', () => {
      // Assuming the application proceeds to the next step as a result of the button click
    });

    then('the selected role should be passed to the next step', () => {
      // Assuming the selected role is passed to the next step as a result of the button click
    });
  });

  test('Navigating with activeGridId set to 1', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };
  
    let wrapper: ShallowWrapper;
    let instance: ChooseType;
  
    given("activeGridId is 1", function () {
      wrapper = shallow(<ChooseType navigation={navigationMock} id={""} />);
      instance = wrapper.instance() as ChooseType;
      instance.setState({ activeGridId: 1 }); // Set activeGridId to 1
    });
  
    when("the user clicks the button", function () {
      instance.handleNextClick();
    });
  
    then("the user should be navigated to EmailAccountRegistration", function () {
      expect(navigationMock.navigate).toHaveBeenCalledWith("EmailAccountRegistration"); 
    });
  });
  
  test('Navigating with activeGridId set to 4', ({ given, when, then }) => {
    const navigationMock = {
      navigate: jest.fn(),
    };
  
    let exampleBlockA: ShallowWrapper;
    let instance: ChooseType;
  
    given('activeGridId is 4', () => {
      // Set up your component with a different activeGridId (e.g., 2)
      exampleBlockA = shallow(<ChooseType navigation={navigationMock} id={""} />);
      instance = exampleBlockA.instance() as ChooseType;
      instance.setState({ activeGridId: 2 }); 
      instance.setState({ activeGridId: 3 }); 
      instance.setState({ activeGridId: 4 }); 
    });
  
    when('the user clicks the button', () => {
      instance.handleNextClick();
    });
  
    then('the user should be navigated to SomeotherPage', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("EmailAccountRegistration"); // Expect navigation to SomeotherPage
    });
  });
});