import { Injectable } from '@nestjs/common';

export type User = any;

// TODO: validate users against a call to DynamoDB instead of here
@Injectable()
export class UsersService {
  #nextUserId = 3;
  private users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async validateUser(username: string, password: string) {
    const foundUser = await this.findOne(username);
    return foundUser && foundUser.password === password;
  }

  async addUser(username: string, password: string): Promise<void> {
    this.users.push({ userId: this.#nextUserId, username, password });
    return;
  }
}
