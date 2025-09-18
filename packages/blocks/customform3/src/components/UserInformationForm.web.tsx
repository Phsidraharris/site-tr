import React, { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useFormikContext } from "formik";
import InputComponent from "./InputComponent.web";
import { MemorandumFormValues } from "../helpers/types";

interface UserInformationFormProps {
  label: string;
  objectName: string;
  canEdit: boolean;
}

const UserInformationForm = ({
  label,
  objectName,
  canEdit,
}: UserInformationFormProps) => {
  const [isEditable, setEditable] = useState(false);

  const { values, errors, touched } = useFormikContext<MemorandumFormValues>();

  return (
    <Box style={webStyle.formContainer}>
      <Box style={webStyle.formHeader}>
        <Box style={webStyle.leftContainer}>
          <Typography style={webStyle.formHeaderLabel}>{label}</Typography>
        </Box>
        {!isEditable && canEdit && (
          <Edit
            style={webStyle.editIcon}
            onClick={() => setEditable(true)}
            data-testid="edit-icon"
          />
        )}
      </Box>
      <InputComponent
        isEditable={isEditable}
        label="Name -"
        name={`${objectName}.name`}
        value={values[objectName as "sellerInformation"].name}
        textValue={values[objectName as "sellerInformation"].name}
        error={errors[objectName as "sellerInformation"]?.name}
        touched={touched[objectName as "sellerInformation"]?.name}
      />
      <InputComponent
        isEditable={isEditable}
        label="Residential/Correspondence Address -"
        name={`${objectName}.residential_address`}
        value={values[objectName as "sellerInformation"].residential_address}
        textValue={
          values[objectName as "sellerInformation"].residential_address
        }
        error={errors[objectName as "sellerInformation"]?.residential_address}
        touched={
          touched[objectName as "sellerInformation"]?.residential_address
        }
      />
      <InputComponent
        isEditable={isEditable}
        label="Phone Number -"
        name={`${objectName}.phone_number`}
        value={values[objectName as "sellerInformation"].phone_number}
        textValue={values[objectName as "sellerInformation"].phone_number}
        error={errors[objectName as "sellerInformation"]?.phone_number}
        touched={touched[objectName as "sellerInformation"]?.phone_number}
      />
      <InputComponent
        isEditable={isEditable}
        label="Email -"
        name={`${objectName}.email`}
        value={values[objectName as "sellerInformation"].email}
        textValue={values[objectName as "sellerInformation"].email}
        error={errors[objectName as "sellerInformation"]?.email}
        touched={touched[objectName as "sellerInformation"]?.email}
      />
      {isEditable && canEdit && (
        <Box style={webStyle.submitButtonContainer}>
          <Button
            style={webStyle.submitButton}
            onClick={() => setEditable(false)}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  formContainer: {
    marginBottom: "22px",
  },
  formHeader: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 151, 203, 0.05)",
    padding: "10px 15px",
    borderRadius: "8px",
    alignItems: "center",
    marginBottom: "22px",
  },
  formHeaderLabel: {
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
  editIcon: {
    width: "24px",
    height: "24px",
    color: "#273567",
    cursor: "pointer",
  },
  submitButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "7px",
  },
  submitButton: {
    backgroundColor: "#273567",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    padding: "8px 16px 8px 16px",
  },
};

export default UserInformationForm;
