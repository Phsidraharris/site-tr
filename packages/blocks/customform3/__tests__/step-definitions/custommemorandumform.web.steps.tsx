/**
 * @jest-environment jsdom
 */
import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import CustomMemorandumForm from "../../src/CustomMemorandumForm.web";
import {
  PropertyTenure,
  StatusMemorandumOfSale,
} from "../../src/helpers/types";
import moment from "moment";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CustomMemorandumForm",
  classes: {},
};

const feature = loadFeature(
  "./__tests__/features/custommemorandumform-scenario.web.feature"
);

const selectedMemorandumOfSale = {
  catalogue_id: 0,
  id: 0,
  status: null,
  price: "",
  registryNumber: "",
  property_tenure: PropertyTenure.LEASEHOLD,
  years_remaining_on_lease: "",
  do_you_have_a_conveyancer: true,
  seller_section: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
    details_of_onward_chase: "",
    expected_date_for_completion: moment().format("yyyy-MM-DD"),
    expected_date_for_exchange: moment().format("yyyy-MM-DD"),
    extra_notes: "",
    fixtures_and_fittings_including_in_sale: "",
    has_deposit_been_verified: true,
    holding_deposit_paid: true,
    how_much_deposit_paid: "",
    if_yes_please_specify: "",
    legal_issues_to_note: true,
    special_conditions_for_sale: "",
    vendor_buying_another_property: "",
  },
  buyer_section: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
    amount_of_mortgage_to_be_granted: "",
    extra_notes: "",
    any_legal_issue_to_note: true,
    contact_number_of_mortgage_broker: "",
    countryNumberOfMortgage: "",
    decision_in_principle_in_place: true,
    has_ownership_been_checked: true,
    is_property_being_bought_in_company_name: true,
    is_quick_property_sale: true,
    legal_issue_details: "",
    name_of_mortgage_broker: "",
    special_conditions_for_sale: "",
  },
};

const selectedMemorandumOfSaleFormData = {
  id: 0,
  status: null,
  catalogue_id: 0,
  property_tenure: PropertyTenure.LEASEHOLD,
  price: "",
  registryNumber: "",
  do_you_have_a_conveyancer: true,
  years_remaining_on_lease: "",
  sellerSection: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
  },
  sellerSectionOtherInformation: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
    details_of_onward_chase: "",
    expected_date_for_completion: moment().format("yyyy-MM-DD"),
    expected_date_for_exchange: moment().format("yyyy-MM-DD"),
    extra_notes: "",
    fixtures_and_fittings_including_in_sale: "",
    has_deposit_been_verified: true,
    holding_deposit_paid: true,
    how_much_deposit_paid: "",
    if_yes_please_specify: "",
    legal_issues_to_note: true,
    special_conditions_for_sale: "",
    vendor_buying_another_property: "",
  },
  buyerSection: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
  },
  buyerSectionOtherInformation: {
    residential_address: "",
    email: "",
    name: "",
    phone_number: "",
    amount_of_mortgage_to_be_granted: "",
    extra_notes: "",
    any_legal_issue_to_note: true,
    contact_number_of_mortgage_broker: "",
    countryNumberOfMortgage: "",
    decision_in_principle_in_place: true,
    has_ownership_been_checked: true,
    is_property_being_bought_in_company_name: true,
    is_quick_property_sale: true,
    legal_issue_details: "",
    name_of_mortgage_broker: "",
    special_conditions_for_sale: "",
  },
};

const mockApiRequest = (instance: any, apiCallID: string, apiData: object) => {
  const msgSucessRestAPI = new Message(
    getName(MessageEnum.RestAPIResponceMessage)
  );
  msgSucessRestAPI.addData(
    getName(MessageEnum.RestAPIResponceDataMessage),
    msgSucessRestAPI.messageId
  );
  msgSucessRestAPI.addData(
    getName(MessageEnum.RestAPIResponceSuccessMessage),
    apiData
  );
  instance[apiCallID] = msgSucessRestAPI.messageId;
  runEngine.sendMessage("Unit Test", msgSucessRestAPI);
};

const getMemorandumRes = {
  data: {
    attributes: {
      ...selectedMemorandumOfSale,
    },
  },
};

const getMemorandumWithStatusRes = {
  data: {
    attributes: {
      ...selectedMemorandumOfSale,
      status: StatusMemorandumOfSale.ACCEPTED,
    },
  },
};

