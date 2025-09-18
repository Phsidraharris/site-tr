/**
 * @jest-environment jsdom
 */
import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import BuyerSectionForm from "../../src/components/BuyerSectionForm.web";
import { Formik } from "formik";

const feature = loadFeature(
  "./__tests__/features/buyersectionform-scenario.web.feature"
);

const mockValues = {
  do_you_have_a_conveyancer: true,
  buyerSection: {
    name: "John Doe",
    residential_address: "",
    phone_number: "",
    email: "",
  },
  buyerSectionOtherInformation: {
    is_quick_property_sale: null,
    decision_in_principle_in_place: null,
    amount_of_mortgage_to_be_granted: "",
    name_of_mortgage_broker: "",
    contact_number_of_mortgage_broker: "",
    countryNumberOfMortgage: "",
    has_ownership_been_checked: null,
    extra_notes: "",
    special_conditions_for_sale: "",
    is_property_being_bought_in_company_name: null,
    any_legal_issue_to_note: false,
    legal_issue_details: "",
  },
};

const mockCountryCodeData: any = [
  { attributes: { country_code: "1" } },
  { attributes: { country_code: "44" } },
];

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to BuyerSectionForm", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance;

    given("I am a User loading BuyerSectionForm", () => {
      exampleBlockA = mount(
        <Formik initialValues={mockValues} onSubmit={() => {}}>
          <BuyerSectionForm
            getCountryCodeData={mockCountryCodeData}
            canEdit={true}
            isCreationProcess={false}
          />
        </Formik>
      );
    });

    when("I navigate to the BuyerSectionForm", () => {
      instance = exampleBlockA.instance();
    });

    then("BuyerSectionForm will load with out errors", async () => {
      expect(exampleBlockA.exists()).toBeTruthy();

      expect(
        exampleBlockA.find('input[name="buyerSection.name"]').prop("value")
      ).toBe("John Doe");

      expect(
        exampleBlockA.find('input[name="have-conveyancer-no"]').prop("checked")
      ).toBe(false);

      exampleBlockA.find('input[name="buyerSection.name"]').simulate("change", {
        target: { name: "buyerSection.name", value: "Jane Doe" },
      });

      expect(
        exampleBlockA.find('input[name="buyerSection.name"]').prop("value")
      ).toBe("Jane Doe");

      exampleBlockA.find('input[name="have-conveyancer-yes"]').simulate("change");
      exampleBlockA.find('input[name="have-conveyancer-no"]').simulate("change");
      exampleBlockA.find('input[name="have-issues-yes"]').simulate("change");
      exampleBlockA.find('input[name="have-issues-no"]').simulate("change");
    });
  });
});
