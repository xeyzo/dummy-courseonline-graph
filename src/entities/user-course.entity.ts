import { Entity, Column, Timestamp } from 'typeorm';


@Entity()
export class UserCourse {
    
    @Column()
    userId: string;

    @Column()
    courseId: string;

}
