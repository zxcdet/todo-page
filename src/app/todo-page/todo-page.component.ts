import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoInterface } from '../types/todo.interface';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  @Input() todo!: TodoInterface

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  public onDelate(): void {
    this.deleteEvent.emit(this.todo.id)
  }
}
