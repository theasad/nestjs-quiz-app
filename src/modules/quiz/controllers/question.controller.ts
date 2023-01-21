import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Get()
  async getAllQuestions() {
    return await this.questionService.getAllQuestion();
  }

  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: createQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quiz_id);
    return await this.questionService.createQuestion(question, quiz);
  }
}
