Feature: SolicitorUserProfile

    Scenario: User navigates to customisable solicitor profile screen with success network requests

        Given I am a User loading customisable solicitor profile
        
        When The user gets the country code list
        Then Country code list fetched successfully

        When The user is choosing Country Code in the drop-down
        Then Country code is selected

        When The user enters phone number in input box
        Then Phone number is render in input box

        When The user enters firm name in input box
        Then Firm name is render in input box

        When The user enter correct firm name in input box
        Then Correct firm name is rendered in input box

        When The user enters office address in input box
        Then Office address is render in input box

        When The user enters number of solicitors in input box
        Then Number of solicitors is render in input box

        When The user enters license no in input box
        Then License no is render in input box

        When The user select years of conveyancing experience in the drop-down
        Then Years of conveyancing experience is selected

        When The user select specific experties in the drop-down
        Then Specific experties is selected

        When The user selects regulatory authorities option
        Then Regulatory authoritie option is selected

        When The user enters regulatory authorities id number in input box
        Then Regulatory authorities id number is render in input box

        When The user enters regulatory authorities license number in input box
        Then Regulatory authorities license number is render in input box

        When The user selects scheme option
        Then Scheme option is selected

        When The user enters property redress scheme name in input box
        Then Property redress scheme name is render in input box

        When The user enters property redress membership number in input box
        Then Property redress membership number is render in input box

        When The user enters insurance indemnity provider in input box
        Then Insurance indemnity provider is render in input box

        When The user enters insurance policy number in input box
        Then Insurance policy number is render in input box

        When The user clicks on save button
        Then Solicitor details is submitted successfully

    Scenario: User navigates to customisable solicitor profile screen with failure network requests

        Given I am a user loading customisable solicitor profile with error
        
        When The user gets the country code list
        Then Country code list is not fetched successfully

        When The user clicks on save button
        Then Solicitor details is not submitted

    Scenario: User enters invalid Data

        Given I am a user loading customisable solicitor profile with invalid data
        
        When The user enter incorrect phone number in input box
        Then Error message is display on the screen

        When The user enters firm name in input box
        Then Firm name is render in input box

        When The user enter incorrect firm name in input box
        Then Incorrect firm name is rendered in input box

        When The user enters number of solicitor in input box
        Then Number of solicitor is render in input box

        When The user enter incorrect number of solicitor in input box
        Then Incorrect number of solicitor is rendered in input box

        When The user enters licence number in input box
        Then Licence number is render in input box

        When The user enter incorrect licence number in input box
        Then Incorrect licence number is rendered in input box

        When The user enters authority number in input box
        Then Authority number is render in input box

        When The user enter incorrect authority number in input box
        Then Incorrect authority number is rendered in input box

        When The user enters scheme name in input box
        Then Scheme name is render in input box

        When The user enter incorrect scheme name in input box
        Then Incorrect scheme name is rendered in input box

        When The user enters scheme membership number in input box
        Then Scheme membership number is render in input box

        When The user enter incorrect scheme membership number in input box
        Then Incorrect scheme membership number is rendered in input box

        When The user enters scheme idemnity in input box
        Then Scheme idemnity is render in input box

        When The user enter incorrect scheme idemnity in input box
        Then Incorrect scheme idemnity is rendered in input box

        When The user enters scheme policy number in input box
        Then Scheme policy number is render in input box

        When The user enter incorrect scheme policy number in input box
        Then Incorrect scheme policy number is rendered in input box

        When The user enters authority licence number in input box
        Then Authority licence number is render in input box

        When The user enter incorrect authority licence number in input box
        Then Incorrect authority licence number is rendered in input box