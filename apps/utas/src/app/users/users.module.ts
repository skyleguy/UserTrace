import { Module } from '@nestjs/common';
import { ServerDynamodbDataAccessModule } from '@user-trace/server/dynamodb/data-access';
import { UsersService } from './users.service';

@Module({
  imports: [ServerDynamodbDataAccessModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
