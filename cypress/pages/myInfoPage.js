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

    fillMyInfoFields(){
        cy.get(this.selectorList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorList().genericField).eq(3).clear().type('NicknameTest')
        cy.get(this.selectorList().genericField).eq(4).clear().type('Employee')
        cy.get(this.selectorList().genericField).eq(5).clear().type('OtherIdTest')
        cy.get(this.selectorList().genericField).eq(6).clear().type('DriversLicenseTest')
        cy.get(this.selectorList().dateField).eq(0).clear().type('2025-11-21')
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