import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTaskInput } from './dto/updateTaskInput';
import { DeleteTaskInput } from './dto/DeleteTaskInput';

@ApiTags('tasks')
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('tasks')
  getTasks(@Body() userId: string) {
    return this.taskService.getTasks(userId);
  }

  @Post('task')
  createTask(@Body() createTaskInput: CreateTaskInput) {
    return this.taskService.createTask(createTaskInput);
  }

  @Put('task/:id')
  updateTask(@Body() updateTaskInput: UpdateTaskInput) {
    return this.taskService.updateTask(updateTaskInput);
  }

  @Delete('task/:id')
  deleteTask(@Body() deleteTaskInput: DeleteTaskInput) {
    return this.taskService.deleteTask(deleteTaskInput);
  }
}
