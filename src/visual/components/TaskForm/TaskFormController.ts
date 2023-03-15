import { Task } from "../../../business/core/task";

export enum actionTaskForm
{
    view = 'view',
    edit = 'edit'
}

export class TaskForm {

    task!: Task
    action = actionTaskForm.view

    get disable(): boolean { return this.action === actionTaskForm.view }
  
}