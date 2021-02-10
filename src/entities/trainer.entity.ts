import { Entity, Column, Timestamp, InitializedRelationError } from 'typeorm';


Entity()

export class Trainer{
    
    @Column()
    fullname : string;

    @Column()
    email : string;

    @Column()
    age : number;
    
}