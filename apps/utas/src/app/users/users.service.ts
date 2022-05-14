import { Injectable } from '@nestjs/common';
import { DynamoService } from '@user-trace/server/dynamodb/data-access';

export type User = any;

// TODO: validate users against a call to DynamoDB instead of here
@Injectable()
export class UsersService {
  constructor(private readonly dynamoService: DynamoService) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.dynamoService.getUserByUserName(username);
  }

  async validateUser(username: string, password: string) {
    const foundUser = await this.findOne(username);
    return foundUser && foundUser.password === password;
  }

  async addUser(username: string, password: string): Promise<void> {
    return this.dynamoService.addUser(username, password);
  }
}
