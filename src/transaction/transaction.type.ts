import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int, ObjectType } from '@nestjs/graphql';
import { Status } from './transaction.entity'


@ObjectType()
export class TransactionType{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number;

    @PrimaryColumn()
    @Field(type => String, { nullable: false })
    invoiceNo: string;

    @Field(type => Int, { nullable:true })
    userId:number;

    @Field(type => Status)
    status:Status;


}