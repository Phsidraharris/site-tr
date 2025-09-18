import React from "react";

// Customizable Area Start
import { Box, Menu, MenuItem, Tooltip } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  ExpandMore,
  ExpandLess,
  InfoOutlined,
  DoneAll,
} from "@material-ui/icons";
// Customizable Area End

import TaskListController, { configJSON, Props } from "./TaskListController";

// Customizable Area Start
const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        border: "1px solid #CBD5E1",
        backgroundColor: "#FFFFFF",
        color: "#94A3B8",
        fontSize: "16px",
        fontWeight: 400,
        fontFamily: "Poppins",
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "282px",
      },

      tooltipPlacementBottom: {
        marginTop: "2px !important",
        marginLeft: "8px !important",
      },
    },
    MuiPopover: {
      paper: {
        border: "1px solid #E2E8F0 !important",
      },
    },
    MuiList: {
      padding: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
    },
  },
});
// Customizable Area End


export default class TaskList extends TaskListController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    const isMenuOpen = Boolean(this.state.anchorEl);
    const status = {
      COMPLETED: "Completed",
      PENDING: "Pending",
      NOT_STARTED: "Not started yet",
    };

    const tasks = [
      {
        name: "Instruct a conveyancing solicitor",
        buyer: "Buyer- Shubham sya , Agent- kion mike",
        status: status.COMPLETED,
        description:
          "Once you have accepted an offer, you need to formally instruct your solicitor to begin the conveyancing process",
      },
      {
        name: "Conveyancing process questionnaires for sellers",
        buyer: "Seller - kai shon,Agent- kion mike",
        status: status.NOT_STARTED,
        description:
          "Once you have accepted an offer, you need to formally instruct your solicitor to begin the conveyancing process",
      },
      {
        name: "Arrange buildings insurance",
        buyer: "Buyers Solicitor - kai shon",
        status: status.PENDING,
        description:
          "Once you have accepted an offer, you need to formally instruct your solicitor to begin the conveyancing process",
      },
    ];
    return (
      <ThemeProvider theme={theme}>
        <Box width="100%" height="100%">
          <span style={webStyles.titleStyle}>List of Tasks</span>
          {tasks.map((task) => (
            <Box sx={webStyles.listItemStyle} key={task.name}>
              <Box sx={webStyles.listItemLeftSideContainerStyle}>
                {task.status === status.COMPLETED && (
                  <DoneAll style={webStyles.doneIconStyle} />
                )}
                <Box>
                  <Box style={webStyles.listItemTitleContainerStyle}>
                    <span style={webStyles.listItemTitleStyle}>
                      {task.name}
                    </span>
                    <Box style={webStyles.infoIconContainerStyle}>
                      <Tooltip
                        title={task.description}
                        placement="bottom-start"
                      >
                        <InfoOutlined style={webStyles.infoIconStyle} />
                      </Tooltip>
                    </Box>
                  </Box>
                  <span style={webStyles.listItemBuyerTitleStyle}>
                    {task.buyer}
                  </span>
                </Box>
              </Box>
              <Box sx={webStyles.listItemRightSideContainerStyle}>
                <span
                  style={{
                    ...webStyles.listItemStatusStyle,
                    ...(task.status === status.COMPLETED &&
                      webStyles.statusCompleted),
                    ...(task.status === status.PENDING &&
                      webStyles.statusPending),
                    ...(task.status === status.NOT_STARTED &&
                      webStyles.statusNotStarted),
                  }}
                >
                  {task.status}
                </span>
                {task.status === status.NOT_STARTED && (
                  <Box>
                    <Box onClick={this.handleClickMenu}>
                      {isMenuOpen ? (
                        <ExpandLess style={webStyles.expandIconStyle} />
                      ) : (
                        <ExpandMore style={webStyles.expandIconStyle} />
                      )}
                    </Box>
                    <Menu
                      anchorEl={this.state.anchorEl}
                      open={isMenuOpen}
                      onClose={this.handleCloseMenu}
                      disableAutoFocusItem
                    >
                      <MenuItem
                        onClick={this.handleCloseMenu}
                        style={{
                          ...webStyles.listItemStatusStyle,
                          ...webStyles.statusCompleted,
                          ...webStyles.menuItemStyle,
                        }}
                        disableRipple
                      >
                        {status.COMPLETED}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseMenu}
                        style={{
                          ...webStyles.listItemStatusStyle,
                          ...webStyles.statusPending,
                          ...webStyles.menuItemStyle,
                        }}
                        disableRipple
                      >
                        {status.PENDING}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseMenu}
                        style={{
                          ...webStyles.listItemStatusStyle,
                          ...webStyles.statusNotStarted,
                          ...webStyles.menuItemStyle,
                        }}
                        disableRipple
                      >
                        {status.NOT_STARTED}
                      </MenuItem>
                    </Menu>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </ThemeProvider>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}
const webStyles: StylesDictionary = {
  titleStyle: {
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "Poppins",
    paddingBottom: "16px",
    display: "block",
  },
  listItemTitleContainerStyle: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "10px",
  },
  listItemStyle: {
    borderBottom: "0.25px solid #848FAC",
    borderRadius: "8px",
    padding: "10px 16px 10px 37px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  listItemLeftSideContainerStyle: {
    display: "flex",
    alignItems: "center",
  },
  listItemRightSideContainerStyle: {
    display: "flex",
    alignItems: "center",
  },

  listItemTitleStyle: {
    fontSize: "15px",
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  listItemBuyerTitleStyle: {
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Poppins",
    color: "#848FAC",
  },
  infoIconContainerStyle: {
    paddingLeft: "12px",
  },
  infoIconStyle: {
    width: "20px",
    height: "20px",
    fill: "#0097CB",

    cursor: "pointer",
  },
  listItemStatusStyle: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  statusCompleted: {
    color: "#059669",
  },
  statusPending: {
    color: "#FE872E",
  },
  statusNotStarted: {
    color: "#848FAC",
  },
  doneIconStyle: {
    width: "15px",
    height: "15px",
    fill: "#059669",
    position: "absolute",
    left: "9px",
  },
  expandIconStyle: {
    width: "24px",
    fill: "#273567",
    cursor: "pointer",
  },
  menuItemStyle: {
    paddingTop: "7px",
    paddingBottom: "7px",
  },
};
// Customizable Area End
