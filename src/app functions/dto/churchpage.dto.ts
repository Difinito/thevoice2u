import { IsNotEmpty, Length } from 'class-validator';

export class ChurchPageDto {
  @IsNotEmpty({ message: 'The pageName should not be empty' })
  pageName: string;

  @IsNotEmpty()
  aboutPage: string;

  @IsNotEmpty()
  backgroundImage: string;

  @IsNotEmpty()
  pageImage: string;

  @IsNotEmpty()
  desciples: string[];

  @IsNotEmpty()
  dailyReading: string;

  @IsNotEmpty()
  webstrings: string;

  @IsNotEmpty()
  published: boolean;

  @IsNotEmpty()
  pageverified: boolean;

  @IsNotEmpty()
  adminId: string;
}
