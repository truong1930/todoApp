import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list = [];
  subject = new Subject();
  constructor() { }
  addTodo(id) {
    this.list.push(new Todo(id));
  }
  delete(id) {
    this.list = this.list.filter(elm => elm.id != id);
    this.subject.next();
  }
  change(id) {
    this.list = this.list.map(elm => {
      if (elm.id == id) {
        elm.isComplete = !elm.isComplete;
      }
      return elm;
    })
  }
  subcribe(callback) {
    return this.subject.subscribe(callback);
  }
}
