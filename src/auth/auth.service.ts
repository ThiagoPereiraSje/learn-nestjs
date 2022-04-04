import { Injectable } from '@nestjs/common';

// Services who handle the business logic
@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'I have signed in' };
  }

  signup() {
    return { msg: 'I have signed up' };
  }
}
