import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './api/recipe/recipe.module';
import { IngredientModule } from './api/ingredient/ingredient.module';
import { TagModule } from './api/tag/tag.module';
import { AllergenModule } from './api/allergen/allergen.module';
import { UnitModule } from './api/unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [process.env.TYPEORM_ENTITIES],
      synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      logging: Boolean(process.env.TYPEORM_LOGGING),
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
      migrations: [process.env.TYPEORM_MIGRATIONS],
      cli: {
        migrationsDir: 'migration',
      },
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
  constructor() {}
}
