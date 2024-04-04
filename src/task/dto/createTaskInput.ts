import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskInput {
  @ApiProperty()
  name: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  dueDate?: string

  @ApiProperty()
  userId: string
}