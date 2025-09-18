Feature: BuyerUserProfile

    Scenario: User navigates to customisablebuyerprofiles screen with success network requests

        Given I am a User loading customisablebuyerprofiles
        
        When The user gets the country code list
        Then Country code list fetched successfully

        When The user is choosing Country Code in the drop-down
        Then Country code is selected

        When The user enters phone number in input box
        Then Phone number is render in input box

        When The user enters Address in input box
        Then Address is render in input box

        When The user is choosing Property Prefernce in the drop-down
        Then Property Prefernce is selected

        When The user is choosing Property Budget in the drop-down
        Then Property Budget is selected

        When The user is choosing Financing Status in the drop-down
        Then Financing Status is selected

        When The user is choosing Bedrooms count in the drop-down
        Then Bedrooms count Status is selected

        When The user is choosing Bathrooms count in the drop-down
        Then Bathrooms count Status is selected

        When The user is choosing AdditionalFeature in the drop-down
        Then AdditionalFeature is selected

        When The user is choosing Buying For Status in the drop-down
        Then Buying For Status is selected

        When The user is choosing Mortgage status in the drop-down
        Then Mortgage status is selected
        
        When The user is choosing Moving time frame in the drop-down
        Then Moving time frame is selected

        When The user clicks on save button
        Then buyer details is submitted

    Scenario: User navigates to customisablebuyerprofiles screen with failure network requests

        Given I am a User loading customisablebuyerprofiles with error
        
        When The user gets the country code list
        Then Country code list was not fetched successfully

        When The user clicks on save button
        Then buyer details is submitted with error

    Scenario: User enters invalid Data

        Given I am a User loading customisablebuyerprofiles with invalid data
        
        When The user enter incorrect phone number in input box
        Then Incorrect number is rendered in input box