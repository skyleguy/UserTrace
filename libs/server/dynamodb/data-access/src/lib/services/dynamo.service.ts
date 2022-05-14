import { Injectable } from '@nestjs/common';
import { config, DynamoDB } from 'aws-sdk';

@Injectable()
export class DynamoService {
  #dynamo: DynamoDB;
  constructor() {
    config.update({ region: 'us-east-1' });
    this.#dynamo = new DynamoDB({ apiVersion: '2012-08-10' });
  }

  public async getUserByUserName(username: string) {
    const params = {
      Key: {
        username: { S: username },
      },
      TableName: 'user-trace-users',
    };
    const foundUser = await this.#dynamo
      .getItem(params, (err) => {
        if (err) {
          console.error(err);
        }
      })
      .promise();
    return {
      username: foundUser.Item.username.S,
      password: foundUser.Item.password.S,
    };
  }

  public addUser(username: string, password: string): void {
    const params = {
      Item: {
        username: {
          S: username,
        },
        password: {
          S: password,
        },
      },
      TableName: 'user-trace-users',
    };
    this.#dynamo
      .putItem(params, (err) => {
        if (err) {
          console.error(err);
        }
      })
      .promise();
  }
}
