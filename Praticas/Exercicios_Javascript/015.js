class ContaBancaria {
    constructor(titular, saldo_Inicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) this.saldo += valor;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    extrato() {
        return `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

const conta1 = new ContaBancaria("Carlos", 500);
const conta2 = new ContaBancaria("Mariana", 200);

conta1.depositar(150);
conta1.sacar(100);

if (conta1.sacar(50)) {
    conta2.depositar(50);
}

console.log(conta1.extrato());
console.log(conta2.extrato());
