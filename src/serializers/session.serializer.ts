import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user.id, username: user.username });
  }

  async deserializeUser(
    payload: any,
    done: (err: Error, paylod: any) => void,
  ): Promise<any> {
    const user = await this.usersService.findById(payload.id);
    const { password, username, ...rest } = user;
    done(null, rest);
  }
}
