import { IsBoolean, IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(3, 255)
  text: string;

  @IsNotEmpty()
  question_id: number;

  @IsNotEmpty()
  @IsBoolean()
  is_correct: boolean;
}
