import { InputType, registerEnumType, Field } from "@nestjs/graphql";
import { Status } from './transaction.entity'



@InputType()
export class TransactionPayload{
    
    @Field()
    status:Status;

    @Field()
    invoiceNo:string;

}