import { Box, Typography } from "@material-ui/core";
import React from "react";

interface InformationComponentProps {
    name: string;
    value: string;
  }
  

export default function InformationComponent({ name, value }: InformationComponentProps) {
  return (
    <Box style={webStyle.labelContainer}>
      <Typography style={webStyle.label}>{name}</Typography>
      <Typography style={webStyle.label}>{value}</Typography>
    </Box>
  );
}


interface StylesDictionary {
    [Key: string]: React.CSSProperties;
  }
  
  const webStyle: StylesDictionary = {
    labelContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginBottom: "15px",
    },
    label: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "18px",
    },
  };