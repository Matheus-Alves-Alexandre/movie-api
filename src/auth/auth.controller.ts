import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { registerDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: registerDto) {
    return this.authService.register(data);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req: { user: User }) {
    return this.authService.login(req.user);
  }
}
