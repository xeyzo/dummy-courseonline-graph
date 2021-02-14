import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { CartEntity } from  '../config/cart.entity'
import { TrainerEntity } from '../trainer/trainer.entity'
import { WhislistEntity } from '../config/wishlist.entity'
import { TransactionDetailEntity } from '../config/transaction-detail.entity'
import { CourseReviewEntity } from '../config/course-review.entity'

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
    trainerId: TrainerEntity;

    @ManyToOne(() => CartEntity, cart => cart.courseId)
    @Field(type => [CartEntity], {nullable : true})
    cartCourse: CartEntity;

    @ManyToOne(() => WhislistEntity, whislist => whislist.courseId)
    @Field(type => [WhislistEntity], {nullable : true})
    whislistCourse: WhislistEntity;

    @ManyToOne(() => TransactionDetailEntity, transactionDetail => transactionDetail.courseId)
    @Field(type => [TransactionDetailEntity], { nullable: true} )
    transactionCourse: TransactionDetailEntity;
    
    @OneToMany(() => CourseReviewEntity, courseReview => courseReview.courseId)
    @Field(type => CourseReviewEntity, { nullable : true })
    reviewCourse : CourseReviewEntity[];
}