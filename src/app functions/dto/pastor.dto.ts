import { IsNotEmpty } from 'class-validator';

export class PostorDto {
  @IsNotEmpty({ message: 'The description should not be empty' })
  pastorName: string;

  @IsNotEmpty()
  biography: string[];

  @IsNotEmpty()
  urlAvatar: string[];

  @IsNotEmpty()
  isApproved: boolean;

  @IsNotEmpty()
  verified: boolean;

  @IsNotEmpty()
  userId: string;
}

export class PostorQuoteDto {
  @IsNotEmpty()
  image: string[];

  @IsNotEmpty()
  pastorId: string;
}
