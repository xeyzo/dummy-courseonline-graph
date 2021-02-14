import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid';
import { UserEntity } from 'src/user/user.entity';

export enum Status{
    paid,
    pending,
    cancel
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

    @ManyToOne(() => UserEntity, user => user.userTransaction)
    userId: UserEntity;

    @Column()
    @Field(type => Status)
    status:Status;


}