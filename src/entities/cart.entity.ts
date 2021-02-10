import { Entity, Column, Timestamp, InitializedRelationError } from 'typeorm';


@Entity()

export class Cart{
    
    @Column()
    userId : string;
    
    @Column()
    courseId : string;

}