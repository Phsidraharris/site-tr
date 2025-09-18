import React from "react";
import {
  Box,
  Input,
  TextareaAutosize,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import { MemorandumFormValues } from "../helpers/types";

interface TextInputProps {
  label: string;
  name: string;
  value: any;
  touched?: boolean;
  error?: string;
  fullWidth?: boolean;
  inputType?: string;
  isTextArea?: boolean;
}

const TextInput = ({
  label,
  name,
  value,
  touched,
  error,
  fullWidth,
  inputType,
  isTextArea,
}: TextInputProps) => {
  const { handleChange } = useFormikContext<MemorandumFormValues>();

  const useStyles = makeStyles(() => ({
    inputWrapper: {
      width: "100%",
    },
    inputContainer: {
      width: fullWidth ? "100%" : "48%",
    },
    input: {
      border:
        touched && error
          ? "1px solid #FE4023"
          : "1px solid rgba(39, 53, 103, 0.4)",
      borderRadius: "8px",
      padding: "15px",
      color: "#273567",
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      '&[type="date"]': {
        textTransform: "uppercase",
        "&::-webkit-calendar-picker-indicator": {
          visibility: "hidden",
        },
      },
    },
    textArea: {
      width: "100%",
      border:
        touched && error
          ? "1px solid #FE4023"
          : "1px solid rgba(39, 53, 103, 0.4)",
      borderRadius: "8px",
      padding: "15px",
      color: "#273567",
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      resize: "none",
      "&:focus-visible": {
        outline: "unset",
      },
    },
    label: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      color: "#273567",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.inputContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <Field name={name}>
        {() =>
          isTextArea ? (
            <TextareaAutosize
              minRows={3}
              maxRows={3}
              name={name}
              onChange={handleChange}
              value={value}
              id={name}
              className={classes.textArea}
            />
          ) : (
            <Input
              name={name}
              onChange={handleChange}
              disableUnderline
              inputProps={{ className: classes.input }}
              value={value}
              id={name}
              type={inputType}
              className={classes.inputWrapper}
            />
          )
        }
      </Field>
    </Box>
  );
};

export default TextInput;
