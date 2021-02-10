import { Entity, Column, Timestamp } from 'typeorm';


Entity()

export class TransactionDetail{

    @Column()
    transactionDetail : string;

    @Column()
    courseId : string;
}