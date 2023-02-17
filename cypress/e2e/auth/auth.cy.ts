describe('Auth page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/auth');
    });

    it('Enter form', () => {
        const enterForm = () => {
            const NAME = 'Alexander';
            const EMAIL_LIST = [
                'test@test.test',
                'test@test.test2',
                'test@test.test3',
                'test@test.test4',
            ];

            cy.get('input#name').clear();
            cy.get('input#email').clear();
            cy.get('input#name').type(NAME);
            cy.get('input#email').type(EMAIL_LIST[Math.floor(Math.random() * (4 - 1) + 1)]);
            cy.get('#subscribe').click();
            cy.get('form').submit()
                .then(() => {
                    cy.wait(500);

                    cy.getCookie('auth_token')
                        .then(val => {
                            if (val) {
                                cy.contains('Welcome');
                            } else {
                                enterForm();
                            }
                        });
                });
        };

        enterForm();
    });
});
