import { CourseType } from './course.type'
import { Resolver,Query, Mutation, Args } from '@nestjs/graphql'
import { CourseService } from './course.service'
import { CreateCourse } from './course.payload';

@Resolver(of => CourseType)
export class CourseResolver{  
    constructor(
        private courseService : CourseService 
    )  {};

    @Query(returns => CourseType)
    course(
        @Args('id') id: number,
    ){
        return this.courseService.findCourse(id)
    };

    @Query(returns => [CourseType])
    allCourse() {
        return this.courseService.allCourse()
    };

    @Mutation(returns => CourseType)
    createCourse (
        @Args('createCourse') createCourse : CreateCourse
    ){
        return this.courseService.createCourse(createCourse)
    };

}