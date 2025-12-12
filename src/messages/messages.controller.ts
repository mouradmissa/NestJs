<<<<<<< HEAD
import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { MessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
import { ObjectId } from 'typeorm';

@Injectable()
@Controller('messages')
export class MessagesController {
    constructor(private readonly MessagesService:MessagesService){}

    
 @Get()
 listMessages(){
     // return{ "bonjour":"kk"}
    return this.MessagesService.findAll() }

 @Get("/:id")
 GetMessage(@Param("id") id:ObjectId){
     // console.log(id)
    // return {id}
     return this.MessagesService.findOneById(id) }

@Post()
CreateMessage(@Body() body){
    // console.log(body)
    // return {body}
     return this.MessagesService.create(body.content,body.status)
}


=======
import { Body, Controller, Get, Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { MessageDto } from './dto/MessageDto';
import { MessagesService } from './message.service';
@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Post('/add')
  CreateMessage(@Body() Body: MessageDto) {
    return this.messagesService.create(Body.content, Body.status)
  }

  @Get('/all')
  getAllMessages() {
    return this.messagesService.findAll();
  }
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}
