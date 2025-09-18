Feature: Login or Signup

  Scenario: User sees the login and signup options
    Given I am a User
    When I open the LoginOrSignup component
    Then I should see the "Log in" and "Sign up" options

  Scenario: User clicks on the "Log in" option
    Given I am a User
    When I open the LoginOrSignup component
    Then the "Log in" option should be active
    And the "Sign up" option should not be active

  Scenario: User clicks on the "Sign up" option
    Given I am a User
    When I open the LoginOrSignup component
    And I click on the "Sign up" option
    Then the "Sign up" option should be active
    And the "Log in" option should not be active

  Scenario: Navigating with activeGridId set to 1
    Given activeGridId is 1
    When the user clicks the button
    Then the user should be navigated to EmailAccountLoginBlock

  Scenario: Navigating with activeGridId not set to 1
    Given activeGridId is not 1
    When the user clicks the button
    Then the user should be navigated to EmailAccountregistration