import { Injectable } from "@nestjs/common";
import { GenerateurRepository } from "src/generateur/generateur.repository";

@Injectable()
<<<<<<< HEAD
export class AudioRepository{
constructor(private readonly generatorRepository:GenerateurRepository){}

playMusic(){
    this.generatorRepository.generatePower()
    console.log("Musique en lecture")
}
=======
export class AudioRepository {

    constructor(private readonly generateurRepository: GenerateurRepository) { }


    playMusic() {
        this.generateurRepository.generatePower();
        console.log("Musique en lecture...");
    }

>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}