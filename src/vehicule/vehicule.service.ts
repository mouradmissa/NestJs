import { Injectable } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';

@Injectable()
export class VehiculeService {
<<<<<<< HEAD
     constructor(private readonly vehiculeRepo:VehiculeRepository){}


operateVehicule(){
    this.vehiculeRepo.operate()
}
=======

    constructor(private readonly vehiculeRepository: VehiculeRepository) { }

    operate() {
        this.vehiculeRepository.operate();
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
