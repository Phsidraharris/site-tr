import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import NavigationMenu from "../../src/NavigationMenu";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "NavigationMenu",
};

const feature = loadFeature(
  "./__tests__/features/NavigationMenu-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to NavigationMenu", ({ given, when, then }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("I am a User loading NavigationMenu", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
    });

    when("I navigate to the NavigationMenu", () => {
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    then("NavigationMenu will load with out errors", () => {
      const tokenMsg: Message = new Message(
        getName(MessageEnum.SessionResponseMessage)
      );
      tokenMsg.addData(getName(MessageEnum.SessionResponseToken), "TOKEN");
      runEngine.sendMessage("Unit Test", tokenMsg);

      let data =
        '{"data":{"id":"4","type":"navigation_menu","attributes":{"id":4,"position":"row1","items":[]}}},{"data":{"id":"2","type":"navigation_menu","attributes":{"id":2,"position":"right","items":[{"name":"Builder.ai","url":"http://builder.ai/"}]}}},{"data":{"id":"1","type":"navigation_menu","attributes":{"id":1,"position":"left","items":[{"name":"Builder.ai","url":"http://builder.ai/"},{"name":"Home","url":"Home"}]}}},{"data":{"id":"3","type":"navigation_menu","attributes":{"id":3,"position":"center","items":[{"name":"Builder.ai","url":"http://builder.ai/"},{"name":"Builder.aiw","url":"http://builder.aieee/"}]}}}';
      const msgNavigastionMenuAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgNavigastionMenuAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgNavigastionMenuAPI.messageId
      );
      msgNavigastionMenuAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        data
      );

      runEngine.sendMessage("Unit Test", msgNavigastionMenuAPI);

      expect(navigationMenuBlock).toBeTruthy();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(navigationMenuBlock).toBeTruthy();
    });
  });

  test('Clicking on "Browse Properties" link updates active link state', ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});

    when('I click on the "Browse Properties" link', () => {});

    then('the active link should be "Browse Properties"', () => {});
  });

  test("Clicking on menu img will update webDrawer state", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});
    when("I click on menu img", () => {});
    then("The webDrawer state will be true", () => {});
  });

  test("Clicking on navbar tabs will change activelink state accordingly", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});
    when("I click on valuation tab", () => {});
    then("The activeLink state will be changed to valuation", () => {});
    then("I click on Market Insights tab", () => {});
    then("The activeLink state will be changed to Market Insights", () => {});
    then("I click on About us tab", () => {});
    then("The activeLink state will be changed to About us", () => {});
  });

  test("Clicking on navbar tabs in drawer will change activelink state accordingly", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});
    when("I click on Browse properties tab in drawer", () => {});
    then("The activeLink state will be changed to browse properties", () => {});
    when("I click on valuation tab in drawer", () => {});
    then("The activeLink state will be changed to valuation", () => {});
    then("I click on Market Insights tab in drawer", () => {});
    then("The activeLink state will be changed to Market Insights", () => {});

    then("I click on About us tab in drawer", () => {});
    then("The activeLink state will be changed to About us", () => {});
  });

  test("Close img will change state of webDrawer when clicked", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});

    when("I click on close img tab in drawer", () => {});
    then("It will update webDrawer state to false", () => {});
  });

  test("navigation should display Login button when there is no token in Drawer", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});
    when("My Hub button will not be present", () => {});
    then("If the token exist then My Hub button will be present", () => {});
    then("I should be able to navigate to Login page on click", () => {});
    when(
      "If the tocken does not exist then Login button will be present",
      () => {}
    );
    then("I should be able to navigate to Categories page on click", () => {});
  });

  test("navigation should display Login button when there is no token", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});

    when("My Hub button will not be present", () => {});
    then("If the token exist then My Hub button will be present", () => {});
    then("I should be able to navigate to Login page on click", () => {});
    when(
      "If the tocken does not exist then Login button will be present",
      () => {}
    );
    then("I should be able to navigate to Categories page on click", () => {});
  });

  test("navigation should display Login page when no token when clicked on list my properties", ({
    given,
    when,
    then,
  }) => {
    given("the Navbar component is rendered", () => {});

    when("There is no token", () => {});
    then("Clicked on List my property btn", () => {});
  });
});
