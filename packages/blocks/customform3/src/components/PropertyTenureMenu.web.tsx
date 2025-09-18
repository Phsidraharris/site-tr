import {
  Box,
  Menu,
  MenuItem,
  MenuProps,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import { useFormikContext } from "formik";
import { PropertyTenure } from "../helpers/types";

const theme = createTheme({
  overrides: {
    MuiMenu: {
      list: {
        "& li": {
          width: "263px",
          marginBottom: "2px",
          borderRadius: "8px",
          padding: "9px 20px 9px 16px",
          "&:hover": {
            backgroundColor: "#F1F5F9",
          },
        },
      },
    },
    MuiList: {
      padding: {
        padding: "10px",
      },
    },
  },
});

const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(() => ({
  "& .MuiMenu-list": {
    width: "283px",
  },
}));

interface PropertyTenureMenuProps {
  textValue: string;
  canEdit: boolean;
}

const PropertyTenureMenu = ({
  textValue,
  canEdit,
}: PropertyTenureMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | SVGSVGElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setFieldValue } = useFormikContext();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box style={webStyle.menuContainer}>
          <Box style={webStyle.leftContainer}>
            <Typography style={webStyle.label}>Property Tenure-</Typography>
            <Typography style={webStyle.label} data-testid="label">
              {textValue}
            </Typography>
          </Box>
          {canEdit && (
            <KeyboardArrowDown
              style={webStyle.arrowIcon}
              onClick={handleClick}
              aria-controls={open ? "property-tenure-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              id="arrow-icon"
              data-testid="arrow-icon"
            />
          )}
        </Box>
        <StyledMenu
          id="property-tenure-menu"
          MenuListProps={{
            "aria-labelledby": "arrow-icon",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{ style: webStyle.paper }}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              setFieldValue("property_tenure", "Freehold");
              handleClose();
            }}
            disableRipple
          >
            Freehold
          </MenuItem>
          <MenuItem
            onClick={() => {
              setFieldValue("property_tenure", PropertyTenure.LEASEHOLD);
              handleClose();
            }}
            disableRipple
          >
            {PropertyTenure.LEASEHOLD}
          </MenuItem>
        </StyledMenu>
      </Box>
    </ThemeProvider>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  titleContainer: {
    textAlign: "center",
    color: "#273567",
    marginBottom: "32px",
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "24px",
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 151, 203, 0.05)",
    padding: "10px 15px",
    borderRadius: "8px",
    alignItems: "center",
    marginBottom: "32px",
  },
  leftContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  label: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "20px",
    color: "#273567",
  },
  arrowIcon: {
    width: "24px",
    height: "24px",
    color: "#273567",
    cursor: "pointer",
  },
  paper: { marginTop: "37px", marginLeft: "-21px" },
};

export default PropertyTenureMenu;
