interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "produto um" });
loja.adicionarProduto({ codigo: 2, nome: "produto dois" });

const produtoEncontrado = loja.buscarProdutoPorCodigo(1);
console.log(produtoEncontrado); 

const produtoNaoEncontrado = loja.buscarProdutoPorCodigo(3);
console.log(produtoNaoEncontrado);

/* FIZ PELO TYPESCRIPT PLAYGROUND */