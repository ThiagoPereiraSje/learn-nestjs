import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import { hash } from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

// Services who handle the business logic
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDTO) {
    // generate the password hash
    const password_hash = await hash(dto.password);

    try {
      // save the new user in the db
      const user = await this.prisma.user.create({
        data: { email: dto.email, hash: password_hash },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });

      // return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
