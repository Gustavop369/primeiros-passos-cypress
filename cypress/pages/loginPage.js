import userData from '../fixtures/user-data.json'
class LoginPage{
    selectorList(){
        const selectors = {
            userNameField: "[name='username']",
            passwordField: ' [name="password"]',
            loginButton: "[type='submit']",
        }

        return selectors
    }

    acessLoginPage(){
       cy.visit('/auth/login') 
    }

    loginWithUser(){
        cy.get(this.selectorList().userNameField).type(userData.userSucess.login)
        cy.get(this.selectorList().passwordField).type(userData.userSucess.password)
        cy.get(this.selectorList().loginButton).click()
    }
}

export default LoginPage