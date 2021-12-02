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
    console.log(query);
    const QUERY = this.rescuerRepository
      .createQueryBuilder('rescuer')
      .where('CONCAT(rescuer.firstname, " ", rescuer.lastname) LIKE :filter', {
        filter: `%${query.filter}%`,
      })
      .skip(query.skip)
      .take(query.take);

    return QUERY.getManyAndCount();
  }
}
