

describe("Check UI Elements",()=>{

it("checking radio buttons",()=>{
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("label[for='male']").should('be.visible')
cy.get("label[for='female']").should('be.visible')

cy.get('[type="radio"]').check('male')
cy.get('[type="radio"]').check('male').should('be.checked')



})

it("checking checkbox ",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#sunday").should('be.visible') 
    cy.get("#sunday").check('sunday').should('be.checked')  
    cy.get("#sunday").uncheck('sunday').should('not.be.checked') 
    
    })

})