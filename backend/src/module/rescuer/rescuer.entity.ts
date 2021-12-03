import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RescuerRescue } from '../rescuer_rescue.entity';

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

  nbRescues: number;
  nbTotalRescues: number;

  @OneToMany(() => RescuerRescue, (rescuerRescue) => rescuerRescue.rescuer)
  rescuerRescue: RescuerRescue[];
}
