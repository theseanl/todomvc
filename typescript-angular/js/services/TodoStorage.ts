import {ITodoStorage} from '../interfaces/ITodoStorage';
import {TodoItem} from '../models/TodoItem'

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
export class TodoStorage implements ITodoStorage {

    STORAGE_ID = 'todos-angularjs-typescript';

    get(): TodoItem[] {
        return JSON.parse(window.localStorage.getItem(this.STORAGE_ID) || '[]');
    }

    put(todos: TodoItem[]) {
        window.localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
    }
}
