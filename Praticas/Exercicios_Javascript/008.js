function palindromo(palavra) {
    const texto = palavra.toLowerCase()
    const textoinvertido = texto.split("").reverse().join("");

    if (texto === textoinvertido) {
        console.log(textoinvertido, true)
    }
    else {
        console.log(textoinvertido, false)
    }
}

palindromo("Amor")