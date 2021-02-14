import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, In, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { CourseEntity } from '../course/course.entity'

@Entity()
export class TrainerEntity{
    
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number


    @Column()
    @Field()
    fullname:string;
    
    @Column()
    @Field()
    email:string;
    
    @Column()
    @Field(type => Int)
    age:number;

    @OneToMany(() => CourseEntity, course => course.trainerId)
    course: CourseEntity[];
}