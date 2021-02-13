import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
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
export class TransactionEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number;

    @PrimaryColumn()
    @Field(type => String, { nullable: false })
    invoiceNo: string;

    @Column({
        name: 'id_user',
        type: 'int'
    })
    @Field(type => Int, { nullable:true })
    userId:number;

    @Column()
    @Field(type => Status)
    status:Status;


}