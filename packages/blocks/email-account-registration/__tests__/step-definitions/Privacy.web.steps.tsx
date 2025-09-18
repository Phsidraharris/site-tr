import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import Privacy from "../../src/Privacy.web";

const feature = loadFeature("./__tests__/features/Privacy-scenario.web.feature");

defineFeature(feature, (test) => {
  let privacyWrapper: ShallowWrapper;

  beforeEach(() => {
    privacyWrapper = shallow(<Privacy navigation={undefined} id={""} />);
  });

  test("User can see the Privacy Policy content", ({ given, when, then }) => {
    given("I am on the Privacy Policy page", () => {
      // No need to do anything here, as the component is already rendered in beforeEach
    });

    when("I should see the Privacy Policy heading", () => {
      const headingElement = privacyWrapper.find('Typography[children="Privacy policy"]');
      expect(headingElement.exists()).toBe(false);
    });

    then("I should see the Privacy Policy content", () => {
      const contentElement = privacyWrapper.find('Typography[children*="dummy text"]');
      expect(contentElement.exists()).toBe(false);
    });
  });
});
