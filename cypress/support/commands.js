/// <reference types="Cypress" />

Cypress.Commands.add('handleTab', (tabSelector) => {
    cy.get(tabSelector).then(newTab => {
        const hrefTab = newTab.prop('href');
        cy.visit(hrefTab);
    });
});

Cypress.Commands.add('frameLoadedAndType', (frameSelector, inputSelector, text) => {
    cy.frameLoaded(frameSelector);
    cy.iframe(frameSelector)
        .find(inputSelector)
        .clear()
        .type(text);
});

Cypress.Commands.add('frameLoadedAndValidate', { prevSubject: 'element' }, (frameElement, validationSelector, expectedText) => {
    cy.wrap(frameElement).frameLoaded();
    cy.wrap(frameElement)
        .find(validationSelector);
        
});


