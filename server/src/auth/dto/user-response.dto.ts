import { IsString, IsEmail } from 'class-validator';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class UserResponse {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;
}
