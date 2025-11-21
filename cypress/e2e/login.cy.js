import userData from '../fixtures/user-data.json'

const selectorList = {
  userNameField: "[name='username']",
  passwordField: ' [name="password"]',
  loginButton: "[type='submit']",
  sectionTitleTopBar: '#app h6.oxd-text',
  dashboardGrid: ".orangehrm-dashboard-grid",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  saveButton: "[type='submit']",
};

it('login', function() {
  cy.visit('/auth/login')
  cy.get(selectorList.userNameField).type(userData.userSucess.login);
  cy.get(selectorList.passwordField).type(userData.userSucess.password);
  cy.get(selectorList.loginButton).click();
  cy.location('pathname').should('equal','/web/index.php/dashboard/index')
  cy.get(selectorList.dashboardGrid)

  cy.get(selectorList.myInfoButton).click()
  cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
  cy.get(selectorList.lastNameField).clear().type('LastNameTest')
  cy.get(selectorList.genericField).eq(3).clear().type('NicknameTest')
  cy.get(selectorList.genericField).eq(4).clear().type('Employee')
  cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest')
  cy.get(selectorList.genericField).eq(6).clear().type('DriversLicenseTest')
  cy.get(selectorList.dateField).eq(0).clear().type('2025-11-21')
  cy.get(selectorList.dateCloseButton).click()
  cy.get(selectorList.saveButton).eq(0).click()
  cy.get('body').contains("Successfully Updated")
  //cy.get(selectorList.genericField).eq(8).clear().type('sinNumberTest')

});

it.skip('login-fail', function() {
  cy.visit('/auth/login')
  cy.get(selectorList.userNameField).type(userData.userFail.login);
  cy.get(selectorList.passwordField).type(userData.userFail.password);
  cy.get('#app button.oxd-button').click();
  cy.get(selectorList.loginButton).click();
  cy.contains('Invalid credentials').should('be.visible');
  
});



  


