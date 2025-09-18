import React from "react";
import { Box, Input, Typography } from "@material-ui/core";
import { Field, useFormikContext } from "formik";

interface InputProps {
  isEditable: boolean;
  name: string;
  label: string;
  value: string;
  textValue: string;
  touched?: boolean;
  error?: string;
}
const InputComponent = ({
  isEditable,
  name,
  label,
  value,
  textValue,
  touched,
  error,
}: InputProps) => {
  const { handleChange } = useFormikContext();

  return (
    <Box
      style={{
        ...webStyle.inputContainer,
        borderBottom: touched && error ? "1px solid #FE4023" : "",
      }}
    >
      <Typography style={webStyle.label}>{label}</Typography>
      {isEditable ? (
        <Field name={name}>
          {() => (
            <Input
              name={name}
              onChange={handleChange}
              disableUnderline
              inputProps={{ style: webStyle.input }}
              value={value}
              id={name}
            />
          )}
        </Field>
      ) : (
        <Typography style={webStyle.label}>{textValue}</Typography>
      )}
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  label: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "15px",
  },
  input: {
    padding: "4px 0 4px",
  },
};

export default InputComponent;
