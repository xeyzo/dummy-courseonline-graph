import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'

export class CourseReviewEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @Column()
    @Field(type => Int, { nullable:true })
    userId:number;

    @Column()
    @ManyToOne(() => UserEntity, user => user.courseReview)
    courseId:UserEntity;

    @Column({ type: 'numeric', precision: 5, scale: 0 })
    rate: number;
}