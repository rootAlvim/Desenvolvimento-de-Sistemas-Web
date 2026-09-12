function desconto(preco, quantidade) {
    let subtotal_inicial = preco * quantidade;
    if (subtotal_inicial > 100) {
        subtotal_final = subtotal_inicial * 0.95;
    } else if (subtotal_inicial > 300) {
        subtotal_final = subtotal_inicial * 0.90;
    }
    return `Sub-Total inicial: ${subtotal_inicial}, Sub-Total apos o desconto: ${subtotal_final}`;
}
console.log(desconto(500, 2))