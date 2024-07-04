// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const elements = require("./elements");

// Comando preencher ca,[p]
Cypress.Commands.add('preencher_campos_prestador', (status, prestador) => {
    if(status === "inativo"){
        cy.get(elements.botao_de_toggle).click()
    }
    cy.get(elements.input_nome_prestador).clear().type(prestador.nome, {delay: 0});
    cy.get(elements.input_email_prestador).clear().type(prestador.email, {delay: 0});
    cy.get(elements.input_CPF_prestador).clear().type(prestador.cpf, {delay: 0});
    cy.get(elements.input_telefone_prestador).clear().type(prestador.telefone, {delay: 0});
    cy.get(elements.input_CEP_prestador).clear().type(prestador.cep, {delay: 0});
    cy.get(elements.input_rua_prestador).clear().type(prestador.rua, {delay: 0});
    cy.get(elements.input_numero_prestador).clear().type(prestador.numero, {delay: 0});
    cy.get(elements.input_complemento_prestador).clear().type(prestador.complemento, {delay: 0});
    cy.get(elements.input_nome_do_bairro_prestador).type(prestador.bairro, {delay: 0});
    cy.get(elements.input_nome_da_cidade_prestador).clear().type(prestador.cidade, {delay: 0});
    cy.get(elements.select_estado_prestador).next().click();
    cy.get(elements.opcao(prestador.estado)).click()
    cy.get(elements.select_observacao_prestador).clear().type(prestador.observacao, {delay: 0});
});

Cypress.Commands.add('cadastro_completo_prestador', (prestador) => {
        cy.get(elements.botao_de_cadastrar_cliente).click()
        cy.preencher_campos_prestador("ativo", prestador)
        cy.get(elements.botao_cadastrar).click()
    })