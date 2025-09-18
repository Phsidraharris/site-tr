import React from "react";

import {
  Box,
  Input,
  Button,
  Typography,
  // Customizable Area Start
  TextareaAutosize,
  styled,
  Radio
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import Select from "react-select";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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

const customStyles = {
  control: (base: Record<string, string>) => ({
    ...base,
    border: '1px solid #ccc',
    '&:hover': {
      borderColor: "#0097CB !important",
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)",
    },
    '&.is-focused': {
      borderColor: "#0097CB !important",
      boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.20)",
    },
    borderRadius: '8px',
  }),
  valueContainer: (base: Record<string, string>) => ({
    display: 'flex',
    alignItems: 'center',
    padding: "7px 7px 7px 10px",
    borderRadius: '8px',
    height: '2rem',
  }),
  dropdownIndicator: (base: Record<string, string>) => ({
    color: "#273567",
    margin: "15px"
  }),
  placeholder: (styles: Record<string, string>) => ({
    fontFamily: "Poppins",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: "normal",
    color: "#273567"
  }),
  indicatorSeparator: (base: Record<string, string>) => ({
    borderColor: "transparent",
  })
};


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
  
  export const StyledTextArea = styled(TextareaAutosize)({
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

const StyledRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: "#031B59"
  }
}));

const checkStyles = (touched: any, errors: any, fieldName: string) => {
  if (touched[fieldName] && errors[fieldName]) {
    return webStyle.inputAlertWarning;
  }
  return webStyle.inputForm;
}


const ValuationFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Please enter your full name."),
  email: Yup.string().email("Invalid email").required("Email is not in the correct format."),
  telephoneNum: Yup.string()
    .min(8, "Invalid Number")
    .max(12, "Invalid Number!")
    .required("Please enter your telephone number."),
});

