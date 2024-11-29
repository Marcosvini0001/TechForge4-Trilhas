interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)    
            .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }
}

const biblioteca = new BibliotecaGestao();

biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Realismo", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });

const livrosFantasia = biblioteca.filtrarPorGenero("Fantasia");
console.log(livrosFantasia);


const livrosGeorgeOrwell = biblioteca.buscarPorAutor("George Orwell");
console.log(livrosGeorgeOrwell);


const livrosDisponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();
console.log(livrosDisponiveisOrdenados);

/* FIZ PELO TYPESCRIPT PLAYGROUND */