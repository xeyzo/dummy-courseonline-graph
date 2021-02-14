import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'
import { CourseEntity } from '../course/course.entity'

@Entity()
export class CourseReviewEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @OneToOne(() => UserEntity )
    @JoinColumn()
    @Field()
    userId:UserEntity;
    
    @ManyToOne(() => CourseEntity, course => course.reviewCourse)
    @Field(type => [CourseEntity], { nullable:true })
    courseId:CourseEntity;

    @Column({ type: 'numeric', precision: 5, scale: 0 })
    rate: number;
}