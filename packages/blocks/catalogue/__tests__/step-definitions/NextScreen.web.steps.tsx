import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import NextScreen from "../../src/NextScreen.web"
import { InputAdornment } from "@material-ui/core";
const navigation = require("react-navigation");

const screenProps = {
    navigation: {
        navigate: jest.fn(),
        goBack:jest.fn()
      },
    id: "ListMyProperty",
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
    "./__tests__/features/NextScreen-scenario.feature"
);

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
        global.localStorage = new LocalStorageMock()
    });

    test("User navigates to Next Screen", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: NextScreen;

        given("I am a User loading Next Screen", () => {
            exampleBlockA = shallow(<NextScreen {...screenProps} />);
        });

        when("I navigate to the Next Screen", () => {
            instance = exampleBlockA.instance() as NextScreen;
           instance.setState({selectedAgent:"djifrif"})
           instance.setState({isagentfilled:false})
           instance.setState({isagentfilled:true})
           instance.setState({selectedAgent:""})
            const buttontest18 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "agent").at(0)
            buttontest18.simulate("click", "test")
            
            const buttontest = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "address").at(0)
            buttontest.simulate("click", "test")
            const buttontest2 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "number").at(0)
            buttontest2.simulate("click", "test")
            instance.setState({isaddressfilled:true})
            expect(exampleBlockA).toBeTruthy();
            instance.setState({isaddressfilled:false})
        });

        then("Next Screen will load with out errors", () => {
            instance.componentDidMount();
            expect(exampleBlockA).toBeTruthy();
            expect(exampleBlockA).toMatchSnapshot();

        });

    })
});
