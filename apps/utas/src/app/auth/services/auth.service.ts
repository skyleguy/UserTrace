import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(user: any) {
    const isValidUser: boolean = await this.usersService.validateUser(
      user.username,
      user.password
    );
    if (isValidUser) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return new UnauthorizedException(
      null,
      'The user trying to sign in does not exist'
    ).getResponse();
  }
}
