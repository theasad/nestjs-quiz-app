import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOption(@Body() createOption: CreateOptionDto): Promise<Option> {
    const question = await this.questionService.findQuestionById(
      createOption.question_id,
    );

    return await this.optionService.createOption(createOption, question);
  }
}
