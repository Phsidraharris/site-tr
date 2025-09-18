import React from "react";

import {
  Container,
  Box,
  Input,
  Button,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
  // Customizable Area Start
  // Select,
  TextareaAutosize,
  Snackbar,
  styled,
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import Select from "react-select";


const cancel = require("../assets/cancel.svg");
const placeLogo = require('../assets/place.svg');
const itemImg = require('../assets/homepic.png');
const tick = require("../assets/tick.png");

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      margin: "20px 0px",
    },
  },
});

const StyledInput = styled(Input)({
    border: "1px solid lightgray",
    borderRadius: "8px",
    padding: "7px 7px 7px 10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    "&:hover": {
      borderColor: "#0097CB !important",
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)",
    },
    "&:focus" : {
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)"
    },
    // firefox
    "&:focus-visible": {
      outline: "0",
    }
  });
  
  const StyledBox = styled(Box)({
    display: 'flex', 
    justifyContent: 'space-evenly',
    '@media (max-width: 1280px)': {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    '@media (max-width: 723px)': {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    '@media (max-width: 573px)': {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    '@media (max-width: 447px)': {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    '@media (max-width: 375px)': {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const StyledFormBox = styled(Box)({
    height: "auto",
    display: "flex",
    width: "628px",
    padding: "19px 48px",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
    '@media (max-width: 1280px)': {
      justifyContent: 'center',
      width: "628px",
    },
    '@media (max-width: 723px)': {
      justifyContent: 'center',
      width: "628px",
    },
    '@media (max-width: 573px)': {
      justifyContent: 'center',
      width: "628px",
    },
    '@media (max-width: 447px)': {
      justifyContent: 'center',
      width: "100%",
    },
    '@media (max-width: 375px)': {
      justifyContent: 'center',
      width: "300px",
    },
  })

  const StyledPropertyBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '510px', 
    width: '565px',
    padding: '22px 22px 0px 22px',
    borderRadius: "8px", 
    boxShadow: '0px 0px 15px 0px rgba(108, 108, 108, 0.15)',
    '@media (max-width: 447px)': {
      justifyContent: 'center',
      width: "350px",
    },
    '@media (max-width: 375px)': {
      justifyContent: 'center',
      margin: '0 auto',
      width: "350px",
    },
  })

  const StyledTextArea = styled(TextareaAutosize)({
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.5",
    padding: "8px 12px",
    resize: "none",
    transition: ".3s all ease-in",
    borderRadius: "8px",
    color: "gray",
    background: "white",
    "&:hover": {
      borderColor: "#0097CB !important",
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)",
    },
    "&:focus": {
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)",
    },
    // firefox
    "&:focus-visible": {
      outline: "0",
    },
  });

const customStyles = {
  valueContainer: (base: Record<string, string>) => ({
    ...base,
    border: 'none',
    width: '70px'
  }),
  dropdownIndicator: (base: Record<string, string>) => ({
    ...base,
    color: "#273567",
    heigth: '8px'
  }),
  control: (styles: Record<string, string>) => ({
    // ...styles,
    cursor: "pointer",
    fontFamily: "Poppins",
    borderRadius: "12px",
    display: 'flex',
    border: "none",
    background: "#FFF",
    paddingLeft: "5px",
    height: '100%',
  }),
  singleValue: (styles: Record<string, string>) => ({
    ...styles,
    fontFamily: "Poppins",
    color: '#273567',
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  }),
  placeholder: (styles: Record<string, string>) => ({
    ...styles,
    fontFamily: "Poppins",
    color: '#273567',
    marginRight: '3px',
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  }),
  option: (
    styles: Record<string, string>,
    { isFocused }: { isFocused: boolean }
  ) => ({
    ...styles,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Poppins",
    background: isFocused
          ? "var(--primary-500, #FAFAFA)"
          : "var(--On-Background, transparent)",
    borderRadius: "15px",
    color: "#273567",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  }),
  menu: (styles: Record<string, string>) => ({
    ...styles,
    width: '95px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "10px 0px 0px 10px",
    background: "#FFF",
    fontFamily: "Poppins",
  }),
  menuList: (base: Record<string, string>) => ({
    ...base,
    maxHeight: "11rem",
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#273567"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#273567"
    }
  }),
  indicatorSeparator: (base: Record<string, string>) => ({
    borderColor: "transparent",
  })
};

const EnquiryFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Please enter your first name."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Please enter your last name."),
  email: Yup.string().email("Invalid email").required("Email is not in the correct format."),
  countryCode: Yup.string(),
  contactNumber: Yup.string()
    .min(8, "Invalid Number")
    .max(12, "Invalid Number!")
    .required("Please enter your contact number."),
  country: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Please enter your country."),
  address: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your full address."),
  availability: Yup.string()
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Please enter your availability."),
});

