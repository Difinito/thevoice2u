import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from '../../app.utils';

export class UserDto {
  @ApiProperty({
    description: 'The name of the User',
    example: 'Rabi Atiku',
  })
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    description: 'The email address of the User',
    example: 'rabiatiku@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Rabi@1234',
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWOR_RULE_MESSAGE,
  })
  password: string;

  @ApiProperty({
    description: 'The confirm password of the User',
    example: 'Rabi@1234',
  })
  @IsNotEmpty()
  country: string;

  // @IsNotEmpty()
  urlAvatar: string;

  @IsNotEmpty()
  school: string;

  @IsNotEmpty()
  church: string;

  @IsNotEmpty()
  aboutYourself: string;
  @IsNotEmpty()
  isOnline: boolean;
  @IsNotEmpty()
  number: number;
  @IsNotEmpty()
  friends: string[];
  // @IsNotEmpty()
  backgroundImage: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  relationship: string;
  @IsNotEmpty()
  verified: boolean;

  @IsNotEmpty()
  userId: string;
}
