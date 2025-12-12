<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { AudioRepository } from "src/audio/audio.repository";
import { PhareRepository } from "src/phare/phare.repository";

@Injectable()
export class VehiculeRepository{
    constructor(private readonly phareRepository:PhareRepository,
       private readonly audioRepository:AudioRepository,
    ){}

    operate(){
        this.phareRepository.turnOn()
        this.audioRepository.playMusic()
        console.log("Vehicule en fonctionnement")
=======
import { PhareRepository } from "../phare/phare.repository";
import { AudioRepository } from "../audio/audio.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class VehiculeRepository {

    constructor(private readonly phareRepository: PhareRepository,
        private readonly audioRepository: AudioRepository
    ) { }

    operate() {
        this.phareRepository.turnOn();
        this.audioRepository.playMusic();
        console.log("vehicule en fonctinnement");
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
    }
}