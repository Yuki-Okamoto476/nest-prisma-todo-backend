import { ApiProperty } from "@nestjs/swagger";
import { Status } from "@prisma/client";

export class UpdateTaskInput {
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