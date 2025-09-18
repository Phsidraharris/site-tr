Feature: customisableagentprofiles2

       Scenario: User navigates to customisableagentprofiles2 screen with success network requests

       Given I am a User loading customisableagentprofiles2

        When The user gets the country code list
        Then Country code list fetched successfully

        When The user is choosing Country Code in the drop-down
        Then Country code is selected

        When The user enters phone number in input box
        Then Phone number is render in input box
        
        When The user enters agency name in input box
        Then Agency name is render in input box

        When The user enters trading name in input box
        Then Trading name is render in input box

        When The user enters name of director in input box
        Then Name of director is render in input box

        When The user enters company register number in input box
        Then Company register number is render in input box

        When The user enters principal office address in input box
        Then Principal office address is render in input box

        When The user enters branch address in input box
        Then Branch address is render in input box

        When The user enters contact name in input box
        Then Contact name is render in input box

	 When The user enters job title in input box
        Then Job title is render in input box

        When The user chooses the location of property stock from the options
	 Then The location of the property stock is selected from the options

        When The user chooses redress scheme from the options
	 Then The redress scheme is selected from the options

        When The user chooses the idemnity Policy value from the options
	 Then Idemnity Policy is selected from the options

        When The user chooses HMRC's register value from the options
	 Then The HMRC's register value is selected from the options

        When The user enters date of incorporation in input box
        Then Date of incorporation is render in input box

        When The user enters date Commenced Trading in input box
        Then Date Commenced Trading is render in input box

        When The user enters website address in input box
        Then Website address is render in input box

        When The user is choosing years of experience in the drop-down
        Then Years of experience is selected

        When The user enters registration number in input box
        Then Registration number is render in input box

        When The user enters ICO registration number in input box
        Then ICO registration number is render in input box

        When The user enters ICO registration expiry date in input box
        Then ICO registration expiry date is render in input box

        When The user enters HMRC registration number in input box
        Then HMRC registration number is render in input box

        When The user enters HMRC renewal date in input box
        Then HMRC renewal date is render in input box
        
        When The user check the disclaimer information
        Then The disclaimer information is checked

        When The user check the first disclaimer information
        Then The first disclaimer information is checked

        When The user clicks on save button
        Then Agent details is submitted successfully

       Scenario: User navigates to customisableagentprofiles screen with failure network requests

        Given I am a User loading customisableagentprofiles with error

        When The user gets the country code list
        Then Country code list is not fetched successfully

        When The user clicks on save button
        Then Agent details is not submitted

       Scenario: User enters invalid Data

        Given I am a User loading customisableagentprofiles with invalid data
        
        When The user enter incorrect phone number in input box
        Then Incorrect number is rendered in input box

        When The user enters agency name in input box
        Then Agency name is render in input box
        
        When The user enter incorrect agency name in input box
        Then Incorrect agency name is rendered in input box

        When The user enters trading name in input box
        Then Trading name is render in input box

        When The user enter incorrect trading name in input box
        Then Incorrect trading name is rendered in input box

        When The user enters director name in input box
        Then Director name is render in input box

        When The user enter incorrect director name in input box
        Then Incorrect director name is rendered in input box

        When The user enters company register number in input box
        Then Company register number is render in input box

        When The user enter incorrect company register number in input box
        Then Incorrect company register number is rendered in input box

        When The user enters contact name in input box
        Then Contact name is render in input box

        When The user enter incorrect contact name in input box
        Then Incorrect contact name is rendered in input box

        When The user enters job title in input box
        Then Job title is render in input box

        When The user enter incorrect job title in input box
        Then Incorrect job title is rendered in input box

        When The user enters registration no in input box
        Then Registration no is render in input box

        When The user enter incorrect registration no in input box
        Then Incorrect registration no is rendered in input box

        When The user enters ICO registration number in input box
        Then ICO registration number is render in input box

        When The user enter incorrect ICO registration number in input box
        Then Incorrect ICO registration number is rendered in input box

        When The user enters HMRC registration number in input box
        Then HMRC registration number is render in input box

        When The user enter incorrect HMRC registration number in input box
        Then Incorrect HMRC registration number is rendered in input box

        When The user enters date of incorporation in input box
        Then Date of incorporation is render in input box

        When The user enter incorrect date incorporation in input box
        Then Incorrect date incorporation is rendered in input box

        When The user enters date Commenced Trading in input box
        Then Date Commenced Trading is render in input box

        When The user enter incorrect date commenced trading in input box
        Then Incorrect date commenced trading is rendered in input box

        When The user enters ICO registration expiry date in input box
        Then ICO registration expiry date is render in input box

        When The user enter incorrect ICO expiry date in input box
        Then Incorrect ICO expiry date is rendered in input box

        When The user enters HMRC renewal date in input box
        Then HMRC renewal date is render in input box

        When The user enter incorrect HMRC renewable date in input box
        Then Incorrect HMRC renewable date is rendered in input box

       