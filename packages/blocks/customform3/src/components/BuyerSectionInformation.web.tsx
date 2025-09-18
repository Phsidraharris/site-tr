import React from "react";
import { Box } from "@material-ui/core";
import { useFormikContext } from "formik";
import InformationComponent from "./InformationComponent";
import { MemorandumFormValues } from "../helpers/types";

const BuyerSectionInformation = () => {
  const { values } = useFormikContext<MemorandumFormValues>();

  return (
    <Box>
      {values.do_you_have_a_conveyancer && (
        <>
          <InformationComponent
            name="Name -"
            value={values.buyerSection.name}
          />
          <InformationComponent
            name="Residential/Correspondence Address -"
            value={values.buyerSection.residential_address}
          />
          <InformationComponent
            name="Phone Number -"
            value={values.buyerSection.phone_number}
          />
          <InformationComponent
            name="Email -"
            value={values.buyerSection.email}
          />
        </>
      )}
      <InformationComponent
        name="Is this Quick cash property sale? -"
        value={values.buyerSectionOtherInformation.is_quick_property_sale ? "Yes" : "No"}
      />
      <InformationComponent
        name="Decision in Principle in Place? -"
        value={
          values.buyerSectionOtherInformation.decision_in_principle_in_place ? "Yes" : "No"
        }
      />
      <InformationComponent
        name="Amount of Mortgage be granted -"
        value={values.buyerSectionOtherInformation.amount_of_mortgage_to_be_granted}
      />
      <InformationComponent
        name="Name of Mortgage Broker/Advisor -"
        value={values.buyerSectionOtherInformation.name_of_mortgage_broker}
      />
      <InformationComponent
        name="Contact Number of Mortgage Broker/Advisor (country code) -"
        value={values.buyerSectionOtherInformation.countryNumberOfMortgage}
      />
      <InformationComponent
        name="Has Ownership been checked (HM Land Registry)? -"
        value={
          values.buyerSectionOtherInformation.has_ownership_been_checked ? "Yes" : "No"
        }
      />
      <InformationComponent
        name="Is the Property being bought in a company name? -"
        value={
          values.buyerSectionOtherInformation.is_property_being_bought_in_company_name
            ? "Yes"
            : "No"
        }
      />
      <InformationComponent
        name="Special conditions for sale -"
        value={values.buyerSectionOtherInformation.special_conditions_for_sale}
      />
      <InformationComponent
        name="Any Legal issues to Note? -"
        value={
          values.buyerSectionOtherInformation.any_legal_issue_to_note ? "Yes" : "No"
        }
      />
      {values.buyerSectionOtherInformation.any_legal_issue_to_note && (
        <InformationComponent
          name="If yes, please specify -"
          value={values.buyerSectionOtherInformation.legal_issue_details}
        />
      )}
      <InformationComponent
        name="Extra notes/Observations -"
        value={values.buyerSectionOtherInformation.extra_notes}
      />
    </Box>
  );
};

export default BuyerSectionInformation;
