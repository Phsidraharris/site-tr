Feature: Choose User Role

    Scenario: Initial User Interface
        Given I am a User
        When I open the ChooseType component
        Then I should see a welcome message
        And I should see a sub-message
        And I should see a list of role options
        And the default active role should be "Seller"
        And I should see the "Next" button

    Scenario: Select Role Option
        Given I am a User on the ChooseType component
        When I click on the "Buyer" role option
        Then the "Buyer" role option should become active
        And other role options should remain inactive

    Scenario: Click Next Button
        Given I am a User on the ChooseType component
        When I click on the "Next" button
        Then the application should proceed to the next step
        And the selected role should be passed to the next step

    Scenario: Navigating with activeGridId set to 1
        Given activeGridId is 1
        When the user clicks the button
        Then the user should be navigated to EmailAccountregistration

    Scenario: Navigating with activeGridId set to 4
        Given activeGridId is 4
        When the user clicks the button
        Then the user should be navigated to SomeotherPage