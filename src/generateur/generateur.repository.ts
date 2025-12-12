import { Injectable } from "@nestjs/common";
<<<<<<< HEAD
import { MoteurRepository } from "src/moteur/moteur.repository";

@Injectable()
export class GenerateurRepository{
constructor(private readonly moteurRepository:MoteurRepository){}


generatePower(){
     this.moteurRepository.start()
    console.log("Generateur en fonctionnement")
}
=======
import { moteurRepository } from "src/moteur/moteur.repository";

@Injectable()
export class GenerateurRepository {

    constructor(private readonly moteurRepository: moteurRepository) { }

    generatePower() {
        this.moteurRepository.start();
        console.log("Générateur en fondtionnement...");
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}