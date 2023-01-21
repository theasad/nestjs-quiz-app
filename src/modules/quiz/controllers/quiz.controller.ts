import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: createQuizDTO): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
