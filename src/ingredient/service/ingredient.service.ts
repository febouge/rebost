import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { BaseService } from '../../base/service/base.service';
import { Ingredient } from '../entity/ingredient.entity';

@Injectable()
export class IngredientService implements BaseService<Ingredient> {

  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async getById(id: number): Promise<Ingredient> {
    return await this.ingredientRepository.findOne(id);
  }

  async save(ingredient: Ingredient): Promise<Ingredient> {
    return await this.ingredientRepository.save(ingredient);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.ingredientRepository.delete(id);
  }

  async findAll(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }
}
