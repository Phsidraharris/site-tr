import React from "react";
// Customizable Area Start
// eslint-disable-line react-native/no-inline-styles
import { Box, Button, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import GenericCalendar from "../../../components/src/GenericCalendar.web";

const theme = createTheme({
  overrides: {
    MuiInput: {
      root: {
        border: "1px solid rgba(39, 53, 103, 0.4)",
        borderRadius: "8px",
        width: "100%",
        height: "50px",
        padding: "unset",
        paddingLeft: "15px",
        paddingRight: "15px",
        "&:hover": {
          border: "1px solid rgba(0, 151, 203, 1)",
          boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.2)",
        },
        "&.Mui-focused": {
          border: "1px solid rgba(0, 151, 203, 1)",
          boxShadow: "0px 0px 10px 0px rgba(0, 151, 203, 0.2)",
        },
      },
    },
  },
});

// Customizable Area End
import DashboardController, { Props } from "./DashboardController";

export default class Dashboard extends DashboardController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    return (
      <ThemeProvider theme={theme}>
        <Box style={{ display: "flex", gap: "50px" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Box style={webStyle.leftBox}>
              <Box>
                <Typography style={webStyle.propertyText}>
                  Browse Properties
                </Typography>
              </Box>
              <Box>
                <Typography style={webStyle.propDescText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  doloribus?consectetur adipisicing elit. Ea, doloribus
                </Typography>
              </Box>
              <Box>
                <Button data-testid="btnExample" style={webStyle.btnBrowsing}>
                  Browsing
                </Button>
              </Box>
            </Box>
          </Box>
          <Box style={webStyle.rightBox}>
            <Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "36px",
                }}
              >
                <Typography style={webStyle.propertyText}>
                  Top Agents
                </Typography>
                <GenericCalendar testID="monthSelect"  selectedDate={this.state.selectedDate} onSelectDate={this.handleDateChange}/>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {new Array(5)
                  .fill({ agency: "Agency", name: "Agent Name" })
                  .map((item, idx) => (
                    <Box key={idx} style={webStyle.agencyItem}>
                      <Typography style={webStyle.itemTitle}>
                        {item.agency}
                      </Typography>
                      <span style={webStyle.itemDescText}>{item.name}</span>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
interface Styles {
  [Key: string]: React.CSSProperties;
}

const webStyle: Styles = {
  header: {
    borderBottom: "1px solid #2735674D",
    padding: "20px 50px",
  },
  propertyList: {
    backgroundColor: "#141D40",
    borderRadius: "8px",
    color: "#FFFFFF",
    lineHeight: "24px",
    marginRight: "8px",
    height: "44px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    padding: "10px 16px 10px 16px",
    textTransform: "none",
  },
  propertyText: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "bolder",
    lineHeight: "normal",
  },
  propDescText: {
    color: "#848FAC",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  hub: {
    border: "1px solid #273567",
    backgroundColor: "F4F5F7",
    color: "#273567",
    borderRadius: "8px",
    height: "44px",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: "bold",
    padding: "10px 16px 10px 16px",
    textTransform: "none",
  },
  navText: {
    color: "#273567",
    paddingRight: "10px",
    cursor: "pointer",
    fontFamily: "Poppins",
  },
  leftBoxText: {
    color: "#BDBDBD",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "bold",
    paddingTop: "20px",
  },
  leftBoxActive: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "bold",
    paddingTop: "20px",
  },
  myHubText: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    marginRight: "5px",
  },
  activeSection: {
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    marginRight: "5px",
    fontWeight: "bolder",
  },
  itemTitle: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  },
  itemDescText: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  },
  btnBrowsing: {
    border: "1px solid #273567",
    backgroundColor: "#FFFFFF",
    color: "#273567",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bolder",
    lineHeight: "24px",
    height: "44px",
    borderRadius: "8px",
    padding: "10px 16px",
    textTransform: "none",
    cursor: "pointer",
  },
  leftBox: {
    width: "390px",
    height: "248px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow:
      "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    padding: "15px",
  },
  rightBox: {
    width: "60%",
    padding: "20px",
    borderRadius: "8px",
    boxShadow:
      "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
  },
  agencyItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px",
    borderRadius: "8px",
    boxShadow:
      "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
  },
};
// Customizable Area End
