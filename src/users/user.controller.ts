import { Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    const isEmailRegistered = await this.userService.isEmailRegistered(
      createUserDto.email,
    );

    if (isEmailRegistered)
      throw new ConflictException('Email is already registered');
    else return this.userService.create(createUserDto);
  }

  @Get('/')
  async findALlUsers() {
    return this.userService.findAll();
  }
}
