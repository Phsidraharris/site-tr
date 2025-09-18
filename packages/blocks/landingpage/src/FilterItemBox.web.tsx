import React from "react";

// Customizable Area Start

import LandingPageController, { Props } from "./LandingPageController";
import {
  Paper,
  Typography,
  FormControl,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  styled,
  Select,
  Box
} from "@material-ui/core";
import "./LandingPage.web.css";
import { locDrop } from './assets'
import { KeyboardArrowDown } from "@material-ui/icons";

const iconStyle = {
  paddingTop: "12px",
  cursor: "pointer"
};
// Customizable Area End

export default class FilterItemBox extends LandingPageController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  // Customizable Area End

  render() {
    // Customizable Area Start
    const { selectedOptionLoc } = this.state;

    const proList = [
      "Detached bungalow",
      "End terrace house",
      "Equestrian property",
      "Farm, Farmhouse",
      "Flat",
      "Land",
      "Link-detached house",
      "Marionette",
      "Mews house",
      "Mobile/park home",
      "Parking/garage",
      "Studio",
      "Semi-detached house",
      "Terraced house",
      "Apartment",
      "Terraced bungalow",
      "Town house",
      "Houseboat",
      "Lodge"
    ];

    const price = [
      "9 L",
      "10 L",
      "20 L",
      "40 L",
      "50 L",
      "60 L",
      "7 million",
      "8 million",
      "9 million",
      "10 million"
    ];
    const size = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10 "];

    const proFeatList = ["Garden", "Parking", "Conservatory", "Balcony"];
    const tenureOptions = [
      "Freehold",
      "Leasehold",
      "Common hold",
      "Inheritance",
      "Rent"
    ];

    const sqFoot = [
      "187sq.ft.",
      "200sq.ft.",
      "150sq.ft.",
      "200sq.ft.",
      "300sq.ft.",
      "250sq.ft.",
      "100sq.ft.",
      "180sq.ft."
    ];

    const epc = ["A", "B", "C", "D", "E", "F"];

    const locIcon = `<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding: 12px; cursor: pointer;">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 19.9988L9.28875 19.1567C10.1838 18.1854 10.9888 17.2639 11.705 16.3874L12.2962 15.6483C14.765 12.4964 16 9.99483 16 8.14588C16 4.19924 12.6425 1 8.5 1C4.3575 1 1 4.19924 1 8.14588C1 9.99483 2.235 12.4964 4.70375 15.6483L5.295 16.3874C6.3168 17.628 7.38584 18.8318 8.5 19.9988Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 11.0678C10.2259 11.0678 11.625 9.74207 11.625 8.10667C11.625 6.47127 10.2259 5.14551 8.5 5.14551C6.77411 5.14551 5.375 6.47127 5.375 8.10667C5.375 9.74207 6.77411 11.0678 8.5 11.0678Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    const line = `<svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="paddingRight:10px">
    <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="24" stroke="white"/>
    </svg>`;

    const { showMoreFilters } = this.state;

    return (
      <Paper style={webStyles.dropdownBox as React.CSSProperties}>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex" }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <div style={{ marginRight: "10px" }}>
                  <Typography
                    style={webStyles.locationHeading as React.CSSProperties}
                  >
                    Location
                  </Typography>
                  <FormControl style={{ width: "100%", marginTop: "10px" }}>
                    <div>
                      <Button
                        id="hoverableDark"
                        variant="contained"
                        aria-haspopup="true"
                        style={webStyles.buttonLocation as React.CSSProperties}
                      >
                        <span style={{ color: "#FFFFFF", fontWeight: 400 }}>
                          {selectedOptionLoc}
                        </span>
                        <span>
                          <div style={{ display: "flex" }}>
                            <div
                              dangerouslySetInnerHTML={{ __html: locIcon }}
                              style={{
                                cursor: "pointer",
                                paddingTop: "3px"
                              }}
                            />
                            <div
                              dangerouslySetInnerHTML={{ __html: line }}
                              style={iconStyle}
                            />
                            <LocationDropDown>
                              +0 miles <span style={{ marginLeft: "5px" }}><img src={locDrop} /></span>
                            </LocationDropDown>

                          </div>
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div style={{ marginRight: "10px" }}>
                  <Typography
                    style={webStyles.locationHeading as React.CSSProperties}
                  >
                    Property Type
                  </Typography>
                  <FormControl style={{ width: "100%", marginTop: "10px" }}>
                    <Select variant="outlined"
                      value={this.state.proptyTypeValue}
                      onChange={this.handleClickPropTypeFunc}
                      fullWidth
                      style={webStyles.selectedText
                      }
                      MenuProps={{
                        MenuListProps: {
                          style: {
                            maxHeight: 398,
                            padding: "10px"
                          },
                        },
                        getContentAnchorEl: null,
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left",
                        },
                      }}
                      IconComponent={KeyboardArrowDown}
                    >
                      <MenuItem style={{ display: "none" }} value="Select~" >Select~</MenuItem>
                      {proList.map((option) => (
                        <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ marginRight: "10px", width: "100%" }}>
                  <Typography
                    style={webStyles.locationHeading as React.CSSProperties}
                  >
                    Price
                  </Typography>
                  <FormControl style={{ width: "100%", marginTop: "10px" }}>
                    <Select
                      onChange={this.handlePricMinFunc}
                      value={this.state.selectedPrice}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left",
                        },
                        getContentAnchorEl: null,
                        MenuListProps: {
                          style: {
                            maxHeight: 398,
                            padding: "10px"
                          },
                        },
                      }}
                      fullWidth
                      variant="outlined"
                      style={webStyles.selectedText}
                      IconComponent={KeyboardArrowDown}
                    >
                      {price.map((option) => (
                        <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div style={{ width: "100%" }}>
                  <FormControl style={{ width: "100%", marginTop: "34px" }}>
                    <Select variant="outlined"
                      value={this.state.selectedPriceMaximun}
                      data-test-id='status'
                      MenuProps={{
                        getContentAnchorEl: null,
                        MenuListProps: {
                          style: {
                            maxHeight: 398,
                            padding: "10px"
                          },
                        },
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left",
                        },
                      }}
                      fullWidth
                      IconComponent={KeyboardArrowDown}
                      onChange={this.handlePriceMaxFunc}
                      style={{
                        ...webStyles.selectedText,
                        color: this.state.selectedPriceMaximun === "Maximum" ? "#848FAC" : "#1E1E1E"
                      }}
                    >
                      <MenuItem style={{ display: "none" }} value="Maximum">Maximum</MenuItem>
                      {price.map((option) => (
                        <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
          </div>

          {!showMoreFilters && (
            <Typography
              style={webStyles.showMore as React.CSSProperties}
              onClick={this.handleShowMoreFilters}
            >
              See more filters
            </Typography>
          )}
          {showMoreFilters && (
            <>
              {/* Additional dropdowns */}
              <Grid container style={{ marginTop: "10px" }} spacing={1}>
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{  width: "100%" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      Bedrooms
                    </Typography>
                    <FormControl style={{ width: "100%", marginTop: "10px" }}>
                      <Select variant="outlined"
                        onChange={this.handleBedMinFunc}
                        value={this.state.bedminValue}
                        IconComponent={KeyboardArrowDown}
                        fullWidth
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.bedminValue === "Minimum" ? "#848FAC" : "#1E1E1E"
                        }}
                        MenuProps={{
                          MenuListProps: {
                            style: {
                              padding: "10px",
                              maxHeight: 398,
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value="Minimum" style={{ display: "none" }}>Minimum</MenuItem>
                        {this.state.size.map((option) => (
                          <MenuItem date-test-id="MenuOption"
                            key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item
                  xs={6}
                  sm={3}
                  md={2}
                >
                  <div style={{ width: "100%" }}>
                    <FormControl
                      style={{
                        width: "100%",
                        marginTop: "34px",
                        marginRight: "5px"
                      }}
                    >
                      <Select
                        onChange={this.handleBedMaxFunc}
                        value={this.state.bedmaxValue}
                        variant="outlined"
                        fullWidth
                        IconComponent={KeyboardArrowDown}
                        MenuProps={{
                          getContentAnchorEl: null,
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                        }}
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.bedmaxValue === "Maximum" ? "#848FAC" : "#1E1E1E"
                        }}
                      >
                        <MenuItem style={{ display: "none" }} value="Maximum" >Maximum</MenuItem>
                        {size.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3} md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{  width: "100%" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      Bathrooms
                    </Typography>
                    <FormControl style={{ width: "100%", marginTop: "10px" }}>
                      <Select variant="outlined"

                        value={this.state.bathminValue}
                        MenuProps={{
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                        }}
                        fullWidth
                        onChange={this.handleBathMinFunc}
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.bathminValue === "Minimum" ? "#848FAC" : "#1E1E1E"
                        }}
                        IconComponent={KeyboardArrowDown}
                      >
                        <MenuItem value="Minimum" style={{ display: "none" }}>Minimum</MenuItem>
                        {size.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  </Grid>
                  <Grid item xs={6} sm={3} md={2}>
                  <div style={{ width: "100%" }}>
                    <FormControl
                      style={{
                        width: "100%",
                        marginTop: "34px",
                        marginRight: "5px"
                      }}
                    >
                      <Select variant="outlined"
                        onChange={this.handleBathMaxFunc}
                        value={this.state.bathmaxValue}
                        MenuProps={{
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          MenuListProps: {
                            style: {
                              padding: "10px",
                              maxHeight: 398,
                            },
                          },
                        }}
                        fullWidth
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.bathmaxValue === "Maximum" ? "#848FAC" : "#1E1E1E"
                        }}
                        IconComponent={KeyboardArrowDown}
                      >
                        <MenuItem style={{ display: "none" }} value="Maximum">Maximum</MenuItem>
                        {size.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ width: "100%" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      Square Footage
                    </Typography>
                    <FormControl style={{ width: "100%", marginTop: "10px" }}>
                      <Select variant="outlined"
                        onChange={this.handleSqMinFunc}
                        value={this.state.SqminValue}
                        fullWidth
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.SqminValue === "Minimum" ? "#848FAC" : "#1E1E1E"
                        }}
                        IconComponent={KeyboardArrowDown}
                        MenuProps={{
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}

                      >
                        <MenuItem value="Minimum" style={{ display: "none" }}>Minimum</MenuItem>
                        {sqFoot.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  </Grid>
                  <Grid item
                  xs={6}
                  sm={6}
                  md={2}>
                  <div style={{ width: "100%" }}>
                    <FormControl style={{ width: "100%", marginTop: "34px" }}>
                      <Select
                        onChange={this.handleSqMaxFunc}
                        IconComponent={KeyboardArrowDown}
                        value={this.state.SqmaxValue}
                        MenuProps={{
                          getContentAnchorEl: null,
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                        }}
                        fullWidth
                        variant="outlined"
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.SqmaxValue === "Maximum" ? "#848FAC" : "#1E1E1E"
                        }}
                      >
                        <MenuItem value="Maximum" style={{ display: "none" }}>Maximum</MenuItem>
                        {sqFoot.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "10px" }}>
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "10px", width: "100%" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      Property features
                    </Typography>
                    <FormControl style={{ width: "100%", marginTop: "10px" }}>
                      <Select variant="outlined"
                        value={this.state.featValue}
                        onChange={this.handleFeatFunc}
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                        }}
                        fullWidth
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.featValue === "Select~" ? "#848FAC" : "#1E1E1E"
                        }}
                        IconComponent={KeyboardArrowDown}
                      >
                        <MenuItem style={{ display: "none" }} value="Select~">Select~</MenuItem>
                        {proFeatList.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ width: "100%", marginRight: "10px" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      EPC filter rating
                    </Typography>
                    <FormControl
                      style={{
                        width: "100%",
                        marginRight: "10px",
                        marginTop: "10px"
                      }}
                    >
                      <Select variant="outlined"
                        fullWidth
                        IconComponent={KeyboardArrowDown}
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.EpcValue === "Select~" ? "#848FAC" : "#1E1E1E"
                        }}
                        onChange={this.handleEpcFunc}
                        value={this.state.EpcValue}
                        MenuProps={{
                          getContentAnchorEl: null,
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                        }}
                      >
                        <MenuItem value="Select~" style={{ display: "none" }}>Select~</MenuItem>
                        {epc.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "10px", width: "100%" }}>
                    <Typography
                      style={webStyles.locationHeading as React.CSSProperties}
                    >
                      Tenure
                    </Typography>
                    <FormControl style={{ width: "100%", marginTop: "10px" }}>
                      <Select variant="outlined"
                        onChange={this.handleTenureFunc}
                        style={{
                          ...webStyles.selectedText,
                          color: this.state.TenureValue === "Select~" ? "#848FAC" : "#1E1E1E"
                        }}
                        value={this.state.TenureValue}
                        data-test-id='status'
                        MenuProps={{
                          getContentAnchorEl: null,
                          MenuListProps: {
                            style: {
                              maxHeight: 398,
                              padding: "10px"
                            },
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                        }}
                        fullWidth
                        IconComponent={KeyboardArrowDown}
                      >
                        <MenuItem style={{ display: "none" }} value="Select~" >Select~</MenuItem>
                        {tenureOptions.map((option) => (
                          <MenuItem key={option} value={option} >{`${option}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      width: "100%",
                      marginTop: "40px",
                      marginLeft: "10px"
                    }}
                  >
                    <FormControl style={{ width: "100%" }}>
                      <FormControlLabel
                        control={
                          <Checkbox name="additionalFilter1" color="primary" />
                        }
                        label="Retirement Homes"
                        style={webStyles.checkboxLabel as React.CSSProperties}
                      />
                    </FormControl>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      width: "100%",
                      marginTop: "40px",
                      marginLeft: "10px"
                    }}
                  >
                    <FormControl style={{ width: "100%" }}>
                      <FormControlLabel
                        control={
                          <Checkbox name="additionalFilter2" color="primary" />
                        }
                        label="Shared Ownership"
                        style={webStyles.checkboxLabel as React.CSSProperties}
                      />
                    </FormControl>
                  </div>
                  </Grid>
                  <Grid item
                  xs={12}
                  sm={3}
                  md={2}>
                  <div
                    style={{
                      marginRight: "10px",
                      width: "100%",
                      marginTop: "40px",
                      marginLeft: "10px"
                    }}
                  >
                    <FormControl style={{ width: "100%" }}>
                      <FormControlLabel
                        control={
                          <Checkbox name="additionalFilter3" color="primary" />
                        }
                        label="New Homes"
                        style={webStyles.checkboxLabel as React.CSSProperties}
                      />
                    </FormControl>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      width: "100%",
                      marginTop: "40px",
                      marginLeft: "10px"
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox name="additionalFilter4" color="primary" />
                      }
                      label="Include Under offer"
                      style={webStyles.checkboxLabel as React.CSSProperties}
                    />
                  </div>
                </Grid>
              </Grid>

              <div style={{ textAlign: "right" }}>
                <Button
                  id="hoverableLight"
                  style={webStyles.submitbutton as React.CSSProperties}
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </div>
      </Paper>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
