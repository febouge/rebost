import { BaseEntity } from "base/entity/base.entity";
import { DeleteResult } from "../../../node_modules/typeorm";

export interface BaseController<T extends BaseEntity> {

  getById(id: number): Promise<T>;

  save(entity: T): Promise<T>;

  delete(id: number): Promise<DeleteResult>;

  findAll(): Promise<Array<T>>;

}
