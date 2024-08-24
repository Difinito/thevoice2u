import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class ProfileDto {
  @ApiProperty({
    description: 'The confirm password of the User',
    example: 'Rabi@1234',
  })
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  urlAvatar: string;

  @IsNotEmpty()
  church: string;

  @IsNotEmpty()
  aboutYourself: string;

  @IsNotEmpty()
  isOnline: boolean;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
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
  friends: [];

  @IsNotEmpty()
  userId: string;
}

// const profile = await this.prismService.profile.create({
//     data: {
//       aboutYourself: dto.aboutYourself,
//       isOnline: dto.isOnline,
//       number: dto.number,
//       friends: dto.friends,
//       church: dto.church,
//       country: dto.country,
//       relationship: dto.relationship,
//       backgroundImage: dto.backgroundImage,
//       username: dto.username,
//       gender: dto.gender,
//       urlAvatar: dto.urlAvatar,
//       verified: dto.verified,
//     user:{
//       connect: dto.userId
//     }
//     },
//   });
