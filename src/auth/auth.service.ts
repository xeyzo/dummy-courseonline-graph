import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { UserEntity } from '../user/user.entity'
import { CreateUser } from '../user/user.payload'

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(UserEntity) private userRepository : Repository<UserEntity>,
    ){}

} 