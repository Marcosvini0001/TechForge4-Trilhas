interface Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
    marcarComoLido(): void;
}

class Biblioteca implements Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    public marcarComoLido(): void {
        this.lido = true;
    }
}

const livroL = new Biblioteca("Aventura", "Marcos", 200);
livroL.marcarComoLido();

console.log(livroL.lido);

/* FIZ PELO TYPESCRIPT PLAYGROUND */