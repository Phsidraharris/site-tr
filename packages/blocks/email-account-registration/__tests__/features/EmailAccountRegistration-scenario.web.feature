Feature: Registration

Scenario: Account Creation with Invalid Email
    Given I am on the EmailAccountLoginBlock page
    When I enter invalid email
    Then I should see an error message indicating the invalid email format
    And the account should not be created

Scenario: Account Creation with Weak Password
    Given I am on the EmailAccountLoginBlock page
    When I enter weak password
    Then I should see an error message indicating the password requirements
    And the account should not be created

Scenario: Account Creation with Password Mismatch
    Given I am on the EmailAccountLoginBlock page
    When I enter confirm password
    And the password does not match the confirm password
    Then I should see an error message indicating password mismatch
    And the account should not be created

Scenario: Toggle Password Visibility
    Given the password is hidden
    When I toggle password visibility
    Then the password should be visible

Scenario: Toggle Checkbox
    Given the checkbox is unchecked
    When I toggle the checkbox
    Then the checkbox should be checked

Scenario: Navigating to EmailAccountLoginBlock
    Given the user wants to navigate to EmailAccountLoginBlock
    When the user clicks the login button
    Then the user should be navigated to EmailAccountLoginBlock

Scenario: Toggling Confirm Password Visibility
    Given the user is on the password confirmation screen
    When the user toggles the confirm password visibility
    Then the confirm password visibility should be toggled

Scenario: Testing response for termId
    Given an instance of the component
    When handleResponses is called with apiRequestCallId equal to termId
    Then the termsData state should be updated with responseJson.data

Scenario: Testing response for policyId
    Given a instance of the component
    When handleResponse is called with apiRequestCallId equal to policyId
    Then the policyData state should be update with responseJson.data

 Scenario: Testing response for signupId with successful data
    Given an instances of the component
    When handleResponses is called with apiRequestCallId equal to signupId
    And state variables should be reset to initial values