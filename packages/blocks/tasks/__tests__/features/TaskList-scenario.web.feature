Feature: Tasks
    
    Scenario: User navigates to TaskList
        Given I am a User loading TaskList
        When I navigate to the TaskList
        Then TaskList will load without errors
        Then The Task list data will load without errors