import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../todo.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list;
  constructor(private todoService: TodoService) {
    this.list = this.todoService.list;
  }

  ngOnInit() {
    this.todoService.subcribe(() => {
      this.list = this.todoService.list;
    })
  }
}
