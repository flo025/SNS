import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rescuer } from '../rescuer/rescuer.entity';

@Entity()
export class Rescue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  shipName: string;

  @Column({ nullable: false })
  date: Date;

  @OneToMany(() => Rescuer, (rescuer) => rescuer.rescues)
  rescuers: Rescuer[];
}
