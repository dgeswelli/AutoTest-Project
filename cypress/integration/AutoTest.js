describe('AutoTest Project', () => {
    it('clicking "type" navigates to a new url', () => {
        cy.visit('https://www.ckitchen.com/')

        // Get an input, type into it and verify that the value has been updated
        cy.get('input')
          .type('ice makers')
        cy.contains('ice makers').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commercial-ice-machines')

    });
});