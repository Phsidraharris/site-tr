import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import CarouselDisplay from "../../src/CarouselDisplay";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CarouselDisplay",
};

const feature = loadFeature(
  "./__tests__/features/CarouselDisplay-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to CarouselDisplay", ({ given, when, then }) => {
    let carouselDisplay: ShallowWrapper;
    let instance: CarouselDisplay;

    given("I am a User loading CarouselDisplay", () => {
      carouselDisplay = shallow(<CarouselDisplay {...screenProps} />);
    });

    when("I navigate to the CarouselDisplay", () => {
      instance = carouselDisplay.instance() as CarouselDisplay;
    });

    then("CarouselDisplay will load with out errors", () => {
      expect(carouselDisplay).toBeTruthy();
      // expect(carouselDisplay).toMatchSnapshot()
    });
    then("User list data load with out errors", async () => {
      const userListApi: Message = new Message(
        getName(MessageEnum.AccoutLoginSuccess)
      );
      userListApi.addData(
        getName(MessageEnum.AuthTokenDataMessage),
        userListApi.messageId
      );
      const { receive: mockReceive } = instance;
      mockReceive("test", userListApi);
    });
    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(carouselDisplay).toBeTruthy();
      // expect(carouselDisplay).toMatchSnapshot()
    });
  });

  test("User actions on carousel images", ({ given, when, then }) => {
    given("I am a User loading the CarouselDisplay", () => {});
    when("I navigate to the CarouselDisplay", () => {});
    then("I can click on first image to trigger handleGoToSlide", () => {});
    then("I can click on back button to trigger toggleFullCarousel", () => {});
    then("I can click on second image to trigger handleGoToSlide", () => {});
    then("I can click on back button to trigger toggleFullCarousel", () => {});
    then("I can click on third image to trigger handleGoToSlide", () => {});
  });
  test("Share and Location function will work properly", ({
    given,
    when,
    then,
  }) => {
    given("I am a User loading the CarouselDisplay", () => {});
    when("I navigate to the CarouselDisplay", () => {});
    then("I click on share btn", () => {});
    then("I click on location btn", () => {});
  });
  test("Video carousel will perform operations", ({ given, when, then }) => {
    given("I am a User loading the CarouselDisplay", () => {});
    when("I navigate to the CarouselDisplay", () => {});
    then("I click on video screen", () => {});
    then("I click on video", () => {});
    then("Video will end", ()=>{})
    then("Carousel will change", ()=>{})
  });
});
