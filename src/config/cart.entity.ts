import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn,OneToMany } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'
import { CourseEntity } from '../course/course.entity'

export class CartEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @OneToOne(() => UserEntity)
    @JoinColumn()
    userId:UserEntity;

    @OneToMany(() => CourseEntity, course => course.courseId)
    courseId: CartEntity[];
}