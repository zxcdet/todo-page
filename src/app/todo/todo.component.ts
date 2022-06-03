import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { TodoService } from '../services/todo.service';
import { TodoInterface } from '../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoList: TodoInterface[] = [];
  public totalLenght!: number;
  public page: number = 1;
  public form!: FormGroup;
  public totalTodo!: number;
  public completedTodo!: number;
  public isLoading: boolean = false;
  public uncompletedTodo!: number;

  constructor(
    private readonly todoService: TodoService,
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.fetch()
    this.initializeForm()
  }

  public deleteTodo(event: number): void {
    this.todoService.deleteById(event).subscribe(() => {
      this.todoList = this.todoList.filter((todo) => todo.id !== event)
      this.totalLenght = this.todoList.length
      this.totalTodo = this.todoList.length
      this.completedTodo = this.todoList.filter((value) => value.completed).length
      this.uncompletedTodo = this.todoList.filter((value) => !value.completed).length
    })
  }

  public OnSubmit(): void {
    if (!this.form.get('name')?.value) {
      return
    }
    else {
      for (let value of this.todoList) {
        value.id++
      }
      const todo: TodoInterface = {
        userId: 1,
        id: 1,
        title: this.form.get('name')?.value,
        completed: false
      }
      this.todoList.unshift(todo)
      this.totalTodo = this.todoList.length
      this.completedTodo = this.todoList.filter((value) => value.completed).length
      this.uncompletedTodo = this.todoList.filter((value) => !value.completed).length
      this.todoService.createTodo(todo).subscribe(() => {})
      this.form.get('name')?.reset()
    }
  }

  public get isDisable(): boolean | undefined {
    return this.form.get('name')?.invalid
  }

  private fetch(): void {
    this.isLoading = true
    this.todoService.getTodos().subscribe((todo) => {
      this.isLoading = false
      this.todoList = todo;
      this.totalTodo = this.todoList.length
      this.totalLenght = this.todoList.length
      this.completedTodo = this.todoList.filter((value) => value.completed).length
      this.uncompletedTodo = this.todoList.filter((value) => !value.completed).length
      console.log(this.completedTodo)
      console.log(this.uncompletedTodo)
    })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
    })
  }

}
