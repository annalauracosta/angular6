import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appTitle = 'Gerenciador de Tarefas';
  novaTarefa = '';
  tarefas: { nome: string, concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  marcarComoConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
