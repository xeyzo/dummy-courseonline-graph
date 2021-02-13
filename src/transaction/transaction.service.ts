import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionEntity } from "./transaction.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid'
@Injectable()
export class TransactionService{
    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository : Repository<TransactionEntity>,
    ){}
    
    createTransaction(){
        
    }

}