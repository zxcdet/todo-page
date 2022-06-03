import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-todo',
  templateUrl: './header-todo.component.html',
  styleUrls: ['./header-todo.component.css']
})
export class HeaderTodoComponent implements OnInit {
  @Input() totalTodo!: number;
  @Input() completedTodo!: number;
  @Input() uncompletedTodo!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
