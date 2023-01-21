import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/typeorm/module/typeorm-ex.module';
import { OptionController } from './controllers/option.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { OptionRepository } from './repositories/option.repository';
import { QuestionRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { OptionService } from './services/option.service';
import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmExModule.forCustomRepository([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
