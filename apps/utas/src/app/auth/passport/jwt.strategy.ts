import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
    });
  }

  /**
   * this method is called once the jwt token that was sent is validated and the below method can operate knowing
   * that at some point we actually did generate the token and give to a valid user
   * This method is useful to grab more info to stuff into the user object that jwt will put in the @Request() object
   */
  async validate(payload: any) {
    // TODO: grab more user information from DynamoDB to return here?
    return { userId: payload.sub, username: payload.username };
  }
}
