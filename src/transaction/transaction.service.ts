import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionEntity } from "./transaction.entity";
import { Repository } from "typeorm";
import { CreateTransaction } from './transaction.payload'

@Injectable()
export class TransactionService{
    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>
    ){};

    async findCourse(id:number): Promise<TransactionEntity>{
        return this.transactionRepository.findOne({id})
    };
    
    async allCourse(): Promise<TransactionEntity[]>{
        return this.transactionRepository.find()
    }

    async createTransaction(createTransaction : CreateTransaction) : Promise<TransactionEntity>{
        const { status } = createTransaction;
        const transaction = this.transactionRepository.create({
            status
        })
        return this.transactionRepository.save(transaction)
    };

}