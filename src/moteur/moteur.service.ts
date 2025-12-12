import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { MoteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
    constructor(private readonly moteurRepository:MoteurRepository){}


startMoteur(){
    this.moteurRepository.start()
}
getStatusMoteur(){
    this.moteurRepository.getStatus()
}

}

=======
import { moteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
    constructor(private readonly MoteurRepository: moteurRepository) { }

    startMoteur() {
        this.MoteurRepository.start();
    }

    getStatus() {
        this.MoteurRepository.getStatus();
    }
}
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
