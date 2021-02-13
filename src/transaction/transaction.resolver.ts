import { Resolver,Mutation, Args, Query } from "@nestjs/graphql";
import { TransactionType } from './transaction.type'
import { TransactionService } from './transaction.service'
import { TransactionPayload } from './transaction.payload'


@Resolver(of => TransactionType)
export class TransactionResolver{
    constructor(
        private transactionService : TransactionService 
    )  {};
    
    @Query(returns => TransactionType)
    findTransaction(
    @Args('id') id : number
        ){
            return this.transactionService.findTransaction(id)
        }

    @Query(returns => [TransactionType])
    allTransaction() {
        return this.transactionService.allTransaction()
    };    

    @Mutation(returns => TransactionType)
    createTransaction(
    @Args('createTransaction') createTransaction : TransactionPayload  
    ) {
        return this.transactionService.createTransaction(createTransaction)
    }

}