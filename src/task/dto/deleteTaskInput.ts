import { ApiProperty } from "@nestjs/swagger";

export class DeleteTaskInput {
  @ApiProperty()
  id: string
}