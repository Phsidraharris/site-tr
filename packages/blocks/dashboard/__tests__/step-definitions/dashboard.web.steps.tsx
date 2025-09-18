/**
 * @jest-environment jsdom
 */
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import DashboardWeb from "../../src/Dashboard.web";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const navigation = require("react-navigation");
const screenProps = {
  navigation: navigation,
  id: "Dashboard"
};
const feature = loadFeature(
  "./__tests__/features/dashboard-scenario.web.feature"
);

describe("DashboardWeb", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("it should render the button and text", () => {
    render(<DashboardWeb navigation={undefined} id={""} />);
    const browsingButton = screen.getByTestId("btnExample");
    expect(browsingButton).toBeInTheDocument();
  });
});

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to dashboard web", ({ given, when, then }) => {
    let dashboardWebWrapper: ShallowWrapper;
    let instance: DashboardWeb;
    given("I am a User loading dashboard", () => {
      dashboardWebWrapper = shallow(<DashboardWeb {...screenProps} />);
      expect(dashboardWebWrapper).toBeTruthy();
    });

    when("I navigate to the dashboard", () => {
      instance = dashboardWebWrapper.instance() as DashboardWeb;
      expect(dashboardWebWrapper).toBeTruthy();
    });

    then("dashboard will load with out errors", () => {
      expect(dashboardWebWrapper).toBeTruthy();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(dashboardWebWrapper).toBeTruthy();
    });
  });
});
