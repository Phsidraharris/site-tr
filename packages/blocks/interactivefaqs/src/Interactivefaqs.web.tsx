import React from "react";
// Customizable Area Start
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Box,
  Typography
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
// Customizable Area End

import { Props, configJSON } from "./InteractivefaqsSharedController";

import InteractivefaqsController from "./InteractivefaqsController";

export default class Interactivefaqs extends InteractivefaqsController {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    super.componentDidMount();
    this.setState({ loading: true }, () => {
      this.getFaqs();
    });
  }

  render() {
    // Customizable Area Start
    const StyledAccordion = styled((props: AccordionProps) => (
      <Accordion {...props} />
    ))(() => ({
      boxShadow: "0px 8px 32px 0px #0000000F, 0px 4px 8px 0px #00000008",
      marginBottom: "32px",
      "&.MuiAccordion-root.Mui-expanded": {
        margin: "unset",
        marginBottom: "32px"
      },
      "&:before": {
        display: "none"
      }
    }));

    const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
      <AccordionSummary expandIcon={<ExpandMore />} {...props} />
    ))(() => ({
      "& p": {
        fontSize: "24px",
        fontFamily: "Poppins",
        fontWeight: 500,
        color: "#273567"
      },
      "& .MuiAccordionSummary-content": {
        margin: "30px 0px",
        "&.Mui-expanded": {
          margin: "unset",
          marginTop: "30px"
        }
      },
      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
      }
    }));

    const StyledAccordionDetails = styled(AccordionDetails)(() => ({
      padding: "10px 0px 30px 16px",
      maxWidth: "70%",
      "& p": {
        fontSize: "16px",
        fontFamily: "Poppins",
        fontWeight: 400,
        color: "#848FAC"
      }
    }));

    const Answer = ({
      question,
      answer,
      expandedQuestion,
      handleExpandedChange,
    }: {
      question: string;
      answer: string;
      expandedQuestion: string | null;
      handleExpandedChange: (question: string, isExpanded: boolean) => void;
    }) => {
      return (
        <Box data-test-id="answerContainer">
          <StyledAccordion
            expanded={expandedQuestion === question}
            onChange={(_, isExpanded) =>
              handleExpandedChange(question, isExpanded)
            }
            data-test-id={question}
          >
            <StyledAccordionSummary>
              <Typography>{question}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography dangerouslySetInnerHTML={{ __html: answer }} />
            </StyledAccordionDetails>
          </StyledAccordion>
        </Box>
      );
    };

    if (this.state.loading) {
      return <div style={webStyles.loadingText}>{configJSON.loadingText}</div>;
    }
    return (
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          minHeight: "100vh",
          padding: "35px 85px"
        }}
      >
        <span style={webStyles.title}>Got a query?</span>
        <Box style={webStyles.textContainer}>
          <span style={webStyles.text}>Find your answer!</span>
          <span style={webStyles.text}>
            Exploring AS-Tx: Your Complete Information Hub
          </span>
        </Box>
        <Box style={webStyles.answersContainer} data-test-id="answersContainer">
          {this.state.faqsData
            .sort(
              (firstFaq, secondFaq) =>
                Number(firstFaq.id) - Number(secondFaq.id)
            )
            .map(faq => (
              <Answer
                question={faq.title}
                answer={faq.content}
                key={faq.title}
                handleExpandedChange={this.handleExpandedChange}
                expandedQuestion={this.state.expanded}
              />
            ))}
        </Box>
        <span style={webStyles.contactUs}>
          If you still have questions, Please feel free to contact us.
        </span>
      </Box>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyles: StylesDictionary = {
  title: {
    fontSize: "30px",
    fontFamily: "Poppins",
    color: "#273567",
    textTransform: "capitalize",
    display: "block"
  },
  textContainer: {
    marginTop: "12px",
    marginBottom: "50px"
  },
  text: {
    fontSize: "16px",
    fontFamily: "Poppins",
    color: "#848FAC",
    display: "block"
  },
  contactUs: {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#273567",
    display: "block"
  },
  loadingText: {
    textAlign: "center"
  }
};
// Customizable Area End
