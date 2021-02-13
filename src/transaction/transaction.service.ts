import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionEntity } from "./transaction.entity";
import { Repository } from "typeorm";
import { TransactionPayload } from './transaction.payload'
import { v4 as uuid } from 'uuid';

@Injectable()
export class TransactionService{
    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>
    ){};

    async findTransaction(id:number): Promise<TransactionEntity>{
        return this.transactionRepository.findOne({id})
    };
    
    async allTransaction(): Promise<TransactionEntity[]>{
        return this.transactionRepository.find()
    }

    async createTransaction(createTransaction : TransactionPayload) : Promise<TransactionEntity>{
        const { status } = createTransaction;
        const transaction = this.transactionRepository.create({
            status
        })
        return this.transactionRepository.save(transaction)
    };

}