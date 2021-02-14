import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'
import { CourseEntity } from '../course/course.entity'

@Entity()
export class UserCourseEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @ManyToOne(()=> UserEntity, user => user.courseUser)
    @Field(type => [UserEntity], { nullable:true })
    userId:UserEntity;

    @OneToOne(() => CourseEntity )
    @JoinColumn()
    @Field(type => CourseEntity, {nullable: true})
    courseId:CourseEntity;
}