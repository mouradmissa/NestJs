import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './generateur.repository';
<<<<<<< HEAD
import { MoteurModule } from 'src/moteur/moteur.module';
import { GenerateurController } from './generateur.controller';

@Module({
  imports:[MoteurModule],
  providers: [GenerateurService,GenerateurRepository],
  exports:[GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule {}
=======
import { GenerateurController } from './generateur.controller';
import { MoteurModule } from 'src/moteur/moteur.module';

@Module({
  imports: [MoteurModule],
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurRepository],
  controllers: [GenerateurController]
})
export class GenerateurModule { }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
