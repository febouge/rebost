import { Module } from '@nestjs/common';
import { RecipeIngredientController } from './controller/recipeingredient.controller';
import { RecipeIngredientService } from './service/recipeingredient.service';
import { RecipeIngredient } from './entity/recipeingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeIngredient])],
  controllers: [RecipeIngredientController],
  providers: [RecipeIngredientService],
})
export class RecipeIngredientModule {}
