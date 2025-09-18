Feature: Testing Navbar Component

  Scenario: Rendering logo
    Given the Navbar component is rendered
    Then the logo should be rendered

  Scenario: Clicking on "Browse Properties" link updates active link state
    Given the Navbar component is rendered
    When I click on the "Browse Properties" link
    Then the active link should be "Browse Properties"

  Scenario: Clicking on "Valuation" link updates active link state
    Given the Navbar component is rendered
    When I click on the "Valuation" link
    Then the active link should be "Valuation"

  Scenario: Clicking on "Market Insights" link updates active link state
    Given the Navbar component is rendered
    When I click on the "Market Insights" link
    Then the active link should be "Market Insights"

  Scenario: Clicking on "About us" link updates active link state
    Given the Navbar component is rendered
    When I click on the "About us" link
    Then the active link should be "About us"
