interface Produto {
    nome: string;
    preco: number;
    quantidade: number;
    calcularValorTotalEmEstoque(): number;
}

class ProdutoEstoque implements Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const produto = new ProdutoEstoque("Pão", 10.5, 30);
console.log(produto.calcularValorTotalEmEstoque());

/* FIZ PELO TYPESCRIPT PLAYGROUND */