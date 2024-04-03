import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { UpdateTaskInput } from './dto/updateTaskInput';
import { DeleteTaskInput } from './dto/DeleteTaskInput';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  async createTask(data: CreateTaskInput): Promise<Task> {
    return await this.prismaService.task.create({
      data,
    });
  }

  async updateTask(data: UpdateTaskInput): Promise<Task> {
    return await this.prismaService.task.update({
      data,
      where: { id: data.id },
    });
  }

  async deleteTask(id: DeleteTaskInput): Promise<Task> {
    return await this.prismaService.task.delete({
      where: id,
    });
  }
}
