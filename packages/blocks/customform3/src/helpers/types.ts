export interface UserInformation {
  name: string;
  residential_address: string;
  phone_number: string;
  email: string;
}

export enum PropertyTenure {
  FREEHOLD = "Freehold",
  LEASEHOLD = "Leasehold",
}

export interface SellerSectionOtherInformation {
  holding_deposit_paid: boolean;
  how_much_deposit_paid: string;
  has_deposit_been_verified: boolean;
  expected_date_for_exchange: string;
  expected_date_for_completion: string;
  vendor_buying_another_property: string;
  special_conditions_for_sale: string;
  details_of_onward_chase: string;
  legal_issues_to_note: boolean;
  if_yes_please_specify: string;
  fixtures_and_fittings_including_in_sale: string;
  extra_notes: string;
}

export interface BuyerSectionOtherInformation {
  is_quick_property_sale: boolean;
  decision_in_principle_in_place: boolean;
  amount_of_mortgage_to_be_granted: string;
  name_of_mortgage_broker: string;
  countryNumberOfMortgage: string;
  contact_number_of_mortgage_broker: string;
  has_ownership_been_checked: boolean;
  extra_notes: string;
  special_conditions_for_sale: string;
  is_property_being_bought_in_company_name: boolean;
  any_legal_issue_to_note: boolean;
  legal_issue_details: string;
}

export interface MemorandumFormValues {
  price: string;
  registryNumber: string;
  sellerInformation: UserInformation;
  buyerInformation: UserInformation;
  years_remaining_on_lease: string;
  property_tenure: string;
  sellerSection: UserInformation;
  sellerSectionOtherInformation: SellerSectionOtherInformation;
  do_you_have_a_conveyancer: boolean;
  buyerSection: UserInformation;
  buyerSectionOtherInformation: BuyerSectionOtherInformation;
}
export interface CountryCodeResType {
  id: string;
  type: string;
  attributes: {
    name: string;
    emoji_flag: string;
    country_code: string;
  };
}

export interface CountryCodeResTypeData {
  data: [
    {
      id: string;
      type: string;
      attributes: {
        name: string;
        emoji_flag: string;
        country_code: string;
      };
    }
  ];
}

export enum StatusMemorandumOfSale {
  ACCEPTED = "accepted",
  DECLINED = "declined",
}

export interface MemorandumOfSaleResTypeData {
  data: {
    id: string;
    type: string;
    attributes: {
      id: number;
      catalogue_id: number;
      status: StatusMemorandumOfSale | null;
      price: string;
      property_tenure: string;
      years_remaining_on_lease: number;
      seller_section: {
        name: string;
        residential_address: string;
        phone_number: string;
        email: string;
        holding_deposit_paid: boolean;
        how_much_deposit_paid: string;
        has_deposit_been_verified: string;
        expected_date_for_exchange: string;
        expected_date_for_completion: string;
        vendor_buying_another_property: string;
        special_conditions_for_sale: string;
        details_of_onward_chase: string;
        legal_issues_to_note: boolean;
        extra_notes: string;
        if_yes_please_specify: string;
        fixtures_and_fittings_including_in_sale: string;
      };
      buyer_section: {
        name: string;
        residential_address: string;
        phone_number: string;
        email: string;
        do_you_have_a_conveyancer: boolean;
        is_quick_property_sale: string;
        decision_in_principle_in_place: string;
        amount_of_mortgage_to_be_granted: string;
        name_of_mortgage_broker: string;
        contact_number_of_mortgage_broker: number;
        has_ownership_been_checked: string;
        extra_notes: string;
        special_conditions_for_sale: string;
        is_property_being_bought_in_company_name: string;
        any_legal_issue_to_note: boolean;
        legal_issue_details: string;
      };
    };
  };
}

export interface SelectedMemorandumOfSale extends MemorandumFormValues {
  id: number;
  catalogue_id: number;
  status: StatusMemorandumOfSale | null;
}



export interface SelectEventType {
  target: {
    value: string | unknown;
  }
}

export interface InputEventType {
  target: {
    value: string;
  }
}

export interface FileEventType {
  target: {
    files: FileList | null;
  }
}


export interface MakeAnOfferErrorType {
  isOfferPrice: boolean;
  isChainFee: boolean;
  isProofOfFinanceFile: boolean;
  isProofOfIdentityFile: boolean;
  isProofOfAddressFile: boolean;
  isProofOfFinace: boolean;
  isProofOfIdentity: boolean;
  isProofOfAddress: boolean;
}
