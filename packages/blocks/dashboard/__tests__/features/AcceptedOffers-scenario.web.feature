Feature: Accepted offer

    Scenario: User opens the 'Assign Solicitor' modal
        Given the Accepted Offer component is loaded
        When the user clicks on the 'Assign Solicitor' button
        Then the 'Update Solicitor Details' modal should open