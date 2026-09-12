const agenda = [
    { nome: "Ana", telefone: "9999-9999", categoria: "Amigos" },
    { nome: "Bruno", telefone: "8888-8888", categoria: "Trabalho" }
];

function adicionarContato(nome, telefone, categoria) {
    agenda.push({ nome, telefone, categoria });
}

function removerContatoPorNome(nome) {
    const index = agenda.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) agenda.splice(index, 1);
}

function listarPorCategoria(categoria) {
    return agenda.filter(c => c.categoria.toLowerCase() === categoria.toLowerCase());
}

function filtrarValoresUnicos(numeros) {
    return [...new Set(numeros)];
}
