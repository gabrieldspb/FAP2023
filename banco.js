const Banco = {
    conta: "123456",
    saldo: 500,
    tipoConta: "Corrente",
    agencia: "7890",
    
    buscarSaldo: function() {
        return this.saldo;
    },
    
    deposito: function(valor) {
        this.saldo += valor;
        return this.saldo;
    },
    
    saque: function(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente.";
        } else {
            this.saldo -= valor;
            return this.saldo;
        }
    },
    
    numeroConta: function() {
        return this.conta;
    }
};

function buscarSaldo() {
    const saldo = Banco.buscarSaldo();
    document.getElementById("output").innerText = `Saldo atual: R$${saldo}`;
}

function realizarDeposito(valor) {
    const novoSaldo = Banco.deposito(valor);
    document.getElementById("output").innerText = `Depósito de R$${valor} realizado. Novo saldo: R$${novoSaldo}`;
}

function realizarSaque(valor) {
    const novoSaldo = Banco.saque(valor);
    if (typeof novoSaldo === "string") {
        document.getElementById("output").innerText = novoSaldo;
    } else {
        document.getElementById("output").innerText = `Saque de R$${valor} realizado. Novo saldo: R$${novoSaldo}`;
    }
}

function obterNumeroConta() {
    const numeroConta = Banco.numeroConta();
    document.getElementById("output").innerText = `Número da conta: ${numeroConta}`;
}
    
