import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"

import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import LandingPage from "../../src/LandingPage.web"
const navigation = require("react-navigation")

const screenProps = {
    navigation: {
        navigate: jest.fn(),
        goBack: jest.fn()
    },
    id: "LandingPage",
    cities: ["New York", "Los Angeles", "London"]

}

const feature = loadFeature('./__tests__/features/LandingPage-scenario.web.feature');

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-testId") === testID).first();

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.useFakeTimers();
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });
    afterEach(() => {
        jest.useRealTimers(); // Restore real timers after the test
    });
    test('User navigates to LandingPage', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
        let instance: LandingPage;

        given('I am a User loading LandingPage', () => {
            landingPageBlock = shallow(<LandingPage {...screenProps} />)
        });

        when('I navigate to the LandingPage', () => {
            instance = landingPageBlock.instance() as LandingPage
            instance.setState({cities:["New York", "Los Angeles", "London"]})
            instance.setState({showFilters:true})
            instance.setState({isDropdownOpen:true})
            const buttontest15 = landingPageBlock.findWhere((node) => node.prop("data-test-id") === "listhover14").at(0)
            buttontest15.simulate("click", "test")
            const buttontest16 = landingPageBlock.findWhere((node) => node.prop("data-test-id") === "listhover15").at(0)
            buttontest16.simulate("click", "test")
            const buttontest17 = landingPageBlock.findWhere((node) => node.prop("data-test-id") === "listhover16").at(0)
            buttontest17.simulate("click", "test")
            const buttontest18 = landingPageBlock.findWhere((node) => node.prop("data-test-id") === "listhover17").at(0)
            buttontest18.simulate("click", "test")
        });

        then('LandingPage will load with out errors', () => {
            instance.handleFirstTypographyEntered()
            instance.handleShowProperties()
            // instance.handleClose()
            // instance.handleCloseEcp()
            // instance.handleClosePF()
            // instance.handleCloseSfMax()
            // instance.handleCloseSfMax()
            // instance.handleCloseSfMin()
            // instance.handleCloseLoc()
            // // instance.handleClosePropList()
            // instance.handleClosePriceMin()
            // instance.handleClosePriceMax()
            // instance.handleCloseBedMin()
            // instance.handleCloseBedMax()
            // instance.handleCloseBathMin()
            // instance.handleCloseBathMax()
            instance.handleFirstTypographyEntered()
            jest.advanceTimersByTime(1000);
            instance.handleShowProperties()
            jest.advanceTimersByTime(1000);
            instance.toggleDropdown()
            instance.handleCloseSort()
            expect(landingPageBlock).toBeTruthy();
            instance.handlePropertyPage()
            instance.closeDropdown()

        });

        then('I can select the button with with out errors', () => {
            const event = {
                target: {
                    value: "1234567"
                }
            }
            instance.handleSortChange(event)
            const event1 = {
                target: {
                    value: "1234567"
                }
            } as unknown  as React.MouseEvent<HTMLButtonElement>
            instance.handleClickSort(event1)
            const event2 = {
                target: {
                    value: "1234567"
                }
            } as React.ChangeEvent<HTMLInputElement>;
            instance.handleClickPropTypeFunc(event2)
            instance.handlePricMinFunc(event2)
            instance.handlePriceMaxFunc(event2)
            instance.handleBedMinFunc(event2)
            instance.handleBedMinFunc(event2)
            instance.handleBathMinFunc(event2)
            instance.handleBathMinFunc(event2)
            instance.handleSqMinFunc(event2)
            instance.handleSqMinFunc(event2)
            instance.handleSqMaxFunc(event2)
            instance.handleFeatFunc(event2)
            instance.handleEpcFunc(event2)
            instance.handleTenureFunc(event2)
            instance.handleBedMaxFunc(event2)
            instance.handleBathMaxFunc(event2)
        });

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount()
            expect(landingPageBlock).toBeTruthy();
        });
    });

    test("User navigates to landingPage page screen without save cookies", ({ given, when, then }) => {
        let landingPageWrapper: ShallowWrapper;
        let landingPageInstance: LandingPage;

        given("I am a User loading landingPage page screen", () => {
            landingPageWrapper = shallow(<LandingPage {...screenProps} />)
            landingPageInstance = landingPageWrapper.instance() as LandingPage
        });

        when("I click on the accept all button", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "acceptCookieTestId");
            cookieBanner.simulate("click");
        });

        then("Cookies banner is close", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "acceptCookieTestId");
            expect(cookieBanner.text()).toMatch("Accept All");
        });

        when("I click on the reject all button", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "rejectCookieTestId");
            cookieBanner.simulate('click');
        });

        then("Cookies banner is close", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "rejectCookieTestId");
            expect(cookieBanner.text()).toMatch("Reject All");
        });

        when("I click on the manage cookies setting screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "cookieSettingTestId");
            cookieBanner.simulate("click");
        });

        then("Manage setting screen is render", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "cookieSettingTestId");
            expect(cookieBanner.text()).toMatch("Manage Settings");
        });

        when("I click on the privacy tab in manage setting", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "privacyTestId");
            cookieBanner.simulate('click');
        });

        then("Privacy tab content is display on the screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "privacyTestId");
            expect(cookieBanner.text()).toMatch("");
        });

        when("I click on the strictly Necessary in manage setting", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "strictlyNecessaryTestId");
            cookieBanner.simulate("click");
        });

        then("Strictly necessary tab content is display on the screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "strictlyNecessaryTestId");
            expect(cookieBanner.text()).toMatch("");
        });

        when("I click on the functional tab in manage setting", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "functionalTestId");
            cookieBanner.simulate("click");
        });

        then("Functional tab content is display on the screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "functionalTestId");
            expect(cookieBanner.text()).toMatch("");
        });

        when("I click on the targeting in manage setting", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "targetingTestId");
            cookieBanner.simulate("click");
        });

        then("Targeting tab content is display on the screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "targetingTestId");
            expect(cookieBanner.text()).toMatch("");
        });

        when("I cancel the manage cookies setting screen", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "crossSettingTestId");
            cookieBanner.simulate("click");
        });

        then("Manage setting screen is close", () => {
            let cookieBanner = findByTestID(landingPageWrapper, "crossSettingTestId");
            expect(cookieBanner.text()).toMatch("");
        });

        when("Landing page does not contain cookie", () => {
            const cookies = "cookie2=test";
            Object.defineProperty(document, "cookie", {
                value: cookies,
                writable: true,
            });
            landingPageWrapper.update();
        });

        then("After the delay cookie banner should be display", () => {
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
            jest.advanceTimersToNextTimer();
            expect(landingPageWrapper.state("openCookieModal")).toBe(true);
        });
    });
});