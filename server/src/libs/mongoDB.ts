import { MongoDB } from '../infra/mongoDB';

const url = process.env.IS_OFFLINE ? process.env.MONGO_DB_URL_LOCAL : process.env.MONGO_DB_URL;
const dbName = process.env.DB_NAME || 'test';

export const getMongoDBinstance = () => {
    const mongoDB = new MongoDB(url, dbName);
    return mongoDB;
}