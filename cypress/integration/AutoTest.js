describe('AutoTest Project', () => {
    it('clicking "type" navigates to a new url', () => {
        cy.visit('https://www.ckitchen.com/')

        // Get an input, type into it and verify that the value has been updated in the ckitchen search bar
        cy.get('input')
          .type('ice makers')
        cy.contains('ice makers').click()

        // After search entered into search bar there should be on a new URL which includes '/commercial-ice-machines'
        cy.url().should('include', '/commercial-ice-machines')

    });
});