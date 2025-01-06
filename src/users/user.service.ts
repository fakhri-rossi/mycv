import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async isEmailRegistered(email: string): Promise<boolean> {
    const user = await this.userModel
      .findOne({
        email: email,
      })
      .exec();
    if (user) return true;
    else return false;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({
        email: email,
      })
      .exec();
  }
}
