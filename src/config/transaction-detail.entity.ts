import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';

export class TransactionDetailEntity {
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @Column()
    @Field(type => Int, { nullable:true })
    transactionId:number;

    @Column()
    @Field(type => Int, { nullable:true })
    courseId:number;

}