import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';


const loginPage = new LoginPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();



it('Fill Personal Information', () => {
  loginPage.acessLoginPage(userData.userSucess.login, userData.userSucess.password)
  loginPage.loginWithUser(userData.userSucess.login, userData.userSucess.password)
  menuPage.accesMyInfo()
  myInfoPage.fillMyInfoFields()


});





  


