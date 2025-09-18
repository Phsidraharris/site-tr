Feature: SellerUserProfile

    Scenario: User navigates to customisableuserprofiles2 screen with success network requests

        Given I am a User loading customisableuserprofiles2
        
        When The user gets the country code list
        Then Country code list fetched successfully

        When The user is choosing Country Code in the drop-down
        Then Country code is selected

        When The user enters phone number in input box
        Then Phone number is rendered in input box

        When The user enters Address in input box
        Then Address is rendered in input box

        When The user is choosing Selling Time in the drop-down
        Then Selling Time is selected

        When The user is choosing Moving Time in the drop-down
        Then Moving Time is selected
       
        When The user is choosing mortgage value in the drop-down
        Then Mortgage Value is selected

        When The user is click save button
        Then form value is submitted

    Scenario: User navigates to customisableuserprofiles2 screen with failure network requests

        Given I am a user loading customisableuserprofiles2 with error
        
        When The user gets the country code list
        Then Country code list was not fetched successfully

        When The user is click save button with error
        Then form value is submitted with error


    Scenario: User enters invalid Data
    
        Given I am a user loading customisableuserprofiles2 with invalid data
        
        When The user enter incorrect phone number in input box
        Then incorrect number is rendered in input box
        

