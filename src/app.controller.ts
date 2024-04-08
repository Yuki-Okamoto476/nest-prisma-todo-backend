import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/signIn-auth.guard';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/signIn')
  async signIn(@Req() req: Request) {
    return this.authService.signIn(req.body);
  }
}
