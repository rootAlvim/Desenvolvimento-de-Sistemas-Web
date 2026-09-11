class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    estaDisponivel() {
        return this.quantidade > 0;
    }
}

const p1 = new Produto("Teclado", 150, 10);
const p2 = new Produto("Headset", 300, 0);
const p3 = new Produto("Webcam", 250, 5);

p1.aplicarDesconto(10);
console.log(p1.preco);
console.log(p2.estaDisponivel());
console.log(p3.estaDisponivel()); 
