class loginPage {
password = 'ribot77268@losvtn.com'; 
login = 'ZbqDh%`PYH/#IuuP2@=8plo$2';

    elements = {
        emailInput: () => cy.get('input[id=login_input_email]'),
        passwordInput: () => cy.get('input[id=login_input_password]'),
        loginbutton: () => cy.get('[id=login_input_login]')
}   
    

typeEmail(){
 this.elements.emailInput().type(this.password)
}

typePassword(){
    this.elements.passwordInput().type(this.login)
}


logIn() {
    this.elements.loginbutton().click()
}
}

export default loginPage