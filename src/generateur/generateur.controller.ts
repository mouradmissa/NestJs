import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
<<<<<<< HEAD
     constructor(private readonly generateurService:GenerateurService){}

@Get("/generate")
generatePower(){
    this.generateurService.generatePower()
    return "Generateur en fonctionnement"

}
=======

    constructor(private readonly generateurService: GenerateurService) { }

    @Get("/generate")
    generatePower() {
        this.generateurService.generatePower();
        return "Generateur en fonctionnement"
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
