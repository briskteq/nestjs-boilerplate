import { IsEnum, IsNotEmpty } from 'class-validator';
import { STATUS } from '../../../utilities/constants';

export class CreateUserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  email: string;

  userData: string;

  @IsEnum(STATUS)
  @IsNotEmpty()
  userStatus: number;
}
