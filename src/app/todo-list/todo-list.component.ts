import {Component, OnInit} from '@angular/core';
import {TodoListData} from '../dataTypes/TodoListData';
import {TodoItemData} from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    private todoList: TodoListData;
    private filter:String;

    constructor(private todoService: TodoService) {
        todoService.getTodoListDataObservable().subscribe( tdl => this.todoList = tdl );
    }

    ngOnInit() {
    }

    get label(): string {
        return this.todoList.label;
    }

    get nbRestant(): number {
        return this.todoList.nbRestant;
    }

    get allChecked(): boolean {
        return this.todoList.allChecked;
    }

    get items(): TodoItemData[] {
      if(this.filter=='done'){
          return this.todoList.items.filter( I => I.isDone == true );
      }else if(this.filter=='notDone'){
        return this.todoList.items.filter( I => I.isDone == false  );
      }else{
        return this.todoList.items;
      }
    }

    get editingItem() {
      return this.todoList.editingItem;
    }

    appendItem(label: string){
        if (label.length > 0){
          this.todoService.appendItems({
              label,
              isDone:false
          });
          this.todoService.setNbRestant();
        }
    }

    itemDone(item: TodoItemData, done:boolean){
        this.todoService.setItemsDone(done,item);
        this.todoService.setNbRestant();
    }

    itemLabel(item: TodoItemData, label:string){
        this.todoService.setItemsLabel(label,item);
    }

    itemDelete(item: TodoItemData) {
        this.todoService.removeItems(item);
        this.todoService.setNbRestant();
    }

    changeFilter(filter: string){
        console.log("filter : " + filter)
        this.filter = filter;
    }

    deleteDoneItems(){
      this.todoService.deleteDoneItems();
    }

    checkAll(){
      console.log("check all");
      this.todoService.changeItems(!this.allChecked);
      this.todoService.setNbRestant();
    }
}
