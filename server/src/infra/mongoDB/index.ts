import * as mongodb from 'mongodb';
import caBundle from 'raw-loader!../../rds-combined-ca-bundle.pem';

const MongoClient = mongodb.MongoClient;
export class MongoDB {
    protected readonly url: string;
    protected readonly dbName: string;

    constructor(url: string, dbName: string) {
        this.url = url;
        this.dbName = dbName;
    }

    protected async getDB(): Promise<mongodb.Db> {
        const dbName = this.dbName;
        const sslOption = {
          ssl: true,
          sslValidate: false,
          sslCA: [caBundle]
        }
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              ...process.env.IS_OFFLINE ? null : sslOption,
            }).then((client) => {
              const db = client.db(dbName);
              resolve(db)
            }).catch((err) => {
              console.log('error: ', err);
              reject(err)
            })  
        });
    };

    async find(collectionName: string) {
        const db = await this.getDB();
        const collection = db.collection(collectionName);
        return new Promise((resolve, reject) => {
          collection.find({}).toArray((err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
        })        
      }
}