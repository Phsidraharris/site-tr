import React from "react";
// Customizable Area Start
import { Box, Button, Modal, Snackbar, Typography } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import UserInformationForm from "./components/UserInformationForm.web";
import EditableInput from "./components/EditableInput.web";
import PropertyTenureMenu from "./components/PropertyTenureMenu.web";
import SellerSectionForm from "./components/SellerSectionForm.web";
import BuyerSectionForm from "./components/BuyerSectionForm.web";
import { cross, tick } from "./assets";
import TextInput from "./components/TextInput.web";
import { getMemorandumFormSchema } from "./helpers/validator";
import { canEdit } from "./helpers/canEditHelper";
import {
  PropertyTenure,
  SelectedMemorandumOfSale,
  StatusMemorandumOfSale,
} from "./helpers/types";

const theme = createTheme({
  palette: {},
});

// Customizable Area End

import Customform3Controller, { Props } from "./Customform3Controller";

export default class CustomMemorandumForm extends Customform3Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderLeaseholdInput = ({
    values,
    canEditSellerSectionForm,
  }: {
    values: SelectedMemorandumOfSale;
    canEditSellerSectionForm: boolean;
  }) => {
    return (
      values.property_tenure === PropertyTenure.LEASEHOLD && (
        <EditableInput
          label="Years Remaining on Lease-"
          name="years_remaining_on_lease"
          textValue={values.years_remaining_on_lease}
          canEdit={canEditSellerSectionForm}
        />
      )
    );
  };

  isAcceptedText = () =>
    this.state.selectedMemorandumOfSale?.status ===
    StatusMemorandumOfSale.ACCEPTED
      ? "Accepted"
      : "Declined";

  isAcceptedColor = () =>
    this.state.selectedMemorandumOfSale?.status ===
    StatusMemorandumOfSale.ACCEPTED
      ? "#059669"
      : "#FE4023";
  // Customizable Area End

  render() {
    // Customizable Area Start
    if (!this.state.selectedMemorandumOfSale)
      return <div data-testid="loading">Loading</div>;

    const initialValues = this.state.selectedMemorandumOfSale;

    const {
      isSeller,
      isCreationProcess,
      isAcceptingProcess,
      isMemorandumOfSaleCompleted,
      isRevisionProcess,
      isMemorandumOfSaleAcceptedRejected,
      canEditSellerSectionForm,
      canEditBuyerSectionForm,
    } = canEdit({
      isAcceptingProcess: this.state.isAcceptingProcess,
      isMemorandumOfSaleCompleted: this.state.isMemorandumOfSaleCompleted,
      isRevisionProcess: this.state.isRevisionProcess,
      isSeller: this.state.isSeller,
      selectedMemorandumOfSaleId: this.state.selectedMemorandumOfSaleId,
    });

    return (
      <ThemeProvider theme={theme}>
        <Box sx={webStyle.formContainer}>
          <Box sx={webStyle.titleContainer}>
            <Typography style={webStyle.titleText}>
              Memorandum of Sale
            </Typography>
            <Typography style={webStyle.titleText}>
              369, shree colony,Ontario, London, 65433
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(
              getMemorandumFormSchema({
                canEditBuyerSectionForm,
                canEditSellerSectionForm,
              })
            )}
            onSubmit={async (values) => {
              if (this.state.isRevisionProcess) {
                await this.updateMemorandumOfSale(values);
                return;
              }

              if (isSeller) {
                await this.createMemorandumOfSale(values);
                return;
              }

              await this.updateMemorandumOfSale(values);
            }}
            data-test-id="formikComponent"
          >
            {({ handleSubmit, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <EditableInput
                  label="Price-"
                  name="price"
                  textValue={`£${values.price}`}
                  canEdit={canEditSellerSectionForm}
                />
                <EditableInput
                  label="HM Land Registry Number-"
                  name="registryNumber"
                  textValue={values.registryNumber}
                  canEdit={canEditSellerSectionForm}
                />
                <UserInformationForm
                  label="Seller Information"
                  objectName="sellerInformation"
                  canEdit={canEditSellerSectionForm}
                />
                <UserInformationForm
                  label="Buyer Information"
                  objectName="buyerInformation"
                  canEdit={canEditBuyerSectionForm}
                />
                <PropertyTenureMenu
                  textValue={values.property_tenure}
                  canEdit={canEditSellerSectionForm}
                />
                {this.renderLeaseholdInput({
                  values,
                  canEditSellerSectionForm,
                })}
                <SellerSectionForm canEdit={canEditSellerSectionForm} />
                <BuyerSectionForm
                  getCountryCodeData={this.state.getCountryCodeData}
                  canEdit={canEditBuyerSectionForm}
                  isCreationProcess={isCreationProcess && isSeller}
                />
                <Box style={webStyle.submitButtonContainer}>
                  {isMemorandumOfSaleAcceptedRejected && !isRevisionProcess && (
                    <>
                      {isSeller && (
                        <Button
                          style={webStyle.declineButton}
                          onClick={() => this.handleRevisionProcess(true)}
                          data-test-id="revisionButton"
                        >
                          Revision
                        </Button>
                      )}
                      <Button
                        style={{
                          ...webStyle.acceptButton,
                          backgroundColor: this.isAcceptedColor(),
                          cursor: "default",
                        }}
                      >
                        {this.isAcceptedText()}
                      </Button>
                    </>
                  )}
                  {isAcceptingProcess && (
                    <>
                      <Button
                        style={webStyle.declineButton}
                        onClick={() => this.handleDeclineModalOpen(true)}
                        data-test-id="decline-button"
                      >
                        Decline
                      </Button>
                      <Button
                        style={webStyle.acceptButton}
                        onClick={() => this.handleAcceptModalOpen(true)}
                      >
                        Accept
                      </Button>
                    </>
                  )}
                  {(!isMemorandumOfSaleCompleted || isRevisionProcess) && (
                    <Button style={webStyle.submitButton} type="submit">
                      Submit
                    </Button>
                  )}
                </Box>
                <Snackbar
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={
                    Boolean(Object.keys(errors).length) &&
                    Boolean(Object.keys(touched).length)
                  }
                >
                  <div style={webStyle.popup}>
                    <img src={cross} style={webStyle.popupIcon} />
                    Please fill all the mandatory fields
                  </div>
                </Snackbar>
              </form>
            )}
          </Formik>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={this.state.memorandumOfSaleFormSubmittedSuccessfully}
            autoHideDuration={5000}
            onClose={() =>
              this.setState({
                memorandumOfSaleFormSubmittedSuccessfully: false,
              })
            }
          >
            <div style={webStyle.popup}>
              <img src={tick} style={webStyle.popupIcon} />
              Details Submitted Successfully
            </div>
          </Snackbar>
          <Modal
            open={this.state.isAcceptModalOpen}
            onClose={() => this.handleAcceptModalOpen(false)}
            data-test-id="acceptModalComponent"
          >
            <Box sx={webStyle.modal}>
              <Box>
                Accepting MoS means you are accepting the offer formally. This
                is a binding offer agreement. Please confirm
              </Box>
              <Box
                style={{ ...webStyle.submitButtonContainer, marginTop: "32px" }}
              >
                <Button
                  style={{ ...webStyle.declineButton, padding: "10px 16px" }}
                  onClick={() => this.handleAcceptModalOpen(false)}
                  data-test-id="acceptModalCancelButton"
                >
                  Cancel
                </Button>
                <Button
                  style={{ ...webStyle.acceptButton, padding: "10px 16px" }}
                  onClick={async () => {
                    await this.acceptDeclineMemorandumOfSale(
                      StatusMemorandumOfSale.ACCEPTED
                    );
                    this.handleAcceptModalOpen(false);
                  }}
                  data-test-id="acceptModalButton"
                >
                  Accept
                </Button>
              </Box>
            </Box>
          </Modal>
          <Modal
            open={this.state.isDeclineModalOpen}
            onClose={() => this.handleDeclineModalOpen(false)}
            data-test-id="declineModalComponent"
          >
            <Box sx={webStyle.modal}>
              <Box sx={{ fontSize: "24px", marginBottom: "16px" }}>
                Are you sure you want to decline this offer?
              </Box>
              <Box sx={{ textAlign: "left", width: "100%" }}>
                <Formik
                  initialValues={{ reason: "" }}
                  onSubmit={async ({ reason }) => {
                    await this.acceptDeclineMemorandumOfSale(
                      StatusMemorandumOfSale.DECLINED,
                      reason
                    );
                    this.handleDeclineModalOpen(false);
                  }}
                  data-test-id="formikDeclineComponent"
                >
                  {({ handleSubmit, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <TextInput
                        label="Reason for decline"
                        name="reason"
                        value={values.reason}
                        touched={touched.reason}
                        error={errors.reason}
                        isTextArea
                        fullWidth
                      />
                      <Box
                        style={{
                          ...webStyle.submitButtonContainer,
                          marginTop: "16px",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          style={{
                            ...webStyle.declineButton,
                            padding: "10px 16px",
                          }}
                          type="submit"
                        >
                          Yes
                        </Button>
                        <Button
                          style={{
                            ...webStyle.acceptButton,
                            padding: "10px 16px",
                          }}
                          onClick={() => this.handleDeclineModalOpen(false)}
                          data-test-id="declineModalButton"
                        >
                          No
                        </Button>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Modal>
        </Box>
      </ThemeProvider>
    );
    // Customizable Area End
  }
}

// Customizable Area Start
interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const webStyle: StylesDictionary = {
  // formContainer: { padding: "36px 85px 55px 85px" },
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
  submitButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "7px",
    gap: "10px",
  },
  submitButton: {
    backgroundColor: "#273567",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    padding: "8px 16px 8px 16px",
  },
  acceptButton: {
    backgroundColor: "#273567",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    padding: "6px 66px",
  },
  declineButton: {
    backgroundColor: "#FFFFFF",
    color: "#273567",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    padding: "6px 66px",
    border: "1px solid #273567",
  },
  popup: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    boxShadow: "0px 6px 15px -3px #00000026",
    padding: "8px 16px 8px 8px",
  },
  popupIcon: {
    marginRight: "5px",
    marginLeft: "5px",
    color: "#0F172A",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: " #FFFFFF",
    boxShadow: "0px 0px 15px 0px #6C6C6C26",
    color: "#273567",
    fontFamily: "Poppins",
    fontWeight: 400,
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    maxWidth: "550px",
  },
};
// Customizable Area End
