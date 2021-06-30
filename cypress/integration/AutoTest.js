describe('AutoTest Project', () => {
    it('Testing website functionality for ckitchen.com', () => {
        cy.visit('https://www.ckitchen.com/')
        
          //Tests click of cookies notification "I Agree Button"


        // Activates cookies notification bar via scroll
        cy.scrollTo('bottom')
        cy.scrollTo('top')

        // Locate cookies notification nav bar and click "I Agree" button 
        cy.get('.notification-btns').click()
        cy.contains('I Agree').click()


          // Tests input search "ice makers" and verifies correct html link


        // Get an input, type into it and verify that the value has been updated in the ckitchen search bar
        cy.get('input')
          .type('ice makers')
        cy.contains('ice makers').click()

        // After search entered into search bar there should be on a new URL which includes '/commercial-ice-machines'
        cy.url().should('include', '/commercial-ice-machines')


          // Tests vendor filter function for "Manitowoc" and verifies product count in vendor filter matches count in product list
        

        // Searches webpage for "Full-Dice Ice Machines" link. Clicks link and checks new webpage for proper address
        cy.get('.item-categories').contains('Full-Dice Ice Machines').click()
        cy.url().should('include', '/full-dice')

        // Clicks the "Manitowoc" vendor checkbox using the Manitowoc brand value 
        cy.get('.js-filter-value').check('09e51896-5085-42fc-9265-c23b5520db07')

        // Waits for new webpage to load
        cy.wait(1000)

        // Compares the brand product count from the filter bar to the overall total of products displayed
        cy.get('.active > small').invoke('text').then(brandProductCount => {
          cy.get('.gt-items-total').should('have.text', brandProductCount)
        });
        
        

    });
});