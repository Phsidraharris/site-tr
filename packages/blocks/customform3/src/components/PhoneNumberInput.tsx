import React from "react";
import { Box, Input, Typography, makeStyles } from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import Select, { OptionsType } from "react-select";
import { MemorandumFormValues } from "../helpers/types";

interface PhoneNumberInputProps {
  label: string;
  inputName: string;
  selectName: string;
  inputValue: any;
  options: OptionsType<{
    label: string;
    value: string;
  }>;
  touched?: boolean;
  error?: string;
  selectedValue: {
    label: string;
    value: string;
  };
}

const PhoneNumberInput = ({
  label,
  inputName,
  selectName,
  inputValue,
  selectedValue,
  options,
  touched,
  error,
}: PhoneNumberInputProps) => {
  const { handleChange, setFieldValue } = useFormikContext<MemorandumFormValues>();

  const useStyles = makeStyles(() => ({
    inputWrapper: {
      width: "100%",
    },
    inputContainer: {
      width: "48%",
    },
    selectContainer: {
      display: "flex",
      border:
        touched && error
          ? "1px solid #FE4023"
          : "1px solid rgba(39, 53, 103, 0.4)",
      borderRadius: "8px",
    },
    input: {
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
    label: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      color: "#273567",
    },
  }));

  const classes = useStyles();

  const customStyles = {
    valueContainer: (base: Record<string, string>) => ({
      ...base,
      border: "none",
      width: "46px",
    }),
    dropdownIndicator: (base: Record<string, string>) => ({
      ...base,
      color: "#848FAC",
    }),
    control: () => ({
      cursor: "pointer",
      fontFamily: "Poppins",
      borderRadius: "12px",
      display: "flex",
      border: "none",
      background: "#FFF",
      paddingLeft: "5px",
      height: "100%",
    }),
    singleValue: (styles: Record<string, string>) => ({
      ...styles,
      fontWeight: 400,
      color: "#273567",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
    }),
    placeholder: (styles: Record<string, string>) => ({
      ...styles,
      marginRight: "3px",
      fontFamily: "Poppins",
      color: "#273567",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
    }),
    option: (styles: Record<string, string>) => ({
      ...styles,
      "&:active": {
        background: "var(--On-Background, transparent)",
      },
      "&:hover": {
        background: "#F1F5F9",
      },
      background: "var(--On-Background, transparent)",
      alignItems: "center",
      padding: "5px",
      fontSize: "14px",
      color: "#273567",
      marginBottom: "2px",
      cursor: "pointer",
      fontWeight: 400,
      fontStyle: "normal",
      borderRadius: "8px",
      fontFamily: "Poppins",
    }),
    menu: (styles: Record<string, string>) => ({
      ...styles,
      borderRadius: "15px",
      background: "#FFF",
      fontFamily: "Poppins",
    }),
    menuList: (base: Record<string, string>) => ({
      ...base,
      maxHeight: "11rem",
      padding: "5px",
    }),
    indicatorSeparator: () => ({
      borderColor: "transparent",
    }),
  };

  return (
    <Box className={classes.inputContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <Box className={classes.selectContainer}>
        <Select
          options={options}
          onChange={(option) => setFieldValue(selectName, option?.value)}
          isSearchable={false}
          value={selectedValue}
          styles={customStyles}
          placeholder="+44"
          id={selectName}
        />
        <Field name={inputName}>
          {() => (
            <Input
              name={inputName}
              onChange={handleChange}
              disableUnderline
              inputProps={{ className: classes.input }}
              value={inputValue}
              id={inputName}
              type="number"
              className={classes.inputWrapper}
            />
          )}
        </Field>
      </Box>
    </Box>
  );
};

export default PhoneNumberInput;
