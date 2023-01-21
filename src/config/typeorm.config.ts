import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3360,
  username: 'root',
  password: 'secret',
  database: 'quiz',
  entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  logger: 'advanced-console',
  logging: ['error', 'log', 'warn', 'migration', 'query'],
};
