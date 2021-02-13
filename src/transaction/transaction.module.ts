import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionEntity } from './transaction.entity';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
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