export const StepOne = (props:any) => {
  return (
      <Box style={{display: 'flex', flexDirection: 'column'}}>
        <Box style={{marginBottom: '32px'}} >
            <Typography style={{color: "#273567",fontFamily: "Poppins",fontSize: "24px",fontStyle: "normal",fontWeight: 500}}>
              Get your property valuation from the area experts by giving basic information
            </Typography>
        </Box>
        <Box style={{display: 'flex', flexDirection: 'column'}}>
            <label style={webStyle.formSpan}>Full Address Property</label>
            <StyledTextArea
                data-testid="fullPropertyAddressInput"
                minRows={4}
                maxRows={5}
                name={"fullPropertyAddress"}
                style={webStyle.inputFormMessage}
                placeholder={"Type..."}
                onChange={(e) => props.setFormData("fullPropertyAddress", e.target.value)}
            />
        </Box>
      </Box>
  )
}
export const StepTwo = (props:any) => {

  const handleRadioOption = (value: string) => {
    props.setSelection(value);
    props.setFormData("monthCount", value);
  }

  return (
      <Box style={{ width: '100%'}}>
          <Box style={{marginBottom: '32px'}}>
              <Typography style={webStyle.formTitle}>Full Property Address</Typography>
          </Box>
          <Box style={{display: 'flex',flexDirection: 'column', marginBottom: '32px'}}>
              <label style={webStyle.formSpan}>Full Property Address</label>
              <StyledInput disableUnderline style={webStyle.inputForm} type="text" value={props.formData.fullPropertyAddress}/>
          </Box>
          <Box style={{marginBottom: '22px'}}>
              <Typography style={{color: "#273567",fontFamily: "Poppins",fontSize: "30px",fontStyle: "normal",fontWeight: 400,lineHeight: "40px",marginBottom: '22px'}}>
                Your Plan
              </Typography>
              <span style={webStyle.formSpan}>When would you like to sell the property</span>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <label style={webStyle.radioLabel}> 
                <StyledRadio checked={props.option === "0 to 3 month"} onChange={() => handleRadioOption("0 to 3 month")} value={'0 to 3 month'}/>0 to 3 month
              </label>
              <label style={webStyle.radioLabel}> 
                <StyledRadio checked={props.option === "3 to 6 month"} onChange={() => handleRadioOption("3 to 6 month")} value={'3 to 6 month'}/>3 to 6 month
              </label>
              <label style={webStyle.radioLabel}> 
                <StyledRadio checked={props.option === "6 month+"} onChange={() => handleRadioOption("6 month+")} value={'6 month+'}/>6 month+
              </label>
          </Box>
      </Box>
  )
}
export const StepThree = (props:any) => {
  return (
      <Box style={{width: '100%'}}>
          <Box >
              <Typography style={{color: "#273567",fontFamily: "Poppins",fontSize: "30px",fontStyle: "normal",fontWeight: 400,lineHeight: "40px",marginBottom: '32'}}>Full Property Address</Typography>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column' ,marginBottom: '42px'}}>
              <Typography style={webStyle.formSpan}>Full Property Address</Typography>
              <StyledInput  disableUnderline style={webStyle.inputForm} value={props.formData.fullPropertyAddress} type="text"/>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column',marginBottom: '42px'}}>
              <Typography style={{color: "#273567",fontFamily: "Poppins",fontSize: "30px",fontStyle: "normal",fontWeight: 400,lineHeight: "40px",marginBottom: '32px'}}>Your Plan</Typography>
              <span style={{color: "#273567",fontFamily: "Poppins",fontSize: "16px",fontStyle: "normal",fontWeight: 400,lineHeight: "24px",marginBottom: '15px'}}>
                {props.formData.monthCount}
              </span>
          </Box>
          <Formik 
            initialValues={{
              fullName: "",
              email: "",
              telephoneNum: "",
            }} 
            validationSchema={ValuationFormSchema} 
            onSubmit={(value) => {}}>
              {({ 
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                touched 
              }) => (
                <form data-test-id="valuationForm" onSubmit={handleSubmit}>
                  <Box>
                    <Typography style={{color: "#273567",fontFamily: "Poppins",fontSize: "30px",fontStyle: "normal",fontWeight: 400,lineHeight: "40px",marginBottom: '42px'}}>Your Details</Typography>
                  </Box>
                  <Box style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>
                      <label style={webStyle.formSpan}>*Full Name</label>
                      <Field name="fullName">
                        {() => (
                          <StyledInput
                            data-testid="fullNameInput"
                            name="fullName"
                            onChange={handleChange}
                            disableUnderline
                            onBlur={handleBlur}
                            id="fullName"
                            style={checkStyles(touched, errors, 'fullName')}
                          />
                        )}
                      </Field>
                      {touched.fullName && errors.fullName && (
                        <Typography style={webStyle.alert}>
                          {errors.fullName}
                        </Typography>
                      )}
                  </Box>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>
                      <label style={webStyle.formSpan}>*Email</label>
                      <Field name="email">
                        {() => (
                          <StyledInput
                            data-testid="emailInput"
                            name="email"
                            onChange={handleChange}
                            disableUnderline
                            onBlur={handleBlur}
                            id="email"
                            style={checkStyles(touched, errors, 'email')}
                          />
                        )}
                      </Field>
                      {touched.email && errors.email && (
                        <Typography style={webStyle.alert}>
                          {errors.email}
                        </Typography>
                      )}
                  </Box>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>
                      <label style={webStyle.formSpan}>*Telephone Number</label>
                      <Field name="telephoneNum">
                        {() => (
                          <StyledInput
                            data-test-id="telephoneNumInput"
                            name="telephoneNum"
                            onChange={handleChange}                            disableUnderline
                            onBlur={handleBlur}
                            id="telephoneNum"
                            style={checkStyles(touched, errors, 'telephoneNum')}
                          />
                        )}
                      </Field>
                      {touched.telephoneNum && errors.telephoneNum && (
                        <Typography style={webStyle.alert}>
                          {errors.telephoneNum}
                        </Typography>
                      )}
                  </Box>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>
                      <label style={webStyle.formSpan}>*Message</label>
                      <StyledTextArea
                          data-testid="messageTextArea"
                          minRows={4}
                          maxRows={5}
                          name={"message"}
                          style={webStyle.inputFormMessage}
                          placeholder={"Type..."}
                          onChange={handleChange}                      />
                  </Box>
                  <Box style={{display: 'flex', flexDirection: 'column'}}>
                      <label style={webStyle.formSpan}>*Contact preference</label>
                      <Select
                        styles={customStyles}
                        placeholder={'No preference'}
                        data-testid="selectInput"
                        className="basic-single"
                        classNamePrefix="select"
                      />
                  </Box>
                  </Box>
                </form>
              )}
          </Formik>
      </Box>
  )
}
// Customizable Area End

import Customform3Controller, {
  Props,
} from "./Customform3Controller";

export default class Customformvaluation extends Customform3Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    console.log(this.state)
    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <form data-testid="customForm" style={webStyle.valuationFormWrapper}>
          {this.state.page === 1 && <StepOne option={this.state.selectedOption} setSelection={this.setSelection} formData={this.state.formData} setFormData={this.setFormData} />}
          {this.state.page === 2 && <StepTwo option={this.state.selectedOption} setSelection={this.setSelection} formData={this.state.formData} setFormData={this.setFormData} />}
          {this.state.page === 3 && <StepThree option={this.state.selectedOption} setSelection={this.setSelection} formData={this.state.formData} setFormData={this.setFormData} />}
          {console.log('form data', this.state.formData)}
          <Button data-testid="Next" style={webStyle.btn} onClick={() =>  this.setPage(this.state.page)}>{this.state.page === 3 ? 'Submit' : "Next"}</Button>
        </form>
      </ThemeProvider>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  valuationFormWrapper: {
    height: "auto",
    display: "flex",
    width: "500px",
    padding: "19px 48px",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px rgba(108, 108, 108, 0.15)",
  } as React.CSSProperties,
  inputForm: {
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
  btn: {
    marginTop: '15px',
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
    width: '100%'
} as React.CSSProperties,
  inputAlertWarning: {
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
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight:"normal",
    marginLeft: '-7px'
} as React.CSSProperties,
  inputFormMessage: {
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
  formSpan: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  },
  formTitle: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  },
  alert: {
    color: '#FF0404',
    fontFamily: "Poppins",
    fontSize: '12px',
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal" 
  }
};
// Customizable Area End
