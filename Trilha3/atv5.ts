abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): number[] {
    return funcionarios.map(funcionario => funcionario.calcularSalarioComBonus());
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000),
    new Gerente("Ana", 6000),
    new Operario("Pedro", 2500)
];

const salariosComBonus = calcularSalarioComBonus(funcionarios);

salariosComBonus.forEach((salario, index) => {
    console.log(Funcionário ${index + 1}: Salário com bônus = R$ ${salario.toFixed(2)});
});

/* FIZ PELO TYPESCRIPT PLAYGROUND */