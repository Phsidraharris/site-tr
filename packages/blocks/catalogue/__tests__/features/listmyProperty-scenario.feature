Feature: List property

    Scenario: User navigates to list my property
        Given I am a User loading list my property
        When I navigate to the list my property
        Then list my property will load with out errors
        