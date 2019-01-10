import { BaseEntity } from '../entity/base.entity';
import { DeleteResult } from 'typeorm';

export interface BaseController<T extends BaseEntity> {
  getById(id: number): Promise<T>;

  save(entity: T): Promise<T>;

  delete(id: number): Promise<DeleteResult>;

  findAll(): Promise<Array<T>>;
}
