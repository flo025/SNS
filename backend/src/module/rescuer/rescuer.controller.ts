import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { Rescuer } from './rescuer.entity';
import { RescuerService } from './rescuer.service';

@Controller('rescuers')
export class RescuerController {
  constructor(private readonly rescuerService: RescuerService) {}

  @Get()
  findAll(
    @Query('filter', new DefaultValuePipe('')) filter: string,
    @Query('skip', new DefaultValuePipe(0)) skip: number,
    @Query('take', new DefaultValuePipe(10)) take: number,
  ): Promise<{ results: Rescuer[]; total: number }> {
    return this.rescuerService
      .findAll({ filter, skip, take })
      .then(([results, total]) => ({
        results: results.map((rescuer) => {
          rescuer.page = 'https://sauveteurdudunkerquois.fr/' + rescuer.page;
          rescuer.nbRescues = rescuer.rescuerRescue.length;
          rescuer.nbTotalRescues = rescuer.rescuerRescue.reduce(
            (total, { rescue }) => total + rescue.nbRescues,
            0,
          );
          return rescuer;
        }),
        total,
      }));
  }
}
