import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rescuer } from './rescuer.entity';

interface IQuery {
  filter: string;
  skip: number;
  take: number;
}

@Injectable()
export class RescuerService {
  constructor(
    @InjectRepository(Rescuer)
    private readonly rescuerRepository: Repository<Rescuer>,
  ) {}

  findAll(query: IQuery): Promise<[Rescuer[], number]> {
    const QUERY = this.rescuerRepository
      .createQueryBuilder('rescuer')
      .where('CONCAT(rescuer.firstname, " ", rescuer.lastname) LIKE :filter', {
        filter: `%${query.filter}%`,
      })
      .leftJoinAndSelect('rescuer.rescuerRescue', 'rescuerRescue')
      .leftJoinAndSelect('rescuerRescue.rescue', 'rescue')
      .skip(query.skip)
      .take(query.take);

    return QUERY.getManyAndCount();
  }
}
