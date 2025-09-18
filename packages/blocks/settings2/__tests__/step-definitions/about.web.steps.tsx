/**
 * @jest-environment jsdom
 */
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import About from "../../src/About.web";
import Privacy from "../../src/Privacy.web";
import Term from "../../src/Term.web";
import AboutHeader, { StyledButton } from "../../src/AboutHeader.web";
import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "About",
};

const feature = loadFeature("./__tests__/features/about-scenario.web.feature");

defineFeature(feature, (test) => {
  let aboutComponent: ShallowWrapper;
  let aboutHeader: ShallowWrapper;
  let styledButton: ReactWrapper;
  let activeTab = "";

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    activeTab = "";
  });

  test("Rendering the About Component", ({ given, when, then }) => {
    given("the About component is rendered", () => {
      aboutComponent = shallow(<About {...screenProps} />);
      aboutHeader = shallow(
        <AboutHeader activeTab={activeTab} changeActiveTab={() => {}} />
      );
    });

    then("the About component should render without errors", () => {
      expect(aboutComponent).toBeTruthy();
      expect(aboutHeader).toBeTruthy();
    });
  });

  test("Clicking Privacy Tab", ({ given, when, then }) => {
    given("the About component is rendered", () => {
      aboutComponent = shallow(<About {...screenProps} />);
      activeTab = "PRIVACY";
      aboutHeader = shallow(
        <AboutHeader
          activeTab={activeTab}
          changeActiveTab={() =>
            aboutComponent.setState({ activeTab: "PRIVACY" })
          }
        />
      );
      styledButton = mount(<StyledButton>Default Button</StyledButton>);
    });

    when("the user clicks on the Privacy tab", () => {
      expect(styledButton.find(".button")).toHaveLength(0);

      let privacyButton = aboutHeader.findWhere(
        (node) => node.prop("data-test-id") === "privacyButton"
      );

      expect(privacyButton).toHaveLength(1);
      privacyButton.simulate("click");
    });

    then("the Privacy component should be displayed", () => {
      expect(aboutComponent.contains(<Privacy text={''}/>)).toBeTruthy();

      mount(<Privacy text={''}/>);
    });
  });

  test("Clicking Terms Tab", ({ given, when, then }) => {
    given("the About component is rendered", () => {
      aboutComponent = shallow(<About {...screenProps} />);
      activeTab = "TERM";
      aboutHeader = shallow(
        <AboutHeader
          activeTab={activeTab}
          changeActiveTab={() => aboutComponent.setState({ activeTab: "TERM" })}
        />
      );

      styledButton = mount(<StyledButton active>Active Button</StyledButton>);
    });

    when("the user clicks on the Terms tab", () => {
      expect(styledButton.find(".activeButton")).toHaveLength(0);

      let termButton = aboutHeader.findWhere(
        (node) => node.prop("data-test-id") === "termButton"
      );
      termButton.simulate("click");
    });

    then("the Term component should be displayed", () => {
      expect(aboutComponent.contains(<Term text={''}/>)).toBeTruthy();
      mount(<Term text={''} />);
    });
  });
});
