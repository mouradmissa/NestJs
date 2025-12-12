import { Module } from '@nestjs/common';
import { MoteurService } from './moteur.service';
<<<<<<< HEAD
import { MoteurRepository } from './moteur.repository';
import { MoteurController } from './moteur.controller';

@Module({
  providers: [MoteurService,MoteurRepository],
  exports:[MoteurRepository],
=======
import { moteurRepository } from './moteur.repository';
import { MoteurController } from './moteur.controller';

@Module({
  imports : [MoteurModule],
  providers: [MoteurService,moteurRepository],
  exports: [moteurRepository],
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
  controllers: [MoteurController]
})
export class MoteurModule {}
