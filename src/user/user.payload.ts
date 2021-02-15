import { InputType, Field, registerEnumType } from "@nestjs/graphql";
import { MinLength, MaxLength, IsString } from "class-validator";
import { Role } from './user.entity'
import { bcrypt } from 'bcrypt'

export class CreateUser{
    @Field()
    @IsString()
    firstname:string;
    
    @Field()
    @IsString()
    lastname:string;
    
    @Field()
    @IsString()
    email:string;
    
    @Field()
    @IsString()
    password:string;
    
    @Field()
    @IsString()
    phonenumber:string;
    
    @Field()
    @IsString()
    github:string;

    @Field(type => Role )
    role: Role;
}