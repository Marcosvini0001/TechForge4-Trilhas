class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    comer(): void {
        console.log("O animal está comendo e recuperando energia.");
        this.energia += 10; 
    }

    statusEnergia(): void {
        console.log(Nível de energia: ${this.energia});
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leão está caçando...");
        this.energia -= 5;  
        super.comer();      
        console.log("O leão caçou e agora está descansando.");
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está se alimentando...");
        super.comer(); 
    }
}

const leao = new Leao(50);  
const passaro = new Passaro(30); 

leao.statusEnergia();  
passaro.statusEnergia();  

leao.comer();

passaro.comer();

leao.statusEnergia();  
passaro.statusEnergia();

/* FIZ PELO TYPESCRIPT PLAYGROUND */