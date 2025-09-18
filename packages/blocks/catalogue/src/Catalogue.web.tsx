// Customizable Area Start
import React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  styled,
} from "@material-ui/core";
import {
  location, bedroom, bathroom, ownership, reception, parking, Conservatory, Balcony, Pool, Exercise,
  basement, garden, wine, solar, Media, officehome, locationImage, company, phone, share, floor, epc
}
  from "./assets";

import CatalogueController, { Props } from "./CatalogueController";
import Footer from "../../landingpage/src/Footer.web";
import ThreeImgCarouselDisplay from "../../carouseldisplay/src/ThreeImgCarouselDisplay.web";

export default class Catalogue extends CatalogueController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { selectedButton } = this.state
    return (
      <>
        <Box>
          <ThreeImgCarouselDisplay navigation={this.props.navigation} id={""}/>
        </Box>
        <Box style={webStyle.content}>
          <Grid container spacing={5} style={{ background: "#FFFFFF", marginTop: "10px" }}>
            <Grid item xs={12} sm={6} style={webStyle.priceBox}>
              <div style={{ textAlign: "center" }}>
                <Typography style={webStyle.priceTextName as React.CSSProperties}>Guide price</Typography>
                <Typography style={webStyle.priceText as React.CSSProperties}>£402,999</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={webStyle.sqFeat}>
              <Typography style={webStyle.priceText as React.CSSProperties}>1047.00 sq.ft.</Typography>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "65px" }}>
            <Grid item xs={12} sm={12} md={8} >
              <Box style={webStyle.newBuild as React.CSSProperties}>New Build</Box>
              <Typography style={webStyle.name as React.CSSProperties}>
                Beautiful Apartment
              </Typography>
              <Box style={{ marginTop: "10px", display: "flex" }}>
                <img src={location} style={{ width: "20px", height: "24px" }} />
                <Typography style={webStyle.location as React.CSSProperties}>Shree Garden 1132, UK, 756856</Typography>
              </Box>
              <Typography style={webStyle.propertyType as React.CSSProperties}>Farmhouse</Typography>
              <Box style={{ display: "flex", marginTop: "30px" }}>
                <Box style={webStyle.bedBath as React.CSSProperties}>
                  <img src={bedroom} />
                  <Typography style={webStyle.bedBathText as React.CSSProperties}>4 Bedrooms</Typography>
                </Box>
                <Box style={webStyle.bedBath as React.CSSProperties}>
                  <img src={bathroom} />
                  <Typography style={webStyle.bedBathText as React.CSSProperties}>4 Bathrooms</Typography>
                </Box>
                <Box style={webStyle.bedBath as React.CSSProperties}>
                  <img src={ownership} />
                  <Typography style={webStyle.bedBathText as React.CSSProperties}>Shared Ownership</Typography>
                </Box>
                <Box style={webStyle.bedBath as React.CSSProperties}>
                  <img src={reception} />
                  <Typography style={webStyle.bedBathText as React.CSSProperties}>2 Reception Rooms</Typography>
                </Box>
                <Box style={webStyle.bedBath as React.CSSProperties}>
                  <img src={parking} />
                  <Typography style={webStyle.bedBathText as React.CSSProperties}>Parking Available</Typography>
                </Box>
              </Box>
              <Typography style={webStyle.descriptionTitle as React.CSSProperties}>
                Property description
              </Typography>
              <Typography style={webStyle.description as React.CSSProperties}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <span style={{ color: "#0097CB" }}> read more..</span>
              </Typography>
              <Box style={webStyle.propDetails}>
                <Typography style={webStyle.detailsTitle as React.CSSProperties}>Feature Details</Typography>
                <Grid container style={webStyle.propertyFeature as React.CSSProperties}>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={Conservatory} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Conservatory</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={basement} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Basement</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={Balcony} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Balcony</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={Pool} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Swimming Pool</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={garden} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Garden</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={Exercise} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Exercise Room</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={Media} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Media Room</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={officehome} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Home Office</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={wine} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Wine Cellar</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} style={webStyle.bedBath as React.CSSProperties}>
                    <img src={solar} />
                    <Typography style={webStyle.bedBathText as React.CSSProperties}>Solar Panels</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box style={webStyle.propDetails}>
                <Typography style={webStyle.detailsTitle as React.CSSProperties}>Energy Performance Certificate & Floor Plan</Typography>
                <Box style={{ padding: "20px" }}>
                  <ButtonGroup>
                    <Button
                      data-test-id="button 1"
                      style={{
                        color: selectedButton === 0 ? '#0097CB' : '#787878',
                        borderColor: selectedButton === 0 ? '#0097CB' : '#787878',
                        background: "#FFFFFF",
                        textTransform: "none",
                      }}
                      onClick={() => this.handleButtonClick(0)}
                    >
                      Floor Plan
                    </Button>
                    <Button
                      data-test-id="button 2"
                      style={{
                        color: selectedButton === 1 ? '#0097CB' : '#787878',
                        borderColor: selectedButton === 1 ? '#0097CB' : '#787878',
                        textTransform: "none",
                        background: "#FFFFFF",
                        width: "100px"
                      }}
                      onClick={() => this.handleButtonClick(1)}
                    >
                      EPC
                    </Button>
                  </ButtonGroup>
                  <Box>
                    {selectedButton === 0 ? (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                          <Typography style={webStyle.smalltext as React.CSSProperties}>Loreum ipsum</Typography>
                          <Typography style={webStyle.secSmall as React.CSSProperties}>£402,999</Typography>
                        </div>
                        <Typography>Square Footage : 799.00 sq.ft.</Typography>
                        <Box style={{ padding: "50px" }}>
                          <img src={floor} style={{ width: "100%" }} />
                        </Box>
                      </div>
                    )
                      : (
                        <div style={{ marginTop: "15px", padding: "50px" }}>
                          <img src={epc} style={{ width: "100%" }} />
                        </div>
                      )
                    }
                  </Box>
                </Box>
              </Box>
              <Box style={webStyle.propDetails}>
                <Typography style={webStyle.detailsTitle as React.CSSProperties}>Location</Typography>
                <Box style={{ padding: "30px" }}>
                  <img src={locationImage} style={{ width: "100%" }} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AgentBox>
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <img src={company} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography style={webStyle.company as React.CSSProperties}>Foxtail Agency</Typography>
                    <Typography style={webStyle.place as React.CSSProperties}>Hammersmith, London, W6 8KL</Typography>
                    <div style={{ display: "flex" }}>
                      <img src={phone} style={{ width: "12px", height: "17px", paddingTop: 3, marginRight: "5px" }} />
                      <Typography style={webStyle.number as React.CSSProperties}>01256 781234</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Box style={webStyle.shareIcon}>
                      <img src={share} />
                    </Box>
                  </Grid>
                </Grid>
                <Button style={webStyle.enqiry as React.CSSProperties}>Enquiry form</Button>
                <Button style={webStyle.offer as React.CSSProperties}>Make an Offer</Button>
              </AgentBox>
            </Grid>
          </Grid>
        </Box>
        <Footer navigation={undefined} id={""} />
      </>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const AgentBox = styled(Box)({
  background: "#FFFFFF", maxWidth: "430px", padding: "37px",
  '@media (max-width: 1180px)': {
    padding: "12px"
  },
  '@media (max-width: 976px)': {
    padding: "2px"
  },
  '@media (max-width: 959px)': {
    padding: "35px",
    marginTop: "30px"
  },
})
const webStyle = {
  content: {
    paddingLeft: "50px",
    paddingRight: "50px",
    background: "#FAFAFA"
  },
  priceBox: {
    borderRight: "1px solid #848FAC",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },
  sqFeat: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },
  newBuild: {
    width: "133px",
    height: "44px",
    fontFamily: "Poppins",
    backgroundColor: "#273567",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    lineHeight: "24px",
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "none",
    textAlign: "center"
  },
  name: {
    color: "#273567",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "44px",
    marginTop: "25px",
  },
  location: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "28px",
    marginLeft: "5px",
  },
  descriptionTitle: {
    fontFamily: "Poppins",
    color: "#273567",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "28px",
    marginTop: "25px"
  },
  description: {
    maxWidth: "700px",
    color: "#848FAC",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Poppins",
    marginTop: "25px"
  },
  bedBath: {
    marginRight: "20px",
    textAlign: "center",
    marginBottom: "30px",
  },
  propertyType: {
    marginTop: "10px",
    color: "#848FAC",
    fontWeight: 400,
    fontFamily: "Poppins",
    lineHeight: "28px",
    fontSize: "20px",
  },
  bedBathText: {
    color: "#1E1E1E",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "21px",
    fontWeight: 400,
    marginTop: "10px"
  },
  priceText: {
    color: "#000000",
    fontSize: "20px",
    lineHeight: "20px",
    fontWeight: 400
  },
  priceTextName: {
    color: "#273567",
    lineHeight: "20px",
    fontSize: "16px",
    fontWeight: 400
  },
  propDetails: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginTop: "50px",
  },
  detailsTitle: {
    color: "#273567",
    fontSize: "20px",
    lineHeight: "20px",
    fontFamily: "Poppins",
    fontWeight: 600,
    borderBottom: "1px solid #848FAC",
    padding: "25px 25px 30px 25px"
  },
  propertyFeature: {
    paddingTop: "35px",
    paddingLeft: "30px"
  },
  company: {
    fontFamily: "Poppins",
    color: "#000000",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 400
  },
  place: {
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#848FAC",
    fontWeight: 400
  },
  number: {
    color: "#848FAC",
    fontWeight: 400,
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px"
  },
  shareIcon: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    maxWidth: "56px",
    maxHeight: "40px"
  },
  enqiry: {
    color: "#273567",
    background: "#FFFFFF",
    border: "1px solid #273567",
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    textTransform: "none",
    borderRadius: "8px",
    marginTop: "20px",
  },
  offer: {
    color: "#FFFFFF",
    background: "#273567",
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    marginTop: "10px",
    textTransform: "none",
    borderRadius: "8px",
  },
  smalltext: {
    color: "#000000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px"
  },
  secSmall: {
    fontFamily: "Poppins",
    color: "#000000",
    lineHeight: "24px",
    fontSize: "12px",
    fontWeight: 400,
  }
};
// Customizable Area End
