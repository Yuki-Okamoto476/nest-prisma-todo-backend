import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class SignInResponse {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  user: User;
}
