import { Request } from 'express';
import { SignInPayload } from 'src/auth/dto/signInPayload.dto';

export interface AuthReq extends Request {
  user?: SignInPayload;
}
