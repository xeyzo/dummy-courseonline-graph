import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { TransactionEntity } from '../transaction/transaction.entity';
import { CourseEntity } from '../course/course.entity' 

@Entity()
export class TransactionDetailEntity {
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @OneToOne(() => TransactionEntity)
    @JoinColumn()
    @Field(type => TransactionEntity, { nullable:true })
    transactionId:TransactionEntity;

    @OneToMany(() => CourseEntity, course => course.transactionCourse)
    @Field(type => CourseEntity, { nullable : true })
    courseId: CourseEntity[];

}