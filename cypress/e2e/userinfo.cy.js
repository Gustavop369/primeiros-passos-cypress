import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();



it('Fill Personal Information', () => {
  loginPage.acessLoginPage(userData.userSucess.login, userData.userSucess.password)
  loginPage.loginWithUser(userData.userSucess.login, userData.userSucess.password)
  menuPage.accesMyInfo()
  myInfoPage.fillMyPersonalInfo(chance.first(),chance.last());
  myInfoPage.fillMyInfoFields('2503','4834',chance.cf(),'2025-11-21')



});





  


