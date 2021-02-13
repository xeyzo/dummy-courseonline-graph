import { InputType, registerEnumType, Field } from "@nestjs/graphql";

export enum Status{
    admin,
    user
}

registerEnumType(Status, {
    name: 'Status',
});

@InputType()
export class TransactionPayload{
    
    @Field()
    status:Status;
}