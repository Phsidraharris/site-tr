// Customizable Area Start
import React from "react";
import { Box, FormControl, Grid, InputAdornment, MenuItem, Select, Snackbar, TextField, Typography, styled } from "@material-ui/core";
// Customizable Area End

import CatalogueController, { Props } from "./CatalogueController";
import { imgicon, circle, radioCheck, radiouncheck, cloud, nextarrow, cross, delet, thumb } from "./assets";
import Footer from "../../landingpage/src/Footer.web";
import { KeyboardArrowDown } from "@material-ui/icons";
import NavigationMenu from "../../navigationmenu/src/NavigationMenu.web";

export default class ListMyProperty extends CatalogueController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  secondCSs() {
    const keyborder = this.state.isKeyFilled ? "" : "1px solid #FF0404"
    const bedborder = this.state.isbedFilled ? "" : "1px solid #FF0404"
    const typeborder = this.state.isPropTypeFilled ? "" : "1px solid #FF0404"
    const tenureborder = this.state.isTenureFilled ? "" : "1px solid #FF0404"
    const secStatus = this.state.isStatusFilled ? "" : "1px solid #FF0404"
    return { keyborder, bedborder, typeborder, tenureborder, secStatus }
  }
  cssPropertyFunction() {
    const { isPostcodeOneFilled, isPropertyTitleFilled } = this.state
    const postCode = isPostcodeOneFilled ? "" : "1px solid #FF0404"
    const propertyTitle = isPropertyTitleFilled ? "" : "1px solid #FF0404"
    const PostcodeTwo = this.state.isPostcodeTwoFilled ? "" : "1px solid #FF0404"
    const ProNumber = this.state.isPropNumberFilled ? "" : "1px solid #FF0404"
    const streetBorder = this.state.isStreetFilled ? "" : "1px solid #FF0404"
    const cityBorder = this.state.isCityFilled ? "" : "1px solid #FF0404"
    const priceBorder = this.state.isPropPriceFilled ? "" : "1px solid #FF0404"
    const bathBorder = this.state.isBathroomFilled ? "" : "1px solid #FF0404"
    const descriptionBorder = this.state.isDescriptionFilled ? "" : "1px solid #FF0404"
    const textAreaRows = this.state.selectedFloorImage ? 6 : 1
    const textAreaRowsTwo = this.state.selectedImgeEpc ? 6 : 1
    return {
      postCode, propertyTitle, PostcodeTwo, ProNumber, streetBorder, cityBorder, priceBorder, bathBorder, descriptionBorder, textAreaRows, textAreaRowsTwo
    }
  }
 validBorder(){
  const cssObj=this.cssPropertyFunction()
  const postcodeOne= this.state.inputFieldError && !this.state.inputFieldError["Postcode One"] ? "1px solid red" : cssObj.postCode
  const postTwo = this.state.inputFieldError && !this.state.inputFieldError["Postcode Two"] ? "1px solid red" : cssObj.PostcodeTwo
  const phone= this.state.inputFieldError && !this.state.inputFieldError["Property Number"] ? "1px solid red" : cssObj.ProNumber
  const price = this.state.inputFieldError&& !this.state.inputFieldError["Property Price"] ? "1px solid red" : cssObj.priceBorder
  return{postcodeOne,postTwo,phone,price}
 }
  photoList = () => {
    const {
      selectedImage, selectedImageSecond, } = this.state;
    const textAreaRows = selectedImage ? 6 : 1;
    const textAreaRowsSec = selectedImageSecond.length > 0 ? 6 : 1;
    return <>
      <div style={{ display: "flex", ...webStyles.propNo }}>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: "relative" }}
          onClick={this.handleImageInfo}
        >
          <Typography style={{ marginRight: "5px" }}>*Property Images (main image)</Typography>
          <img src={circle} />

          {this.state.isImageBoxOpen && (
            <div
              style={{ ...webStyles.infoBox as React.CSSProperties, width: "284px" }}
            >
              Upload multiple images and videos of the property. Designate one image as the main image, which will be displayed prominently, and the rest will be shown as smaller images
            </div>
          )}
        </div>
      </div>
      <div>
        <TextField multiline rows={textAreaRows}
          variant="outlined"
          style={{ width: '100%', marginTop: '5px', position: 'relative', borderRadius: "8px", border: this.state.isMainImageFilled ? "" : "1px solid #FF0404" }}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    style={{ maxHeight: '138px', borderRadius: '10px' }}
                  />
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ position: 'absolute', top: '30px', right: '16px' }}>
                <input
                  type="file"
                  data-test-id="testid123"
                  accept="image/*"
                  onChange={e => this.handleFileRead(e)}
                  style={{ display: 'none' }}
                  ref={(input) => (this.fileInputRef = input)}
                />
                {selectedImage ? (
                  <img src={delet} onClick={this.handleDeleteImage} style={{ cursor: 'pointer' }} />
                ) : (
                  <img src={imgicon} onClick={this.handleAddImageClick} style={{ cursor: 'pointer' }} />
                )}
              </InputAdornment>
            ),
          }}
        >
        </TextField>
      </div>
      <Typography style={webStyles.propNo as React.CSSProperties}>Other Images and Videos</Typography>
      <div>
        <TextField
          multiline
          rows={textAreaRowsSec}
          variant="outlined"
          style={{ width: '100%', marginTop: '5px', position: 'relative' }}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start" >
                <MultiImage >
                  {selectedImageSecond.map((item, index) => (

                    <div key={index} style={{ position: 'relative' }}>
                      {this.state.extensiontype[index] === "mp4" || this.state.extensiontype[index] === "mov" || this.state.extensiontype[index] === "avi" ? (
                        <img
                          src={thumb}
                          alt="Selected video"
                          style={{
                            height: '138px',
                            borderRadius: '10px',
                            marginRight: "10px",
                            cursor: 'pointer',
                          }}
                          data-tes-id="mp4test"
                          onClick={() => this.toggleImageSelection(index)}
                        />
                      ) : (

                        <img
                          src={item}
                          alt="Selected Image"
                          style={{
                            height: '138px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            marginRight: "10px",
                            filter: this.state.selectedImageToDelete[index]
                              ? 'brightness(60%)'
                              : 'none',
                          }}
                          data-test-id="mp4test23"
                          onClick={() => this.toggleImageSelection(index)}
                        />
                      )}
                      {this.state.selectedImageToDelete[index] && (
                        <div data-test-id="toggle"
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: "0.5px solid #FFFFFF",
                            color: "#FFFFFF",
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onClick={() => this.toggleImageSelection(index)}
                        >
                          <h3>&#x2713;</h3>
                        </div>
                      )}
                    </div>
                  ))}
                </MultiImage>
                {selectedImageSecond.length > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '22px',
                    }}
                  >
                    <img
                      src={delet}
                      data-test-id="deletTest"
                      onClick={this.deleteSelectedImages}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ position: 'absolute', right: '16px', display: "flex" }}>
                <input
                  type="file"
                  accept="image/*, video/mp4"
                  onChange={this.handleImageUploadSec}
                  data-test-id='file'
                  style={{ display: 'none' }}
                  ref={(input) => (this.fileInputRefSec = input)}
                />

                <img src={imgicon} onClick={this.handleAddImageClickSec} style={{ cursor: 'pointer' }} />
              </InputAdornment>
            ),
          }}
        >
        </TextField>
      </div>
    </>
  }
  // Customizable Area End



  render() {
    // Customizable Area Start

    const options = ['Available', 'Under Offer', 'Sold STC', 'Sold']
    const optionsBed = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const isSelected = (radio: string) => radio === this.state.selectedOption;
    const priceModi = ['Equity loan', 'Fixed Price', 'From', 'Guide Price', 'Offers']
    const { selectedPropStatus, selectedPriceModi, propType, selectedBed, keyFeature, selectedBathroom,
      propTenure, reception, porpstatus, parking } = this.state;
    const porpType = ["Detached bungalow", "End terrace house", "Equestrian property", "Farm, Farmhouse", "Flat",
      "Land", "Link-detached house", "Marionette", "Mews house", "Mobile/park home", "Parking/garage", "Studio", "Semi-detached house", "Terraced house",
      "Apartment", "Terraced bungalow", "Town house", "Houseboat", "Lodge"]
    const onoff = ['Online', 'Offline']
    const parkingArray = ['No Parking available', 'On Street Parking', 'Off Street Parking', 'Garage', 'Driveway']
    const keyFeatArray = ['Conservatory', 'Basement', 'Loft conversion', 'Balcony', 'Swimming Pool', 'Fireplace', 'walk in closet', 'Garden',
      'home office/study', 'wine cellar', 'gym/exercise room', 'media room/theater', 'smart home feature', 'solar panels', 'disabled access feature', 'security system', 'sauna/steam room',
      'Jacuzzi/hot tun', 'guest house/in-law suite', 'deck-patio', 'waterfront view', 'mountain view', 'city skyline view', 'high celling', 'harwood floors', 'crown molding',
      'skylights', 'vaulted celling', 'bay windows', 'french doors']
    const tenureArray = ['Freehold', 'Leasehold', 'Share of freehold', 'Commonhold']
    const cssObj = this.cssPropertyFunction()
    const csssec = this.secondCSs()
    const validnumber =this.validBorder()
    return (

      <Box style={{ background: "#FAFAFA" }}>
        <NavigationMenu navigation={this.props.navigation} id={""} />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box style={webStyles.MainBox as React.CSSProperties}>
            <MainFormBox >
              <Typography style={webStyles.title as React.CSSProperties}>List my property</Typography>
              <Typography style={webStyles.subtitle as React.CSSProperties}>Enter your all information</Typography>
              <div style={{ display: "flex", ...webStyles.propTitle }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: "relative" }}
                  onClick={this.handleImageClick}
                >
                  <Typography style={{ marginRight: '5px' }}>*Property title</Typography>
                  <img src={circle} alt="Circle" />
                  {this.state.isBoxOpen && (
                    <TitleInfo
                      style={webStyles.infoBox as React.CSSProperties}
                    >
                      Enter a short and descriptive title for the property listing
                    </TitleInfo>
                  )}
                </div>

              </div>
              <TextField variant="outlined" multiline
                rows={4} fullWidth
                name="Property Title"
                value={this.state.propertyTitle}
                data-test-id='title'
                onChange={this.handlePropTitleChange}
                placeholder="Enter a short and descriptive title for the property"
                style={{
                  width: "100%", borderRadius: "8px", color: "#273567", marginTop: "5px",
                  border: cssObj.propertyTitle,
                }} />

              <Typography style={webStyles.postcode as React.CSSProperties}>*Postcode</Typography>
              <div style={{ display: "flex", marginBottom: "10px", gap: "10px", width: "100%" }}>

                <div style={{ width: "100%" }}>
                  <TextField
                    variant="outlined"
                    value={this.state.postcodeOne}
                    name="Postcode One"
                    data-test-id='postcodeOne'
                    onChange={this.handlePostcodeOne}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: validnumber.postcodeOne
                    }}
                  />
                  {this.state.inputFieldError && !this.state.inputFieldError["Postcode One"] && (
                    <Typography style={{ color: "#FF0404", fontSize: "12px", fontFamily: "Poppins", marginLeft: "4px" }}>Min 2 and Max 4 characters allowed</Typography>
                  )}
                </div>
                <div style={{ width: "100%" }}>
                  <TextField
                    variant="outlined"
                    value={this.state.postcodeTwo}
                    data-test-id='postcodeTwo'
                    name="Postcode Two"
                    onChange={this.handlePostcodeTwo}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: validnumber.postTwo
                    }}
                  />
                  {this.state.inputFieldError && !this.state.inputFieldError["Postcode Two"] && (
                    <Typography style={{ color: "#FF0404", fontSize: "12px", fontFamily: "Poppins", marginLeft: "4px" }}>
                      Please enter exactly 3 characters</Typography>
                  )}
                </div>
              </div>
              <Typography style={webStyles.propaddress as React.CSSProperties}>Property address</Typography>
              <Typography style={webStyles.propNo as React.CSSProperties}>*Property number</Typography>
              <TextField
                variant="outlined"
                value={this.state.propNumber}
                data-test-id='number'
                name="Property Number"
                onChange={this.handlePropnumber}
                style={{
                  width: "100%",
                  marginTop: "5px",
                  border: validnumber.phone,
                  borderRadius: "8px"
                }}
              />
              {this.state.inputFieldError&&!this.state.inputFieldError["Property Number"] && (
                <Typography style={{ color: "#FF0404", fontFamily: "Poppins", marginLeft: "4px", fontSize: "12px" }}>Please enter only numbers</Typography>
              )}
              <Typography style={webStyles.propNo as React.CSSProperties}>*Street name</Typography>
              <TextField variant="outlined"
                value={this.state.streetname}
                data-test-id='street'
                name="Streen name"
                onChange={this.handlestreetname}
                style={{ width: "100%", marginTop: "5px", border: cssObj.streetBorder, borderRadius: "8px" }} />
              <Typography style={webStyles.propNo as React.CSSProperties}>*City</Typography>
              <TextField variant="outlined"
                type="text"
                value={this.state.city}
                name="City"
                data-test-id='city'
                onChange={this.handleCity}
                style={{ width: "100%", marginTop: "5px", border: cssObj.cityBorder, borderRadius: "8px" }} />
              <Typography style={webStyles.propNo as React.CSSProperties}>*Property status</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  onChange={this.handleClickPropStatus}
                  value={selectedPropStatus}
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
                  style={webStyles.selectedText}
                  IconComponent={KeyboardArrowDown}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>*Property price(£)</Typography>
              <TextField
                variant="outlined"
                value={this.state.propPrice}
                data-test-id='price'
                name="Property Price"
                onChange={this.handlePropPrice}

                style={{
                  width: "100%",
                  marginTop: "5px",
                  border: validnumber.price,
                  borderRadius: "8px",
                }}
              />
              {this.state.inputFieldError&& !this.state.inputFieldError["Property Price"] && (
                <Typography style={{ color: "#FF0404", fontFamily: "Poppins", marginLeft: "4px", fontSize: "12px" }}>Please enter only numbers</Typography>
              )}
              <Typography style={webStyles.propNo as React.CSSProperties}>Price Modifier</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  style={webStyles.selectedText}
                  data-test-id="first"
                  onChange={this.handleClickPriceModi}
                  value={selectedPriceModi}
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
                  IconComponent={KeyboardArrowDown}
                >
                  {priceModi.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {this.photoList()}

              <Typography style={webStyles.propNo as React.CSSProperties}>*Key features</Typography>
              <div>
                <FormControl fullWidth>
                  <Select
                    onChange={this.handleClickKey}
                    style={{
                      ...webStyles.selectedText,
                      border: csssec.keyborder
                    }}
                    variant="outlined"
                    multiple
                    renderValue={(value: unknown) => (
                      <div>
                        {(value as string[]).join(', ')}
                      </div>
                    )}
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
                    fullWidth
                    value={keyFeature}
                    IconComponent={KeyboardArrowDown}
                  >
                    {keyFeatArray.map((option) => (
                      <MenuItem key={option} value={option} style={webStyles.menuStyle}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ display: "flex", ...webStyles.propNo }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: "relative" }}
                  onClick={this.handleDesInfo}
                >
                  <Typography style={{ marginRight: "5px" }}>*Property description</Typography>
                  <img src={circle} />
                  {this.state.propDesInfo && (
                    <DecInfo
                      style={{ ...webStyles.infoBox as React.CSSProperties }}
                    >
                      Provide a detailed description of the property using free text. Highlight its unique features, amenities, and any other relevant information
                    </DecInfo>
                  )}
                </div>
              </div>
              <TextField variant="outlined" multiline
                rows={9} fullWidth
                value={this.state.description}
                onChange={this.handleDescription}
                name="Property Description"
                style={{ width: "100%", marginTop: "5px", border: cssObj.descriptionBorder, borderRadius: "8px" }} />
              <Typography style={webStyles.propNo as React.CSSProperties}>*Number of bedrooms</Typography>
              <FormControl fullWidth>
                <Select fullWidth
                  variant="outlined"
                  value={selectedBed}
                  onChange={this.handleClickBed}

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

                  IconComponent={KeyboardArrowDown}
                  style={{
                    border: csssec.bedborder,
                    ...webStyles.selectedText
                  }}
                >
                  {optionsBed.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>
                      {`${option}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>*Number of bathrooms</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  value={selectedBathroom}
                  onChange={this.handleClickBathroom}
                  fullWidth
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    }, getContentAnchorEl: null,
                    MenuListProps: {
                      style: {
                        padding: "10px",
                        borderRadius: "10px",
                        maxHeight: 398,
                      },
                    },
                  }}
                  style={{
                    border: cssObj.bathBorder, ...webStyles.selectedText
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  {optionsBed.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography style={webStyles.propNo as React.CSSProperties}>*Property type</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  fullWidth
                  IconComponent={KeyboardArrowDown}
                  onChange={this.handleClickPropType}
                  style={{
                    border: csssec.typeborder,
                    ...webStyles.selectedText
                  }}
                  value={propType}
                  MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    MenuListProps: {
                      style: {
                        borderRadius: "10px",
                        maxHeight: 398,
                        padding: "10px"
                      },
                    },
                  }}
                >
                  {porpType.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>*Property tenure</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  value={propTenure}
                  onChange={this.handleClickTenure}
                  IconComponent={KeyboardArrowDown}
                  fullWidth
                  style={{
                    ...webStyles.selectedText,
                    border: csssec.tenureborder,
                  }}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    MenuListProps: {
                      style: { padding: "10px" }
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {tenureArray.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>
                      {`${option}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>Reception Rooms</Typography>
              <FormControl fullWidth>
                <Select
                  onChange={this.handleClickReception}
                  value={reception}
                  style={webStyles.selectedText}
                  variant="outlined"
                  MenuProps={{
                    MenuListProps: {
                      style: { padding: "10px" }
                    },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  IconComponent={KeyboardArrowDown}
                  fullWidth
                >
                  {optionsBed.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>*Parking availability</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  value={parking}
                  onChange={this.handleClickParking}
                  MenuProps={{
                    anchorOrigin: {
                      horizontal: "left",
                      vertical: "bottom",
                    },
                    MenuListProps: {
                      style: { padding: "10px" }
                    },
                    getContentAnchorEl: null,
                  }}
                  fullWidth
                  style={webStyles.selectedText}
                  IconComponent={KeyboardArrowDown}
                >
                  {parkingArray.map((option) => (
                    <MenuItem style={webStyles.menuStyle} key={option} value={option}>{`${option}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography style={webStyles.propNo as React.CSSProperties}>Floor plans</Typography>
              <TextField multiline rows={cssObj.textAreaRows}
                variant="outlined"
                style={{ width: '100%', marginTop: '5px', position: 'relative' }}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      {this.state.selectedFloorImage && (
                        <img
                          style={{  maxHeight: '138px', borderRadius: '10px' }}
                          alt="Selected Image"
                          src={this.state.selectedFloorImage}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end" style={{ position: 'absolute', top: '28px', right: '16px' }}>
                      <input
                        ref={(input) => (this.fileInputRefFloor = input)}
                        accept="image/*"
                        onChange={this.handleImageUploadFloor}
                        type="file"
                        style={{ display: 'none' }}
                      />
                      {this.state.selectedFloorImage ? (
                        <img src={delet} style={{ cursor: 'pointer' }} onClick={this.handleDeleteFloor} />
                      ) : (
                        <img src={cloud} style={{ cursor: 'pointer' }} onClick={this.handleAddImageFloor} />
                      )}
                    </InputAdornment>
                  ),
                }}
              >
              </TextField>

              <Typography style={webStyles.propNo as React.CSSProperties}>Energy Performance Certificate rating (Upload File)</Typography>
              <TextField multiline rows={cssObj.textAreaRowsTwo}
                variant="outlined"
                style={{ width: '100%', marginTop: '5px', position: 'relative' }}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      {this.state.selectedImgeEpc && (
                        <img
                          src={this.state.selectedImgeEpc}
                          alt="Selected Image"
                          style={{ height: '138px', borderRadius: '10px' }}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end" style={{ position: 'absolute', top: '28px', right: '16px' }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={this.handleImageUploadEpc}
                        style={{ display: 'none' }}
                        ref={(input) => (this.fileInputRefEpc = input)}
                      />
                      {this.state.selectedImgeEpc ? (
                        <img src={delet} onClick={this.handleDeleteEpc} style={{ cursor: 'pointer' }} />
                      ) : (
                        <img src={cloud} onClick={this.handleAddImageEpc} style={{ cursor: 'pointer' }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              >
              </TextField>
              <Typography style={webStyles.propNo as React.CSSProperties}>Virtual tour URL</Typography>
              <TourLink variant="outlined"
                value={this.state.tourlink}
                style={{ width: "100%", marginTop: "5px", }}
                InputProps={{
                  style: {
                    color: "#0097CB", fontWeight: 500, fontSize: "16px", fontFamily: "Poppins"
                  },
                }} />
              <Typography style={webStyles.propNo as React.CSSProperties}>*Property status</Typography>
              <FormControl fullWidth>
                <Select variant="outlined"
                  value={porpstatus}
                  onChange={this.handleClickOnOff}
                  style={{
                    border: csssec.secStatus,
                    ...webStyles.selectedText
                  }}
                  fullWidth
                  IconComponent={KeyboardArrowDown}
                  MenuProps={{
                    anchorOrigin: {
                      horizontal: "left",
                      vertical: "bottom",
                    },
                    getContentAnchorEl: null,
                    MenuListProps: {
                      style: { padding: "10px" }
                    },
                  }}
                >
                  {onoff.map((option) => (
                    <MenuItem key={option} value={option} style={webStyles.menuStyle as React.CSSProperties}>
                      {`${option}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Grid container style={{ marginTop: '30px', }}>
                <Grid item xs={12} sm={4} style={{ display: "flex" }} data-test-id="option" onClick={() => this.handleOptionChange("Retirement Home")}>
                  <img src={isSelected('Retirement Home') ? radioCheck : radiouncheck} alt="Radio" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                  <Typography style={webStyles.specialFeat as React.CSSProperties}>Retirement Home</Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{ display: "flex" }} data-test-id="option2" onClick={() => this.handleOptionChange("New Build")}>
                  <img src={isSelected('New Build') ? radioCheck : radiouncheck} alt="Radio" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                  <Typography style={webStyles.specialFeat as React.CSSProperties}>New Build</Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{ display: "flex" }} data-test-id="option3" onClick={() => this.handleOptionChange("Shared ownership")}>
                  <img src={isSelected('Shared ownership') ? radioCheck : radiouncheck} alt="Radio" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                  <Typography style={webStyles.specialFeat as React.CSSProperties}>Shared ownership</Typography>
                </Grid>
              </Grid>
              <Box
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <button
                  style={{
                    ...webStyles.nxtBtn,
                    ...(this.state.isNextButtonDisabled && webStyles.disabledBtn),
                  }}
                  onClick={(e) => {
                    this.handleNextClick();
                  }}
                >
                  Next <span style={{ marginLeft: "5px" }}><img src={nextarrow} /></span>
                </button>

              </Box>

            </MainFormBox>
          </Box >
        </Box>
        <Footer navigation={undefined} id={""} />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.isSnackbarOpen}
          autoHideDuration={5000}
          onClose={this.closeSnackbar}
        >
          <div style={webStyles.popup as React.CSSProperties}>
            <img src={cross} style={{ marginRight: "5px", marginLeft: "5px", color: "#0F172A", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }} />
            Please fill all the mandatory fields
          </div>
        </Snackbar>
      </Box>
      // Customizable Area End
    )
  }
}

// Customizable Area Start
const MainFormBox = styled(Box)({
  background: "#FFFFFF",
  width: "657px",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
  padding: "30px",
  '@media (max-width: 723px)': {
    width: "510px",
  },
  '@media (max-width: 573px)': {
    width: "386px",
  },
  '@media (max-width: 447px)': {
    width: "292px",
  },
})
const MultiImage = styled(Box)({
  display: 'flex',
  maxWidth: '604px',
  overflow: "auto",
  '@media (max-width: 723px)': {
    maxWidth: '455px',
    overflow: "auto",
  },
  '@media (max-width: 573px)': {
    maxWidth: '328px',
    overflow: "auto",
  },
  '@media (max-width: 447px)': {
    maxWidth: '233px',
    overflow: "auto",
  },
})
const TourLink = styled(TextField)({
  '& .MuiInputBase-input': {
    textDecoration: "underline",
    fontWeight: "bolder"
  }
})
const TitleInfo = styled(Box)({
  width: "200px",
  '@media (max-width: 891px)': {
    width: "100%"
  },
})
const DecInfo = styled(Box)({
  width: "289px",
  '@media (max-width: 891px)': {
    width: "100%"
  },
})
const webStyles = {
  logo: {
    height: "46px",
    width: "129px",
  },
  listProperty: {
    lineHeight: "24px",
    borderRadius: "8px",
    color: "#FFFFFF",
    padding: "10px 16px 10px 16px",
    marginRight: "8px",
    backgroundColor: "#141D40",
    fontFamily: "Poppins",
    fontWeight: "bold",
    height: "44px",
    textTransform: "none",
  },
  menuStyle: {
    color: "#0F172A",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 400
  },
  infoBox: {
    position: 'absolute',
    bottom: "25px",
    right: "5px",
    background: '#fff', 
    border: '1px solid #94A3B8',
    padding: '10px', 
    zIndex: 1000,
    borderRadius: "8px",
    color: "#94A3B8", fontFamily: "Poppins"
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
    paddingRight: "10px"
  },
  header: {
    justifyContent: "space-between",
    paddingLeft: "50px",
    paddingTop: "20px",
    paddingRight: "50px",
    display: "flex",
    paddingBottom: "20px",
    borderBottom: "1px solid #2735674D",
  },
  propTitle: {
    marginTop: "25px",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400
  },
  myHub: {
    border: "1px solid #273567",
    backgroundColor: "F4F5F7",
    color: "#273567",
    borderRadius: "8px",
    height: "44px",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px 16px 10px 16px"
  },
  postcode: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    marginTop: "10px"
  },
  navbarBox: {
    paddingLeft: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "flex"
  },
  navLink: {
    color: "#848FAC",
    paddingRight: "20px",
    pointer: "cursor",
    fontFamily: "Poppins"
  },
  MainBox: {
    background: "#FAFAFA",
    paddingTop: "30px",
    margin: "0 auto",
    borderRadius: "8px",
  },
  MainFormBox: {
    width: "657px",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
    padding: "30px"
  },
  title: {
    color: "#273567",
    fontSize: "30px",
    lineHeight: "40px",
    fontFamily: "Poppins",
    fontWeight: 400
  },
  disabledBtn: {
    backgroundColor: "#CCCCCC",
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#848FAC",
    fontSize: "18px",
    lineHeight: "26px",
    fontFamily: "Poppins",
    fontWeight: 400
  },
  propaddress: {
    color: "#273567",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    fontFamily: "Poppins",
    marginTop: "20px"
  },
  propNo: {
    color: "#273567",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily: "Poppins",
    marginTop: "20px"
  },
  specialFeat: {
    color: "#273567",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 400,
    fontFamily: "Poppins",
    marginLeft: "10px"
  },
  nxtBtn: {
    color: "#FFFFFF",
    fontFamily: "Poppins" as "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    backgroundColor: "#273567",
    textTransform: "none" as "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer" as "pointer",
  },
  selectedText: {
    color: "#1E1E1E",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Poppins",
    fontWeight: 400
  },
};
// Customizable Area End
