describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#signIn').click()
    cy.get('[name="username"]').type('eric')
    cy.get('[name="password"]').type('dad')
    cy.get('#submitSignIn').click()
    cy.get('#feastingfox button[type="button"]').click()
  })
})