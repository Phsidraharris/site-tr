import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

import { configJSON } from "./Settings2Controller";

const useStyles = makeStyles(() => ({
  button: {
    textTransform: "initial",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "20px",
    color: "#848FAC",
    borderRadius: "8px",
    borderBottom: "1px solid #848FAC",
    padding: "15px 20px",
  },
  activeButton: {
    borderBottom: "1px solid #0097CB",
    color: "#0097CB",
  },
}));

export const StyledButton = (props: {
  [x: string]: any;
  children?: any;
  active?: boolean;
}) => {
  const { active, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Button
      {...otherProps}
      className={`${classes.button} ${active ? classes.activeButton : ""}`}
    >
      {props.children}
    </Button>
  );
};

interface AboutHeaderProps {
  activeTab: string;
  changeActiveTab: (tab: string) => void;
}

const AboutHeader = ({ activeTab, changeActiveTab }: AboutHeaderProps) => {
  return (
    <Box style={webStyles.buttonsContainer}>
      <StyledButton
        variant="text"
        disableTouchRipple
        active={activeTab === configJSON.privacyTab}
        onClick={() => changeActiveTab(configJSON.privacyTab)}
        data-test-id="privacyButton"
      >
        Privacy policy
      </StyledButton>
      <StyledButton
        variant="text"
        disableTouchRipple
        active={activeTab === configJSON.termTab}
        onClick={() => changeActiveTab(configJSON.termTab)}
        data-test-id="termButton"
      >
        Terms and conditions
      </StyledButton>
    </Box>
  );
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyles: StylesDictionary = {
  buttonsContainer: { display: "flex", gap: "32px" },
};

export default AboutHeader;
