function calculadora(numero1, numero2, operador) {
    if (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/") {
        console.log("Operador inválido");
    }
    switch (operador) {
        case "+":
            console.log(`A soma de ${numero1} + ${numero2} e igual a ${numero1 + numero2}`)
            break;
        case "-":
            break;
            console.log(`A subtração de ${numero1} - ${numero2} e igual a ${numero1 - numero2}`)
        case "*":
            console.log(`A multiplicação de ${numero1} * ${numero2} e igual a ${numero1 * numero2}`)
            break;
        case "/":
            if (numero2 === 0) {
                console.log("Não e possivel realizar divisão por 0")
            } else {
                console.log(`A divisão de ${numero1} / ${numero2} e igual a ${numero1 / numero2}`)

            }

    }
}

calculadora(2, 2, "/");