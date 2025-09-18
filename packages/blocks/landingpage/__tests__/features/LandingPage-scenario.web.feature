Feature: LandingPage

    Scenario: User navigates to LandingPage
        Given I am a User loading LandingPage
        When I navigate to the LandingPage
        Then LandingPage will load with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors

    Scenario: User navigates to landingPage page screen without save cookies
        Given I am a User loading landingPage page screen

        When I click on the accept all button
        Then Cookies banner is close

        When I click on the reject all button
        Then Cookies banner is close

        When I click on the manage cookies setting screen
        Then Manage setting screen is render

        When I click on the privacy tab in manage setting
        Then Privacy tab content is display on the screen

        When I click on the strictly Necessary in manage setting
        Then Strictly Necessary tab content is display on the screen

        When I click on the functional tab in manage setting
        Then Functional tab content is display on the screen

        When I click on the targeting in manage setting
        Then Targeting tab content is display on the screen

        When I cancel the manage cookies setting screen
        Then Manage setting screen is close

        When Landing page does not contain cookie
        Then After the delay cookie banner should be display