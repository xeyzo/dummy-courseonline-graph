import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';

export enum Status{
    admin,
    user
}

registerEnumType(Status, {
    name: 'Status',
});


@Entity()
export class TransactionType{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number;

    @Field(type => uuid, { nullable: false })
    invoiceNo: string;

    @Field(type => Int, { nullable:true })
    userId:number;

    @Field(type => Status)
    status:Status;


}