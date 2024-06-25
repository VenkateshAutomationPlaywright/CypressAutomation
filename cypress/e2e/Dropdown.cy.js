describe("dropdowns",()=>{
    it("single dropdown",()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get("#carselect").contains('Benz').click();
        cy.get("#multiple-select-example").select(['apple','orange'])
    })
})