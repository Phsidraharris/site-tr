Feature: Verification page

    Scenario: Click Resend e-mail link
        Given the VerificationPass component is rendered
        When the user clicks the resend link
        Then the email verification process is initiated

    Scenario: Click Back to Log in link
        Given the VerificationPass component is rendered
        When the user clicks the login link
        Then the user is redirected to the login page