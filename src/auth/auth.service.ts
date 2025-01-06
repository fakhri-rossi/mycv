import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { SignInDto } from './dto/signIn.dto';
import * as bcrypt from 'bcrypt';
import { SignInPayload } from './dto/signInPayload.dto';
import { SignInResDto } from './dto/signInRes.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<SignInResDto> {
    const { email, password } = signInDto;
    const user = await this.userService.findByEmail(email);

    // Is Email registered?
    if (!user) throw new NotFoundException('Email is not registered');

    // Is password match?
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('Password incorrect!');

    const payload: SignInPayload = {
      sub: user._id.toString(),
      email: user.email,
    };
    console.log(payload);

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
