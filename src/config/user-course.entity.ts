import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';


export class UserCourseEntity{
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

}