import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './generateur.repository';

@Injectable()
export class GenerateurService {
<<<<<<< HEAD
    constructor(private readonly generateurRepository:GenerateurRepository){}

generatePower(){
    this.generateurRepository.generatePower()
}
=======

    constructor(private readonly generateurRepository: GenerateurRepository) { }

    generatePower() {
        this.generateurRepository.generatePower();
    }

>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
