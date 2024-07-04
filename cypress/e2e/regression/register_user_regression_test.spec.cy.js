// cypress/integration/regression/basic_test.spec.js

const elements = require("../../support/elements");

describe('Teste de regressão - Devio', () => {

    const prestador_dados = {
        nome: 'Prestador de Serviços',
        email: 'prestador@servicos.com',
        cpf: '12345678901',
        telefone: '1234567890',
        cep: '5148710',
        rua: 'Rua dos Testes, 123',
        numero: '123',
        complemento: 'Complemento',
        bairro: 'Bairro dos Testes',
        cidade: 'Cidade dos Testes',
        estado: 'Paraíba',
        observacao: 'Nenhuma observação'
    }

    beforeEach(() => {
        // Executa antes de cada teste
        cy.visit('https://teste-qa-devio.vercel.app');
    });

    it('Deve acessar a pagina com sucesso', () => {
        cy.url().should('contain', 'vercel.app');
    });

    it('Deve cadastar um cliente com sucesso', () => {
        cy.get(elements.botao_de_cadastrar_cliente).click();
        cy.url().should('include', '/form');
        cy.preencher_campos_prestador("ativo",prestador_dados)
        cy.get(elements.botao_cadastrar).click()

        cy.get(elements.cliente_cadastrado(prestador_dados.nome))
        .should('exist')
        .and('be.visible')
    });

    it('Deve ser possivel visualizar um prestador cadastrado', () => {
        cy.cadastro_completo_prestador(prestador_dados)

        cy.get(elements.botao_visualizar_primeiro_item).click();
        cy.url().should('include', '/form');
        cy.get(elements.input_nome_prestador).should('have.value', prestador_dados.nome)
        cy.get(elements.input_email_prestador).should('have.value', prestador_dados.email)
    });

    it('Deve ser possivel deletar um prestador com sucesso', () => {
        cy.cadastro_completo_prestador(prestador_dados)
        
        cy.get(elements.botao_deletar_primeiro_item).click();
        cy.get(elements.cliente_cadastrado(prestador_dados.nome))
        .should('not.exist')
    });
});
