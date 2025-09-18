Feature: New Password
    
    Scenario: User enters valid email and clicks Send a recovery link
        Given the user is on the Forgot Password page
        When the user enters a valid email
        When the user clicks Send a recovery link
        Then a recovery link should be sent to the entered email

    Scenario: User enters invalid email format and clicks Send a recovery link
        Given the user is on the Forgot Password page
        When the user enters an invalid email format
        When the user clicks Send a recovery link
        Then an error message should be displayed