import { Component, signal, computed } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tareas',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    NgFor,
  ],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss',
})
export class TareasComponent {
  tareas = signal<string[]>([]);
  nuevaTarea = '';

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.update((tareas) => [...tareas, this.nuevaTarea]);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(tarea: string) {
    this.tareas.update((tareas) => tareas.filter((t) => t !== tarea));
  }
}
