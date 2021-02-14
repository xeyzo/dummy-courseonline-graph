import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { CourseEntity } from '../course/course.entity'
import { UserEntity } from '../user/user.entity'

export class CourseReviewEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @Column()
    @ManyToOne(() => UserEntity, user => user.courseReview)
    userId: UserEntity;

    @Column()
    @ManyToOne(() => CourseEntity, user => user.courseReview)
    courseId:CourseEntity;

    @Column({ type: 'numeric', precision: 5, scale: 0 })
    rate: number;
}