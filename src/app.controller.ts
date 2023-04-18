import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged In!' }; //TODO: return JWT access token
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user; //TODO: require to have an Bearer Token, a valida one
  }
}
