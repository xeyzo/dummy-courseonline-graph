import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';


export class CourseReviewEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @Column()
    @Field(type => Int, { nullable:true })
    userId:number;

    @Column()
    @Field(type => Int, { nullable:true })
    courseId:number;

    @Column({ type: 'numeric', precision: 5, scale: 0 })
    rate: number;
}