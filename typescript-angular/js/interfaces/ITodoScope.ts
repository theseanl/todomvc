import {TodoItem} from '../models/TodoItem'
import {TodoCtrl} from '../controllers/TodoCtrl';

// Marking as 'declare', in order to preserve property names across closure compilation.
export declare interface ITodoScope extends ng.IScope {
    todos: TodoItem[];
    newTodo: string;
    editedTodo: TodoItem;
    originalTodo: TodoItem;
    remainingCount: number;
    doneCount: number;
    allChecked: boolean;
    reverted: boolean;
    statusFilter: { completed?: boolean };
    location: ng.ILocationService;
    vm: TodoCtrl;
}
