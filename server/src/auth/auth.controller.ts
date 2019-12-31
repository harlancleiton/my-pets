import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  SerializeOptions,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
import { UserRegister } from './dto/user-register.dto';
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dto/user-response.dto';
import { CurrentUser } from './current-user.decorator';
import { JwtResponse } from './dto/jwt.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req): JwtResponse {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@CurrentUser() user: User): UserResponse {
    return plainToClass(UserResponse, user);
  }

  @Post('register')
  async store(@Body() body: UserRegister): Promise<UserResponse> {
    const user = await this.authService.registerUser(plainToClass(User, body));

    return plainToClass(UserResponse, user);
  }
}
