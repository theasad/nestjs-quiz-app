import { CustomRepository } from 'src/typeorm/decorator/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {}
