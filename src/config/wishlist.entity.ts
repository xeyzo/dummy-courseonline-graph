import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Field, registerEnumType, ID, Int } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity'  
import { CourseEntity } from '../course/course.entity'
@Entity()
export class WhislistEntity{
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => Int, { nullable : true })
    id : number

    @OneToOne(() => UserEntity)
    @JoinColumn()
    @Field(type => UserEntity, { nullable:true })
    userId:UserEntity;

    @OneToMany(() => CourseEntity, course => course.whislistCourse )
    @Field(type => WhislistEntity, { nullable:true })
    courseId:WhislistEntity[]; 
}