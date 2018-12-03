import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from '../entity/recipe.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async getById(id: number): Promise<Recipe> {
    return await this.recipeRepository.findOne(id);
  }

  async save(recipe: Recipe): Promise<Recipe> {
    return await this.recipeRepository.save(recipe);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.recipeRepository.delete(id);
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepository.find({
      relations: [
        'tags',
        'recipeIngredients',
        'recipeIngredients.unit',
        'recipeIngredients.ingredient',
        'recipeIngredients.ingredient.allergens',
      ],
    });
  }
}
