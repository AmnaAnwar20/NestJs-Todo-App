import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    @Post()
    addTask(
        @Body('title') taskTitle: string, 
        @Body('description') taskDesc: string, 
        @Body('priority') taskPriority: number,
        ): any {
        const generatedId = this.todoService.insertTask(taskTitle, taskDesc, taskPriority);
        return {id: generatedId}
    }
    @Get()
    getAllTasks() {
        return this.todoService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') taskId: string) {
        return this.todoService.getSingleTask(taskId);
    }

    @Delete(':id') 
    removeTask(@Param('id')taskId: string) {
        this.todoService.deleteTask(taskId);
        return null;
    }
}


