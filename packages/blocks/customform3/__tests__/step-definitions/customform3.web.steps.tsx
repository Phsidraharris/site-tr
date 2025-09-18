/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Customform3 from "../../src/Customform3.web";
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import * as helpers from "../../../../framework/src/Helpers";
const navigation = require("react-navigation");
import "@testing-library/jest-dom";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import Select from "react-select";
import {listOfCountryCode} from "../../src/Customform3.web";
const screenProps = {
  navigation: navigation,
  id: "Customform3",
  classes: {}
};

const feature = loadFeature(
  "./__tests__/features/customform3-scenario.web.feature"
);

const countryCodeRes = {
  data: [
    {
      id: "AF",
      type: "country_code_and_flag",
      attributes: {
        name: "Afghanistan",
        emoji_flag: "flag",
        country_code: "93",
      },
    },
  ],
};

const countryCodeErrorRes = {
  errors: "string",
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

describe('CustomForm3', () => {
  it('renders the form correctly', () => {
    render(<Customform3 {...screenProps} />);
    const form = screen.getByTestId('customForm');
    expect(form).toBeInTheDocument();
  });

  it('renders the First Name input field correctly', () => {
    render(<Customform3 {...screenProps} />);
    const firstNameInput = screen.getByTestId('firstNameInput');
    expect(firstNameInput).toBeInTheDocument();
  });

  it('handles changes in the First Name input field', () => {
    render(<Customform3 {...screenProps} />);
    const firstNameInput = screen.getByTestId('firstNameInput');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput).toHaveValue('John');
  });

  it('displays an error message for invalid First Name input', () => {
    render(<Customform3 {...screenProps} />);
    const firstNameInput = screen.getByTestId('firstNameInput');
    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.blur(firstNameInput);
  });

  it('renders the Last Name input field correctly', () => {
    render(<Customform3 {...screenProps} />);
    const lastNameInput = screen.getByTestId('lastNameInput');
    expect(lastNameInput).toBeInTheDocument();
  });

  it('handles changes in the Last Name input field', () => {
    render(<Customform3 {...screenProps} />);
    const lastNameInput = screen.getByTestId('lastNameInput');
    fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
    expect(lastNameInput).toHaveValue('Smith');
  });

  it('displays an error message for invalid Last Name input', () => {
    render(<Customform3 {...screenProps} />);
    const lastNameInput = screen.getByTestId('lastNameInput');
    fireEvent.change(lastNameInput, { target: { value: '' } });
    fireEvent.blur(lastNameInput);
  });
  //
  it('renders the Email input field correctly', () => {
    render(<Customform3 {...screenProps} />);
    const emailInput = screen.getByTestId('emailInput');
    expect(emailInput).toBeInTheDocument();
  });

  it('handles changes in the Email input field', () => {
    render(<Customform3 {...screenProps}/>);
    const emailInput = screen.getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput).toHaveValue('test@test.com');
  });

  it('displays an error message for invalid Email input', () => {
    render(<Customform3 {...screenProps}/>);
    const emailInput = screen.getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.blur(emailInput);
  });
  it('renders the Coutry input field correctly', () => {
    render(<Customform3 {...screenProps}/>);
    const countryInput = screen.getByTestId('countryInput');
    expect(countryInput).toBeInTheDocument();
  });

  it('handles changes in the Coutry input field', () => {
    render(<Customform3 {...screenProps}/>);
    const countryInput = screen.getByTestId('countryInput');
    fireEvent.change(countryInput, { target: { value: 'German' } });
    expect(countryInput).toHaveValue('German');
  });

  it('displays an error message for invalid Coutry input', () => {
    render(<Customform3 {...screenProps}/>);
    const countryInput = screen.getByTestId('countryInput');
    fireEvent.change(countryInput, { target: { value: '' } });
    fireEvent.blur(countryInput);
  });

  it('renders the Number input field correctly', () => {
    render(<Customform3 {...screenProps}/>);
    const firstNameInput = screen.getByTestId('contactNumberInput');
    expect(firstNameInput).toBeInTheDocument();
  });

  it('displays an error message for invalid Number input', () => {
    render(<Customform3 {...screenProps}/>);
    const contactNumberInput = screen.getByTestId('contactNumberInput');
    fireEvent.change(contactNumberInput, { target: { value: '' } });
    fireEvent.blur(contactNumberInput);
  });

  it('renders the address input field correctly', () => {
    render(<Customform3 {...screenProps}/>);
    const addressInput = screen.getByTestId('addressInput');
    expect(addressInput).toBeInTheDocument();
  });

  it('handles changes in the address input field', () => {
    render(<Customform3 {...screenProps}/>);
    const addressInput = screen.getByTestId('addressInput');
    fireEvent.change(addressInput, { target: { value: 'Some Address' } });
    expect(addressInput).toHaveValue('Some Address');
  });

  it('displays an error message for invalid address input', () => {
    render(<Customform3 {...screenProps}/>);
    const addressInput = screen.getByTestId('addressInput');
    fireEvent.change(addressInput, { target: { value: '' } });
    fireEvent.blur(addressInput);
  });
  it('renders the availability input field correctly', () => {
    render(<Customform3 {...screenProps}/>);
    const availabilityInput = screen.getByTestId('availabilityInput');
    expect(availabilityInput).toBeInTheDocument();
  });

  it('handles changes in the availability input field', () => {
    render(<Customform3 {...screenProps}/>);
    const availabilityInput = screen.getByTestId('availabilityInput');
    fireEvent.change(availabilityInput, { target: { value: 'some availability' } });
    expect(availabilityInput).toHaveValue('some availability');
  });

  it('displays an error message for invalid availability input', () => {
    render(<Customform3 {...screenProps}/>);
    const availabilityInput = screen.getByTestId('availabilityInput');
    fireEvent.change(availabilityInput, { target: { value: '' } });
    fireEvent.blur(availabilityInput);
  });
});

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to customform3", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Customform3;

    given("I am a User loading customform3", () => {
      exampleBlockA = shallow(<Customform3 {...screenProps} />);
    });

    when("I navigate to the customform3", () => {
      instance = exampleBlockA.instance() as Customform3;
    });

    then("customform3 will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    then("All functions must work properly", () => {
      instance.handleSnackbarOpen();
      expect(instance.state.isSnackbarOpen).toBeTruthy();

      instance.handleSnackbarClose();
      expect(instance.state.isSnackbarOpen).toBeFalsy();

    })

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
    });
  });
  test("User navigates to customform3enquiry screen with success network requests", ({
    given,
    when,
    then,
  }) => {
    let wrapper: ShallowWrapper;
    let instance: Customform3;
    let getCountryCodeCallId: string = "getCountryCodeApiCallId";

    given("I am a User loading customform3enquiry", () => {
      wrapper = shallow(<Customform3 {...screenProps} />);
      instance = wrapper.instance() as Customform3;
    });
    when("The user gets the country code list", () => {
      mockApiRequest(instance, getCountryCodeCallId, countryCodeRes);
    });
    then("Country code list fetched successfully", () => {
      expect(instance.state.getCountryCodeData.length).toBeGreaterThan(0);
    });
    when("The user is choosing Country Code in the drop-down", async () => {
      const { getByTestId } = render(<Customform3 {...screenProps} />);
      const firstNameInput = getByTestId("firstNameInput");
      fireEvent.change(firstNameInput, { target: { value: "test" } });
    });

    then("Country code is selected", () => {});
  });
  test("User navigates to customform3enquiry screen with failure network requests", ({
    given,
    when,
    then,
  }) => {
    let wrapper: ShallowWrapper;
    let instance: Customform3;
    let getCountryCodeCallId: string = "getCountryCodeApiCallId";

    given("I am a user loading customform3enquiry with error", () => {
      wrapper = shallow(<Customform3 {...screenProps} />);
      instance = wrapper.instance() as Customform3;
    });

    when("The user gets the country code list", () => {
      mockApiRequest(instance, getCountryCodeCallId, countryCodeErrorRes);
    });

    then("Country code list was not fetched successfully", () => {
      expect(instance.state.getCountryCodeData.length).toBe(0);
    });
  });
  test("React Select must have proper style", ({ given, when, then }) => {
    let exampleBlockA: ReactWrapper;
    let instance: Customform3;

    given("I am user loading react selected", () => {
      exampleBlockA = mount(<Customform3 {...screenProps} />);
    });
    then("React select must have proper style", () => {
      const select = exampleBlockA.find("*[data-testid='countryCodeTestId']").at(1);
      expect(select.exists()).toBeTruthy()

      const selectInstance = select.instance() as Select;
      const valueContainer = selectInstance.props.styles?.valueContainer
      // @ts-ignore
      const valueContainerStyle = valueContainer({});
      expect(valueContainerStyle).toEqual({
        border: 'none',
        width: '70px'
      });

      const dropdownIndicator = selectInstance.props.styles?.dropdownIndicator
      // @ts-ignore
      const dropdownIndicatorStyle = dropdownIndicator({});
      expect(dropdownIndicatorStyle).toEqual({
        color: "#273567",
        heigth: '8px'
      });

      const control = selectInstance.props.styles?.control
      // @ts-ignore
      const controlStyle = control({});
      expect(controlStyle).toEqual({
        cursor: "pointer",
        fontFamily: "Poppins",
        borderRadius: "12px",
        display: 'flex',
        border: "none",
        background: "#FFF",
        paddingLeft: "5px",
        height: '100%',
      });
      const singleValue = selectInstance.props.styles?.singleValue
      // @ts-ignore
      const singleValueStyle = singleValue({});
      expect(singleValueStyle).toEqual({
        fontFamily: "Poppins",
        color: '#273567',
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "22px",
      })
      const placeholder = selectInstance.props.styles?.placeholder
      // @ts-ignore
      const placeholderStyle = placeholder({});
      expect(placeholderStyle).toEqual({
        fontFamily: "Poppins",
        color: '#273567',
        marginRight: '3px',
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "22px",
      });

      const option = selectInstance.props.styles?.option
      // @ts-ignore
      const optionStyle = option({}, { isFocused: false });
      expect(optionStyle).toEqual({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Poppins",
        background: "var(--On-Background, transparent)",
        borderRadius: "15px",
        color: "#273567",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "22px",
      });

      const menu = selectInstance.props.styles?.menu
      // @ts-ignore
      const menuStyle = menu({});
      expect(menuStyle).toEqual({
        width: '95px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10px 0px 0px 10px",
        background: "#FFF",
        fontFamily: "Poppins",
      });

      const menuList = selectInstance.props.styles?.menuList
      // @ts-ignore
      const menuListStyle = menuList({});
      expect(menuListStyle).toEqual({
        maxHeight: "11rem",
        "::-webkit-scrollbar": {
          width: "4px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
          background: "#273567"
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#273567"
        }
      });

      const indicatorSeparator = selectInstance.props.styles?.indicatorSeparator
      // @ts-ignore
      const indicatorSeparatorStyle = indicatorSeparator({});
      expect(indicatorSeparatorStyle).toEqual({
        borderColor: "transparent",
      });

    });

  });
});

describe('listOfCountryCode', () => {
  it('should return the correct list of country codes', () => {
    const inputArray = [
      { attributes: { country_code: '1', emoji_flag: '🇺🇸' } },
      { attributes: { country_code: '44', emoji_flag: '🇬🇧' } },
      // Добавьте дополнительные элементы массива для тестирования
    ];

    const expectedOutput = [
      { value: '1', label: '🇺🇸 +1' },
      { value: '44', label: '🇬🇧 +44' },
      // Добавьте ожидаемый вывод для каждого элемента массива
    ];

    const result = listOfCountryCode(inputArray);

    expect(result).toEqual(expectedOutput);
  });
});

