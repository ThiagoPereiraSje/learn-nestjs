import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// Services who handle the business logic
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin() {
    return { msg: 'I have signed in' };
  }

  signup() {
    return { msg: 'I have signed up' };
  }
}
