class Login {
  usernameField = "input[placeholder='Username']";
  passwordField = "input[placeholder='Password']";
  loginBtn = "button[type='submit']";
  errorMsg = "//*[text()='Invalid credentials']";
  companyImg = ".orangehrm-login-branding > img";
  dashboardTxt = ".oxd-topbar-header-title>span>h6"

  launchUrl() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  performLoginAction(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginBtn).click();
  }

  invalidErrorMsg() {
    // if 1st time using xpath npm install -D cypress-xpath and mention support>>e2e import 'cypress-xpath'
    return cy.xpath(this.errorMsg);
  }
  getDashboardText() {
    return cy.get(this.dashboardTxt);
  }
}

export default Login;
