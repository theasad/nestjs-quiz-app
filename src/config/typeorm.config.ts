import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3360,
  username: 'root',
  password: 'secret',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
