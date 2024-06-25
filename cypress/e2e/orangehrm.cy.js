describe('Fixtures', () => {
    it('validate textbox with mutilple values', () => {
        cy.fixture('orangehrm').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata) => {
                cy.get('input[placeholder="Username"]').type(userdata.username);
                cy.get('input[placeholder="Password"]').type(userdata.password);
                cy.get("button[type='submit']").click();
                if(userdata.username=='Admin'&& userdata.password=='admin123'){
                    cy.get('.oxd-topbar-header-title>span>h6').should('be.visible');
                }else{
                    cy.get('//*[text()="Invalid credentials"]').should('have.text','Invalid')
                }
            })

        })


    })
})