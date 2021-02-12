import { InputType, Field } from "@nestjs/graphql";
import { MinLength, MaxLength, IsString } from "class-validator";


@InputType()
export class CreateCourse{
    
    @MinLength(5) 
    @IsString()  
    @Field()
    title : string;

    @MinLength(25)
    @IsString()
    @Field()
    description: string;


    @Field()
    price: number;

    @Field()
    trainerId: number;
}