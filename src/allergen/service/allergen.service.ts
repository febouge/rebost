import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { BaseService } from '../../base/service/base.service';
import { Allergen } from '../entity/allergen.entity';

@Injectable()
export class AllergenService implements BaseService<Allergen> {

  constructor(
    @InjectRepository(Allergen)
    private readonly allergenRepository: Repository<Allergen>,
  ) {}

  async getById(id: number): Promise<Allergen> {
    return await this.allergenRepository.findOne(id);
  }

  async save(allergen: Allergen): Promise<Allergen> {
    return await this.allergenRepository.save(allergen);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.allergenRepository.delete(id);
  }

  async findAll(): Promise<Allergen[]> {
    return await this.allergenRepository.find();
  }
}
