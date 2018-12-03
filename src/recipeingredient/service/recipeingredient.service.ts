import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeIngredient } from '../entity/recipeingredient.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class RecipeIngredientService {
  constructor(
    @InjectRepository(RecipeIngredient)
    private readonly recipeRepository: Repository<RecipeIngredient>,
  ) {}

  async getById(id: number): Promise<RecipeIngredient> {
    return await this.recipeRepository.findOne(id);
  }

  async save(recipe: RecipeIngredient): Promise<RecipeIngredient> {
    return await this.recipeRepository.save(recipe);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.recipeRepository.delete(id);
  }

  async findAll(): Promise<RecipeIngredient[]> {
    return await this.recipeRepository.find({
      relations: ['unit', 'ingredient'],
    });
  }
}
