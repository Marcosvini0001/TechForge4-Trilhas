interface Banco {
    titular: string;
    saldo: number;

    depositar(valor: number): void;
    sacar(valor: number): void;
}

class ContaBancaria implements Banco {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}.");
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}.");
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
}

const conta = new ContaBancaria("João Silva", 1000);
conta.depositar(500);
conta.sacar(200);
conta.sacar(1500);