import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config();


export function getTestingConnectionConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.TEST_DB_HOST,
    port: 5432,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_SCHEMA,
    entities: ['src/**/**.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
    migrationsTableName: 'custom_migration_table',
    migrations: ['./migration/*.ts'],
    cli: {
      migrationsDir: 'migration'
    }
  }
}
