class Veiculo{
    constructor(nome){
        this.nome = nome;
    }
    mover(){
        console.log('${this.nome} está se movendo')
    };
} 

class Carro extends Veiculo{
     constructor(nome){
        super(nome);
    }
    mover(){
        console.log('${this.nome} está se movendo')
    }
}

class Bicicleta extends Veiculo{
    constructor(nome){
        super(nome);
    }
    mover(){
        console.log('${this.nome} está se movendo')
    }
}

const meuCarro = new Carro('Corsa');
const minhaBicicleta = new Bicicleta('Bike');

meuCarro.mover();
minhaBicicleta.mover();

/* FIZ PELO TYPESCRIPT PLAYGROUND */