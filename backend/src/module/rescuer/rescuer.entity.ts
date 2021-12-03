import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rescue } from '../rescue/rescue.entity';

@Entity()
export class Rescuer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  page: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @OneToMany(() => Rescue, (rescue) => rescue.rescuers)
  rescues: Rescue[];
}
