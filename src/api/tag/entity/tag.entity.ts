import { BaseEntity } from '../../base/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @Column({ length: 100, unique: true })
  name: string;
}
