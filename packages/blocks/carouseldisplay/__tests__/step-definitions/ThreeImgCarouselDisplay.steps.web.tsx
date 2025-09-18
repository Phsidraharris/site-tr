import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import ThreeImgCarouselDisplay from "../../src/ThreeImgCarouselDisplay.web";
const screenProps = {
  navigation: {
    goBack: () => jest.fn(),
    navigate: () => jest.fn(),
  },
  id: "NavigationMenu",
};

const feature = loadFeature(
  "./__tests__/features/ThreeImgCarouselDisplay-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to ThreeImgCarouselDisplay", ({ given, when, then }) => {
    let carouselBlock: ShallowWrapper;
    let instance: ThreeImgCarouselDisplay;

    given("I am a User loading ThreeImgCarouselDisplay", () => {
      carouselBlock = shallow(<ThreeImgCarouselDisplay {...screenProps} />);
    });

    when("I navigate to the ThreeImgCarouselDisplay", () => {
      instance = carouselBlock.instance() as ThreeImgCarouselDisplay;
    });
    then("ThreeImgCarouselDisplay will load with out errors", () => {
      let carousel = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "threeImgCarousel"
      );
      carousel.props().onChange();
      let carousel2 = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "gridItem0"
      );
      carousel2.simulate("click");

      let carousel3 = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "gridThirdItem0"
      );
      carousel3.simulate("click");

      let carousel4 = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "gridSecondItem0"
      );
      carousel4.simulate("click");
    });
  });

  test("User will click share and location buttons", ({
    given,
    when,
    then,
  }) => {
    let carouselBlock: ShallowWrapper;
    let instance: ThreeImgCarouselDisplay;
    given("I am a User loading ThreeImgCarouselDisplay", () => {
      carouselBlock = shallow(<ThreeImgCarouselDisplay {...screenProps} />);
    });

    when("I navigate to the ThreeImgCarouselDisplay", () => {
      instance = carouselBlock.instance() as ThreeImgCarouselDisplay;
    });
    then("I will click on share and location buttons", () => {
      let share = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "shareBtn"
      ).at(0);
      share.simulate("click", { stopPropagation() {} });

      let location = carouselBlock.findWhere(
        (node) => node.prop("data-testid") === "locationCopy"
      ).at(0);
      location.simulate("click", { stopPropagation() {} });

    });
  });
});
