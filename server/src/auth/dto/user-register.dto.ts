import { IsString, IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';

@Expose()
export class UserRegister {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
