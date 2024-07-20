describe("CssLocators",()=>{
   it("CssLocators",()=>{

    cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
    cy.get("#search_query_top").type("T-Shirts")
   //cy.get("[name='submit_search']").type("T-Shirts")
    cy.get("[name='submit_search']").click()
    cy.get(".lighter").contains("T-Shirts")
    })

})  