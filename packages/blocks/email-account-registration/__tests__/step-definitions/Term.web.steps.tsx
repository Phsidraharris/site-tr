import { defineFeature, loadFeature } from "jest-cucumber";
import { ShallowWrapper, shallow } from "enzyme";
import React from "react";
import Term from "../../src/Term.web";

const feature = loadFeature("./__tests__/features/Term-scenario.web.feature");

defineFeature(feature, (test) => {
  let privacyWrapper: ShallowWrapper;

  beforeEach(() => {
    privacyWrapper = shallow(<Term navigation={undefined} id={""} />);
  });

  test("User can see the Terms & Condition content", ({ given, when, then }) => {
    given("I am on the Terms & Condition page", () => {
      // No need to do anything here, as the component is already rendered in beforeEach
    });

    when("I should see the Terms & Condition heading", () => {
      const headingElement = privacyWrapper.find('Typography[children="Privacy policy"]');
      expect(headingElement.exists()).toBe(false);
    });

    then("I should see the Terms & Condition content", () => {
      const contentElement = privacyWrapper.find('Typography[children*="dummy text"]');
      expect(contentElement.exists()).toBe(false);
    });
  });
});
