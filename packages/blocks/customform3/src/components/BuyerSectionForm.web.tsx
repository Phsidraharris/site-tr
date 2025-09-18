import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useFormikContext } from "formik";

import TextInput from "./TextInput.web";
import PhoneNumberInput from "./PhoneNumberInput";
import RadioButton from "./RadioButton";
import SelectInput from "./SelectInput.web";
import BuyerSectionInformation from "./BuyerSectionInformation.web";
import { CountryCodeResType, MemorandumFormValues } from "../helpers/types";


interface BuyerSectionFormProps {
  getCountryCodeData: CountryCodeResType[];
  canEdit: boolean;
  isCreationProcess: boolean;
}

const BuyerSectionForm = ({
  getCountryCodeData,
  canEdit,
  isCreationProcess,
}: BuyerSectionFormProps) => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<MemorandumFormValues>();

  const listOfCountryCode = (array: any) => {
    return array.map((item: any) => {
      return {
        value: item.attributes.country_code,
        label: `+${item.attributes.country_code}`,
      };
    });
  };

  const selectOptions = [
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ];

  return (
    <Box style={webStyle.sectionContainer}>
      <Box style={webStyle.sectionHeader}>
        <Box style={webStyle.leftContainer}>
          <Typography style={webStyle.sectionHeaderLabel}>
            Buyer Section
          </Typography>
        </Box>
      </Box>
      {isCreationProcess ? (
        <BuyerSectionInformation />
      ) : (
        <>
          <Box style={webStyle.section}>
            <Typography style={webStyle.label}>
              *Do you have a Conveyancer
            </Typography>
            <Box style={webStyle.radiosContainer}>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="have-conveyancer-yes"
                  checked={values.do_you_have_a_conveyancer}
                  onChange={() =>
                    setFieldValue("do_you_have_a_conveyancer", true)
                  }
                />
                <Typography style={webStyle.label}>Yes</Typography>
              </Box>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="have-conveyancer-no"
                  checked={!values.do_you_have_a_conveyancer}
                  onChange={() =>
                    setFieldValue("do_you_have_a_conveyancer", false)
                  }
                />
                <Typography style={webStyle.label}>No</Typography>
              </Box>
            </Box>
            {values.do_you_have_a_conveyancer && (
              <>
                <Typography style={webStyle.sectionLabel}>
                  If yes, please share the details
                </Typography>
                <Box style={webStyle.inputsContainer}>
                  <TextInput
                    label="*Name"
                    name="buyerSection.name"
                    value={values.buyerSection.name}
                    touched={touched.buyerSection?.name}
                    error={errors.buyerSection?.name}
                  />
                  <TextInput
                    label="*Residential/Correspondence Address"
                    name="buyerSection.residential_address"
                    value={values.buyerSection.residential_address}
                    touched={touched.buyerSection?.residential_address}
                    error={errors.buyerSection?.residential_address}
                  />
                  <TextInput
                    label="*Phone Number"
                    name="buyerSection.phone_number"
                    value={values.buyerSection.phone_number}
                    touched={touched.buyerSection?.phone_number}
                    error={errors.buyerSection?.phone_number}
                  />
                  <TextInput
                    label="*Email"
                    name="buyerSection.email"
                    value={values.buyerSection.email}
                    touched={touched.buyerSection?.email}
                    error={errors.buyerSection?.email}
                  />
                </Box>
              </>
            )}
            <Typography style={webStyle.sectionLabel}>
              Other Information
            </Typography>
            <Box style={webStyle.inputsContainer}>
              <SelectInput
                label="*Is this Quick cash property sale?"
                name="buyerSectionOtherInformation.is_quick_property_sale"
                value={selectOptions.find(
                  (option) =>
                    option.value ===
                    values.buyerSectionOtherInformation.is_quick_property_sale
                )}
                touched={
                  touched.buyerSectionOtherInformation?.is_quick_property_sale
                }
                error={
                  errors.buyerSectionOtherInformation?.is_quick_property_sale
                }
                options={selectOptions}
              />
              <SelectInput
                label="*Decision in Principle in Place?"
                name="buyerSectionOtherInformation.decision_in_principle_in_place"
                value={selectOptions.find(
                  (option) =>
                    option.value ===
                    values.buyerSectionOtherInformation
                      .decision_in_principle_in_place
                )}
                touched={
                  touched.buyerSectionOtherInformation
                    ?.decision_in_principle_in_place
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.decision_in_principle_in_place
                }
                options={selectOptions}
              />
              <TextInput
                label="*Amount of Mortgage be granted (£)"
                name="buyerSectionOtherInformation.amount_of_mortgage_to_be_granted"
                value={
                  values.buyerSectionOtherInformation
                    .amount_of_mortgage_to_be_granted
                }
                touched={
                  touched.buyerSectionOtherInformation
                    ?.amount_of_mortgage_to_be_granted
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.amount_of_mortgage_to_be_granted
                }
              />
              <TextInput
                label="*Name of Mortgage Broker/Advisor:"
                name="buyerSectionOtherInformation.name_of_mortgage_broker"
                value={
                  values.buyerSectionOtherInformation.name_of_mortgage_broker
                }
                touched={
                  touched.buyerSectionOtherInformation?.name_of_mortgage_broker
                }
                error={
                  errors.buyerSectionOtherInformation?.name_of_mortgage_broker
                }
              />
              <PhoneNumberInput
                label="*Contact Number of Mortgage Broker/Advisor."
                inputName="buyerSectionOtherInformation.contact_number_of_mortgage_broker"
                selectName="buyerSectionOtherInformation.countryNumberOfMortgage"
                inputValue={
                  values.buyerSectionOtherInformation
                    .contact_number_of_mortgage_broker
                }
                touched={
                  touched.buyerSectionOtherInformation
                    ?.contact_number_of_mortgage_broker &&
                  touched.buyerSectionOtherInformation?.countryNumberOfMortgage
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.contact_number_of_mortgage_broker &&
                  errors.buyerSectionOtherInformation?.countryNumberOfMortgage
                }
                options={listOfCountryCode(getCountryCodeData)}
                selectedValue={listOfCountryCode(getCountryCodeData).find(
                  (option: any) =>
                    option.value ===
                    values.buyerSectionOtherInformation.countryNumberOfMortgage
                )}
              />
              <SelectInput
                label="*Has Ownership been checked (HM Land Registry)?"
                name="buyerSectionOtherInformation.has_ownership_been_checked"
                value={selectOptions.find(
                  (option) =>
                    option.value ===
                    values.buyerSectionOtherInformation
                      .has_ownership_been_checked
                )}
                touched={
                  touched.buyerSectionOtherInformation
                    ?.has_ownership_been_checked
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.has_ownership_been_checked
                }
                options={selectOptions}
              />
            </Box>
            <Box
              style={{
                ...webStyle.inputsContainer,
                marginBottom: "30px",
                marginTop: "30px",
              }}
            >
              <TextInput
                label="Extra notes/Observations"
                name="buyerSectionOtherInformation.extra_notes"
                value={values.buyerSectionOtherInformation.extra_notes}
                touched={touched.buyerSectionOtherInformation?.extra_notes}
                error={errors.buyerSectionOtherInformation?.extra_notes}
                isTextArea
              />
              <TextInput
                label="Special conditions for sale"
                name="buyerSectionOtherInformation.special_conditions_for_sale"
                value={
                  values.buyerSectionOtherInformation
                    .special_conditions_for_sale
                }
                touched={
                  touched.buyerSectionOtherInformation
                    ?.special_conditions_for_sale
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.special_conditions_for_sale
                }
                isTextArea
              />
            </Box>
            <Box style={{ ...webStyle.inputsContainer, marginBottom: "30px" }}>
              <SelectInput
                label="*Is the Property being bought in a company name?"
                name="buyerSectionOtherInformation.is_property_being_bought_in_company_name"
                value={selectOptions.find(
                  (option) =>
                    option.value ===
                    values.buyerSectionOtherInformation
                      .is_property_being_bought_in_company_name
                )}
                touched={
                  touched.buyerSectionOtherInformation
                    ?.is_property_being_bought_in_company_name
                }
                error={
                  errors.buyerSectionOtherInformation
                    ?.is_property_being_bought_in_company_name
                }
                options={selectOptions}
              />
            </Box>
            <Typography style={webStyle.label}>
              *Any Legal issues to Note?.
            </Typography>
            <Box style={webStyle.radiosContainer}>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="have-issues-yes"
                  checked={
                    values.buyerSectionOtherInformation.any_legal_issue_to_note
                  }
                  onChange={() =>
                    setFieldValue(
                      "buyerSectionOtherInformation.any_legal_issue_to_note",
                      true
                    )
                  }
                />
                <Typography style={webStyle.label}>Yes</Typography>
              </Box>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="have-issues-no"
                  checked={
                    !values.buyerSectionOtherInformation.any_legal_issue_to_note
                  }
                  onChange={() =>
                    setFieldValue(
                      "buyerSectionOtherInformation.any_legal_issue_to_note",
                      false
                    )
                  }
                />
                <Typography style={webStyle.label}>No</Typography>
              </Box>
            </Box>
            {values.buyerSectionOtherInformation.any_legal_issue_to_note && (
              <Box style={{ marginBottom: "30px" }}>
                <TextInput
                  label="If yes, please specify"
                  name="buyerSectionOtherInformation.legal_issue_details"
                  value={
                    values.buyerSectionOtherInformation.legal_issue_details
                  }
                  touched={
                    touched.buyerSectionOtherInformation?.legal_issue_details
                  }
                  error={
                    errors.buyerSectionOtherInformation?.legal_issue_details
                  }
                  fullWidth
                />
              </Box>
            )}
          </Box>
          {!canEdit && <Box style={webStyle.disableSection} />}
        </>
      )}
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  sectionHeader: {
    backgroundColor: "rgba(0, 151, 203, 0.05)",
    justifyContent: "space-between",
    borderRadius: "8px",
    padding: "10px 15px",
    marginBottom: "22px",
    alignItems: "center",
    display: "flex",
  },
  sectionContainer: {
    position: "relative",
  },
  leftContainer: {
    gap: "10px",
    alignItems: "center",
    display: "flex",
  },
  sectionHeaderLabel: {
    fontFamily: "Poppins",
    color: "#273567",
    fontSize: "20px",
    fontWeight: 500,
  },
  sectionLabel: {
    fontSize: "16px",
    fontFamily: "Poppins",
    marginBottom: "16px",
    fontWeight: 400,
    color: "#000000",
  },
  inputsContainer: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    display: "flex",
  },
  label: {
    fontWeight: 400,
    fontSize: "16px",
    color: "#273567",
    fontFamily: "Poppins",
  },
  section: {
    marginBottom: "16px",
  },
  radiosContainer: {
    gap: "30px",
    display: "flex",
    marginBottom: "16px",
    marginTop: "16px",
  },
  radioContainer: {
    alignItems: "center",
    display: "flex",
    width: "20%",
    gap: "12px",
  },
  disableSection: {
    position: "absolute",
    top: "0",
    zIndex: 9999,
    width: "100%",
    height: "100%",
    background: "rgba(221, 221, 221, 0.1)",
  },
  inputContainer: {
    width: "48%",
  },
};

export default BuyerSectionForm;
