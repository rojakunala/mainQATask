Feature:  inner perimeter of Grid

  Scenario: successfull user should  able to click on inner perimeter of Grid
    Given  user visit the your playground page
    When  user should see a columns and rows with rbi icons inside each Grid
    And   user clicks all icons in the inner perimeter of Grid
    Then user should not see the dialog box popup appeared on screen
