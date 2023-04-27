import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Dialogpage from '../DialogBox/DialogBoxPage'

// Note :  DialogBox feature- This test cases has a Defect , Defect id :1 ,3 impacts this feature file
Given('user visit the your playground page', function(){
  Dialogpage.loadYourPlayground();   
})

When("user should see a columns and rows with rbi icons inside each Grid", () => {
  Dialogpage.assertTheGridLenght()
 
});

And("user clicks all icons in the outer perimeter of Grid", () => {
    Dialogpage.clickonEachIconInOuterGrid(4)
   
    // cy.on('window:confirm', () => false);
    // cy.get('.popup-trigger')
    // .click();
});

And("user should see the dialog box popup appeared on screen",()=>{
    cy.contains("github.io.says").should("be.visible") 
})

Then("user should see the mssage like give me a size with text box to input the size",()=>{
    cy.contains("Done! Ready for the next try? Give me a size [3-9]:").should("be.visible")
})

