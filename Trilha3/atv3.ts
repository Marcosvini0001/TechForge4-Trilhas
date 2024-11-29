abstract class Pagamento {
    constructor(protected nome: string) {}

    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(nome: string, private numeroCartao: string) {
        super(nome);
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(${this.nome} está processando pagamento no cartão ${this.numeroCartao});
        } else {
            console.log(Número do cartão ${this.numeroCartao} inválido.);
        }
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16 && !isNaN(Number(this.numeroCartao));
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(nome: string) {
        super(nome);
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(${this.nome} está gerando o boleto com o código: ${codigoBoleto});
    }

    private gerarCodigoBoleto(): string {
        return Math.random().toString(36).substring(2, 15); 
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => pagamento.processar());
}

const pagamentoCartao = new PagamentoCartao("Pagamento Cartão", "1234567812345678");
const pagamentoBoleto = new PagamentoBoleto("Pagamento Boleto");

processarPagamentos([pagamentoCartao, pagamentoBoleto]);

/* FIZ PELO TYPESCRIPT PLAYGROUND */