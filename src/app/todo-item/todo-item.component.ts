import {Component, OnInit, Input} from '@angular/core';
import { TodoItemData } from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // @Input
  @Input() private data: TodoItemData;


  // @Output


  // Constructor
  constructor(private todoService: TodoService) {
  }


  ngOnInit() {
  }

    get label(): String{
      return this.data.label;
    }

    itemDone(item: TodoItemData, done:boolean){
        this.todoService.setItemsDone(done,item);
        this.todoService.setNbRestant();
    }

    itemDelete(item: TodoItemData) {
        this.todoService.removeItems(item);
        this.todoService.setNbRestant();
    }

    editDone(item: TodoItemData, label:string){
      if (label.length > 0){
        this.todoService.setItemsLabel(label,item);
        this.todoService.setEditingItem(null);
      }

    }

    editItem(item : TodoItemData){
      if (!item.isDone){

        this.todoService.setEditingItem(item);
      }
    }

}
