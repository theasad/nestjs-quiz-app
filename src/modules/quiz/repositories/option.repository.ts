import { CustomRepository } from 'src/typeorm/decorator/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Option } from '../entities/option.entity';

@CustomRepository(Option)
export class OptionRepository extends Repository<Option> {}
