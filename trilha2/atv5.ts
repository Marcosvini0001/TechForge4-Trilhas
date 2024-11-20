class Agenda {
    private compromissos: string[];
  
    constructor() {
      this.compromissos = [];
    }
  
    
    adicionarCompromisso(compromisso: string): void {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
    }
  
    
    listarCompromissos(): void {
      if (this.compromissos.length === 0) {
        console.log("Nenhum compromisso na agenda.");
      } else {
        console.log("Compromissos na agenda:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
  }
  

  const minhaAgenda = new Agenda();
  minhaAgenda.adicionarCompromisso("Reunião com a equipe às 10h");
  minhaAgenda.adicionarCompromisso("Consulta médica às 15h");
  minhaAgenda.listarCompromissos();
  