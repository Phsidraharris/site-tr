/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Formik, Form } from "formik"; // You may need to install Formik if not already installed
import UserInformationForm from "../../src/components/UserInformationForm.web";
import moment from "moment";
import { PropertyTenure } from "../../src/helpers/types";

describe("UserInformationForm", () => {
  const mockValues = {
    catalogue_id: 0,
    id: 0,
    status: null,
    price: "",
    registryNumber: "",
    property_tenure: PropertyTenure.LEASEHOLD,
    years_remaining_on_lease: "",
    do_you_have_a_conveyancer: true,
    sellerInformation: {
      residential_address: "",
      email: "",
      name: "",
      phone_number: "",
    },
    buyerInformation: {
      residential_address: "",
      email: "",
      name: "",
      phone_number: "",
    },
    sellerSection: {
      residential_address: "",
      email: "",
      name: "",
      phone_number: "",
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
    buyerSection: {
      residential_address: "",
      email: "",
      name: "",
      phone_number: "",
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
  it("renders UserInformationForm correctly", () => {
    render(
      <Formik initialValues={mockValues} onSubmit={() => {}}>
        <UserInformationForm
          label="User Information"
          objectName="sellerInformation"
          canEdit={true}
        />
      </Formik>
    );

    // Check if the form components are rendered correctly
    expect(screen.getByText("Name -")).toBeInTheDocument();
    expect(
      screen.getByText("Residential/Correspondence Address -")
    ).toBeInTheDocument();
    expect(screen.getByText("Phone Number -")).toBeInTheDocument();
    expect(screen.getByText("Email -")).toBeInTheDocument();
  });

  it("enables editing when canEdit is true", () => {
    render(
      <Formik initialValues={mockValues} onSubmit={() => {}}>
        <UserInformationForm
          label="User Information"
          objectName="sellerInformation"
          canEdit={true}
        />
      </Formik>
    );

    // Edit icon should be present when canEdit is true
    expect(screen.getByTestId("edit-icon")).toBeInTheDocument();

    // Click the edit icon to enable editing
    fireEvent.click(screen.getByTestId("edit-icon"));

    expect(screen.getByText("Submit")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Submit"));
  });

  it("disables editing when canEdit is false", () => {
    render(
      <Formik initialValues={mockValues} onSubmit={() => {}}>
        <UserInformationForm
          label="User Information"
          objectName="sellerInformation"
          canEdit={false}
        />
      </Formik>
    );

    // Edit icon should not be present when canEdit is false
    expect(screen.queryByTestId("edit-icon")).not.toBeInTheDocument();
  });
});
