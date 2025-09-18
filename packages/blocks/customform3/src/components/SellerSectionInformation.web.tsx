import React from "react";
import { Box } from "@material-ui/core";
import { useFormikContext } from "formik";
import InformationComponent from "./InformationComponent";
import { MemorandumFormValues } from "../helpers/types";

const SellerSectionInformation = () => {
  const { values } = useFormikContext<MemorandumFormValues>();

  return (
    <Box>
      <InformationComponent name="Name -" value={values.sellerSection.name} />
      <InformationComponent
        name="Residential/Correspondence Address -"
        value={values.sellerSection.residential_address}
      />
      <InformationComponent
        name="Phone Number -"
        value={values.sellerSection.phone_number}
      />
      <InformationComponent name="Email -" value={values.sellerSection.email} />
      <InformationComponent
        name="Will a holding deposit be paid? -"
        value={
          values.sellerSectionOtherInformation.holding_deposit_paid
            ? "Yes"
            : "No"
        }
      />
      {values.sellerSectionOtherInformation.holding_deposit_paid && (
        <InformationComponent
          name="If yes, how much will be paid? -"
          value={values.sellerSectionOtherInformation.how_much_deposit_paid}
        />
      )}
      <InformationComponent
        name="Has the deposit been verified/Confirmed? -"
        value={
          values.sellerSectionOtherInformation.has_deposit_been_verified ? "Yes" : "No"
        }
      />
      <InformationComponent
        name="Expected date for exchange -"
        value={values.sellerSectionOtherInformation.expected_date_for_exchange}
      />
      <InformationComponent
        name="Expected date of completion -"
        value={values.sellerSectionOtherInformation.expected_date_for_completion}
      />
      <InformationComponent
        name="Special conditions for sale -"
        value={values.sellerSectionOtherInformation.special_conditions_for_sale}
      />
      <InformationComponent
        name="Is the Vendor buying another property? -"
        value={values.sellerSectionOtherInformation.vendor_buying_another_property}
      />
      <InformationComponent
        name="Details of the Onward chase -"
        value={values.sellerSectionOtherInformation.details_of_onward_chase}
      />
      <InformationComponent
        name="Any Legal issues to Note? -"
        value={
          values.sellerSectionOtherInformation.legal_issues_to_note ? "Yes" : "No"
        }
      />
      {values.sellerSectionOtherInformation.legal_issues_to_note && (
        <InformationComponent
          name="If yes, please specify -"
          value={values.sellerSectionOtherInformation.if_yes_please_specify}
        />
      )}
      <InformationComponent
        name="Fixture and fittings including in the sale -"
        value={values.sellerSectionOtherInformation.fixtures_and_fittings_including_in_sale}
      />
      <InformationComponent
        name="Extra notes/Observations -"
        value={values.sellerSectionOtherInformation.extra_notes}
      />
    </Box>
  );
};

export default SellerSectionInformation;
