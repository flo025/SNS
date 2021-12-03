import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RescueService } from './rescue.service';
import { Rescue } from './rescue.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Rescue])],
  //controllers: [RescueController],
  providers: [RescueService],
  exports: [RescueService, TypeOrmModule],
})
export class RescueModule {}
