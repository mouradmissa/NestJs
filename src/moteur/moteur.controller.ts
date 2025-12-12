import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
<<<<<<< HEAD
    constructor(private readonly moteurService:MoteurService){}

@Get('/start')
startMoteur(){
    this.moteurService.startMoteur()
    return "Moteur Démarré"
}

@Get('/status')
statusMoteur(){
   return this.moteurService.getStatusMoteur()
    
}

=======

    constructor(private readonly moeturService: MoteurService) { }

    @Get('/start')
    startMoteur() {
        this.moeturService.startMoteur();
        return "Moteur Demarrer";
    }

    @Get('/status')
    statusMoteur() {
        this.moeturService.getStatus();
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
