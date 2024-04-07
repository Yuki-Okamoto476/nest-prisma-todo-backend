import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserInput } from './dto/createUserInput';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserInput: CreateUserInput): Promise<User> {
    return this.userService.createUser(createUserInput);
  }

  @Get('/:email')
  getUser(@Param('email') email: string): Promise<User> {
    return this.userService.getUser(email);
  }
}
