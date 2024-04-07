import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTaskInput } from './dto/updateTaskInput';
import { Task } from '@prisma/client';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/:userId')
  getTasks(@Param('userId') userId: string): Promise<Task[]> {
    return this.taskService.getTasks(userId);
  }

  @Post()
  createTask(@Body() createTaskInput: CreateTaskInput): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return this.taskService.updateTask(id, updateTaskInput);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
