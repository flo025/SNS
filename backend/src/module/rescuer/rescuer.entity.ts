import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
