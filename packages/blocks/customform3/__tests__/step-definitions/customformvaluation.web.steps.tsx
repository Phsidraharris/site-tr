/**
 * @jest-environment jsdom
 */

import React from "react";
import CustomFormValuation, { StepOne, StepThree, StepTwo } from "../../src/CustomFormValuation.web";
import { render, screen, fireEvent } from '@testing-library/react';
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import Select from "react-select";
import * as helpers from "../../../../framework/src/Helpers";
const navigation = require("react-navigation");
import "@testing-library/jest-dom";

const screenProps = {
    navigation: navigation,
    id: "Customformvaluation",
    classes : {}
};

const feature = loadFeature(
    "./__tests__/features/customformvaluation-scenario.web.feature"
);

describe('StepTwo Component', () => {
    it('should render when the page state is 2', () => {
        const props = {
            setSelection: jest.fn(),
            setFormData: jest.fn(),
            formData: { fullPropertyAddress: '123 Main St' },
            page: 2,
        };

        const { getByText, getByTestId } = render(<StepTwo {...props} />);

        expect(getByText('When would you like to sell the property')).toBeInTheDocument();
    });

    it('should update the selection when a radio option is clicked', () => {
        const props = {
            setSelection: jest.fn(),
            setFormData: jest.fn(),
            formData: { fullPropertyAddress: '123 Main St' },
            page: 2,
        };

        const { getByLabelText } = render(<StepTwo {...props} />);

        // Click on the "0 to 3 month" radio option
        const radioOption0To3 = getByLabelText('0 to 3 month');
        fireEvent.click(radioOption0To3);
        const radioOption0To3to6 = getByLabelText('3 to 6 month');
        fireEvent.click(radioOption0To3to6);
        const radioOption0To6 = getByLabelText('6 month+');
        fireEvent.click(radioOption0To6);
        // Ensure the selection function is called with the correct value
        expect(props.setSelection).toHaveBeenCalledWith('0 to 3 month');
        expect(props.setFormData).toHaveBeenCalledWith('monthCount', '0 to 3 month');
        expect(props.setSelection).toHaveBeenCalledWith('3 to 6 month');
        expect(props.setFormData).toHaveBeenCalledWith('monthCount', '3 to 6 month');
        expect(props.setSelection).toHaveBeenCalledWith('6 month+');
        expect(props.setFormData).toHaveBeenCalledWith('monthCount', '6 month+');
    });

    it('should not render when the page state is not 2', () => {
        const props = {
            setSelection: jest.fn(),
            setFormData: jest.fn(),
            formData: { fullPropertyAddress: '123 Main St' },
            pageState: 1, // Assuming page state is not 2
        };

        const { queryByText, queryByTestId } = render(<StepTwo {...props} />);

        expect(queryByTestId('fullPropertyAddressInput')).toBeNull();
    });
});
describe('StepThree Component', () => {
    it('should render the form correctly', () => {
        const props = {
            setSelection: jest.fn(),
            setFormData: jest.fn(),
            formData: { fullPropertyAddress: '123 Main St', monthCount: '6 month+', email: 'email', fullName: 'fullName' },
            page: 3,
        };

        const { getByText, getByTestId } = render(<StepThree {...props} />);

        expect(getByText('Your Details')).toBeInTheDocument();
        expect(getByText('*Email')).toBeInTheDocument();
    });

});
test('User can fill out and submit the form step one', () => {
    const { getByTestId, getByText } = render(<CustomFormValuation {...screenProps} />);

    const fullPropertyAddressInput = getByTestId('fullPropertyAddressInput');
    fireEvent.change(fullPropertyAddressInput, { target: { value: 'Test Input' } });

    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
});

test('component has this inputs', async () => {
    render(<StepThree formData={{}} />);
    const fullNameInput = screen.getByTestId('fullNameInput');
    expect(fullNameInput).toBeInTheDocument();
});



defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    });

    test("User navigates to customformvaluation and fills out the form", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: CustomFormValuation;

        given("I am a User loading customformvaluation", () => {
            exampleBlockA = shallow(<CustomFormValuation {...screenProps} />);
        });

        when("I navigate to the customformvaluation", () => {
            instance = exampleBlockA.instance() as CustomFormValuation;
        });

        then("customformvaluation will load without errors", () => {
            expect(exampleBlockA).toBeTruthy();
        });

        then("I can leave the screen without errors", () => {
            instance.componentWillUnmount();
            expect(exampleBlockA).toBeTruthy();
        });
    });
})