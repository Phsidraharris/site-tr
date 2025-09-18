/**
 * @jest-environment jsdom
 */
import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";
import { act } from "@testing-library/react";

import * as helpers from "../../../../framework/src/Helpers";
import EditableInput from "../../src/components/EditableInput.web";
import { Formik } from "formik";

const feature = loadFeature(
  "./__tests__/features/editableinput-scenario.web.feature"
);

const mockValues = {};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Editable Input", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance;

    given("I am a User loading Editable Input", () => {
      exampleBlockA = mount(
        <Formik initialValues={mockValues} onSubmit={() => {}}>
          <EditableInput
            name="example"
            label="Example"
            textValue="Initial Value"
            canEdit={true}
          />
        </Formik>
      );
    });

    when("I navigate to the Editable Input", () => {
      instance = exampleBlockA.instance();
    });

    then("Editable Input will load with out errors", async () => {
      expect(exampleBlockA.find('input[name="example"]')).toHaveLength(0);
      expect(exampleBlockA.find('p[data-testid="label"]').text()).toBe(
        "Initial Value"
      );

      act(() => {
        exampleBlockA.find('svg[data-testid="edit"]').simulate("click");
      });

      exampleBlockA.update();
      expect(exampleBlockA.find('input[name="example"]')).toHaveLength(1);

      act(() => {
        exampleBlockA.find('input[name="example"]').simulate("change", {
          target: { name: "example", value: "New Value" },
        });
      });

      exampleBlockA.update();

      expect(exampleBlockA.find('input[name="example"]').prop("value")).toBe(
        "New Value"
      );

      act(() => {
        exampleBlockA.find('input[name="example"]').simulate("blur");
      });

      exampleBlockA.update();

      expect(exampleBlockA.find('input[name="example"]')).toHaveLength(0);
    });
  });
});
