import { Entity, Column, Timestamp, InitializedRelationError } from 'typeorm';

@Entity()

export class CourseReview{
    
    @Column()
    userId : string;

    @Column()
    courseId : string;;

    @Column({ type: 'numeric', precision: 1, scale: 0 })
    rate: number;
}