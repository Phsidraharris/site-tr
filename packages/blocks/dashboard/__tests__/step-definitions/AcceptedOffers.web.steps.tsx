/**
 * @jest-environment jsdom
 */
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import AcceptedOffer from "../../src/AcceptedOffers.web";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AcceptedOffers", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should open 'Update Solicitor Details' modal", async () => {
    const { queryByTestId } = render(
      <AcceptedOffer navigation={undefined} id={""} />
    );
    const updateSolicitorButton = queryByTestId("updateSolicitorButton");

    expect(updateSolicitorButton).toBeDefined();

    updateSolicitorButton && fireEvent.click(updateSolicitorButton);

    const solicitorInformationForm = queryByTestId("solicitorInformationForm");

    expect(solicitorInformationForm).toBeDefined();
  });

  it("it should render the button and text", () => {
    render(<AcceptedOffer navigation={undefined} id={""} />);

    const updateSolicitorButton = screen.getByTestId("updateSolicitorButton");

    const harryLeoText = screen.getByText("Harry Leo");

    expect(updateSolicitorButton).toBeInTheDocument();
    expect(harryLeoText).toBeInTheDocument();
  });

  it("it should render the create solicitor button", () => {
    render(<AcceptedOffer navigation={undefined} id={""} />);

    const createSolicitorButton = screen.getByTestId("createSolicitorButton");

    expect(createSolicitorButton).toBeInTheDocument();

    createSolicitorButton && fireEvent.click(createSolicitorButton);
  });
});

const feature = loadFeature(
  "./__tests__/features/AcceptedOffers-scenario.web.feature"
);

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User opens the 'Assign Solicitor' modal", ({ given, when, then }) => {
    let AcceptedOfferWrapper: ShallowWrapper;
    let instance: AcceptedOffer;

    given("the Accepted Offer component is loaded", () => {
      // No specific action required as it's set up in beforeEach
      AcceptedOfferWrapper = shallow(
        <AcceptedOffer navigation={undefined} id={""} />
      );
      instance = AcceptedOfferWrapper.instance() as AcceptedOffer;
    });

    when("the user clicks on the 'Assign Solicitor' button", () => {
      instance.openModal(true);
      instance.closeModal();
      instance.closeDeallocateModal();
      instance.openDeallocateModal();
      instance.handleSnackbarOpen();
      instance.handleSnackbarClose();
      instance.handleSuccessfulSnackbar(true);
      instance.handleSuccessfulSnackbar(false);
      instance.handleDateChange(new Date());
      let sevenA = AcceptedOfferWrapper.findWhere(
        node => node.prop("data-test-id") === "buttonclick"
      );
      sevenA.simulate("click");
      instance.setState({ isAnyFieldEmpty: true });
      instance.setState({ isAnyFieldEmpty: false });
      instance.openDeallocateModal();
      const event = {
        target: {
          value: "1234567"
        }
      } as React.ChangeEvent<HTMLInputElement>;
      instance.handleChange(event);
      instance.setState({ enableDeallocateButton: true });
      instance.setState({ enableDeallocateButton: false });
      instance.setState({
        isAnyFieldEmpty: true,
        isDeallocateModalOpen: true,
        isModalOpen: true,
        isSnackbarOpen: true
      });
      let button = AcceptedOfferWrapper.findWhere(
        node => node.prop("data-test-id") === "modalButton"
      );
      button.simulate("click");
      instance.handleSuccessfulSnackbar(true);

      let snackBar = AcceptedOfferWrapper.findWhere(
        node => node.prop("data-test-id") === "snackBar"
      );
      expect(snackBar).toBeTruthy();

      snackBar.props().onClose();

      let formikComponent = AcceptedOfferWrapper.findWhere(
        node => node.prop("data-test-id") === "formikComponent"
      );

      expect(formikComponent).toBeTruthy();

      formikComponent.props().onSubmit();
    });

    then("the 'Update Solicitor Details' modal should open", () => {
      instance.setState({
        inputList: {
          firmName: "test123",
          firstName: "test12",
          lastName: "test123",
          email: "test@gmail.com"
        }
      });
      instance.openDeallocateModal();
    });
  });
});
