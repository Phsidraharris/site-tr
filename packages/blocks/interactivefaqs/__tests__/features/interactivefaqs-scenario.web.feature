Feature: InteractiveFaqs

    Scenario: User navigates to InteractiveFaqs
        Given I am a User loading InteractiveFaqs
        When I navigate to the InteractiveFaqs
        Then InteractiveFaqs will load with out errors
        And I can leave the screen with out errors