import { MongoClient, Db, ServerApiVersion } from 'mongodb';
import { config } from './config';

export default class MongoServer {

    private static instance: MongoServer;
    private client: MongoClient;
    private db: Db | null = null;

    private constructor() {
        this.client = new MongoClient(config.mongo.url, {
            serverApi: ServerApiVersion.v1,
            connectTimeoutMS: 3000,
            socketTimeoutMS: 3000,
        });
    }

    public static getInstance(): MongoServer {
        if (!MongoServer.instance) {
            MongoServer.instance = new MongoServer();
        }
        return MongoServer.instance;
    }

    public async connect(): Promise<void> {
        try {
            await this.client.connect();
            this.db = this.client.db(config.mongo.dbName);
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            throw error;
        }
    }

    public async disconnect(): Promise<void> {
        try {
            await this.client.close();
            this.db = null;
        } catch (error) {
            console.error('Failed to disconnect from MongoDB:', error);
            throw error;
        }
    }

    public getDb(): Db {
        if (!this.db) {
            throw new Error('Database connection is not established. Call connect() first.');
        }
        return this.db;
    }

}
