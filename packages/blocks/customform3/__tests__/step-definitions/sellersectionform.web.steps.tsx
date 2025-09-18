/**
 * @jest-environment jsdom
 */
import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import SellerSectionForm from "../../src/components/SellerSectionForm.web";
import moment from "moment";
import { Formik } from "formik";
import { PropertyTenure } from "../../src/helpers/types";

const feature = loadFeature(
  "./__tests__/features/sellersectionform-scenario.web.feature"
);

const mockValues = {
  price: "459.9999",
  registryNumber: "HLR 123478",
  sellerInformation: {
    name: "Harry Reo",
    residential_address: "299, samee yan, ontario, London, 98765",
    phone_number: "+44 9876543212",
    email: "abcd@gmail.com",
  },
  buyerInformation: {
    name: "Harry Reo",
    residential_address: "299, samee yan, ontario, London, 98765",
    phone_number: "+44 9876543212",
    email: "abcd@gmail.com",
  },
  property_tenure: PropertyTenure.LEASEHOLD,
  years_remaining_on_lease: "999",
  sellerSection: {
    name: "Harry Reo",
    residential_address: "299, samee yan, ontario, London, 98765",
    phone_number: "+44 9876543212",
    email: "abcd@gmail.com",
  },
  sellerSectionOtherInformation: {
    details_of_onward_chase: "",
    expected_date_for_completion: moment().format("yyyy-MM-DD"),
    expected_date_for_exchange: moment().format("yyyy-MM-DD"),
    extra_notes: "",
    fixtures_and_fittings_including_in_sale: "",
    has_deposit_been_verified: true,
    holding_deposit_paid: true,
    how_much_deposit_paid: "",
    if_yes_please_specify: "",
    legal_issues_to_note: true,
    special_conditions_for_sale: "",
    vendor_buying_another_property: "",
  },
  do_you_have_a_conveyancer: true,
  buyerSection: {
    name: "Harry Reo",
    residential_address: "299, samee yan, ontario, London, 98765",
    phone_number: "+44 9876543212",
    email: "abcd@gmail.com",
  },
  buyerSectionOtherInformation: {
    amount_of_mortgage_to_be_granted: "",
    extra_notes: "",
    any_legal_issue_to_note: true,
    contact_number_of_mortgage_broker: "",
    countryNumberOfMortgage: "",
    decision_in_principle_in_place: true,
    has_ownership_been_checked: true,
    is_property_being_bought_in_company_name: true,
    is_quick_property_sale: true,
    legal_issue_details: "",
    name_of_mortgage_broker: "",
    special_conditions_for_sale: "",
  },
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Seller Section Form", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance;

    given("I am a User loading Seller Section Form", () => {
      exampleBlockA = mount(
        <Formik initialValues={mockValues} onSubmit={() => {}}>
          <SellerSectionForm canEdit={true} />
        </Formik>
      );
    });

    when("I navigate to the Seller Section Form", () => {
      instance = exampleBlockA.instance();
    });

    then("Seller Section Form will load with out errors", async () => {
      expect(
        exampleBlockA.find('input[name="sellerSection.name"]').prop("value")
      ).toBe("Harry Reo");
      expect(
        exampleBlockA
          .find('input[name="sellerSection.residential_address"]')
          .prop("value")
      ).toBe("299, samee yan, ontario, London, 98765");
      expect(
        exampleBlockA.find('input[name="sellerSection.phone_number"]').prop("value")
      ).toBe("+44 9876543212");
      expect(
        exampleBlockA.find('input[name="sellerSection.email"]').prop("value")
      ).toBe("abcd@gmail.com");

      exampleBlockA.find('input[name="sellerSection.name"]').simulate("change", {
        target: { name: "sellerSection.name", value: "Jane Doe" },
      });
      exampleBlockA
        .find('input[name="sellerSection.residential_address"]')
        .simulate("change", {
          target: {
            name: "sellerSection.residential_address",
            value: "456 Oak St",
          },
        });
      exampleBlockA
        .find('input[name="sellerSection.phone_number"]')
        .simulate("change", {
          target: { name: "sellerSection.phone_number", value: "555-5678" },
        });
      exampleBlockA.find('input[name="sellerSection.email"]').simulate("change", {
        target: { name: "sellerSection.email", value: "jane@example.com" },
      });

      expect(
        exampleBlockA.find('input[name="sellerSection.name"]').prop("value")
      ).toBe("Jane Doe");
      expect(
        exampleBlockA
          .find('input[name="sellerSection.residential_address"]')
          .prop("value")
      ).toBe("456 Oak St");
      expect(
        exampleBlockA.find('input[name="sellerSection.phone_number"]').prop("value")
      ).toBe("555-5678");
      expect(
        exampleBlockA.find('input[name="sellerSection.email"]').prop("value")
      ).toBe("jane@example.com");

      exampleBlockA.find('input[name="holding-deposit-yes"]').simulate("change");
      exampleBlockA.find('input[name="holding-deposit-no"]').simulate("change");
      exampleBlockA.find('input[name="have-issues-yes"]').simulate("change");
      exampleBlockA.find('input[name="have-issues-no"]').simulate("change");
    });
  });
});
