import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';
import { registerDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(data: registerDto) {
    const user = await this.userRepository.save(data);

    const { password, ...result } = user;

    return result;
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    console.log(username);
    return this.userRepository.findOne({
      where: { username },
    } as FindOneOptions<User>);
  }

  findAll() {
    return this.userRepository.find();
  }
}
