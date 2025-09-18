Feature: dashboard

    Scenario: User navigates to dashboard web
        Given I am a User loading dashboard
        When I navigate to the dashboard
        Then dashboard will load with out errors
        And I can leave the screen with out errors