import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import FilterItemBox from "../../src/FilterItemBox.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "FilterItemBox",
  cities: ["New York", "Los Angeles", "London"]
};

const feature = loadFeature(
  "./__tests__/features/FilterItemBox-scenario.web.feature"
);

defineFeature(feature, test => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });
  afterEach(() => {
    jest.useRealTimers(); // Restore real timers after the test
  });
  test("User navigates to LandingPage", ({ given, when, then }) => {
    let FilterItemBoxBlock: ShallowWrapper;
    let instance: FilterItemBox;

    given("I am a User loading LandingPage", () => {
      FilterItemBoxBlock = shallow(<FilterItemBox {...screenProps} />);
    });

    when('I navigate to the LandingPage', () => {
      instance = FilterItemBoxBlock.instance() as FilterItemBox
      instance.setState({ cities: ["New York", "Los Angeles", "London"] })
      instance.setState({ showFilters: true })
      instance.setState({ size: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] })
      instance.setState({ proptyTypeValue: "text" })
      instance.setState({ bedminValue: "text",showMoreFilters:true })
      const buttontest3 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "MenuOption")
      // buttontest3.simulate("click")

      // const buttontest3 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "MenuOption")
      // buttontest3.simulate("click")
      // const buttontest4 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover3").at(0)
      // buttontest4.simulate("click", "test")
      // const buttontest5 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover4").at(0)
      // buttontest5.simulate("click", "test")
      // instance.setState({showMoreFilters:true})
      // const buttontest6 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover5").at(0)
      // buttontest6.simulate("click", "test")
      // const buttontest7 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover6").at(0)
      // buttontest7.simulate("click", "test")
      // const buttontest8 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover7").at(0)
      // buttontest8.simulate("click", "test")
      // const buttontest9 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover8").at(0)
      // buttontest9.simulate("click", "test")
      // const buttontest10 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover9").at(0)
      // buttontest10.simulate("click", "test")
      // const buttontest11 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover10").at(0)
      // buttontest11.simulate("click", "test")
      // const buttontest12 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover11").at(0)
      // buttontest12.simulate("click", "test")
      // const buttontest13 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover12").at(0)
      // buttontest13.simulate("click", "test")
      // const buttontest14 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "listhover13").at(0)
      // buttontest14.at(0).simulate("click", "test")

      // const buttontest16 = FilterItemBoxBlock.findWhere((node) => node.prop("data-test-id") === "handleClick2").at(0)
      // buttontest16.simulate("click", "test")


    });

    then("LandingPage will load with out errors", () => {
      instance.setState({ size: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] })

      instance.handleFirstTypographyEntered();
      instance.handleShowProperties();
      // instance.handleClose();
      // instance.handleCloseEcp();
      // instance.handleClosePF();
      // instance.handleCloseSfMax();
      // instance.handleCloseSfMax();
      // instance.handleCloseSfMin();
      // instance.handleCloseLoc();
      // // instance.handleClosePropList();
      // instance.handleClosePriceMin();
      // instance.handleClosePriceMax();
      // instance.handleCloseBedMin();
      // instance.handleCloseBedMax();
      // instance.handleCloseBathMin();
      // instance.handleCloseBathMax();
      instance.handleFirstTypographyEntered();
      jest.advanceTimersByTime(1000);
      instance.handleShowProperties();
      jest.advanceTimersByTime(1000);
      instance.toggleDropdown();
      instance.handleCloseSort();
      expect(FilterItemBoxBlock).toBeTruthy();
    });

    then("I can select the button with with out errors", () => {

    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(FilterItemBoxBlock).toBeTruthy();
    });
  });
});