const getMemorandumErrorRes = {
  errors: "string",
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to CustomMemorandumForm", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance: CustomMemorandumForm;

    let createMemorandumOfSaleApiCallId: string =
      "createMemorandumOfSaleApiCallId";
    let getMemorandumOfSaleApiCallId: string = "getMemorandumOfSaleApiCallId";
    let updateMemorandumOfSaleApiCallId: string =
      "updateMemorandumOfSaleApiCallId";
    let acceptDeclineMemorandumOfSaleApiCallId: string =
      "acceptDeclineMemorandumOfSaleApiCallId";

    given("I am a User loading CustomMemorandumForm", () => {
      exampleBlockA = mount(<CustomMemorandumForm {...screenProps} />);
    });

    when("I navigate to the CustomMemorandumForm", () => {
      instance = exampleBlockA.instance() as CustomMemorandumForm;
    });

    then("CustomMemorandumForm will load with out errors", async () => {
      expect(exampleBlockA.exists()).toBeTruthy();
    });

    then(
      "The user sees the CustomMemorandumForm and starts filling out the form as seller",
      () => {
        const formikComponent = exampleBlockA.findWhere(
          (node) => node.prop("data-test-id") === "formikComponent"
        );

        expect(formikComponent).toBeTruthy();

        formikComponent.props().onSubmit(selectedMemorandumOfSaleFormData);
      }
    );

    then(
      "The user sees the CustomMemorandumForm and starts filling out the form as buyer",
      () => {
        instance.setState({
          selectedMemorandumOfSaleId: "testID", // it comes from catalogue
          isSeller: false, // it depends on user role
        });

        instance.componentDidMount();

        mockApiRequest(
          instance,
          getMemorandumOfSaleApiCallId,
          getMemorandumRes
        );

        expect(instance.state.selectedMemorandumOfSale).toBeTruthy();

        exampleBlockA.update();

        const formikComponent = exampleBlockA.findWhere(
          (node) => node.prop("data-test-id") === "formikComponent"
        );

        expect(formikComponent).toBeTruthy();

        formikComponent.props().onSubmit(selectedMemorandumOfSaleFormData);
      }
    );

    then("The user sees the CustomMemorandumForm for accept or reject", () => {
      instance.setState({
        selectedMemorandumOfSaleId: "testID", // it comes from catalogue
        isSeller: true, // it depends on user role
      });

      instance.componentDidMount();

      mockApiRequest(instance, getMemorandumOfSaleApiCallId, getMemorandumRes);

      expect(instance.state.selectedMemorandumOfSale).toBeTruthy();

      exampleBlockA.update();

      const declineButton = exampleBlockA
        .findWhere((node) => node.prop("data-test-id") === "decline-button")
        .first();

      declineButton.simulate("click");

      const formikDeclineComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "formikDeclineComponent"
      );

      expect(formikDeclineComponent).toBeTruthy();

      formikDeclineComponent.props().onSubmit({ reason: "reason" });

      declineButton.simulate("click");

      const declineModalComponent = exampleBlockA
        .findWhere(
          (node) => node.prop("data-test-id") === "declineModalComponent"
        )
        .first();

      expect(declineModalComponent).toBeTruthy();

      declineModalComponent.props().onClose();

      declineButton.simulate("click");

      const declineModalButton = exampleBlockA
        .findWhere((node) => node.prop("data-test-id") === "declineModalButton")
        .first();

      expect(declineModalButton).toBeTruthy();

      declineModalButton.simulate("click");

      const acceptButton = exampleBlockA
        .findWhere((node) => node.text() === "Accept")
        .first();

      acceptButton.simulate("click");

      const acceptModalButton = exampleBlockA
        .findWhere((node) => node.prop("data-test-id") === "acceptModalButton")
        .first();

      expect(acceptModalButton).toBeTruthy();

      acceptModalButton.simulate("click");

      acceptButton.simulate("click");

      const acceptModalCancelButton = exampleBlockA
        .findWhere(
          (node) => node.prop("data-test-id") === "acceptModalCancelButton"
        )
        .first();

      expect(acceptModalCancelButton).toBeTruthy();

      acceptModalCancelButton.simulate("click");

      const acceptModalComponent = exampleBlockA
        .findWhere(
          (node) => node.prop("data-test-id") === "acceptModalComponent"
        )
        .first();

      expect(acceptModalComponent).toBeTruthy();

      acceptModalComponent.props().onClose();

      mockApiRequest(
        instance,
        updateMemorandumOfSaleApiCallId,
        getMemorandumRes
      );
      expect(instance.state.selectedMemorandumOfSale).toBeTruthy();
      mockApiRequest(
        instance,
        updateMemorandumOfSaleApiCallId,
        getMemorandumErrorRes
      );

      mockApiRequest(
        instance,
        acceptDeclineMemorandumOfSaleApiCallId,
        getMemorandumRes
      );
      expect(instance.state.selectedMemorandumOfSale).toBeTruthy();
      mockApiRequest(
        instance,
        acceptDeclineMemorandumOfSaleApiCallId,
        getMemorandumErrorRes
      );

      mockApiRequest(
        instance,
        createMemorandumOfSaleApiCallId,
        getMemorandumRes
      );
      expect(instance.state.selectedMemorandumOfSale).toBeTruthy();

      mockApiRequest(
        instance,
        createMemorandumOfSaleApiCallId,
        getMemorandumErrorRes
      );
    });

    then("The user sees the CustomMemorandumForm for revision", () => {
      instance.setState({
        selectedMemorandumOfSaleId: "testID", // it comes from catalogue
        isSeller: true, // it depends on user role
      });

      instance.componentDidMount();

      mockApiRequest(
        instance,
        getMemorandumOfSaleApiCallId,
        getMemorandumWithStatusRes
      );

      expect(instance.state.selectedMemorandumOfSale).toBeTruthy();

      exampleBlockA.update();

      const revisionButton = exampleBlockA
        .findWhere((node) => node.prop("data-test-id") === "revisionButton")
        .first();

      expect(revisionButton).toBeTruthy();

      revisionButton.simulate("click");

      const formikComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "formikComponent"
      );

      expect(formikComponent).toBeTruthy();

      formikComponent.props().onSubmit(selectedMemorandumOfSaleFormData);
    });
  });
});
