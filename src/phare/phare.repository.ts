import { Injectable } from "@nestjs/common";
<<<<<<< HEAD
import { GenerateurRepository } from "src/generateur/generateur.repository";


@Injectable()
export class PhareRepository{
    constructor(private readonly generatorRepository:GenerateurRepository){}


turnOn(){
this.generatorRepository.generatePower()
console.log('Phare allumé')
    }}
=======
import { GenerateurRepository } from "../generateur/generateur.repository";

@Injectable()
export class PhareRepository {

    constructor(private readonly generateurRepository: GenerateurRepository) { }


    turnOn() {
        this.generateurRepository.generatePower();
        console.log("Phare allumé");
    }

}
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
