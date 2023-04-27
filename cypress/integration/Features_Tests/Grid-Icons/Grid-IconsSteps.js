import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Dialogpage from '../DialogBox/DialogBoxPage'


Given('user visit the your playground page', function(){
  Dialogpage.loadYourPlayground();
    
})

When("user should see a columns and rows with grey coloured icons inside each Grid", () => {
  Dialogpage.assertTheGridLenght()
 
});

  And("user clicks all icons in the Grid", () => {
    Dialogpage.clickonEachCell()
       
  });

  Then("user should see red coloured rbi icons inside each Grid.",()=>{
    Dialogpage.assertGridColour()
  })
 