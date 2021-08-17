import { User } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from '../dto/update-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto) {
    createUserDto.id = uuidv4();
    await this.save(createUserDto);
    return createUserDto;
  }

  async getUsers() {
    return await this.find();
  }

  async getUser(id: string) {
    return await this.findOne({ where: { id } });
  }

  async removeUser(id: string) {
    return await this.delete(id);
  }

  async updateUser(id, updateUserDto: UpdateUserDto) {
    const existingData = await this.findOne({ where: { id } });
    const updateObj = {
      ...existingData,
      ...updateUserDto,
    };
    return await this.save(updateObj);
  }
}
