import { BaseEntity } from '../../base/entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Unit extends BaseEntity {
  @Column({ length: 100, unique: true })
  name: string;
}
