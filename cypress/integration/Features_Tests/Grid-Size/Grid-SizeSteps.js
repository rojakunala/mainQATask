import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Dialogpage from '../DialogBox/DialogBoxPage'

// Note :  DialogBox feature- This test cases has a Defect , Defect id :1 and 2 impacts this feature file
Given('user visit the your playground page', function(){
  Dialogpage.loadYourPlayground();   
})

When("user should see a 4 columns and 4rows with rbi icons inside each Grid", () => {
  Dialogpage.assertTheGridLenght()
 
});

And("user clicks all icons in the outer perimeter of Grid", () => {
    Dialogpage.clickonEachIconInOuterGrid(4)
      
});

And("user should see the dialog box popup appeared on screen",()=>{
    //cy.contains("This page says")//.should("be.visible")
    cy.get('.popup-title').should("be.visible")
    
})
And("user should enter the size of the grid into dialog box",()=>{
  Dialogpage.assertTheGridLenght()
})

Then("user should have appropriate number of columns and rows based on input.",()=>{
  Dialogpage.assertTheGridLenght()
})

 