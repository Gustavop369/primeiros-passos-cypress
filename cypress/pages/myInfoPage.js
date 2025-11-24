class MyInfoPage{
    
    selectorList(){

        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            dropdownMenu: "[tabindex='0']",
            dropdownMenuActive: ".oxd-select-text oxd-select-text--focus",
            dropdownList: "[role='listbox']",
           
        }

        return selectors
    }

    
    fillMyPersonalInfo(name, lastname){
        cy.get(this.selectorList().firstNameField).clear().type(name)
        cy.get(this.selectorList().lastNameField).clear().type(lastname)
    }
    
    fillMyInfoFields(employeeid, otherid, driverlicense, date){
        
        //cy.get(this.selectorList().genericField).eq(3).clear().type(nickname)
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeid)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherid)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driverlicense)
        cy.get(this.selectorList().dateField).eq(0).clear().type(date)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get('body').contains("Successfully Updated")
        cy.get(this.selectorList().dropdownMenu).eq(0).click()
        cy.get(this.selectorList().dropdownList).contains("German").click()
        cy.get(this.selectorList().dropdownMenu).eq(1).click()
        cy.get(this.selectorList().dropdownList).contains("Other").click()
    }
}

export default MyInfoPage