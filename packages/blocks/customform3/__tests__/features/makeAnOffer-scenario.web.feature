Feature: MakeAnOffer

       Scenario: User navigates to make an offer screen with success network requests

       Given I am a User loading make an offer form

        When The user enters offer price in the field
        Then The field renders the offer price

        When The user chooses financing value in the field
        Then The field renders the financing value

        When The user selects the chain fee from the given options
        Then The field renders the chain fee value

        When The user selects the proof of finance from the given options
        Then The field renders the proof of finance

        When The user select the image for proof of finance
        Then The field renders the image name on screen

        When The user selects the proof of identity from the given options
        Then The field renders the proof of identity

        When The user select the image for proof of identity
        Then The field renders the image name on screen

        When The user selects the proof of address from the given options
        Then The field renders the proof of address

        When The user select the image for proof of address
        Then The field renders the image name on screen

        When The user clicks on submit button
        Then Make an offer form details is submitted

       Scenario: User enters invalid Data
    
        Given I am a user loading make an offer screen with invalid data
        
        When The user enter incorrect offer price in the field
        Then Incorrect offer price is rendered in the field

        When The user select nothing in the offer price field
        Then The field renders the blank offer price

        When The user clicks on submit button
        Then Make an offer form details is submitted