import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
<<<<<<< HEAD
     constructor(private readonly audioService:AudioService){}

@Get("/play")
playMusic(){
    this.audioService.playMusic()
    return "Musique en lecture"
}
=======

    constructor(private readonly audioService: AudioService) { }
    @Get("/play")
    playMusic() {
        this.audioService.playMusic();
        return "Musique en lecture";
    }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
