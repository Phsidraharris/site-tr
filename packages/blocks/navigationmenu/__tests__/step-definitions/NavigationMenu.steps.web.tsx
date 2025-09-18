import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import NavigationMenu from "../../src/NavigationMenu.web";

const screenProps = {
  navigation: {
    goBack: () => jest.fn(),
    navigate: () => jest.fn(),
  },
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
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when('I click on the "Browse Properties" link', () => {
      const browsePropertiesLink = navigationMenuBlock.find(
        '[data-testid="testid1"]'
      );
      browsePropertiesLink.simulate("click");
      instance.handleMyHub("EmailAccountLoginBlock");
    });

    then('the active link should be "Browse Properties"', () => {
      expect(instance.state.activeLink).toBe("Browse Properties");
    });
  });

  test("Clicking on menu img will update webDrawer state", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });
    when("I click on menu img", () => {
      const menuImg = navigationMenuBlock.find('[data-testid="menuImg"]');
      menuImg.simulate("click");
    });
    then("The webDrawer state will be true", () => {
      expect(instance.state.webDrawer).toBe(true);
    });
  });

  test("Clicking on navbar tabs will change activelink state accordingly", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });
    when("I click on valuation tab", () => {
      const valuationTab = navigationMenuBlock.find(
        '[data-testid="valuation"]'
      );
      valuationTab.simulate("click");
    });
    then("The activeLink state will be changed to valuation", () => {
      expect(instance.state.activeLink).toBe("Valuation");
    });
    then("I click on Market Insights tab", () => {
      const marketInsighttab = navigationMenuBlock.find(
        '[data-testid="marketInsight"]'
      );
      marketInsighttab.simulate("click");
    });
    then("The activeLink state will be changed to Market Insights", () => {
      expect(instance.state.activeLink).toBe("Market Insights");
    });

    then("I click on About us tab", () => {
      const aboutUs = navigationMenuBlock.find('[data-testid="aboutus"]');
      aboutUs.simulate("click");
    });
    then("The activeLink state will be changed to About us", () => {
      expect(instance.state.activeLink).toBe("About us");
    });
  });

  test("Clicking on navbar tabs in drawer will change activelink state accordingly", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when("I click on Browse properties tab in drawer", () => {
      const drawerBrowsePropertiesTab = navigationMenuBlock.find(
        '[data-testid="drawerBrowseProperties"]'
      );
      drawerBrowsePropertiesTab.simulate("click");
    });
    then("The activeLink state will be changed to browse properties", () => {
      expect(instance.state.activeLink).toBe("Browse Properties");
    });

    when("I click on valuation tab in drawer", () => {
      const drawerValuationTab = navigationMenuBlock.find(
        '[data-testid="drawerValuation"]'
      );
      drawerValuationTab.simulate("click");
    });
    then("The activeLink state will be changed to valuation", () => {
      expect(instance.state.activeLink).toBe("Valuation");
    });
    then("I click on Market Insights tab in drawer", () => {
      const drawerMarketInsighttab = navigationMenuBlock.find(
        '[data-testid="drawerMarketInsight"]'
      );
      drawerMarketInsighttab.simulate("click");
    });
    then("The activeLink state will be changed to Market Insights", () => {
      expect(instance.state.activeLink).toBe("Market Insights");
    });

    then("I click on About us tab in drawer", () => {
      const drawerAboutUs = navigationMenuBlock.find(
        '[data-testid="drawerAboutus"]'
      );
      drawerAboutUs.simulate("click");
    });
    then("The activeLink state will be changed to About us", () => {
      expect(instance.state.activeLink).toBe("About us");
    });
  });

  test("Close img will change state of webDrawer when clicked", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when("I click on close img tab in drawer", () => {
      const closeBtn = navigationMenuBlock.find('[data-testid="closeBtn"]');
      closeBtn.simulate("click");
    });
    then("It will update webDrawer state to false", () => {
      expect(instance.state.webDrawer).toBe(false);
    });
  });

  test("navigation should display Login button when there is no token in Drawer", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when("My Hub button will not be present", () => {
      instance.setState({ token: "webtocket" });
    });
    then("If the token exist then My Hub button will be present", () => {
      const myHubDrawer = navigationMenuBlock.find(
        '[data-testid="myHubDrawer"]'
      );
      expect(myHubDrawer.exists()).toBe(true);
    });
    then("I should be able to navigate to Login page on click", () => {
      const myHubDrawer = navigationMenuBlock.find(
        '[data-testid="myHubDrawer"]'
      );
      myHubDrawer.simulate("click");
      instance.handleMyHub("Categoriessubcategories");
    });
    when(
      "If the tocken does not exist then Login button will be present",
      () => {
        instance.setState({ token: "" });
      }
    );
    then("I should be able to navigate to Categories page on click", () => {
      const loginDrawer = navigationMenuBlock.find(
        '[data-testid="loginDrawer"]'
      );
      loginDrawer.simulate("click");
      instance.handleMyHub("EmailAccountLoginBlock");
    });
  });

  test("navigation should display Login button when there is no token", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when("My Hub button will not be present", () => {
      instance.setState({ token: "webtocket" });
    });
    then("If the token exist then My Hub button will be present", () => {
      const fullMyHub = navigationMenuBlock.find('[data-testid="fullMyHub"]');
      expect(fullMyHub.exists()).toBe(true);
    });
    then("I should be able to navigate to Login page on click", () => {
      const fullMyHub = navigationMenuBlock.find('[data-testid="fullMyHub"]');
      fullMyHub.simulate("click");
      instance.handleMyHub("Categoriessubcategories");
    });
    when(
      "If the tocken does not exist then Login button will be present",
      () => {
        instance.setState({ token: "" });
      }
    );
    then("I should be able to navigate to Categories page on click", () => {
      const fullLogin = navigationMenuBlock.find('[data-testid="fullLogin"]');
      fullLogin.simulate("click");
      instance.handleMyHub("EmailAccountLoginBlock");
    });
  });

  test("navigation should display Login page when no token when clicked on list my properties", ({
    given,
    when,
    then,
  }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("the Navbar component is rendered", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    when("There is no token", () => {
      instance.setState({ token: "" });
    });
    then("Clicked on List my property btn", () => {
      const listProperties = navigationMenuBlock.find(
        '[data-testid="listMyProperties"]'
      );
      listProperties.simulate("click");
      instance.setState({ token: "exampletoken" });
      listProperties.simulate("click");

      let list = navigationMenuBlock.findWhere(
        (node) => node.prop("data-testid") === "drawer"
      );
      list.props().onClose();
    });
  });
});
