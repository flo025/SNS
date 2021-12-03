import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rescue } from './rescue.entity';

interface IQuery {
  filter: string;
  skip: number;
  take: number;
}

@Injectable()
export class RescueService {
  constructor(
    @InjectRepository(Rescue)
    private readonly rescueRepository: Repository<Rescue>,
  ) {}

  findAll(query: IQuery): Promise<[Rescue[], number]> {
    console.log(query);
    const QUERY = this.rescueRepository
      .createQueryBuilder('rescue')
      .where('CONCAT(rescue.firstname, " ", rescue.lastname) LIKE :filter', {
        filter: `%${query.filter}%`,
      })
      .skip(query.skip)
      .take(query.take);

    return QUERY.getManyAndCount();
  }
}
