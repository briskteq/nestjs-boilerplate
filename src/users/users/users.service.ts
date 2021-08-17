import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  create(createUserDto: CreateUserDto): Promise<any> {
    return this.userRepository.createUser(createUserDto);
  }

  findAll() {
    return this.userRepository.getUsers();
  }

  findOne(id: string) {
    return this.userRepository.getUser(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.removeUser(id);
  }
}
