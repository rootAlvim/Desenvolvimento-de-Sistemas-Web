function imc(peso, altura) {
    imc = peso / (altura ** 2);
    if (imc < 18.5) {
        console.log("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal")
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso")
    } else if (imc >= 30.0) {
        console.log("Obesidade")
    }
}

imc(95,1.70)