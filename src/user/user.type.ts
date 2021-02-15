import { Role } from '../user/user.entity'
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
export class UserType{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id : number;

    @Field()
    firstname:string;
    
    
    @Field()
    lastname:string;
    
    
    @Field()
    email:string;
    
    
    @Field()
    password:string;
    
    
    @Field()
    phonenumber:string;
    
    
    @Field()
    github:string;
    
    @Field(type => Role)
    role:Role;
    
}