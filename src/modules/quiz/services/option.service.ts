import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { Question } from '../entities/question.entity';
import { OptionRepository } from '../repositories/option.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async createOption(
    option: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const newOption = await this.optionRepository.save({
      text: option.text,
      is_correct: option.is_correct,
    });

    question.options = [newOption, ...question.options];
    question.save();
    return newOption;
  }
}
