const estoque = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Monitor", preco: 1200, quantidade: 2 }
];

function calcularValorTotal(produtos) {
    return produtos.reduce((total, p) => total + (p.preco * p.quantidade), 0);
}

function encontrarProdutoMaisCaro(produtos) {
    return produtos.reduce((maisCaro, p) => p.preco > maisCaro.preco ? p : maisCaro);
}

function listarAbaixoDoMinimo(produtos, minimo) {
    return produtos.filter(p => p.quantidade < minimo);
}
