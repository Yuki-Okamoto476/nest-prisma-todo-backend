import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput } from './dto/createTaskInput';
import { UpdateTaskInput } from './dto/updateTaskInput';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ErrorCode } from 'src/prismaErrorCode';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(userId: string): Promise<Task[]> {
    return await this.prismaService.task.findMany({
      where: { userId },
    });
  }

  async createTask(data: CreateTaskInput): Promise<Task> {
    return await this.prismaService.task.create({
      data,
    });
  }

  async updateTask(id: string, data: UpdateTaskInput): Promise<Task> {
    try {
      return await this.prismaService.task.update({
        data,
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === ErrorCode.NOT_FOUND_CODE
      ) {
        throw new NotFoundException(`Task (id:${id}) was not found`);
      }
      throw error;
    }
  }

  async deleteTask(id: string): Promise<Task> {
    try {
      return await this.prismaService.task.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === ErrorCode.NOT_FOUND_CODE
      ) {
        throw new NotFoundException(`Task (id:${id}) was not found`);
      }
      throw error;
    }
  }
}
