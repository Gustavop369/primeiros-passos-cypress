class LoginFailPage{
    selectorList(){
        const selectors = {
            wrongAlert: 'Invalid credentials',
        }

        return selectors
    }

    
    loginWrongUser(){
        cy.contains(this.selectorList().wrongAlert).should('be.visible');
    }
}

export default LoginFailPage