import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioRepository } from './audio.repository';
<<<<<<< HEAD
import { GenerateurModule } from 'src/generateur/generateur.module';
import { AudioController } from './audio.controller';

@Module({
  imports:[GenerateurModule],
  providers: [AudioService,AudioRepository],
  exports:[AudioRepository],
  controllers: [AudioController]

})
export class AudioModule {}
=======
import { AudioController } from './audio.controller';
import { GenerateurModule } from 'src/generateur/generateur.module';

@Module({
  imports: [GenerateurModule],
  providers: [AudioService, AudioRepository],
  exports: [AudioRepository],
  controllers: [AudioController]
})
export class AudioModule { }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
