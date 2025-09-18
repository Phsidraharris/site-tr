import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

import Select, { OptionsType } from "react-select";
import { useFormikContext } from "formik";
import { MemorandumFormValues } from "../helpers/types";

interface SelectInputProps {
  label: string;
  name: string;
  options: OptionsType<{
    label: string;
    value: any;
  }>;
  touched?: boolean;
  error?: string;
  value?: {
    label: string;
    value: any;
  };
}

const SelectInput = ({
  label,
  name,
  options,
  value,
  touched,
  error,
}: SelectInputProps) => {
  const useStyles = makeStyles(() => ({
    inputContainer: {
      width: "48%",
    },
    selectContainer: {
      border: "1px solid rgba(39, 53, 103, 0.4)",
      borderRadius: "8px",
      color: "#273567",
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
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
      padding: "unset",
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
      padding: "6px 15px",
    }),

    singleValue: (styles: Record<string, string>) => ({
      ...styles,
      fontFamily: "Poppins",
      color: "#273567",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      margin: "unset",
    }),
    placeholder: (styles: Record<string, string>) => ({
      ...styles,
      fontFamily: "Poppins",
      color: "#273567",
      marginRight: "3px",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
    }),
    option: (styles: Record<string, string>) => ({
      ...styles,
      fontFamily: "Poppins",
      background: "var(--On-Background, transparent)",
      alignItems: "center",
      color: "#273567",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      cursor: "pointer",
      borderRadius: "8px",
      marginBottom: "2px",
      "&:active": {
        background: "var(--On-Background, transparent)",
      },
      "&:hover": {
        background: "#F1F5F9",
      },
    }),
    menu: (styles: Record<string, string>) => ({
      ...styles,
      borderRadius: "15px",
      background: "#FFF",
      fontFamily: "Poppins",
    }),
    menuList: (base: Record<string, string>) => ({
      ...base,
      padding: "10px",
    }),
    indicatorSeparator: () => ({
      borderColor: "transparent",
    }),
  };

  const { setFieldValue } = useFormikContext<MemorandumFormValues>();

  return (
    <Box className={classes.inputContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <Box className={classes.selectContainer}>
        <Select
          name={name}
          onChange={(option) => setFieldValue(name, option?.value)}
          value={value}
          id={name}
          options={options}
          styles={customStyles}
          isSearchable={false}
        />
      </Box>
      {touched && error && (
        <Typography style={{ color: "red" }}>{error}</Typography>
      )}
    </Box>
  );
};

export default SelectInput;
