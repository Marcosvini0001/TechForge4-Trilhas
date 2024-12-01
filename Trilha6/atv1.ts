/* FIZ PELO TYPESCRIPT PLAYGROUND */

class Carrinho {
    private itens: { nome: string; preco: number }[] = [];

    adicionarItem(nome: string, preco: number): void {
        this.itens.push({ nome, preco });
    }

    obterPrecoTotal(): number {
        return this.itens.reduce((soma, item) => soma + item.preco, 0);
    }

    obterItens(): { nome: string; preco: number }[] {
        return this.itens;
    }
}

class Pagamento {
    private status: string = "pendente";

    processarPagamento(valor: number): void {
        if (valor > 0) {
            this.status = "pago";
        } else {
            throw new Error("Não é possível processar o pagamento para um valor zero.");
        }
    }

    obterStatus(): string {
        return this.status;
    }
}

class Envio {
    private status: string = "não enviado";

    atualizarStatus(novoStatus: string, statusPagamento: string): void {
        if (statusPagamento === "pago") {
            this.status = novoStatus;
        } else {
            throw new Error("Não é possível atualizar o status de envio antes do pagamento.");
        }
    }

    obterStatus(): string {
        return this.status;
    }
}

class Pedido {
    private carrinho: Carrinho;
    private pagamento: Pagamento;
    private envio: Envio;

    constructor() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }

    adicionarItem(nome: string, preco: number): void {
        this.carrinho.adicionarItem(nome, preco);
    }

    processarPagamento(): void {
        this.pagamento.processarPagamento(this.carrinho.obterPrecoTotal());
    }

    atualizarStatusEnvio(status: string): void {
        this.envio.atualizarStatus(status, this.pagamento.obterStatus());
    }

    obterDetalhesPedido(): object {
        return {
            itens: this.carrinho.obterItens(),
            precoTotal: this.carrinho.obterPrecoTotal(),
            statusPagamento: this.pagamento.obterStatus(),
            statusEnvio: this.envio.obterStatus(),
        };
    }
}

const pedido = new Pedido();
pedido.adicionarItem("Produto 1", 50);
pedido.adicionarItem("Produto 2", 30);
pedido.processarPagamento();
pedido.atualizarStatusEnvio("enviado");
console.log(pedido.obterDetalhesPedido());
