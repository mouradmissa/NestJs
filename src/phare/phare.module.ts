import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareRepository } from './phare.repository';
<<<<<<< HEAD
import { GenerateurModule } from 'src/generateur/generateur.module';
import { PhareController } from './phare.controller';

@Module({
  imports:[GenerateurModule],
  providers: [PhareService,PhareRepository],
  exports:[PhareRepository],
=======
import { PhareController } from './phare.controller';
import { GenerateurModule } from 'src/generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  providers: [PhareService,PhareRepository],
  exports: [PhareRepository],
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
  controllers: [PhareController]
})
export class PhareModule {}
