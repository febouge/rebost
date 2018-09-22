import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { TagModule } from './tag/tag.module';
import { AllergenModule } from './allergen/allergen.module';
import { UnitModule } from './unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), RecipeModule, IngredientModule, TagModule, AllergenModule, UnitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  
  constructor(private readonly connection: Connection) {}
}
