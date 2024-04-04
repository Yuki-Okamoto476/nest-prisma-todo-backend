import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserInput {
  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string

  @MinLength(8)
  password: string
}