import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export function getTestingConnectionConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE.concat('_test'),
    entities: ['src/**/**.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
    migrationsTableName: 'custom_migration_table',
    migrations: ['./migration/*.ts'],
    cli: {
      migrationsDir: 'migration',
    },
  };
}
