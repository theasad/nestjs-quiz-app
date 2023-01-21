import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { skip } from 'rxjs';
import { createQuizDTO } from '../dto/create-quiz.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOneOrFail({
      where: { id: id },
      relations: {
        questions: {
          options: {},
        },
      },
    });
  }

  async createNewQuiz(quiz: createQuizDTO): Promise<createQuizDTO & Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
