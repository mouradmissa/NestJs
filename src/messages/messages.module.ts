import { Module } from '@nestjs/common';
<<<<<<< HEAD

import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { MessagesService } from './messages.service';

@Module({
  imports:[TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers:[MessagesService]
})
export class MessagesModule {}
=======
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { MessagesService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule { }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
