interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);

/* FIZ PELO TYPESCRIPT PLAYGROUND */