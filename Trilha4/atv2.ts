interface Documento{
    titulo: string,
    conteudo: string
}

class Texto implements Documento{
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo
        this.conteudo = conteudo
    }
    exibir(){
        console.log(' "Título: [titulo], Conteúdo: [conteudo]".')
    }
}

/* FIZ PELO TYPESCRIPT PLAYGROUND */