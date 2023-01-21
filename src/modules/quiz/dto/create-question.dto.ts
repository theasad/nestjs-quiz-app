import { IsNotEmpty, Length } from 'class-validator';

export class createQuestionDto {
  @IsNotEmpty()
  @Length(3, 255)
  question: string;

  @IsNotEmpty()
  quiz_id: number;
}
