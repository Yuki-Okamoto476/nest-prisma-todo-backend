import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() createTaskInput: CreateTaskInput) {
    return this.taskService.createTask(createTaskInput);
  }
}
