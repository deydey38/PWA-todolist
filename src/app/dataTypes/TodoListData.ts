import {TodoItemData} from './TodoItemData';

export interface TodoListData {
  label: string;
  items: TodoItemData[];
  editingItem : TodoItemData;
  nbRestant : number;
  allChecked: boolean;
}
