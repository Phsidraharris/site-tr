Feature: NavigationMenu

    Scenario: User navigates to NavigationMenu
        Given I am a User loading NavigationMenu
        When I navigate to the NavigationMenu
        Then NavigationMenu will load with out errors
        And I can leave the screen with out errors

    Scenario: Clicking on "Browse Properties" link updates active link state
        Given the Navbar component is rendered
        When I click on the "Browse Properties" link
        Then the active link should be "Browse Properties"

    Scenario: Clicking on menu img will update webDrawer state
        Given the Navbar component is rendered
        When I click on menu img
        Then The webDrawer state will be true

    Scenario: Clicking on navbar tabs will change activelink state accordingly
        Given the Navbar component is rendered
        When I click on valuation tab
        Then The activeLink state will be changed to valuation
        Then I click on Market Insights tab
        Then The activeLink state will be changed to Market Insights
        Then I click on About us tab
        Then The activeLink state will be changed to About us

    Scenario: Clicking on navbar tabs in drawer will change activelink state accordingly
        Given the Navbar component is rendered
        When I click on Browse properties tab in drawer
        Then The activeLink state will be changed to browse properties
        When I click on valuation tab in drawer
        Then The activeLink state will be changed to valuation
        Then I click on Market Insights tab in drawer
        Then The activeLink state will be changed to Market Insights
        Then I click on About us tab in drawer
        Then The activeLink state will be changed to About us

    Scenario: Close img will change state of webDrawer when clicked
        Given the Navbar component is rendered
        When I click on close img tab in drawer
        Then It will update webDrawer state to false

    Scenario: navigation should display Login button when there is no token in Drawer
        Given the Navbar component is rendered
        When My Hub button will not be present
        Then If the token exist then My Hub button will be present
        Then I should be able to navigate to Login page on click
        When If the tocken does not exist then Login button will be present
        Then I should be able to navigate to Categories page on click

    Scenario: navigation should display Login button when there is no token
        Given the Navbar component is rendered
        When My Hub button will not be present
        Then If the token exist then My Hub button will be present
        Then I should be able to navigate to Login page on click
        When If the tocken does not exist then Login button will be present
        Then I should be able to navigate to Categories page on click

    Scenario: navigation should display Login page when no token when clicked on list my properties
        Given the Navbar component is rendered
        When There is no token
        Then Clicked on List my property btn
