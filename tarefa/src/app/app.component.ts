export class AppComponent {
  appTitle = 'Gerenciador de Tarefas';
  novaTarefa = ''; 
  tarefas: { nome: string; concluida: boolean }[] = []; 
  mostrarLista = true;

  
  adicionarTarefa(): void {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false }); 
      this.novaTarefa = '';  
    }
  }

  
  marcarComoConcluida(tarefa: { nome: string; concluida: boolean }): void {
    tarefa.concluida = true;
  }

  
  toggleLista(): void {
    this.mostrarLista = !this.mostrarLista;
  }
}
