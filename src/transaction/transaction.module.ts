import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionEntity } from './transaction.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([TransactionEntity])
    ],
    providers: [
    ]
})
export class TransactionModule {}


// @Module({})
// export class TransactionModule {}