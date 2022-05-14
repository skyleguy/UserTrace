import { Controller, Request, Post, Get } from '@nestjs/common';
import { Public } from './auth/constants';

import { AuthService } from './auth/services/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Public()
  @Get('health')
  health() {
    return 'Healthy!';
  }

  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Public()
  @Post('auth/signup')
  async signUp(@Request() req) {
    return this.usersService.addUser(req.body.username, req.body.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
