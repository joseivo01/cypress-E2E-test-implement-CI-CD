module.exports = {
    nome_do_usuario: 'p:contains("John Doe")',

    botao_de_cadastrar_cliente: 'button.text-white:contains("Cadastrar Cliente")',
    botao_visualizar_primeiro_item: 'svg[stroke="currentColor"][xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 16 16"]',
    botao_deletar_primeiro_item: 'svg[stroke="currentColor"][viewBox="0 0 24 24"]',

    botao_cadastrar: 'button.text-sm:contains("Cadastrar")',

    cliente_cadastrado: (cliente) => {return `table > tbody > tr > td.text-sm:contains("${cliente}")`},

    botao_de_toggle: 'div.with-transition',
    texto_do_botao_de_toggle: 'div.with-transition ~ p.text-white',

    input_nome_prestador: 'input[placeholder="Nome do prestador"]',
    input_email_prestador: 'input[placeholder="exemplo@email.com"]',
    input_CPF_prestador: 'input[placeholder="111.111.111-22"]',
    input_telefone_prestador: 'input[placeholder="(00) 00000-0000"]',
    input_CEP_prestador: 'input[placeholder="00000-000"]',
    input_rua_prestador: 'input[placeholder="Nome da rua"]',
    input_numero_prestador: 'input[placeholder="000"]',
    input_complemento_prestador: 'input[placeholder="Complemento"]',
    input_nome_do_bairro_prestador: 'input[placeholder="Nome do Bairro"]',
    input_nome_da_cidade_prestador: 'input[placeholder="Nome da cidade"]',
    select_estado_prestador: 'p.font-semibold:contains("Estado")',
    select_observacao_prestador: 'textarea[placeholder="Observassão..."]',

    opcao: (estado) => {return `.absolute > .select-none:contains("${estado}")`}
}