const LocationDropDown=styled(Box)({
  padding: "12px", 
  fontSize: "16px", 
  fontFamily: "Poppins" ,
  '@media (max-width: 663px)': {
    padding:"0px",
    paddingTop:"13px",
    marginRight:"8px",
    marginLeft:"7px"
  },
  '@media (max-width: 645px)': {
    padding:"0px",
    paddingTop:"0px",
    marginRight:"8px",
    marginLeft:"7px"
  },
  '@media (max-width: 599px)': {
    padding:"12px",
  },
})
const webStyles = {
  dropdownBox: {
    backgroundColor: "#FFFFFF",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "-100px",
    borderRadius: "8px",
    padding: "30px",
    zIndex: 11,
    position: "relative"
  },
  location: {
    width: "100%",
    height: "56px",
    backgroundColor: "#141D40",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px"
  },
  locationHeading: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    paddingLeft: "5px"
  },
  property: {
    border: "1px solid #273567",
    borderRadius: "8px",
    width: "100%",
    height: "54px",
    marginTop: "10px",
    fontfamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    textAlign: "left",
    color: "#1E1E1E"
  },
  size: {
    borderRadius: "8px",
    width: "100%",
    height: "54px",
    marginTop: "35px",
    borderColor: "#848FAC66",
    color: "#848FAC",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Poppins",
    lineHeight: "24px",
    border: "1.5px solid #848FAC66"
  },
  showMore: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    pointer: "cursor",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
    cursor: "pointer"
  },
  buttonStyle: {
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid lightgrey",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#1E1E1E",
    width: "100%",
    height: "54px",
    fontFamily: "Poppins",
    textTransform: "none",
    paddingRight: "0px",
    lineHeight: "24px",
    fontWeight: "bold"
  },
  buttonPropType: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "54px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #273567",
    boxShadow: "none",
    color: "#1E1E1E",
    width: "100%",
    fontFamily: "Poppins",
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    borderRadius: "8px",
    paddingRight: "0px"
  },
  buttonLocation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "61px",
    backgroundColor: "#141D40",
    border: "1px solid #273567",
    boxShadow: "none",
    color: "#FFFFFF",
    width: "100%",
    fontFamily: "Poppins",
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    borderRadius: "6px",
    paddingRight: "0px"
  },
  menuStyle: {
    marginTop: "55px",
    maxHeight: "457px"
  },
  checkboxLabel: {
    color: "#1E1E1E",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left"
  },
  submitbutton: {
    border: "1px solid #273567",
    color: "#273567",
    padding: "10px 16px 10px 16px",
    borderRadius: "8px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    marginTop: "15px",
    pointer: "cursor",
    marginBottom: "5px",
    textTransform: "none",
    backgroundColor: "#F4F5F7"
  },
  menulist: {
    background: "#FFFFFF",
    marginTop: "20px",
    borderRadius: "8px",
    zIndex: 1,
    position: "relative",
    marginLeft: "60px",
    width: "120px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  selectedText: {
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Poppins",
    fontWeight: 400
  },
};
// Customizable Area End
