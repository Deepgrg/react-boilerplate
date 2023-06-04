describe('login', () => {
  it('user can login', () => {
    cy.visit('http://localhost:4000/login')

    cy.get('#email').type('diwasbaral10@hotmail.com')
    cy.get('#password').type('test@12')
    cy.get('button:contains("Submit")').click()
    cy.findByText('Loading')
    cy.findByRole('alert')

    cy.get('#password').type('3')
    cy.get('button:contains("Submit")').click()
    cy.url().should('contain', '/home')

    cy.get('button:contains("Logout")').click()
    cy.url().should('contain', '/login')
  })
})
