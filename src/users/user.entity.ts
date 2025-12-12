<<<<<<< HEAD
import { Entity, ObjectIdColumn, ObjectId, Column, BeforeInsert, AfterUpdate, AfterInsert, BeforeRemove, AfterLoad } from 'typeorm';
import { IsString, IsEmail, IsBoolean } from "class-validator";
import { Logger } from '@nestjs/common';
@Entity()
export class User {
   
    
@ObjectIdColumn()
id: ObjectId;

@Column()
@IsEmail()
email: string;

@Column()
@IsString()
password: string;

@Column({ default: false })
@IsBoolean()
active: boolean;

@BeforeInsert()
logInsert() {
Logger.log('Creating User entity instance', 'UserEntity');
}
@AfterInsert()
logAfterInsert() {
Logger.log('User entity instance created', 'UserEntity');
}
@AfterUpdate()
logAfterUpdate() {
Logger.log('User entity instance updated', 'UserEntity');
}
@BeforeRemove()
logBeforeRemove() {
Logger.log(`Suppression de l'utilisateur avec l'id : ${this.id}`,
'UserEntity');
}
@AfterLoad()
logAfterLoad() {
Logger.log(`Utilisateur récupéré : ${this.id}`, 'UserEntity');
}
}
=======
import { Logger } from "@nestjs/common";
import { ObjectId } from "mongodb";
import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  BeforeInsert,
  BeforeRemove,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ObjectIdColumn
} from "typeorm";

@Entity()
export class User {
  private readonly logger = new Logger(User.name);

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'client' })
  role: string;

  @Column({ default: false })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.logger.log(`Avant insertion => email: ${this.email}`);
  }

  @AfterInsert()
  afterInsert() {
    this.logger.log(`User inséré => email: ${this.email}`);
  }

  @AfterUpdate()
  afterUpdate() {
    this.logger.log(`User mis à jour => email: ${this.email}`);
  }

  @BeforeRemove()
  beforeRemove() {
    this.logger.log(`Suppression du user => id: ${this.id}`);
  }

  @AfterLoad()
  afterLoad() {
    this.logger.log(`User récupéré depuis DB => email: ${this.email}`);
  }
}
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
