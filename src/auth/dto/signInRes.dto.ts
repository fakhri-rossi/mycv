import { IsString } from 'class-validator';

export class SignInResDto {
  @IsString()
  access_token: string;
}
