import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity'
import { CreateUser } from './user.payload';
import { bcrypt } from 'bcrypt'


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity) private userRepository : Repository<UserEntity>,
    ) {}
    
    async createUser(createUser : CreateUser): Promise<UserEntity>{       
        const { firstname, lastname, email, password, phonenumber, github, role} = createUser;  
        const user = this.userRepository.create({
            firstname,
            lastname,
            email,
            password,
            phonenumber, 
            github,
            role
        })
        return this.userRepository.save(user)
    }
}