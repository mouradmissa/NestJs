import { Controller, Get } from '@nestjs/common';
import { PhareService } from './phare.service';

@Controller('phare')
export class PhareController {
<<<<<<< HEAD
        constructor(private readonly phareService:PhareService){}

@Get("/turnOn")
turnOnPhare(){
    this.phareService.turnOn();
    return "phare allumé"
}
=======

    constructor(private readonly phareService: PhareService) { }

    @Get("/turnOn")
    turnOnPhare() {
        this.phareService.turnOn();
        return "Phare Allumée";
    }

>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
