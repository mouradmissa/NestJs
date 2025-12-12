import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { MoteurModule } from './moteur/moteur.module';
import { GenerateurModule } from './generateur/generateur.module';
import { PhareModule } from './phare/phare.module';
import { AudioModule } from './audio/audio.module';
import { VehiculeModule } from './vehicule/vehicule.module';
=======
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { MoteurModule } from './moteur/moteur.module';
import { AudioModule } from './audio/audio.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { GenerateurModule } from './generateur/generateur.module';
import { PhareModule } from './phare/phare.module';
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages/message.entity';
import { User } from './users/user.entity';

@Global()
@Module({
<<<<<<< HEAD
    imports: [
TypeOrmModule.forRoot({
type: 'mongodb',               
host: 'localhost', 
port: 27017, 
database: '4TWIN1',
entities: [Message,User], 
synchronize: true, 
}),
    
    MessagesModule, UsersModule, MoteurModule, GenerateurModule, PhareModule, AudioModule, VehiculeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
=======
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', // Déclare que c'est MongoDB
      host: 'localhost', // L'adresse de ton serveur MongoDB
      port: 27017, // Le port de MongoDB
      database: '4TWIN', // Nom de la base de données
      entities: [Message, User], // Liste des entités
      synchronize: true,
    }),
    UsersModule, MessagesModule, MoteurModule, AudioModule, VehiculeModule, GenerateurModule, PhareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
