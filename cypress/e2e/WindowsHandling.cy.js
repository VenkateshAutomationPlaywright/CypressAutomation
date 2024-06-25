describe("tabs handling", () => {
    it("remove target attribute", () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.get("#opentab").then(newTab => {
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab)
            cy.url().should('include', '/courses')
            cy.get("input[id='search']").type('selenium')
            cy.get("button[type='submit']").click()
        })
        cy.go('back')
    })

    it('should handle tab and perform search', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.handleTab('#opentab');
        cy.get("input[id='search']").type('selenium');
        cy.get("button[type='submit']").click();
        cy.go('back')
    });
})