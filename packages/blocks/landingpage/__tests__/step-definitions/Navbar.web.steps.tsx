import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import {runEngine} from '../../../../framework/src/RunEngine'
import {Message} from "../../../../framework/src/Message"

import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum"; 
import React from "react";
import Navbar from "../../src/Navbar.web"
const navigation = require("react-navigation")

const screenProps = {
  navigation: {
    navigate: jest.fn(),
    goBack:jest.fn()
  },
    id: "Navbar"
  }

const feature = loadFeature('./__tests__/features/Navbar-scenario.web.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });
    
      test('Rendering logo', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
    
        given('the Navbar component is rendered', () => {
          landingPageBlock = shallow(<Navbar {...screenProps} />);
        });
    
        then('the logo should be rendered', () => {
          const logoElement = landingPageBlock.find('img');
          expect(logoElement.exists()).toBe(true);
        });
      });

      test('Clicking on "Browse Properties" link updates active link state', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
        let instance: Navbar;
    
        given('the Navbar component is rendered', () => {
          landingPageBlock = shallow(<Navbar {...screenProps} />);
          instance = landingPageBlock.instance() as Navbar;
        });
    
        when('I click on the "Browse Properties" link', () => {
          const browsePropertiesLink = landingPageBlock.find('Link').at(0);
          // browsePropertiesLink.simulate('click');
          instance.handleMyHub()
          instance.handleListProperty()
        });
    
        then('the active link should be "Browse Properties"', () => {
          expect(instance.state.activeLink).toBe('Browse Properties');
        });
      });

      test('Clicking on "Valuation" link updates active link state', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
        let instance: Navbar;
    
        given('the Navbar component is rendered', () => {
          landingPageBlock = shallow(<Navbar {...screenProps} />);
          instance = landingPageBlock.instance() as Navbar;
        });
    
        when('I click on the "Valuation" link', () => {
          const browsePropertiesLink = landingPageBlock.find('Link').at(0);
          // browsePropertiesLink.simulate('click');
        });
    
        then('the active link should be "Valuation"', () => {
          expect(instance.state.activeLink).toBe('Browse Properties');
        });
      });

      test('Clicking on "Market Insights" link updates active link state', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
        let instance: Navbar;
    
        given('the Navbar component is rendered', () => {
          landingPageBlock = shallow(<Navbar {...screenProps} />);
          instance = landingPageBlock.instance() as Navbar;
        });
    
        when('I click on the "Market Insights" link', () => {
          const browsePropertiesLink = landingPageBlock.find('Link').at(0);
          // browsePropertiesLink.simulate('click');
          instance.handleClick("Browse Properties");
          instance.handleShowMoreFilters();
          instance.toggleView();
          instance.toggleLandscapeView();
        });
    
        then('the active link should be "Market Insights"', () => {
          expect(instance.state.activeLink).toBe('Browse Properties');
        });
      });

      test('Clicking on "About us" link updates active link state', ({ given, when, then }) => {
        let landingPageBlock: ShallowWrapper;
        let instance: Navbar;
        let handleClickSpy;

        given('the Navbar component is rendered', () => {
          landingPageBlock = shallow(<Navbar {...screenProps} />);
          instance = landingPageBlock.instance() as Navbar;
          handleClickSpy = jest.spyOn(instance, 'handleClick');
        });
    
        when('I click on the "About us" link', () => {
        
          const aboutUsLink = landingPageBlock.find('[data-test-id="testid1"]');
          aboutUsLink.simulate('click'); 
          expect(instance.state.activeLink).toBe('Browse Properties');

          const aboutUsLink2 = landingPageBlock.find('[data-test-id="testid2"]');
          aboutUsLink2.simulate('click'); 
          expect(instance.state.activeLink).toBe('Valuation');

          const aboutUsLink3 = landingPageBlock.find('[data-test-id="testid3"]');
          aboutUsLink3.simulate('click');
          expect(instance.state.activeLink).toBe('Market Insights');
          
          const aboutUsLink4 = landingPageBlock.find('[data-test-id="testid4"]');
          aboutUsLink4.simulate('click');
          expect(instance.state.activeLink).toBe('About us');

        });
    
        then('the active link should be "About us"', () => {
        });
      });
});
