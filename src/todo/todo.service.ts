import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    
    private todoTasks: Todo[] = [];
    
    insertTask(title: string, desc: string, priority: number) {
        const taskId = Math.random().toString()
        const newTask = new Todo(taskId, title, desc, priority); 
        this.todoTasks.push(newTask);   
        return taskId;
    }

    getTasks() {
        return [...this.todoTasks];
    }

    getSingleTask(singleTaskId: string) {
        const task = this.todoTasks.find((singleTask) => singleTask.id === singleTaskId);
        if (!task) {
            throw new NotFoundException('Could not find task.');
        }
        return { ...task };
    }
}