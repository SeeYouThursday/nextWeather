import * as uuid from 'uuid';
import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

//https://github.com/vercel/examples/blob/main/solutions/aws-dynamodb/pages/index.js
export default async function handler() {
  //PUT
  //GET
  //POST
  //DELETE
}

console.log('user');
