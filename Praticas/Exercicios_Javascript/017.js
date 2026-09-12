class GerenciadorEstoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome, preco, quantidade) {
        this.produtos.push({ nome, preco, quantidade });
    }

    calcularValorTotal() {
        return this.produtos.reduce((total, p) => total + (p.preco * p.quantidade), 0);
    }

    encontrarProdutoMaisCaro() {
        if (this.produtos.length === 0) return null;
        return this.produtos.reduce((maisCaro, p) => p.preco > maisCaro.preco ? p : maisCaro);
    }

    listarAbaixoDoMinimo(minimo) {
        return this.produtos.filter(p => p.quantidade < minimo);
    }
}
