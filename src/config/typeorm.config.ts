import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CourseEntity } from '../course/course.entity';
import { UserEntity } from '../user/user.entity'
import { TrainerEntity } from '../trainer/trainer.entity'
import { TransactionEntity } from '../transaction/transaction.entity'

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    entities: [ 
        CourseEntity,
        TrainerEntity,
        UserEntity,
        TransactionEntity

    ],
    synchronize: true,
}