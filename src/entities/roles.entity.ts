
import { BaseEntity, Column, Entity, Index, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { permissionEntity } from './permissions.entity';
import { permission } from 'process';

@Entity('rol)')
export class rolEntity extends BaseEntity implements BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Index({unique:true})
    @Column()
    nombre: string;
    @Column()
    descripcion: string;

    @ManyToOne(()=> UserEntity, usuario => usuario.rol)
    users: UserEntity[]
    @ManyToMany(()=>permissionEntity, permission => permission.rol)
}