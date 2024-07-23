class mainPage{
    elements = {
        confirmButton : () => cy.get('.bn-button').contains('Confirm'),
        loginWithEmail : () => cy.get('[data-testid=orderform_login]'),
        nextButton : () => cy.get('[data-bn-type=button]').contains('Next'),
        buyinput : () => cy.get('input[id^="unitAmount-'),
        buyButton: () => cy.get('[type=submit]').contains('Buy/Long'),
        marketTab: () => cy.get('[date-testid=market]'),
        
        }

    clickConfirm(){
        this.elements.confirmButton().click()
    }

    clickEmailLogin(){
        this.elements.loginWithEmail().should('not.be.disabled').click()
    }

    hotFeaturClose(){
        window.localStorage.setItem('futuresHotFeaturesIsReleased', 'true');
        this.elements.nextButton().should('exist')
        cy.reload()
    }

    addValue(value){
        //Market tab has to be active - tab
        if(this.elements.marketTab().should('have.class', 'tab')){
            this.elements.marketTab().click();
        }
        this.elements.buyinput().type(value, {hold: 1}).blur();
    }

    checkPosition(valueBTC){
        cy.reload();
        cy.contains('list-item-container', valueBTC).should('equal', valueBTC);
    }

    addPosition(){
        this.elements.buyButton().click()
    }
}

export default mainPage