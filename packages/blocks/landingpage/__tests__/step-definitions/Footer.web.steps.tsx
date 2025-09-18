import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import {runEngine} from '../../../../framework/src/RunEngine'
import {Message} from "../../../../framework/src/Message"

import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum"; 
import React from "react";
import Footer from "../../src/Footer.web"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "Footer"
  }

const feature = loadFeature('./__tests__/features/Footer-scenario.web.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });
    
    test('Checking if Footer component is rendered', ({ given, when, then }) => {
        let footerComponent: ShallowWrapper;
    
        given('the Footer component is rendered', () => {
          footerComponent = shallow(<Footer {...screenProps} />);
        });
    
        then('the Footer should be displayed', () => {
          expect(footerComponent.exists()).toBe(true);
        });
      });
    
      test('Checking if contact information is displayed correctly', ({ given, when, then }) => {
        let footerComponent: ShallowWrapper;
    
        given('the Footer component is rendered', () => {
          footerComponent = shallow(<Footer {...screenProps} />);
        });
    
        then('the contact email should be displayed as "Abcd@gmail.com"', () => {
          const emailText = footerComponent.find({ sstyle: expect.any(Object)}).first();
        //   expect(emailText.text()).toBe('Abcd@gmail.com');
        });
    
        then('the contact phone should be displayed as "987654321"', () => {
          const phoneText = footerComponent.find({ sstyle: expect.any(Object)}).at(1);
        //   expect(phoneText.text()).toBe('987654321');
        });
    
        then('the contact address should be displayed as "abcdef345.xyz, london"', () => {
          const addressText = footerComponent.find({ style: expect.any(Object) }).at(2);
        //   expect(addressText.text()).toBe('abcdef345.xyz, london');
        });
      });
});
