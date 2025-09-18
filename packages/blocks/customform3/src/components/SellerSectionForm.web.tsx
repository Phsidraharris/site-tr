import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useFormikContext } from "formik";
import TextInput from "./TextInput.web";
import RadioButton from "./RadioButton";
import SelectInput from "./SelectInput.web";
import SellerSectionInformation from "./SellerSectionInformation.web";
import { MemorandumFormValues } from "../helpers/types";

interface SellerSectionFormProps {
  canEdit: boolean;
}

const SellerSectionForm = ({ canEdit }: SellerSectionFormProps) => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<MemorandumFormValues>();

  const selectOptions = [
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ];

  return (
    <Box style={webStyle.sectionContainer}>
      <Box style={webStyle.sectionHeader}>
        <Box style={webStyle.leftContainer}>
          <Typography style={webStyle.sectionHeaderLabel}>
            Seller Section
          </Typography>
        </Box>
      </Box>
      {canEdit ? (
        <>
          <Box style={webStyle.section}>
            <Typography style={webStyle.sectionLabel}>
              Seller Legal Conveyancer
            </Typography>
            <Box style={webStyle.inputsContainer}>
              <TextInput
                label="*Name"
                name="sellerSection.name"
                value={values.sellerSection.name}
                touched={touched.sellerSection?.name}
                error={errors.sellerSection?.name}
              />
              <TextInput
                label="*Residential/Correspondence Address"
                name="sellerSection.residential_address"
                value={values.sellerSection.residential_address}
                touched={touched.sellerSection?.residential_address}
                error={errors.sellerSection?.residential_address}
              />
              <TextInput
                label="*Phone Number"
                name="sellerSection.phone_number"
                value={values.sellerSection.phone_number}
                touched={touched.sellerSection?.phone_number}
                error={errors.sellerSection?.phone_number}
              />
              <TextInput
                label="*Email"
                name="sellerSection.email"
                value={values.sellerSection.email}
                touched={touched.sellerSection?.email}
                error={errors.sellerSection?.email}
              />
            </Box>
          </Box>
          <Box style={webStyle.section}>
            <Typography style={webStyle.sectionLabel}>
              Other Information
            </Typography>
            <Typography style={webStyle.label}>
              *Will a holding deposit be paid?
            </Typography>
            <Box style={webStyle.radiosContainer}>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="holding-deposit-yes"
                  checked={
                    values.sellerSectionOtherInformation.holding_deposit_paid
                  }
                  onChange={() =>
                    setFieldValue(
                      "sellerSectionOtherInformation.holding_deposit_paid",
                      true
                    )
                  }
                />
                <Typography style={webStyle.label}>Yes</Typography>
              </Box>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  testId="holding-deposit-no"
                  checked={
                    !values.sellerSectionOtherInformation.holding_deposit_paid
                  }
                  onChange={() => {
                    setFieldValue(
                      "sellerSectionOtherInformation.holding_deposit_paid",
                      false
                    );
                  }}
                />
                <Typography style={webStyle.label}>No</Typography>
              </Box>
            </Box>
            {values.sellerSectionOtherInformation.holding_deposit_paid && (
              <Box style={{ marginBottom: "30px" }}>
                <TextInput
                  label="If yes, how much will be paid?"
                  name="sellerSectionOtherInformation.how_much_deposit_paid"
                  value={
                    values.sellerSectionOtherInformation.how_much_deposit_paid
                  }
                  touched={
                    touched.sellerSectionOtherInformation?.how_much_deposit_paid
                  }
                  error={
                    errors.sellerSectionOtherInformation?.how_much_deposit_paid
                  }
                  fullWidth
                />
              </Box>
            )}
            <Box style={webStyle.inputsContainer}>
              <SelectInput
                label="*Has the deposit been verified/Confirmed?"
                name="sellerSectionOtherInformation.has_deposit_been_verified"
                value={selectOptions.find(
                  (option) =>
                    option.value ===
                    values.sellerSectionOtherInformation
                      ?.has_deposit_been_verified
                )}
                touched={
                  touched.sellerSectionOtherInformation
                    ?.has_deposit_been_verified
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.has_deposit_been_verified
                }
                options={selectOptions}
              />
              <TextInput
                label="*Expected date for exchange"
                name="sellerSectionOtherInformation.expected_date_for_exchange"
                value={
                  values.sellerSectionOtherInformation
                    .expected_date_for_exchange
                }
                touched={
                  touched.sellerSectionOtherInformation
                    ?.expected_date_for_exchange
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.expected_date_for_exchange
                }
                inputType="date"
              />
              <TextInput
                label="*Expected date of completion"
                name="sellerSectionOtherInformation.expected_date_for_completion"
                value={
                  values.sellerSectionOtherInformation
                    .expected_date_for_completion
                }
                touched={
                  touched.sellerSectionOtherInformation
                    ?.expected_date_for_completion
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.expected_date_for_completion
                }
                inputType="date"
              />
              <TextInput
                label="*Is the Vendor buying another property?"
                name="sellerSectionOtherInformation.vendor_buying_another_property"
                value={
                  values.sellerSectionOtherInformation
                    .vendor_buying_another_property
                }
                touched={
                  touched.sellerSectionOtherInformation
                    ?.vendor_buying_another_property
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.vendor_buying_another_property
                }
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
                label="Special conditions for sale"
                name="sellerSectionOtherInformation.special_conditions_for_sale"
                value={
                  values.sellerSectionOtherInformation
                    .special_conditions_for_sale
                }
                touched={
                  touched.sellerSectionOtherInformation
                    ?.special_conditions_for_sale
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.special_conditions_for_sale
                }
                isTextArea
              />
              <TextInput
                label="*Details of the Onward chase"
                name="sellerSectionOtherInformation.details_of_onward_chase"
                value={
                  values.sellerSectionOtherInformation.details_of_onward_chase
                }
                touched={
                  touched.sellerSectionOtherInformation?.details_of_onward_chase
                }
                error={
                  errors.sellerSectionOtherInformation?.details_of_onward_chase
                }
                isTextArea
              />
            </Box>
            <Typography style={webStyle.label}>
              *Any Legal issues to Note?.
            </Typography>
            <Box style={webStyle.radiosContainer}>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  checked={
                    values.sellerSectionOtherInformation.legal_issues_to_note
                  }
                  onChange={() =>
                    setFieldValue(
                      "sellerSectionOtherInformation.legal_issues_to_note",
                      true
                    )
                  }
                  testId="have-issues-yes"
                />
                <Typography style={webStyle.label}>Yes</Typography>
              </Box>
              <Box style={webStyle.radioContainer}>
                <RadioButton
                  checked={
                    !values.sellerSectionOtherInformation.legal_issues_to_note
                  }
                  onChange={() =>
                    setFieldValue(
                      "sellerSectionOtherInformation.legal_issues_to_note",
                      false
                    )
                  }
                  testId="have-issues-no"
                />
                <Typography style={webStyle.label}>No</Typography>
              </Box>
            </Box>
            {values.sellerSectionOtherInformation.legal_issues_to_note && (
              <Box style={{ marginBottom: "30px" }}>
                <TextInput
                  label="If yes, please specify"
                  name="sellerSectionOtherInformation.if_yes_please_specify"
                  value={
                    values.sellerSectionOtherInformation.if_yes_please_specify
                  }
                  touched={
                    touched.sellerSectionOtherInformation?.if_yes_please_specify
                  }
                  error={
                    errors.sellerSectionOtherInformation?.if_yes_please_specify
                  }
                  fullWidth
                />
              </Box>
            )}
            <Box style={webStyle.inputsContainer}>
              <TextInput
                label="*Fixture and fittings including in the sale"
                name="sellerSectionOtherInformation.fixtures_and_fittings_including_in_sale"
                value={
                  values.sellerSectionOtherInformation
                    .fixtures_and_fittings_including_in_sale
                }
                touched={
                  touched.sellerSectionOtherInformation
                    ?.fixtures_and_fittings_including_in_sale
                }
                error={
                  errors.sellerSectionOtherInformation
                    ?.fixtures_and_fittings_including_in_sale
                }
              />
              <TextInput
                label="Extra notes/Observations"
                name="sellerSectionOtherInformation.extra_notes"
                value={values.sellerSectionOtherInformation.extra_notes}
                touched={touched.sellerSectionOtherInformation?.extra_notes}
                error={errors.sellerSectionOtherInformation?.extra_notes}
              />
            </Box>
          </Box>
        </>
      ) : (
        <SellerSectionInformation />
      )}
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  sectionContainer: {
    marginBottom: "32px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 151, 203, 0.05)",
    padding: "10px 15px",
    borderRadius: "8px",
    alignItems: "center",
    marginBottom: "22px",
  },
  sectionHeaderLabel: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "20px",
    color: "#273567",
  },
  leftContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  sectionLabel: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    color: "#000000",
    marginBottom: "16px",
  },
  label: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    color: "#273567",
  },
  inputsContainer: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "48%",
  },
  section: {
    marginBottom: "16px",
  },
  radioContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "20%",
  },
  radiosContainer: {
    display: "flex",
    gap: "30px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  radio: {
    padding: "unset",
    width: "20px",
    height: "20px",
  },
};

export default SellerSectionForm;
