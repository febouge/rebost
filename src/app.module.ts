import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './api/recipe/recipe.module';
import { IngredientModule } from './api/ingredient/ingredient.module';
import { TagModule } from './api/tag/tag.module';
import { AllergenModule } from './api/allergen/allergen.module';
import { UnitModule } from './api/unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT,10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      migrationsTableName: 'custom_migration_table',
      migrations: ['./migration/*.ts'],
      cli: {
        migrationsDir: 'migration'
      }
    }),
    RecipeModule,
    IngredientModule,
    TagModule,
    AllergenModule,
    UnitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
