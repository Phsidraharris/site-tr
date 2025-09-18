import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import CarouselDisplay from "../../src/CarouselDisplay.web";
const { JSDOM } = require("jsdom");
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = jsdom.window.document;
global.window = jsdom.window;

const screenProps = {
  navigation: {
    goBack: () => jest.fn(),
    navigate: () => jest.fn(),
  },
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
    const videoRefMock = {
      current: document.createElement("video"),
    };
    given("I am a User loading CarouselDisplay", () => {
      carouselDisplay = shallow(<CarouselDisplay {...screenProps} />);
    });

    when("I navigate to the CarouselDisplay", () => {
      instance = carouselDisplay.instance() as CarouselDisplay;

      expect(instance.state.isPlaying).toBe(false);
    });

    then("CarouselDisplay will load with out errors", () => {
      expect(carouselDisplay).toBeTruthy();
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
    let carouselDisplay: ShallowWrapper;
    let instance: CarouselDisplay;

    given("I am a User loading the CarouselDisplay", () => {
      carouselDisplay = shallow(<CarouselDisplay {...screenProps} />);
    });

    when("I navigate to the CarouselDisplay", () => {
      instance = carouselDisplay.instance() as CarouselDisplay;
    });

    then("I can click on first image to trigger handleGoToSlide", () => {
      // const gridItem = carouselDisplay.find('[data-testid="gridItem0"]');
      // gridItem.simulate("click");
    });
    then("I can click on back button to trigger toggleFullCarousel", () => {
      const gridItem = carouselDisplay.find('[data-testid="backButton"]');
      gridItem.simulate("click");
    });
    then("I can click on second image to trigger handleGoToSlide", () => {
      // const gridItem = carouselDisplay.find('[data-testid="gridSecondItem1"]');
      // gridItem.simulate("click");
    });
    then("I can click on back button to trigger toggleFullCarousel", () => {
      const gridItem = carouselDisplay.find('[data-testid="backButton"]');
      gridItem.simulate("click");
    });
    then("I can click on third image to trigger handleGoToSlide", () => {
    });
  });

  test("Share and Location function will work properly", ({
    given,
    when,
    then,
  }) => {
    let carouselDisplay: ShallowWrapper;
    let instance: CarouselDisplay;

    given("I am a User loading the CarouselDisplay", () => {
      carouselDisplay = shallow(<CarouselDisplay {...screenProps} />);
    });
    when("I navigate to the CarouselDisplay", () => {
      instance = carouselDisplay.instance() as CarouselDisplay;
    });
    then("I click on share btn", () => {
    });
    then("I click on location btn", () => {
    });
  });

  test("Video carousel will perform operations", ({ given, when, then }) => {
    let carouselDisplay: ShallowWrapper;
    let instance: CarouselDisplay;

    given("I am a User loading the CarouselDisplay", () => {
      carouselDisplay = shallow(<CarouselDisplay {...screenProps} />);
    });
    when("I navigate to the CarouselDisplay", () => {
      instance = carouselDisplay.instance() as CarouselDisplay;
    });
    then("I click on video screen", () => {
    });
    then("I click on video", () => {
      const event = {
        preventDefault() {},
        key: " ",
      };
      const clickEvent = {
        preventDefault() {},
        type: "click",
      };
      instance.playPauseVideo(event);
      instance.handlePause();
      instance.handleVideoClick(clickEvent)
    });
    then("Video will end", () => {
      const gridItem = carouselDisplay
        .find('[data-testid="fullWidthVideo"]')
        .at(0);
      gridItem.simulate("play");
      gridItem.simulate("pause");
      gridItem.simulate("ended");
    });
    then("Carousel will change", () => {
      const carousel = carouselDisplay.find(
        '[data-testid="fullWidthCarousel"]'
      );
      carousel.simulate("change");
    });
  });
});