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

    loginWithUser(login, password){
        cy.get(this.selectorList().userNameField).type(login)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
}

export default LoginPage