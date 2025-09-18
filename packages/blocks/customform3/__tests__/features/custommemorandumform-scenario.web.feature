Feature: CustomMemorandumForm

  Scenario: User navigates to CustomMemorandumForm
    Given I am a User loading CustomMemorandumForm
    When I navigate to the CustomMemorandumForm
    Then CustomMemorandumForm will load with out errors
    Then The user sees the CustomMemorandumForm and starts filling out the form as seller
    Then The user sees the CustomMemorandumForm and starts filling out the form as buyer
    Then The user sees the CustomMemorandumForm for accept or reject
    Then The user sees the CustomMemorandumForm for revision