import React, { FunctionComponent } from "react";
import moment from "moment";
//@ts-ignore
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Box, Menu, MenuProps, styled } from "@material-ui/core";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowDown,
} from "@material-ui/icons";

interface Props {
  onSelectDate: (selectedDate: Date) => void;
  selectedDate: Date;
  testID: string;
}

const GenericCalendar: FunctionComponent<Props> = ({
  onSelectDate,
  selectedDate,
  testID,
}) => {
  const CalendarContainer = styled(Box)(() => ({
    "& .react-calendar--doubleView": {
      width: "700px",
    },
    "& .react-calendar--doubleView .react-calendar__viewContainer": {
      display: "flex",
      margin: "-0.5em",
    },

    "& .react-calendar--doubleView .react-calendar__viewContainer > *": {
      width: "50%",
      margin: "0.5em",
    },

    "& .react-calendar, .react-calendar *, .react-calendar *:before, .react-calendar *:after": {
      MozBoxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      boxSizing: "border-box",
    },

    "& .react-calendar button": {
      margin: "0",
      border: "0",
      outline: "none",
    },

    "& .react-calendar button:enabled:hover": {
      cursor: "pointer",
    },

    "& .react-calendar__navigation button": {
      minWidth: "44px",
      background: "none",
    },

    "& .react-calendar__month-view__weekdays": {
      textAlign: "center",
      textTransform: "uppercase",
      font: "inherit",
      fontSize: "0.75em",
      fontWeight: "bold",
    },

    "& .react-calendar__month-view__weekdays__weekday": {
      padding: "0.5em",
    },

    "& .react-calendar__month-view__weekNumbers .react-calendar__tile": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "inherit",
      fontSize: "0.75em",
      fontWeight: "bold",
    },

    "& .react-calendar__month-view__days__day--weekend": {
      color: "#d10000",
    },

    "& .react-calendar__month-view__days__day--neighboringMonth": {
      color: "#757575",
    },

    "& .react-calendar__tile": {
      maxWidth: "100%",
      padding: "10px 6.6667px",
      background: "none",
      textAlign: "center",
      lineHeight: "16px",
      font: "inherit",
      fontSize: "0.833em",
    },

    "& .react-calendar__tile:disabled": {
      backgroundColor: "#f0f0f0",
    },

    "& .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus": {
      backgroundColor: "#e6e6e6",
    },

    "& .react-calendar__tile--hasActive": {
      background: "#76baff",
    },

    "& .react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus": {
      background: "#a9d4ff",
    },

    "& .react-calendar__tile--active": {
      background: "#006edc",
      color: "white",
    },

    "& .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus": {
      background: "#1087ff",
    },

    "& .react-calendar--selectRange .react-calendar__tile--hover": {
      backgroundColor: "#e6e6e6",
    },

    "& .react-calendar": {
      fontFamily: "Poppins",
      padding: "24px",
      fontSize: "14px",
      fontWeight: "400",
      border: "1px solid #E2E8F0",
      borderRadius: "8px",
      width: "392px",
      maxWidth: "100%",
    },
    "& .react-calendar__navigation": {
      display: "flex",
      marginBottom: "24px",
      "& button": {
        mingWidth: "unset",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "700",
        letterSpacing: "0em",
        padding: "unset",
        "&:hover": {
          background: "unset",
        },
        "&:enabled:focus": {
          background: "unset",
        },
        "&:disabled": {
          color: "unset",
        },
      },
    },

    "& .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades": {
      gap: "10px 20px",
      "& button": {
        flex: "unset !important",
        width: "100px",
        padding: "9px 0px",
        border: "1px solid #E2E8F0",
        borderRadius: "6px",
      },
      "& .react-calendar__tile": {
        "&--now": {
          backgroundColor: "white",
          color: "#0F172A",
          "&:hover": {
            background: "#EDF5F8",
            color: "#273567",
            border: "1px solid #2735674D",
          },
        },
        "&--active": {
          border: "1px solid #2735674D",
          background: "#EDF5F8",
          color: "#273567",
        },
        "&:hover": {
          color: "#273567",
          border: "1px solid #2735674D",
          background: "#EDF5F8",
        },
      },
    },
  }));

  const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(
    ({}) => ({
      "& .MuiPopover-paper": {
        border: "unset !important",
      },
      "& .MuiMenu-list": {
        padding: "unset",
      },
    })
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={webStyle.anchorContainer}
        data-testid={testID}
      >
        {moment(selectedDate).format("MMMM")}
        <KeyboardArrowDown style={webStyle.arrowDownIcon} />
      </div>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <CalendarContainer>
          <Calendar
            onChange={(value) => {
              onSelectDate(value as Date);
              handleClose();
            }}
            value={selectedDate}
            defaultView="year"
            maxDetail="year"
            minDetail="year"
            next2Label={null}
            prev2Label={null}
            prevLabel={<ArrowBackIos style={webStyle.icon} />}
            nextLabel={<ArrowForwardIos style={webStyle.icon} />}
          />
        </CalendarContainer>
      </StyledMenu>
    </div>
  );
};

const webStyle = {
  anchorContainer: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "#273567",
    padding: "10px 16px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px 0px #00000014",
    gap: "8px",
    minWidth: "122px",
    justifyContent: "space-between",
  },
  icon: { width: "24px", fill: "#94A3B8" },
  arrowDownIcon: { fill: "#273567", width: "24px", height: "24px" },
};
export default GenericCalendar;
