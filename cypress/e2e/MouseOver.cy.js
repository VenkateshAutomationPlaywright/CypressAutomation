describe("MouseOverActions", () => {
    it("Hover Over 'Resources' and Click 'eBooks'", () => {
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#mousehover")
          .trigger('mouseover');
    });
});
