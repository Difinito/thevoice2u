import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class ProfileDto {
  @ApiProperty({
    description: 'The confirm password of the User',
    example: 'Nigeria',
  })
  // @IsNotEmpty()
  country: string;

  @ApiProperty({
    description: 'The confirm password of the User',
    example: 'Orakle',
  })
  // @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The confirm password of the User',
    example: false,
  })
  // @IsNotEmpty()
  verified: boolean;

  @ApiProperty({
    description: 'The confirm password of the User',
    example: 'cm0f7fbjt0000tt5vggl5os01',
  })
  // @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  aboutYourself: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  isOnline: boolean;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  number: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  friends: string[];

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  church: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  relationship: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  backgroundImage: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  gender: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  // @IsNotEmpty()
  urlAvatar: string;
}
