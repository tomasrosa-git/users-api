import { UserI } from '../interfaces/user.interface';
import { BaseEntity, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { rolEntity } from './roles.entity';

@Entity('users')
export class UserEntity extends BaseEntity implements UserI {
  @PrimaryGeneratedColumn()
  id: number;
  @Index({unique:true})
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(()=> rolEntity, rol => rol.id)

  get permissionCodes() {
    return ['create-users', 'list-products'];
  }
}
