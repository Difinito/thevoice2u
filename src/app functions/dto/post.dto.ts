import { IsNotEmpty, Length } from 'class-validator';

export class PostDto {
  @IsNotEmpty({ message: 'The description should not be empty' })
  description: string;

  @IsNotEmpty()
  images: string[];

  @IsNotEmpty()
  published: boolean;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  category: string;

  // @IsNotEmpty()
  comments: string[];

  // @IsNotEmpty()
  likes: string[];
}
