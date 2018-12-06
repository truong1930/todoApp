import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoService } from "../todo.service";
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() item;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }
  delete(id) {
    this.todoService.delete(id);
  }
  toggle(id){
    this.todoService.change(id);
  }
}
