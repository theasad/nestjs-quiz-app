import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';
import { QuestionRepository } from '../repositories/question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}
  async getAllQuestion() {
    return [];
  }

  async createQuestion(
    question: createQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [newQuestion, ...quiz.questions];
    await quiz.save();

    return newQuestion;
  }
}
