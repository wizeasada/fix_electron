import 'source-map-support/register';
import { getMongoDBinstance } from '@libs/mongoDB';

export const helloWorld = async () => {
  const mongoDB = getMongoDBinstance();
  const data = await mongoDB.find('test');
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
