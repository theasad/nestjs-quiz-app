import { CustomRepository } from 'src/typeorm/decorator/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@CustomRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
