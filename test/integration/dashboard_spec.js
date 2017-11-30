describe('Dashboard', function() {
 it('displays the open issues count', function(){
     cy.resetDB();
     cy.fixture({
         status: 'open'
     });
     cy.fixture({
        status: 'open'
    });
     cy.fixture({
        status: 'closed'
    });

    cy.visit('/dashboard');
    cy.get('[data-test-open-issues]').should('contain', '2 open issues');
    cy.dataTest('high-gauge')
        .should('exist')
        .should('contain', '100');

            //add new issue
    cy.dataTest('add-issue').click();
    cy.field('title').type('New issue');
    cy.field('description').type('New open issue description');
    cy.field('severity').select('Medium');
    cy.field('estimation').select('7');
    cy.get('[type=submit]').click();


    cy.visit('/dashboard');
    cy.get('[data-test-open-issues]').should('contain', '3 open issues');
    cy.dataTest('high-gauge')
    .should('contain', '67');
    
 })
});
