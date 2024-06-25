describe("Frames Handling", () => {
    it("Enter the value inside frame text box", () => {
        cy.visit("https://ui.vision/demo/webtest/frames/");
        cy.frameLoaded("frame[src='frame_1.html']");
        cy.iframe("frame[src='frame_1.html']")
            .find("input[name='mytext1']")
            .type("mani");
        cy.iframe("frame[src='frame_1.html']")
            .find("input[name='mytext1']")
            .should('have.value', 'mani');

            cy.frameLoadedAndType("frame[src='frame_1.html']","input[name='mytext1']","Venkatesh");
            cy.iframe("frame[src='frame_1.html']")
            .find("input[name='mytext1']")
            .should('have.value', 'Venkatesh');
    });
});
