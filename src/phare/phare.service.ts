import { Injectable } from '@nestjs/common';
import { PhareRepository } from './phare.repository';

@Injectable()
export class PhareService {
<<<<<<< HEAD
     constructor(private readonly phareRepo:PhareRepository){}

    turnOn(){
this.phareRepo.turnOn()
=======

    constructor(private readonly phareRepository: PhareRepository) { }

    turnOn() {
        this.phareRepository.turnOn();
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
    }
}
