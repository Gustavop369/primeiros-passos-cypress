import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();


it.only('login', () => {
  loginPage.acessLoginPage()
  loginPage.loginWithUser(userData.userSucess.login, userData.userSucess.password)
  dashboardPage.checkDashboardPage()
  menuPage.accesMyInfo()
  myInfoPage.fillMyInfoFields()
});

it('login-fail', function() {
  cy.visit('/auth/login')
  cy.get(selectorList.userNameField).type(userData.userFail.login);
  cy.get(selectorList.passwordField).type(userData.userFail.password);
  cy.get('#app button.oxd-button').click();
  cy.get(selectorList.loginButton).click();
  cy.contains('Invalid credentials').should('be.visible');
  
});



  


