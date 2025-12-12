import { Controller, Get } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';

@Controller('vehicule')
export class VehiculeController {
<<<<<<< HEAD
        constructor(private readonly vehiculeService:VehiculeService){}


@Get('/operate')
opreateVehicule(){
    this.vehiculeService.operateVehicule()
    return 'vehicule en fonctionnement'
}
=======

    constructor(private readonly vehiculeService: VehiculeService) { }

    @Get("/operate")
    operateVEhicule() {
        this.vehiculeService.operate();
        return 'Vehicule en finctionnement'
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
