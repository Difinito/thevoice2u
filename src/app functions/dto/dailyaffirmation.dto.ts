import { IsNotEmpty } from 'class-validator';

export class DailyAffirmationDto {
  @IsNotEmpty({ message: 'The description should not be empty' })
  topic: string;

  @IsNotEmpty()
  memorise: string;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  prayer: string;

  @IsNotEmpty()
  quote: string;

  @IsNotEmpty()
  dailyReading: string;

  @IsNotEmpty()
  propheticDeclaration: string;

  @IsNotEmpty()
  pageId: string;

  @IsNotEmpty()
  adminId: string;
}
