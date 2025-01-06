import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class SignInPayload {
  @IsString()
  sub: string;

  @IsString()
  email: string;
}
