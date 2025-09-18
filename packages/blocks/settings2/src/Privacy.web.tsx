import React from "react";
import { Box } from "@material-ui/core";

interface PrivacyProps {
  text: string;
}

const Privacy = ({ text }: PrivacyProps) => {
  return <Box style={webStyles.textContainer}>{text}</Box>;
};

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyles: StylesDictionary = {
  textContainer: {
    color: "#848FAC",
    fontFamily: "Poppins",
    fontSize: "16px",
    marginTop: "32px",
  },
};

export default Privacy;
