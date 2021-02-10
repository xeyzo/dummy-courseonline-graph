import { Entity, Column, Timestamp, InitializedRelationError } from 'typeorm';


@Entity()

export class Course {
    
    @Column()
    title : string;

    @Column()
    description : string;

    @Column()
    trainerId : string;

    @Column()
    price : number;
    
}
