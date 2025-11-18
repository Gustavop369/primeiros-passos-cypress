import userData from '../fixtures/user-data.json'

const selectorList = {
  userNameField: "[name='username']",
  passwordField: ' [name="password"]',
  loginButton: "[type='submit']",
  sectionTitleTopBar: '#app h6.oxd-text',
  dashboardGrid: ".orangehrm-dashboard-grid"
};

it('login', function() {
  cy.visit('/auth/login')
  cy.get(selectorList.userNameField).type(userData.userSucess.login);
  cy.get(selectorList.passwordField).type(userData.userSucess.password);
  cy.get(selectorList.loginButton).click();
  cy.location('pathname').should('equal','/web/index.php/dashboard/index')
  cy.get(selectorList.dashboardGrid)
});

it('login-fail', function() {
  cy.visit('/auth/login')
  cy.get(selectorList.userNameField).type(userData.userFail.login);
  cy.get(selectorList.passwordField).type(userData.userFail.password);
  cy.get('#app button.oxd-button').click();
  cy.get(selectorList.loginButton).click();
  cy.contains('Invalid credentials').should('be.visible');
  
});



  


