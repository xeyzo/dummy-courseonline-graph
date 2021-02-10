import { Entity, Column, Timestamp } from 'typeorm';


export class Wishlist{
    
    @Column()
    userId: string;

    @Column()
    courseId: string;

    @Column({ type: 'numeric', precision: 1, scale: 0 })
    rate: number;
}