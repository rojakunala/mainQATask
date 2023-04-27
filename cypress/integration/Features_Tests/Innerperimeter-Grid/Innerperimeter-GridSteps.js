import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Dialogpage from '../DialogBox/DialogBoxPage'


Given('user visit the your playground page', function(){
  Dialogpage.loadYourPlayground();   
})

When("user should see a columns and rows with rbi icons inside each Grid", () => {
  Dialogpage.assertTheGridLenght()
 
});

And("user clicks all icons in the inner perimeter of Grid", () => {
    Dialogpage.clickonEachIconInInnerGrid(4)
      
});

Then("user should not see the dialog box popup appeared on screen",()=>{
  cy.contains("Task")
  cy.get('.popup-title').should('not.exist');
  
})


 