import { Expose } from 'class-transformer';

export class JwtResponse {
  @Expose()
  token: string;
}
