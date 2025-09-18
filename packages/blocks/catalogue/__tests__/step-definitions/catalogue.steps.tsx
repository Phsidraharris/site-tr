import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import Catalogue from "../../src/Catalogue";
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

const feature = loadFeature("./__tests__/features/catalogue-scenario.feature");

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
      expect(exampleBlockA).toBeTruthy();
      expect(exampleBlockA).toMatchSnapshot();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
      expect(exampleBlockA).toMatchSnapshot();
    });
  });
});
