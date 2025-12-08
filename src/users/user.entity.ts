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
