function notas_lista(lista) {
    let soma = 0;
    let maior = 0;
    let menor = 100;
    for (let i = 0; i < (lista.length); i++) {
        soma = soma + lista[i];
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }

    }
    return {
        Media: soma / (lista.length),
        Maior: maior,
        Menor: menor
    };
}

const notas = [];
const min = 1;
const max = 10;
for (let i = 0; i < 5; i++) {
    notas[i] = Math.floor(Math.random() * (max - min + 1)) + min;;
}
for (let i = 0; i < 5; i++) {
    console.log(notas[i]);
}
console.log(notas_lista(notas))