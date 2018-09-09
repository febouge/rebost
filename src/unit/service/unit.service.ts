import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { BaseService } from '../../base/service/base.service';
import { Unit } from '../entity/unit.entity';

@Injectable()
export class UnitService implements BaseService<Unit> {

  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
  ) {}

  async getById(id: number): Promise<Unit> {
    return await this.unitRepository.findOne(id);
  }

  async save(unit: Unit): Promise<Unit> {
    return await this.unitRepository.save(unit);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.unitRepository.delete(id);
  }

  async findAll(): Promise<Unit[]> {
    return await this.unitRepository.find();
  }
}
