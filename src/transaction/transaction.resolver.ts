import { TransactionType } from './transaction.type'
import { Resolver,Query, Mutation, Args } from '@nestjs/graphql'
import { TransactionService } from './transaction.service'
import { CreateTransaction } from './transaction.payload';

@Resolver(of => TransactionType)
export class TransactionResolver{
    constructor(
        private transactionService : TransactionService 
    )  {};
    
    @Query(returns => TransactionType)
    transaction(
        @Args('id') id: number,
    ){
        return this.transactionService.findTransaction(id)
    };

    @Query(returns => [TransactionType])
    allTransaction() {
        return this.transactionService.allTransaction()
    };


    @Mutation(returns => TransactionType)
    createTransaction(
        @Args('createTransaction') createTransaction : CreateTransaction
    ){
        return this.transactionService.createTransaction(createTransaction)
    }
}