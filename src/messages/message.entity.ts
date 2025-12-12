<<<<<<< HEAD
import { IsString } from "class-validator";
import { ObjectId } from "mongodb";
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Message{
    @AfterInsert()
logInsert() {
console.log("Message inserted with id: " + this.id); }
@AfterUpdate()
logUpdate() {
console.log("Message updated with id: " + this.id); }
@AfterRemove()
logRemove() {
console.log("Message removed with id: " + this.id); }

@ObjectIdColumn()
id:ObjectId


@Column()
content:string

@Column()
status:string

@Column({default:()=>'CURRENT_TIMESTAMP'})
date:Date
=======
import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Message {
    @ObjectIdColumn()
    id: number
    @Column()
    content: string
    @Column()
    status: string
    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    date: Date
>>>>>>> f9ae4f515eea5156ae491d6f19facc5ef5ff3d58
}