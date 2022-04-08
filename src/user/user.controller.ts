import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard) // Controller Level
@Controller('users')
export class UserController {
  // GET /users/me
  // @UseGuards(JwtGuard) // Route Level
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
