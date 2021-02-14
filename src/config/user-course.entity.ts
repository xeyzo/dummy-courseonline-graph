import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'


export class UserCourseEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @Column()
    @ManyToOne(() => UserEntity, user => user.courseReview)
    userId: UserEntity;

    usercourse relation


}