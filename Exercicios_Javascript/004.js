function idade(idade) {
    let Pode_Votar = idade >= 16;
    let Voto_Obrigatorio = idade >= 18 && idade <= 70;
    let Isento_Serviço_Militar = idade > 45;
    return {
        Pode_Votar,
        Voto_Obrigatorio,
        Isento_Serviço_Militar
    };
}

console.log(idade(19))