export const listOfCountryCode = (array: any) => {
  console.log(array)
  return array.map((item: any) => {
    return { value: item.attributes.country_code, label: `${item.attributes.emoji_flag} +${item.attributes.country_code}` }
  })
  
}

const checkStyles = (touched: any, errors: any, fieldName: string) => {
  if (touched[fieldName] && errors[fieldName]) {
    return webStyle.inputWarning;
  }
  return webStyle.input;
}

// Customizable Area End

import Customform3Controller, {
  Props,
  configJSON,
} from "./Customform3Controller";

export default class Customform3 extends Customform3Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <StyledBox>
          <Formik
            data-testid='Formik'
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              countryCode: "",
              contactNumber: "",
              country: "",
              address: "",
              availability: "",
              message: "",
            }}
            validationSchema={EnquiryFormSchema}
            onSubmit={(values) => {this.handleSnackbarOpen()}}>
              {({ 
                setFieldValue,
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                touched,
                values
              }) => (
              <form data-testid="customForm" onSubmit={handleSubmit}>
                <Box style={{ display: "flex",justifyContent: "center", alignItems: "center" }}>
                  <StyledFormBox>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "30px",
                      }}
                    >
                      <div>
                        <Typography variant={"h4"} style={webStyle.title}>
                          Enquiry Form
                        </Typography>
                        <Typography style={webStyle.spanTitle}>
                          Enter your all information
                        </Typography>
                      </div>
                      <Button>
                        <img src={cancel} alt="" width={"30px"} height={"30px"} />
                      </Button>
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>*First Name</Typography>
                      <Field name="firstName">
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"firstNameInput"}}
                            name="firstName"
                            onChange={handleChange}
                            disableUnderline
                            onBlur={handleBlur}
                            id="firstName"
                            style={checkStyles(touched, errors, 'firstName')}
                          />
                        )}
                      </Field>
                      {touched.firstName && errors.firstName && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.firstName}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>*Last Name</Typography>
                      <Field name={"lastName"}>
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"lastNameInput"}}
                            onChange={handleChange}
                            disableUnderline
                            onBlur={handleBlur}
                            style={checkStyles(touched, errors, 'lastName')}
                            type="text"
                            name="lastName"
                          />
                        )}
                      </Field>
                      {touched.lastName && errors.lastName && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.lastName}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>*Email Id</Typography>
                      <Field name="email">
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"emailInput"}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={checkStyles(touched, errors, 'email')}
                            disableUnderline
                            type="text"
                            name="email"
                          />
                        )}
                      </Field>
                      {touched.email && errors.email && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInputNumber}>
                      <Typography style={webStyle.span}>*Contact Number</Typography>
                      <Box
                        style={touched.contactNumber && errors.contactNumber ? {
                          display:'flex',
                          border: "1px solid red",
                          borderRadius: "8px",
                        } : 
                        {
                          display:'flex',
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                        }}
                      >
                        <Select
                          onChange={(option) => setFieldValue("countryCode", option?.value)}
                          styles={customStyles}
                          data-testid="countryCodeTestId"
                          options={listOfCountryCode(this.state.getCountryCodeData)}
                          isSearchable={false}
                          placeholder={'+44'}
                          value={listOfCountryCode(this.state.getCountryCodeData).find((option:any) => option.value === values.countryCode)}
                        />
                        <Field name={"contactNumber"}>
                          {() => (
                            <Input
                              inputProps={{"data-testid":"contactNumberInput"}}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="contactNumber"
                              style={webStyle.numberInput}
                              disableUnderline
                              type={"number"}
                            />
                          )}
                        </Field>
                      </Box>
                      {touched.contactNumber && errors.contactNumber && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.contactNumber}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>*Country</Typography>
                      <Field name={"country"}>
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"countryInput"}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={checkStyles(touched, errors, 'country')}
                            disableUnderline
                            type="text"
                            name={"country"}
                          />
                        )}
                      </Field>
                      {touched.country && errors.country && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.country}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>*Address</Typography>
                      <Field name={"address"}>
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"addressInput"}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={checkStyles(touched, errors, 'address')}
                            disableUnderline
                            type="text"
                            name={"address"}
                          />
                        )}
                      </Field>
                      {touched.address && errors.address && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.address}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>
                        *When are you available for viewing
                      </Typography>
                      <Field name={"availability"}>
                        {() => (
                          <StyledInput
                            inputProps={{"data-testid":"availabilityInput"}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={checkStyles(touched, errors, 'availability')}
                            disableUnderline
                            type="text"
                            name={"availability"}
                          />
                        )}
                      </Field>
                      {touched.availability && errors.availability && (
                        <Typography style={webStyle.errorMessage}>
                          {errors.availability}
                        </Typography>
                      )}
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Typography style={webStyle.span}>Message</Typography>
                      <StyledTextArea
                        data-testid="textbox"
                        minRows={4}
                        maxRows={5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={"message"}
                        style={webStyle.inputMessage}
                      />
                    </Box>
                    <Box style={webStyle.formInput}>
                      <Button data-testid="Submit" type="submit" style={webStyle.btnSubmit}>Submit</Button>
                    </Box>
                  </StyledFormBox>
                </Box>
                <Snackbar
                    data-testid="snackbar"
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={this.state.isSnackbarOpen}
                    autoHideDuration={5000} 
                    onClose={this.handleSnackbarClose}
                >
                    <div style={webStyle.popup}>
                        <img src={tick} style={{marginRight: "5px", marginLeft: "5px", color: "#0F172A", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }} />
                        Submitted Successfully!
                    </div>
                </Snackbar>
              </form>
            )}
          </Formik>
          <StyledPropertyBox>
            <Box style={{display: 'flex', flexDirection: 'column', gap: '5px',justifyContent: 'start', background: '#FAFAFA', borderRadius: '8px'}}>
              <img src={itemImg} alt="propertyImage" style={{marginBottom: '30px',width:'auto', height:'301px'}} />
              <span style={webStyle.costSpan}>$402,999</span>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" style={webStyle.h6}>Beautiful apartment</Typography>
              <Box style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                <img src={placeLogo} alt="" width={'12px'} height={'16px'} />
                <span style={webStyle.spanCenter}>
                  Shree Garden 1132, UK, 756552
                </span>
              </Box>
            </Box>
          </StyledPropertyBox>
        </StyledBox>
      </ThemeProvider>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  formWrapper: {
    height: "auto",
    display: "flex",
    width: "628px",
    padding: "19px 48px",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  } as React.CSSProperties,
  formInput: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  } as React.CSSProperties,
  formInputNumber: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  } as React.CSSProperties,
  input: {
    border: "1px solid lightgray",
    borderRadius: "8px",
    padding: "7px 7px 7px 10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  },
  inputWarning: {
    width: "100%",
    border: "1px solid red",
    borderRadius: "8px",
    padding: "7px 7px 7px 10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  },
  select: {
    flex: 1,
    border: "none",
    paddingLeft: "5px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  },
  popup: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    width: "362px",
    height: "42px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    paddingLeft: "10px",
    paddingRight: "10px",
    boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  },
  inputMessage: {
    border: "1px solid lightgray",
    borderRadius: "8px",
    padding: "7px 7px 7px 10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  },
  span: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  },
  costSpan: {
    alignText:"start",
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    marginLeft: '5px',
    marginBottom: "30px"
  },
  spanCenter: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  },
  h6: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "44px",
    letterSpacing: "-0.24px"
  },
  title: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  },
  spanTitle: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  },
  numberInput: {
    width: '100%',
    flex: 4,
    padding: "7px 7px 7px 10px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  } as React.CSSProperties,
  btnSubmit: {
    padding: "10px 16px",
    borderRadius: "8px",
    color: "white",
    background: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    cursor: 'pointer'
  } as React.CSSProperties,
  errorMessage: {
    color: '#FF0404',
    fontFamily: "Poppins",
    fontSize: '12px',
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal" 
  }
};
// Customizable Area End