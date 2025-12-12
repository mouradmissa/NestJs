import { Injectable } from "@nestjs/common";

<<<<<<< HEAD
@Injectable()
export class MoteurRepository{

    private status:string="off"

    start(){
        this.status="on"
        console.log("Moteur démarré")
    }

    getStatus(){
      return this.status;
=======
Injectable()
export class moteurRepository {

    private status: string = "off";


    start() {
        this.status = "on";
        console.log("Moteur demarré");
    }

    getStatus() {
        return this.status;
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
    }
}