import { IsNotEmpty } from 'class-validator';

export class GroupDto {
  @IsNotEmpty({ message: 'The description should not be empty' })
  groupName: string;

  @IsNotEmpty()
  groupAbout: string;

  @IsNotEmpty()
  urlImage: string;

  @IsNotEmpty()
  familyMembers: string[];

  @IsNotEmpty()
  rules: string[];

  @IsNotEmpty()
  userId: string;
}
