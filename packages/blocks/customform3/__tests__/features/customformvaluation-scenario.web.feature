Feature: customformvaluation

  Scenario: User navigates to customformvaluation and fills out the form
    Given I am a User loading customformvaluation
    When I navigate to the customformvaluation
    Then customformvaluation will load without errors
    And I can leave the screen without errors

