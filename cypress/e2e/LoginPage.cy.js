import PoManager from '../page-object/PoManager'

describe('Login Tests', () => {
    let poManager;
    let data;

    before(() => {
        // Load fixture data before tests start
        cy.fixture('logindata').then((userData) => {
            data = userData;
            poManager = new PoManager();
        });
    });

    beforeEach(() => {
        poManager.getLoginPage().launchUrl();
    });

    it('should display an error message for invalid credentials', () => {
        poManager.getLoginPage().performLoginAction(data.invaliddata.username,data.invaliddata.password);
        poManager.getLoginPage().invalidErrorMsg().should('be.visible').and('contain', 'Invalid')
    });
    it('User able to login with valid credentials', () => {
        poManager.getLoginPage().performLoginAction(data.validdata.username, data.validdata.password);
        poManager.getLoginPage().getDashboardText().should('be.visible').and('have.text', 'Dashboard')
    });
});
