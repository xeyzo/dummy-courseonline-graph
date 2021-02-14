import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'
import { CourseEntity } from '../course/course.entity'

@Entity()
export class CartEntity{
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

    @OneToMany(() => CourseEntity, course => course.cartCourse)
    @Field(type => CourseEntity, { nullable : true })
    courseId: CourseEntity[];
}