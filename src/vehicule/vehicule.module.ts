import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeRepository } from './vehicule.repository';
<<<<<<< HEAD
import { PhareModule } from 'src/phare/phare.module';
import { AudioModule } from 'src/audio/audio.module';
import { VehiculeController } from './vehicule.controller';

@Module({
  imports: [PhareModule,AudioModule],
  providers:[VehiculeService,VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule {}
=======
import { VehiculeController } from './vehicule.controller';
import { AudioModule } from 'src/audio/audio.module';
import { PhareModule } from 'src/phare/phare.module';

@Module({
  imports: [PhareModule, AudioModule],
  providers: [VehiculeService, VehiculeRepository],
  exports: [VehiculeRepository],
  controllers: [VehiculeController]
})
export class VehiculeModule { }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
