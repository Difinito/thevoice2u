import { IsNotEmpty, Length } from 'class-validator';

export class CounsellorsDto {
  @IsNotEmpty({ message: 'The tag should not be empty' })
  tag: string;

  @IsNotEmpty()
  followers: string[];

  @IsNotEmpty()
  about: string;

  @IsNotEmpty()
  userId: string;
}
