Feature: Verification

Scenario: User sees the verification message
    Given the Verification component is rendered
    When the user is on the Verification screen
    Then the user should see a verification message