import { Entity, Column, Timestamp } from 'typeorm';


@Entity()
export class Transaction{

    @Column()
    invoiceNo: string;

    @Column()
    userId: string;

    @Column({ default : false })
    status: boolean;
}