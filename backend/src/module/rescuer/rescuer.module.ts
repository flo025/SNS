import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RescuerService } from './rescuer.service';
import { RescuerController } from './rescuer.controller';
import { Rescuer } from './rescuer.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Rescuer])],
  controllers: [RescuerController],
  providers: [RescuerService],
  exports: [RescuerService, TypeOrmModule],
})
export class RescuerModule {}
