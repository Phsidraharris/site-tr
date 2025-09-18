import React from "react";
import { Box } from "@material-ui/core";

interface TermProps {
  text: string;
}

const Term = ({ text }: TermProps) => {
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

export default Term;
