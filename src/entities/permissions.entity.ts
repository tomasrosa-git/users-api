import { BaseEntity, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { rolEntity } from './roles.entity';

@Entity('permissions')
export class permissionEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Index({unique:true})
    @Column()
    nombre: string;
    @OneToMany(()=>rolEntity,rol=>rol.permission)
}