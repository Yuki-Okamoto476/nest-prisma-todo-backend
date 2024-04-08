import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MaxLength, MinLength } from "class-validator";

export class SignInInput {
  @IsEmail()
  @MaxLength(255)
  @ApiProperty()
  email: string

  @MaxLength(255)
  @MinLength(8)
  @ApiProperty()
  password: string
}