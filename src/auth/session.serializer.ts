import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user.id });
  }
  deserializeUser(
    payload: any,
    done: (err: Error, paylod: string) => void,
  ): any {
    // const user = this.userService.findById(payload.id);
    // done(null, user);
    done(null, payload);
  }
}
