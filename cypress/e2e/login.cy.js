import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import LoginFailPage from '../pages/loginFailPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const loginFailPage = new LoginFailPage();


it('Login - Sucess', () => {
  loginPage.acessLoginPage(userData.userSucess.login, userData.userSucess.password)
  loginPage.loginWithUser(userData.userSucess.login, userData.userSucess.password)
  dashboardPage.checkDashboardPage()

});

it('Login - Fail', function() {
  loginPage.acessLoginPage()
  loginPage.loginWithUser(userData.userFail.login, userData.userFail.password)
  loginFailPage.loginWrongUser()
  
});



  


