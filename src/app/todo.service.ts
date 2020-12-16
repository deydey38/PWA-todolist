import { Injectable } from '@angular/core';
import {TodoListData} from './dataTypes/TodoListData';
import {Observable, BehaviorSubject} from 'rxjs';
import {TodoItemData} from './dataTypes/TodoItemData';

@Injectable()
export class TodoService {

  private todoListSubject = new BehaviorSubject<TodoListData>( {label: 'TodoList', items: [], editingItem: null, nbRestant: 0, allChecked: false} );

  constructor() { }

  getTodoListDataObservable(): Observable<TodoListData> {
    return this.todoListSubject.asObservable();
  }

  setItemsLabel(label: string, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label, isDone: I.isDone}) ),
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

  setItemsDone(isDone: boolean, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label: I.label, isDone}) ),
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

  changeItems(isDone: boolean) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => ({label: I.label, isDone}) ),
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });

  }

  appendItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: [...tdl.items, ...items],
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

  removeItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items.filter( I => items.indexOf(I) === -1 ),
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

  setEditingItem(item: TodoItemData){
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items,
      editingItem: item,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

  setNbRestant(){
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items,
      editingItem: tdl.editingItem,
      nbRestant: this.todoListSubject.value.items.filter(todo => !todo.isDone).length,
      allChecked: this.todoListSubject.value.items.filter(todo => !todo.isDone).length == 0 ? true : false
    });
  }

  deleteDoneItems(){
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items.filter( item => item.isDone == false ),
      editingItem: tdl.editingItem,
      nbRestant: tdl.nbRestant,
      allChecked: tdl.allChecked
    });
  }

}
