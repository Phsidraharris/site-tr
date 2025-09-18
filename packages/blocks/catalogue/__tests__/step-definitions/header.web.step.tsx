import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import Header from '../../src/Header.web'
const navigation = require("react-navigation");
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
const screenProps = {
    navigation: navigation,
    id: "Header",
};

const feature = loadFeature(
    "./__tests__/features/header-scenario.feature"
);

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
        global.localStorage = new LocalStorageMock()
    });

    test("User navigates to Header", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: Header;

        given("I am a User loading Header", () => {
            exampleBlockA = shallow(<Header {...screenProps} />);
        });

        when("I navigate to the Header", () => {
            instance = exampleBlockA.instance() as Header;
            const buttontest2 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "testid1").at(0)
            buttontest2.simulate("click", "test")
            const buttontest3 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "testid2").at(0)
            buttontest3.simulate("click", "test")
            const buttontest4 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "testid3").at(0)
            buttontest4.simulate("click", "test")
            const buttontest = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "testid4").at(0)
            buttontest.simulate("click", "test")
        });

        then("Header will load with out errors", () => {
            instance.componentDidMount();
            expect(exampleBlockA).toBeTruthy();
            expect(exampleBlockA).toMatchSnapshot();
        });

    })
});
