import { Body, Controller, Get, Param, Post, Put, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ObjectId } from 'mongodb';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ------------------------------
  // Ajouter un utilisateur
  // ------------------------------
  @Post('add')
  create(@Body() data: { email: string; password: string }) {
    return this.usersService.create(data.email, data.password);
  }

  // ------------------------------
  // Récupérer tous les utilisateurs
  // ------------------------------
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  // ------------------------------
  // Récupérer un utilisateur par ID
  // ------------------------------
  @Get(':id')
  findOne(@Param('id') id: string) {
    const objectId = new ObjectId(id);
    return this.usersService.findOnebyId(objectId);
  }

  // ------------------------------
  // Activer un compte
  // ------------------------------
  @Put('activate')
  activate(@Body() data: { email: string; password: string }) {
    return this.usersService.activateAccount(data.email, data.password);
  }

  // ------------------------------
  // Récupérer un utilisateur par email
  // ------------------------------
  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findOnebyEmail(email);
  }

  // ------------------------------
  // Récupérer tous les utilisateurs actifs
  // ------------------------------
  @Get('active')
  findActive() {
    return this.usersService.findActive();
  }

  // ------------------------------
  // Supprimer un utilisateur
  // ------------------------------
  @Delete(':id')
  remove(@Param('id') id: string) {
    const objectId = new ObjectId(id);
    return this.usersService.remove(objectId);
  }

  // ------------------------------
  // Mettre à jour un utilisateur
  // ------------------------------
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: { email?: string; password?: string; role?: string }) {
    const objectId = new ObjectId(id);
    return this.usersService.update(objectId, data);
  }
}
