

class LoginPage {

    static loadYourPlayground(){
      cy.visit('/')
        cy.contains('h1','Your playground')
    }

    static clickonEachIconInOuterGrid(Number){
        cy.xpath("(//div[@class='row'])[1]//div[@class='icon']")
        .should('have.length.gte', 3)
        .each(($el, index, $list) => {
        cy.wrap($el).click()
       })
      

        cy.xpath("(//div[@class='row'])[4]//div[@class='icon']")
        .should('have.length.gte', 3)
        .each(($el, index, $list) => {  
          cy.wrap($el).click()
         })
        for (let i = 2; i < Number; i++) {
        cy.xpath("(//div[@class='row'])["+i+"]//div[@class='icon']",{timeout: 1000}).first().click()
        cy.xpath("(//div[@class='row'])["+i+"]//div[@class='icon']",{timeout: 1000}).last().click()
        }
     
       
    }

    static assertTheGridLenght(){
        cy.xpath("//div[@class='mainGrid']").should('be.visible')
        cy.wrap("//div[@class='row']").should('have.length.gte', 3)
    }

    static clickonEachCell(){
        cy.xpath("//div[@class='mainGrid']").should('be.visible')
    
        cy.xpath("//div[@class='mainGrid']//div[@class='row']//div[@class='icon']").should('have.length.gte', 3)
        .each(($el, index, $list) => {  
            cy.wrap($el).click()
            cy.wrap($el).should('have.attr','active','true')
        })

    }

    static assertGridColour(){
        
        cy.xpath("//div[@class='mainGrid']//div[@class='row']//div[@class='icon']").should('have.length.gte', 3)
        .each(($el, index, $list) => {  
            cy.wrap($el).should('have.attr','active','true')
        })
    }


    static clickonEachIconInInnerGrid(Number){
        
        for (let i = 2; i < Number; i++) {
        cy.xpath("(//div[@class='row'])["+i+"]//div[@class='icon']",{timeout: 1000}).eq(1).click()
        cy.xpath("(//div[@class='row'])["+i+"]//div[@class='icon']",{timeout: 1000}).eq(2).click()
        }
        
    }
}

export default LoginPage