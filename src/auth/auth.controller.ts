import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

// Controllers who handle the requests
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Post request to /auth/signup
  @Post('signup')
  signup(@Body(new ValidationPipe()) dto: AuthDTO) {
    console.log({
      dto,
    });

    return this.authService.signup();
  }

  // Post request to /auth/signin
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
