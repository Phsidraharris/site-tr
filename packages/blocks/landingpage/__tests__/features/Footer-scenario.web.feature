Feature: Testing Footer Component

  Scenario: Checking if Footer component is rendered
    Given the Footer component is rendered
    Then the Footer should be displayed

  Scenario: Checking if contact information is displayed correctly
    Given the Footer component is rendered
    Then the contact email should be displayed as "Abcd@gmail.com"
    And the contact phone should be displayed as "987654321"
    And the contact address should be displayed as "abcdef345.xyz, london"