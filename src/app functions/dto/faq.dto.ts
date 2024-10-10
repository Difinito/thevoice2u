import { IsNotEmpty, Length } from 'class-validator';

export class FaqDto {
  @IsNotEmpty({ message: 'The tag should not be empty' })
  answer: string;

  @IsNotEmpty()
  question: string;
}
