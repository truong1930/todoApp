import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from "../todo.service";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output()
  addTodo = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
  handleSubmit(input: any): void {
    if (!input.value || typeof input.value !== 'string' || input.value === '') {
      alert("You must enter a character");
    } else {
      this.todoService.addTodo(input.value);
      input.value = '';
    }

  }
}
