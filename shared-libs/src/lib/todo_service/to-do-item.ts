export interface ToDoItem {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

export type ToDoActionType = 'add' | 'remove' | 'enable' | 'disable';

export interface ToDoEvent {
    type: ToDoActionType;
    todo: ToDoItem;
}
