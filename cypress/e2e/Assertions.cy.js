

describe("Assertion",()=>{
    
    it("Assertion",()=>{
 
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     
     /// implicit assertion(should , and)
     
     //cy.url().should('include','orangehrmlive.com')
     //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     //cy.url().should('contain','opensource-demo')
     //simplyfy code
     /*cy.url().should('include','orangehrmlive.com')
     .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .should('contain','opensource-demo') */
     cy.url().should('include','orangehrmlive.com')
     .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .and('contain','opensource-demo')
     .and('not.contain','manju')

     cy.title().should('include','Orange')
     .and('include','OrangeHRM')
     .and('contain','HRM')

     cy.get('.orangehrm-login-branding > img').should('be.visible')
     .and('exist')

     // verify number of hyperlink visible on particular page
     cy.xpath("//a").should('have.length','5')

     cy.get("input[name='username']").type("Admin")// provide value into inputbox
     cy.get("input[name='username']").should('have.value','Admin')//veriy textbox value
     
     })


     it("ExplicitAssertion",()=>{
 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").type("submit")
        let expectedName="Pruthviraj Gharge"
        
        cy.get(".oxd-userdropdown-name").then((x)=>{

            let actusername =x.text();
            //BDD style assertion
            expect(actusername).to.equal(expectedName)
            expect(actusername).to.not.equal(expectedName)
            // list of assertion
            // https://docs.cypress.io/guides/references/assertions

            //Tdd style asseration
            assert.equal(actusername,expectedName)
            assert.notEqual(actusername,expectedName)

        })
        
        
        })
 
 })  