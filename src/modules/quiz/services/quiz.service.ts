import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz() {
    return await this.quizRepository.find();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOneOrFail({
      where: { id: id },
      relations: {
        questions: true,
      },
    });
  }

  async createNewQuiz(quiz: createQuizDTO): Promise<createQuizDTO & Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
