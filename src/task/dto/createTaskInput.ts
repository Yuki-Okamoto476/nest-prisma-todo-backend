import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateTaskInput {
  @ApiProperty()
  name: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  dueDate?: string

  @IsUUID()
  @ApiProperty()
  userId: string
}