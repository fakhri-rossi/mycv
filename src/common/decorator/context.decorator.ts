import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthReq } from '../interface/authReq.interface';

export const Context = createParamDecorator<any, ExecutionContext, AuthReq>(
  (data: any, c: ExecutionContext): AuthReq => {
    return c.switchToHttp().getRequest<AuthReq>();
  },
);
