describe('App', () => {
    beforeEach(() => {
      // Visit the application url
      cy.visit('http://localhost:8080')
    })
  
    it('logs in a user', () => {
      cy.get('#login-btn').click()
      cy.get('#current-user').should('contain', 'Current user:rohan, isAuthenticated: Yes')
    })
  
    it('logs out a user', () => {
      cy.get('#login-btn').click()
      cy.get('#signout').click()
      cy.get('#current-user').should('contain', 'Current user:, isAuthenticated: No')
    })
  
    it('adds an item', () => {
      const item = 'apple'
      cy.get('#shopping-input').type(item)
      cy.get('button').contains('Add').click()
      cy.get(`#item-${item}`).should('exist')
    })
  
    it('removes an item', () => {
      const item = 'apple'
      cy.get('#shopping-input').type(item)
      cy.get('button').contains('Add').click()
      cy.get(`#remove-${item}`).click()
      cy.get(`#item-${item}`).should('not.exist')
    })
  
    it('clears the list', () => {
      const item = 'apple'
      cy.get('#shopping-input').type(item)
      cy.get('button').contains('Add').click()
      cy.get('#clear-list').click()
      cy.get(`#item-${item}`).should('not.exist')
    })
  })