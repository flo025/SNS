import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rescue } from './rescue/rescue.entity';
import { Rescuer } from './rescuer/rescuer.entity';

@Entity()
export class RescuerRescue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rescuer, (rescue) => rescue.rescuerRescue)
  rescuer: Rescuer;

  @ManyToOne(() => Rescue, (rescue) => rescue.rescuerRescue)
  rescue: Rescue;
}
