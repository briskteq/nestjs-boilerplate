import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  email: string;

  userData: string;

  @IsNotEmpty()
  userStatus: number;
}
