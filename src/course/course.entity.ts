import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { CartEntity } from  '../config/cart.entity'
import { TrainerEntity } from '../trainer/trainer.entity'
import { CourseReviewEntity } from '../config/course-review.entity'
import { UserCourseEntity } from 'src/config/user-course.entity';

@Entity()
export class CourseEntity{
    
    @PrimaryGeneratedColumn({
        name : 'id',
        unsigned : true
    })
    @Field(type => ID, { nullable: false })
    id:number

    @Column()
    @Field()
    title: string;
    
    @Column()
    @Field()
    description : string;

    @Column()
    @Field(type => Int)
    price : number;

    @ManyToOne(() => TrainerEntity, trainer => trainer.course)
    trainerId: CartEntity[];
    
    @ManyToOne(() => CartEntity, cart => cart.courseId)
    courseId: CartEntity[];
    
    @OneToMany(() => CourseReviewEntity, review => review.courseId)
    courseReview : CourseReviewEntity[];
}