Feature: Grid icons colour
    Scenario: successfull user should see red colour rbi icons
        Given  user visit the your playground page
        When  user should see a columns and rows with grey coloured icons inside each Grid
        And user clicks all icons in the Grid
        Then user should see red coloured rbi icons inside each Grid.
