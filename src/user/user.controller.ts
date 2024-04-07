import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserInput } from './dto/createUserInput';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@ApiTags('users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserInput: CreateUserInput): Promise<User> {
    return this.userService.createUser(createUserInput);
  }
}
