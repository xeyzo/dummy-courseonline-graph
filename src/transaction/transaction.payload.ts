import { InputType, registerEnumType, Field } from "@nestjs/graphql";

export enum Status{
    admin,
    user
}

registerEnumType(Status, {
    name: 'Status',
});

@InputType()
export class CreateTransaction{
    
    @Field()
    status:Status;
}