import { EventEmitter } from "./EventEmitter.js";

export class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  get totalCount() {
    return this.items.length;
  }

  getTodoItems() {
    return this.items;
  }

  onChange(listener) {
    this.addEventLister("change", listener);
    return () => {
      this.removeEventLister("change", listener);
    };
  }
  emitChange() {
    this.emit("change");
  }

  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }
}
