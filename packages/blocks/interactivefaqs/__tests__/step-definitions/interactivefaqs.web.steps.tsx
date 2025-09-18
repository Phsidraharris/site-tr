/**
 * @jest-environment jsdom
 */
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import InteractiveFaqs from "../../src/Interactivefaqs.web";
import { IFaq } from "../../src/types";
const navigation = require("react-navigation");
export const configJSON = require("../../config.json");

const interactiveFaqsProps = {
  navigation: navigation,
  id: "InteractiveFaqs",
};

const feature = loadFeature(
  "./__tests__/features/interactivefaqs-scenario.web.feature"
);

const testFaqData: IFaq[] = [
  {
    id: "test-question",
    title: "How do I sign up on the platform?",
    content:
      'To sign up on the platform, click on the "Sign Up" or "Register" button on the homepage. Fill out the required information, such as your name, email address, and password, and follow the prompts to complete the registration process.',
  },
];

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("User navigates to InteractiveFaqs", ({ given, when, then }) => {
    let interactiveFaqsWrapper: ReactWrapper;
    let instance: InteractiveFaqs;

    given("I am a User loading InteractiveFaqs", () => {
      interactiveFaqsWrapper = mount(
        <InteractiveFaqs {...interactiveFaqsProps} />
      );
    });

    when("I navigate to the InteractiveFaqs", () => {
      instance = interactiveFaqsWrapper.instance() as InteractiveFaqs;
    });

    then("InteractiveFaqs will load with out errors", () => {
      expect(interactiveFaqsWrapper).toBeTruthy();

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
          data: { faqs: testFaqData },
          errors: [],
        }
      );

      instance.faqApiCallId = msgValidationAPI.messageId;
      runEngine.sendMessage("Unit Test", msgValidationAPI);

      instance.setState({
        faqsData: testFaqData,
        loading: false,
      });

      interactiveFaqsWrapper.update();

      let answerContainer = interactiveFaqsWrapper.findWhere(
        (node) => node.prop("data-test-id") === "answerContainer"
      );

      expect(answerContainer).toBeTruthy();

      let answer = interactiveFaqsWrapper
        .findWhere(
          (node) =>
            node.prop("data-test-id") === "How do I sign up on the platform?"
        )
        .first();

      expect(answer).toBeTruthy();

      answer.props().onChange({}, false);

      answer.props().onChange({}, true);
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(interactiveFaqsWrapper).toBeTruthy();
    });
  });
});
