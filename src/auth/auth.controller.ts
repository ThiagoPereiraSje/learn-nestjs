import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

// Controllers who handle the requests
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Post request to /auth/signup
  @Post('signup')
  signup(@Body() dto: AuthDTO) {
    console.log({
      dto,
    });

    return this.authService.signup(dto);
  }

  // Post request to /auth/signin
  @Post('signin')
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }
}
