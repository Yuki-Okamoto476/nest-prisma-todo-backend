import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTaskInput } from './dto/updateTaskInput';
import { Task } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:userId')
  getTasks(@Param('userId') userId: string): Promise<Task[]> {
    return this.taskService.getTasks(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() createTaskInput: CreateTaskInput): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return this.taskService.updateTask(id, updateTaskInput);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
