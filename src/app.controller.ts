import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.logIn(req.user);
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user; //TODO: require to have an Bearer Token, a valida one
  }
}
