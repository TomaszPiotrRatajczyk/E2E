class mainPage{
    elements = {
        confirmButton : () => cy.get('[data-bn-type="button"]').contains('Confirm'),
        loginWithEmail : () => cy.get('[data-testid=orderform_login]'),
        nextButton : () => cy.get('[data-bn-type=button]').contains('Next'),
        buyinput : () => cy.get('input[id^="unitAmount-'),
        buyButton: () => cy.get('[type=submit]').contains('Buy/Long'),
        marketTab: () => cy.get('[date-testid=market]'),
        closeAllPosition: () => cy.contains('Close All Positions'),
        orderHistory: () => cy.get('[data-testid="OrderHistory"]'),
        market: () => cy.get('[data-testid=positionTableInfo]').children().contains('Market')
    }

    clickConfirm(){
        this.elements.confirmButton().click();
    }

    clickEmailLogin(){
        this.elements.loginWithEmail().should('not.be.disabled').click();
    }

    hotFeaturClose(){
        window.localStorage.setItem('futuresHotFeaturesIsReleased', 'true');
        window.localStorage.setItem('futuresHotFeaturesView','true' );
        
    }

    closeAll(){
        this.elements.closeAllPosition().click();
        this.elements.confirmButton().click();
        }
    

    addValue(value){
        this.elements.marketTab().click();
        this.elements.buyinput().type(value, {hold: 1}).blur();
    }

    checkPosition(valueBTC){
         cy.get('[data-testid=positionTableInfo]').children().contains(valueBTC);
    }

    addPosition(){
        this.elements.buyButton().click();
        this.elements.market().should('exist');

    }

    marketSell(){
        this.elements.market().click();
        this.elements.market().should('not.exist');
    }

    checkOrderHistory(){
        this.elements.orderHistory().click();

    }

}

export default mainPage