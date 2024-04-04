import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class DeleteTaskInput {
  @IsUUID()
  @ApiProperty()
  id: string
}