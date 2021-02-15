import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserType } from './user.type'
import { UserService } from './user.service';
import { CreateUser } from './user.payload'

@Resolver( of => UserType)
export class UserResolver {
    constructor(
        private userService: UserService
    ){}

    @Query(returns => UserType)
    User() {
        return {
            id: 1,
            firstname: 'sandi',
            lastname: 'agung',
            email: 'schneidergw@yahoo.com',
            password: 'sandi123',
            phonenumber: '089652553045',
            github: 'xeyzo@github.com',
            role: 'Admin'
        }
    };
    
    @Mutation(returns => UserType)
    createUser(
        @Args('createUser') createUser : CreateUser
    ) {
        return this.userService.createUser(createUser)
    }   
}