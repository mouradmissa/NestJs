import { Injectable } from '@nestjs/common';
import { AudioRepository } from './audio.repository';

@Injectable()
export class AudioService {
<<<<<<< HEAD
    constructor(private readonly audioRepository:AudioRepository){}

    playMusic(){
        this.audioRepository.playMusic()
    }
=======

    constructor(private readonly audioRepository: AudioRepository) { }

    playMusic() {
        this.audioRepository.playMusic();
    }

>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
