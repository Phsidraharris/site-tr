Feature: About Component

  Scenario: Rendering the About Component
    Given the About component is rendered
    Then the About component should render without errors

  Scenario: Clicking Privacy Tab
    Given the About component is rendered
    When the user clicks on the Privacy tab
    Then the Privacy component should be displayed

  Scenario: Clicking Terms Tab
    Given the About component is rendered
    When the user clicks on the Terms tab
    Then the Term component should be displayed
