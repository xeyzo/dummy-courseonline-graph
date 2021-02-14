import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { CartEntity } from  '../config/cart.entity'
import { TrainerEntity } from '../trainer/trainer.entity'
import { WhislistEntity } from '../config/wishlist.entity'
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
}