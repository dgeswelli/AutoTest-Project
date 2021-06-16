describe('AutoTest Project', () => {
    it('Testing website functionality for ckitchen.com', () => {
        cy.visit('https://www.ckitchen.com/')
        
        // Activates cookies notification bar via scroll
        cy.scrollTo('bottom')
        cy.scrollTo('top')

        // Locate cookies notification nav bar and click "I Agree" button 
        cy.get('.notification-btns').click()
        cy.contains('I Agree').click()

        // Get an input, type into it and verify that the value has been updated in the ckitchen search bar
        cy.get('input')
          .type('ice makers')
        cy.contains('ice makers').click()

        // After search entered into search bar there should be on a new URL which includes '/commercial-ice-machines'
        cy.url().should('include', '/commercial-ice-machines')

    });
});