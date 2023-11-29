import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(data: registerDto) {
    return this.userService.register(data);
  }
}
