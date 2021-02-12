import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity'
import { CreateCourse } from './course.payload';

@Injectable()
export class CourseService{
    constructor(
        @InjectRepository(CourseEntity) private courseRepository : Repository<CourseEntity>,
    ) {}
    
    async findCourse(id:number): Promise<CourseEntity>{
        return this.courseRepository.findOne({id})
    };
    
    async allCourse(): Promise<CourseEntity[]>{
        return this.courseRepository.find()
    }

    async createCourse(createCourse: CreateCourse): Promise<CourseEntity> {
        const { title, description, price} = createCourse;    
        const course = this.courseRepository.create({
            title,
            description,
            price
        })
        return this.courseRepository.save(course)
    };


}