import { Module } from '@nestjs/common';
import { DynamoService } from './services/dynamo.service';

@Module({
  controllers: [],
  providers: [DynamoService],
  exports: [DynamoService],
})
export class ServerDynamodbDataAccessModule {}
