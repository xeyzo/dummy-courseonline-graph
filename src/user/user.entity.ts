import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, registerEnumType, ID } from '@nestjs/graphql';
import { TransactionEntity } from '../transaction/transaction.entity'


export enum Role{
    admin,
    user
}

registerEnumType(Role, {
    name: 'Role',
});

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number
    
    @Column()
    @Field()
    firstname:string;
    
    @Column()
    @Field()
    lastname:string;
    
    @Column()
    @Field()
    email:string;
    
    @Column()
    @Field()
    password:string;
    
    @Column()
    @Field()
    phonenumber:string;
    
    @Column()
    @Field()
    github:string;
    
    @Column()
    @Field(type => Role)
    role:Role;

    @OneToMany(() => TransactionEntity, user => user.userId)
    userTransaction: TransactionEntity[]; 

}
