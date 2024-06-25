describe("Alert Handling",()=>{

    //basically cypress accept the alert and if alert is simple or confirm alert

    it.only('prompt alert',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
     
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('venkatesh')
        })
            cy.get("button[onclick='myFunctionPrompt()']").click()

        // cy.on('window:confirm',()=>false);
        cy.get('#demo').should('have.text','Hello venkatesh! How are you today?')
    })

    it('prompt alert',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click();
        cy.on('window:confirm',(al)=>{
            expect(al).to.contain('Press a button!');
        })
        cy.on('window:confirm',()=>false);
        cy.get('#demo').should('have.text','You pressed Cancel!')
    })
})