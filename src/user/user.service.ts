import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity'
import { CreateUser } from './user.payload';

// @Injectable()
// export class CourseService{
//     constructor(
//         @InjectRepository(UserEntity) private userRepository : Repository<UserEntity>,
//     ) {}
    
//     async creatUser(createUser: CreateUser): Promise<UserEntity> {
//         const { firstname, lastname, email, password, phonenumber, github, role } = CreateUser;
//         const password = password
//     }
// }