import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import Catalogue from "../../src/Catalogue.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Catalogue",
};
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
  "./__tests__/features/catalogueweb-scenario.feature"
);

const tempListData = [
  {
    id: 1,
    attributes: {
      name: "test name1",
      price: 10,
      average_rating: 5,
    },
  },
  {
    id: 2,
    attributes: {
      name: "test name2",
      price: 12,
      average_rating: 4,
    },
  },
  {
    id: 3,
    attributes: {
      name: "test name3",
      price: 13,
      average_rating: 4,
    },
  },
];

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    global.localStorage = new LocalStorageMock()
  });

  test("User navigates to catalogue", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Catalogue;

    given("I am a User loading catalogue", () => {
      exampleBlockA = shallow(<Catalogue {...screenProps} />);
    });

    when("I navigate to the catalogue", () => {
      instance = exampleBlockA.instance() as Catalogue;
    });

    then("catalogue will load with out errors", () => {
      instance.componentDidMount();
      expect(exampleBlockA).toBeTruthy();
      // expect(exampleBlockA).toMatchSnapshot();
    });

    then("catalogue will load data with internal module", () => {
      instance.getListRequest("test token");
      expect(exampleBlockA).toBeTruthy();
      // expect(exampleBlockA).toMatchSnapshot();
    });

    then("catalogue will load data from API", () => {
      const msgProductRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgProductRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgProductRestAPI.messageId
      );
      msgProductRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: tempListData,
        }
      );
      instance.getProductApiCallId = msgProductRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgProductRestAPI);

      const buttontest18 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "button 1").at(0)
      buttontest18.simulate("click", "test")
      const buttontest = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "button 2").at(0)
      buttontest.simulate("click", "test")
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
      // expect(exampleBlockA).toMatchSnapshot();
    });
  });
});
