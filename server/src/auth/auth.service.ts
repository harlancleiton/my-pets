import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { JwtResponse } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && compareSync(pass, user.password)) return user;

    return null;
  }

  async registerUser(user: User): Promise<User> {
    return await this.usersService.create(user);
  }

  login(user: User): JwtResponse {
    const payload = { uid: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
