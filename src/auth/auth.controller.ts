import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// Controllers who handle the requests
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Post request to /auth/signin
  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  // Post request to /auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
