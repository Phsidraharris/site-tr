import * as Yup from "yup";
import { PropertyTenure } from "./types";

interface GetMemorandumFormSchema {
  canEditSellerSectionForm: boolean;
  canEditBuyerSectionForm: boolean;
}

export const getMemorandumFormSchema = ({
  canEditSellerSectionForm,
  canEditBuyerSectionForm,
}: GetMemorandumFormSchema) => ({
  price: canEditSellerSectionForm ? Yup.string().required() : Yup.string(),
  registryNumber: canEditSellerSectionForm
    ? Yup.string().required()
    : Yup.string(),
  sellerInformation: canEditSellerSectionForm
    ? Yup.object({
        name: Yup.string().required(),
        residential_address: Yup.string().required(),
        phone_number: Yup.string().required(),
        email: Yup.string().required(),
      })
    : Yup.object({}),
  years_remaining_on_lease: Yup.string().when("property_tenure  ", {
    is: (property_tenure) => property_tenure === PropertyTenure.LEASEHOLD,
    then: Yup.string().required(),
  }),
  sellerSection: canEditSellerSectionForm
    ? Yup.object({
        name: Yup.string().required(),
        residential_address: Yup.string().required(),
        phone_number: Yup.string().required(),
        email: Yup.string().required(),
      })
    : Yup.object({}),
  sellerSectionOtherInformation: canEditSellerSectionForm
    ? Yup.object({
        details_of_onward_chase: Yup.string().required(),
        expected_date_for_completion: Yup.string().required(),
        expected_date_for_exchange: Yup.string().required(),
        extra_notes: Yup.string(),
        fixtures_and_fittings_including_in_sale: Yup.string().required(),
        has_deposit_been_verified: Yup.boolean().required(),
        holding_deposit_paid: Yup.boolean().required(),
        how_much_deposit_paid: Yup.string().when("holding_deposit_paid  ", {
          is: (holding_deposit_paid) => holding_deposit_paid === true,
          then: Yup.string().required(),
        }),
        if_yes_please_specify: Yup.string().when("legal_issues_to_note  ", {
          is: (legal_issues_to_note) => legal_issues_to_note === true,
          then: Yup.string().required(),
        }),
        legal_issues_to_note: Yup.boolean().required(),
        special_conditions_for_sale: Yup.string(),
        vendor_buying_another_property: Yup.string().required(),
      })
    : Yup.object({}),
  do_you_have_a_conveyancer: Yup.boolean().required(),
  buyerSection: Yup.object().when("do_you_have_a_conveyancer", {
    is: (do_you_have_a_conveyancer) =>
      do_you_have_a_conveyancer === true && canEditBuyerSectionForm,
    then: Yup.object({
      name: Yup.string().required(),
      residential_address: Yup.string().required(),
      phone_number: Yup.string().required(),
      email: Yup.string().required(),
    }),
  }),

  buyerSectionOtherInformation: canEditBuyerSectionForm
    ? Yup.object({
        amount_of_mortgage_to_be_granted: Yup.string().required(),
        any_legal_issue_to_note: Yup.boolean().required(),
        countryNumberOfMortgage: Yup.string().required(),
        contact_number_of_mortgage_broker: Yup.string().required(),
        decision_in_principle_in_place: Yup.boolean().required(),
        extra_notes: Yup.string(),
        has_ownership_been_checked: Yup.string().required(),
        is_property_being_bought_in_company_name: Yup.string().required(),
        is_quick_property_sale: Yup.string().required(),
        legal_issue_details: Yup.string().when("any_legal_issue_to_note  ", {
          is: (any_legal_issue_to_note) => any_legal_issue_to_note === true,
          then: Yup.string().required(),
        }),
        name_of_mortgage_broker: Yup.string().required(),
        special_conditions_for_sale: Yup.string(),
      })
    : Yup.object({}),
});
