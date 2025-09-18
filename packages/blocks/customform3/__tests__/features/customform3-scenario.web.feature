Feature: customform3

    Scenario: User navigates to customform3
        Given I am a User loading customform3
        When I navigate to the customform3
        Then customform3 will load with out errors
        Then All functions must work properly
        And I can leave the screen with out errors
    
    Scenario: User navigates to customform3enquiry screen with success network requests
        Given I am a User loading customform3enquiry
        When The user gets the country code list
        Then Country code list fetched successfully
        When The user is choosing Country Code in the drop-down
        Then Country code is selected
    
    Scenario: User navigates to customform3enquiry screen with failure network requests
        Given I am a user loading customform3enquiry with error
        When The user gets the country code list
        Then Country code list was not fetched successfully
    Scenario: React Select must have proper style
        Given I am user loading react selected
        Then React select must have proper style 