import { ApiProperty } from "@nestjs/swagger";
import { Status } from "@prisma/client";
import { IsUUID } from "class-validator";

export class UpdateTaskInput {
  @IsUUID()
  @ApiProperty()
  id: string

  @ApiProperty()
  name?: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  dueDate?: string

  @ApiProperty()
  status?: Status
}