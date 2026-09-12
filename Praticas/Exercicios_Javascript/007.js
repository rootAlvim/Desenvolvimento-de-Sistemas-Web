function pedrapapeltesoura(j1, j2) {
    const regras = {
        pedra: "tesoura",
        papel: "pedra",
        tesoura: "papel"

    };

    if (regras[j1] === j2) {
        return "Jogador 1 venceu";
    }

    return "Jogador 2 venceu";
}
console.log(pedrapapeltesoura("pedra", "pedra"));
console.log(pedrapapeltesoura("pedra", "tesoura"));
console.log(pedrapapeltesoura("papel", "tesoura"));