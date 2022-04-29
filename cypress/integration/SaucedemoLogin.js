

it('visitar o site saucedemo', ()=>{
cy.visit('https://www.saucedemo.com/');
})

it('login na pagina principal',()=>{
cy.get('[data-test=username]').type('standard_user');
cy.get('[data-test=password]').type('secret_sauce');
cy.get('[data-test="login-button"]').click();
})

it('verificar se está na pagina de produtos', ()=>{
cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

})
