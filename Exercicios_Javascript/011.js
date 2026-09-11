function validarSenha(senha) {
    const erros = [];

    if (senha.length < 8) {
        erros.push("mínimo de 8 caracteres");
    }

    let temMaiuscula = false;
    let temNumero = false;

    for (let i = 0; i < senha.length; i++) {
        const char = senha[i];

        if (char.trim() !== "" && !isNaN(char)) {
            temNumero = true;
        } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
            temMaiuscula = true;
        }
    }

    if (!temMaiuscula) {
        erros.push("ao menos uma letra maiúscula");
    }
    if (!temNumero) {
        erros.push("ao menos um número");
    }

    return erros;
}
