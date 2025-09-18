import { Box, Input, Typography, styled } from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import React, { useState } from "react";
import { Edit } from "@material-ui/icons";

interface EditableInputProps {
  name: string;
  label: string;
  textValue: string;
  canEdit: boolean;
}

interface FormValues {
  [key: string]: string;
}

const EditableInput = ({
  name,
  label,
  textValue,
  canEdit,
}: EditableInputProps) => {
  const [isEditable, setEditable] = useState(false);

  const StyledInput = styled(Input)(() => ({
    "& input": {
      padding: "4px 0 4px",
    },
  }));

  const { values, handleChange, touched, errors } =
    useFormikContext<FormValues>();

  return (
    <Box>
      <Box
        style={{
          ...webStyle.editableInputContainer,
          border: touched[name] && errors[name] ? "1px solid #FE4023" : "",
        }}
      >
        <Box style={webStyle.leftContainer}>
          <Typography style={webStyle.editableInputLabel}>{label}</Typography>
          {isEditable ? (
            <Field name={name}>
              {() => (
                <StyledInput
                  name={name}
                  disableUnderline
                  onChange={handleChange}
                  onBlur={() => setEditable(false)}
                  value={values[name]}
                  id={name}
                  autoFocus
                />
              )}
            </Field>
          ) : (
            <Typography data-testid="label" style={webStyle.editableInputLabel}>
              {textValue}
            </Typography>
          )}
        </Box>
        {!isEditable && canEdit && (
          <Edit
            style={webStyle.editIcon}
            onClick={() => setEditable(true)}
            data-testid="edit"
          />
        )}
      </Box>
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  titleContainer: {
    textAlign: "center",
    color: "#273567",
    marginBottom: "32px",
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "24px",
  },
  editableInputContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 151, 203, 0.05)",
    padding: "10px 15px",
    borderRadius: "8px",
    alignItems: "center",
    marginBottom: "32px",
  },
  leftContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  editableInputLabel: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "20px",
    color: "#273567",
  },
  editIcon: {
    width: "24px",
    height: "24px",
    color: "#273567",
    cursor: "pointer",
  },
};

export default EditableInput;
