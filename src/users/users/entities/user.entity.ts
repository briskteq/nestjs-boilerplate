import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TABLES } from '../../utilities/constants';

@Entity(TABLES.USERS_TABLE)
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 100, type: 'varchar' })
  userName: string;

  @Column({ length: 255, type: 'varchar' })
  email: string;

  @Column({ type: 'json' })
  userData: any;

  @Column({ type: 'int' })
  userStatus: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
