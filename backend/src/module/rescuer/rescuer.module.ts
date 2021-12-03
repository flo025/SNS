import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RescuerService } from './rescuer.service';
import { RescuerController } from './rescuer.controller';
import { Rescuer } from './rescuer.entity';
import { RescuerRescue } from '../rescuer_rescue.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Rescuer, RescuerRescue])],
  controllers: [RescuerController],
  providers: [RescuerService],
  exports: [RescuerService, TypeOrmModule],
})
export class RescuerModule {}
