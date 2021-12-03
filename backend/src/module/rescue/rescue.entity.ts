import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RescuerRescue } from '../rescuer_rescue.entity';

@Entity()
export class Rescue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  shipName: string;

  @Column({ nullable: false, type: 'date' })
  date: Date;

  @Column({ nullable: false })
  nbRescues: number;

  @OneToMany(() => RescuerRescue, (rescuerRescue) => rescuerRescue.rescue)
  rescuerRescue: RescuerRescue[];
}
