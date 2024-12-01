/* FIZ PELO TYPESCRIPT PLAYGROUND */

abstract class TaskManager {
    protected tasks: Set<string> = new Set();

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Array.from(this.tasks);
    }

    protected isDuplicate(task: string): boolean {
        return this.tasks.has(task);
    }
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.log(`A tarefa "${task}" já existe no projeto.`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada ao projeto.`);
        }
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.log(`A tarefa "${task}" já foi adicionada às tarefas diárias.`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa diária "${task}" adicionada.`);
        }
    }
}

const project = new Project();
project.addTask("Implementar API");
project.addTask("Criar banco de dados");
project.addTask("Implementar API"); 
console.log("Tarefas do Projeto:", project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Fazer exercícios");
dailyTasks.addTask("Revisar código");
dailyTasks.addTask("Fazer exercícios"); 
console.log("Tarefas Diárias:", dailyTasks.listTasks());
