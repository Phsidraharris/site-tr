/**
 * @jest-environment jsdom
 */
import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";
import { act } from "@testing-library/react";

import * as helpers from "../../../../framework/src/Helpers";
import PropertyTenureMenu from "../../src/components/PropertyTenureMenu.web";
import { Formik } from "formik";

const feature = loadFeature(
  "./__tests__/features/propertytenuremenu-scenario.web.feature"
);

const mockValues = {
  property_tenure: "Leasehold",
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Property Tenure Menu", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance;

    given("I am a User loading Property Tenure Menu", () => {
      exampleBlockA = mount(
        <Formik initialValues={mockValues} onSubmit={() => {}}>
          <PropertyTenureMenu textValue="Leasehold" canEdit={true} />
        </Formik>
      );
    });

    when("I navigate to the Property Tenure Menu", () => {
      instance = exampleBlockA.instance();
    });

    then("Property Tenure Menu will load with out errors", async () => {
      expect(exampleBlockA.find('p[data-testid="label"]').text()).toBe(
        mockValues.property_tenure
      );

      act(() => {
        exampleBlockA.find('svg[data-testid="arrow-icon"]').simulate("click");
      });

      exampleBlockA.update();

      expect(
        exampleBlockA.find('[id="property-tenure-menu"]').at(1).prop("open")
      ).toBe(true);

      act(() => {
        exampleBlockA.find("li").at(1).simulate("click");
      });

      expect(exampleBlockA.find('p[data-testid="label"]').text()).toBe(
        mockValues.property_tenure
      );

      act(() => {
        exampleBlockA.find('svg[data-testid="arrow-icon"]').simulate("click");
      });

      exampleBlockA.update();

      expect(
        exampleBlockA.find('[id="property-tenure-menu"]').at(1).prop("open")
      ).toBe(true);

      act(() => {
        exampleBlockA.find("li").at(0).simulate("click");
      });
    });
  });
});
