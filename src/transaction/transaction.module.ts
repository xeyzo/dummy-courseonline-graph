import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionResolver } from './transaction.resolver';
import { TransactionEntity } from './transaction.entity';
import { TransactionService } from './transaction.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([TransactionEntity])
    ],
    providers: [
        TransactionService,
        TransactionResolver
    ]
})
export class TransactionModule {}


// @Module({})
// export class TransactionModule {}