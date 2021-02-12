import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
export class CourseType{
    
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number

    @Field()
    title: string;
    
    @Field()
    description : string;

    @Field(type => Int)
    price : number;

    @Field()
    trainerId : number;

}