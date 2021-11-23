describe('Search elements', ()=>{
    it('search for elements with multiple results', ()=>{
        cy.visit('/')
        cy.fixture('index').then((index)=>{           
            cy.get(index.product3).click();
            cy.get('#open-installments-modal').click();
            cy.get('#selectBank').select('Credicoop');
            cy.get('#selectCardByBank').select('Visa');
            //cy.screenshot();
            //cy.get('#installmentsTable')
            //cy.get('#bodyTable > :nth-child(1) > :nth-child(1)').select('td', '1');
            //cy.get('#bodyTable > :nth-child(1) > :nth-child(1)').should('containt', '18');
        })   
    })
})
context('My test suite', ()=>{
    it('take a screenshot', ()=>{
        cy.url('https://tienda.movistar.com.ar/motorola-moto-e6i.html')
        cy.screenshot()
        cy.screenshot('my-screenshot')
    })
})