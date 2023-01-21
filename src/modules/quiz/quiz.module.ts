import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm/module/typeorm-ex.module';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { QuestionRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [
    TypeOrmExModule.forCustomRepository([QuizRepository, QuestionRepository]),
  ],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
