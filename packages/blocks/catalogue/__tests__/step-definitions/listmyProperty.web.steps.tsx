import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import ListMyProperty from '../../src/ListMyProperty.web'
import { InputAdornment } from "@material-ui/core";
const navigation = require("react-navigation");

const screenProps = {
    navigation: {
        navigate: jest.fn(),
        goBack: jest.fn()
    },
    id: "ListMyProperty",
};
export class LocalStorageMock {
    store: { [k: string]: string };
    length: number;
  
    constructor() {
      this.store = {};
      this.length = 0;
    }
  
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
     * @returns
     */
    key = (idx: number): string => {
      const values = Object.values(this.store);
      return values[idx];
    };
  
    clear() {
      this.store = {};
    }
  
    getItem(key: string) {
      return this.store[key] || null;
    }
  
    setItem(key: string, value: string) {
      this.store[key] = String(value);
    }
  
    removeItem(key: string) {
      delete this.store[key];
    }
  }
const feature = loadFeature(
    "./__tests__/features/listmyProperty-scenario.feature"
);

defineFeature(feature, (test) => {
    beforeEach(() => {
        jest.resetModules();
        jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
        jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
        global.localStorage = new LocalStorageMock();

        URL.createObjectURL = jest.fn();
    });

    test("User navigates to list my property", ({ given, when, then }) => {
        let exampleBlockA: ShallowWrapper;
        let instance: ListMyProperty;

        given("I am a User loading list my property", () => {
            exampleBlockA = shallow(<ListMyProperty {...screenProps} />);
        });

        when("I navigate to the list my property", () => {
            instance = exampleBlockA.instance() as ListMyProperty;
            const event = {
                target: {
                    value: "1234567",
                    files: ["http://url.com"]
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            const event2 = {
                target: {
                    value: "",
                    files: []
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            instance.setState({  selectedFloorImage: "test23", selectedImgeEpc: "test" })
            instance.cssPropertyFunction()
            instance.checkTwo()
            instance.setState({isKeyFilled:true})
            instance.setState({ selectedImageSecond: ["isduifif", "udyiufyru"] })

            instance.handleCity(event)
            instance.handlestreetname(event)
            instance.handlePropPrice(event)
            instance.handlePropTitleChange(event)
            instance.handlePropnumber(event)
            instance.handlePostcodeOne(event)
            instance.handlePostcodeTwo(event)
            instance.handleNextClick()
            instance.handleClickKey(event)
            instance.handleClickKey(event2)
            instance.handleClickOnOff(event)
            instance.handleClickEpcRating(event)
            instance.handleClickParking(event)
            instance.handleClickReception(event)
            instance.handleClickTenure(event)
            instance.handleClickPropType(event)
            instance.handleClickPriceModi(event)
            instance.handleClickPropStatus(event)
            instance.handleClickBed(event)
            instance.handleClickBathroom(event)
            instance.handleFileRead(event)
            instance.handleAddImageEpc()
            instance.handleImageUploadFloor(event)
            instance.handleFileRead(event)
            instance.handleImageUploadEpc(event)
            instance.handleImageUploadAgent(event)
            instance.handleAddImageClick()
            instance.handleDeleteImage()
            instance.handleImageUploadSec(event)
            instance.handleAddImageClickSec()
            instance.checkValidationStatus()
            instance.handleDescription(event)

            const event1 = {
                target: {
                    value: "",
                    files: ["http://url.com"]
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            instance.handleDescription(event1)
            instance.handleClickBed(event1)
            instance.handleClickBathroom(event1)
            instance.handleClickPropType(event1)
            instance.handleClickTenure(event1)
            instance.handleClickOnOff(event1)
            instance.handleClickParking(event1)
            instance.handlePostcodeOne(event1)
            instance.handlePropTitleChange(event1)
            instance.handlePostcodeTwo(event1)
            instance.handlePropnumber(event1)
            instance.handlestreetname(event1)
            instance.handleCity(event1)
            instance.closeSnackbar()
            instance.setState({
                selectedImageSecond: [
                    "blob:https://localhost:3000/a8e0d6e0-174b-4520-9c59-f39fd7b3dff7",
                    "blob:https://localhost:3000/a8e0d6e0-174b-4520-9c59-f39fd7b3dff7",
                    "blob:https://localhost:3000/a8e0d6e0-174b-4520-9c59-f39fd7b3dff7",
                    "blob:https://localhost:3000/a8e0d6e0-174b-4520-9c59-f39fd7b3dff7",
                ]
            })
            const inputRefSec = instance.fileInputRefSec; // Access the ref

            instance.toggleImageSelection(1)
            instance.handleAddImageFloor()
            instance.handleAddImageAgent()
            instance.handleDeleteFloor()
            instance.handleDeleteEpc()
            instance.saveButton()
            instance.setState({ agentName: "test", address: "test" })
            instance.saveButton()
            // Now, you can make assertions about the ref or its properties
            //   expect(inputRefSec).toBeTruthy();
            const buttontest18 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "option").at(0)
            buttontest18.simulate("click", "test")

            const buttontest = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "option2").at(0)
            buttontest.simulate("click", "test")
            const buttontest2 = exampleBlockA.findWhere((node) => node.prop("data-test-id") === "option3").at(0)
            buttontest2.simulate("click", "test")
            const eventtwo = {
                target: { value: "New Title" },
            };
            exampleBlockA.find('[data-test-id="title"]').simulate("change", eventtwo);
            const event3 = {
                target: { value: "New Title" },
            };
            exampleBlockA.find('[data-test-id="postcodeOne"]').simulate("change", event3);
            const event4 = {
                target: { value: "New Title" },
            };
            exampleBlockA.find('[data-test-id="postcodeTwo"]').simulate("change", event4);
            const event5 = {
                target: { value: "New Title" },
            };

            exampleBlockA.find('[data-test-id="number"]').simulate("change", event5);
            const event6 = {
                target: { value: "New Title" },
            };
            exampleBlockA.find('[data-test-id="street"]').simulate("change", event6);
            const event7 = {
                target: { value: "New Title" },
            };
            exampleBlockA.find('[data-test-id="city"]').simulate("change", event7);

            instance.setState({ propertyTitle: 'New Title' });
            instance.deleteSelectedImages()
            instance.openSucces()
            instance.closeSucc()

            // Simulate whatever event or function call triggers this logic
            instance.checkValidationStatus();
            instance.setState({ isPriceModifierFilled: true })
            instance.setState({ isPriceModifierFilled: false })
            const mockIndex = 1; // Replace with the desired index you want to delete

            const mockEvent = {
                target: {
                    value: mockIndex
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;

            instance.handleDeleteImageSec(mockIndex);
            instance.handleButtonClick(mockIndex);
            instance.handleAgentName(event)
            instance.handleAddress(event)
            instance.handlePhone(event)
            instance.setState({ isnumberValid: true })
            instance.setState({ isnumberValid: false })
            instance.setState({ isbedFilled: true })
            instance.setState({ isbedFilled: false })
            instance.setState({
                selectedBed: '', // Set the state properties to conditions where "if" statements should go to the "else" part
                selectedBathroom: '',
                propType: '',
                propTenure: '',
                parking: '',
                porpstatus: '',
                selectedImage: "udfufff"
            });

            instance.handleNextClick(); // Call the function
            instance.handleDeleteAgent()
            instance.setState({
                inputFieldError: {
                    "Property Title": true,
                    "Streen name": true,
                    "City": true,
                    "Property Price": true,
                    "Property Description": true,
                    "selectedBed": true,
                    "selectedBathroom": true,
                    "propType": true,
                    "propTenure": true,
                    "parking": true,
                    "porpstatus": true,
                    "selectedImage": true,
                    "keyFeature": true,
                    "Postcode One": true,
                    "Postcode Two": true,
                    "Property Number": true,
                }
            })
            instance.handleNextClick(); // Call the function

            // Assert that the expected state is set when the "else" part is executed
            expect(instance.state.isbedFilled).toBe(false);
            expect(instance.state.isBathroomFilled).toBe(false);
            expect(instance.state.isPropTypeFilled).toBe(false);
            expect(instance.state.isTenureFilled).toBe(false);
            expect(instance.state.isStatusFilled).toBe(false);
            instance.setState({ isMainImageFilled: true })
            instance.setState({ isMainImageFilled: false })
            
            instance.handleImageClick()
            instance.handleImageInfo()
            instance.handleDesInfo()
            
        });

        then("list my property will load with out errors", () => {

            instance.setState({
                selectedBed: "test1", selectedBathroom: "test1", propType: 'test1',
                propTenure: 'test2',
                parking: 'test3',
                porpstatus: 'test5',
            })
            instance.handleNextClick()


            expect(instance.state.propPrice).toBe("1234567");
            const event1 = {
                target: {
                    value: "",
                    files: ["http://url.com"]
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            instance.handlePropPrice(event1)

            expect(instance.state.propertyTitle).toBe("New Title");
            expect(instance.state.propertyTitle).toBe("New Title");
            expect(instance.state.postcodeTwo).toBe("New Title");
            expect(instance.state.propNumber).toBe("New Title");
            expect(instance.state.streetname).toBe("New Title");
            expect(instance.state.city).toBe("New Title");
            const event = {
                target: {
                    value: "",
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            instance.componentDidMount();
            expect(exampleBlockA).toBeTruthy();
            expect(exampleBlockA).toMatchSnapshot();
        });

    })
});
