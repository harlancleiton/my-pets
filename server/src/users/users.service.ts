import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, DeepPartial } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneOrFail({ where: { email } });

    return user;
  }

  async create(data: DeepPartial<User>): Promise<User> {
    const user: User = await this.userRepository.create(data);

    const result = await this.userRepository.save(user);

    return result;
  }
}
