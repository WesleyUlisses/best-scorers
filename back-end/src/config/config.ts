import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    mongo: {
        url: process.env.MONGO_URL || 'mongodb+srv://wesleyulisses0:3wGXqQgeF0VH1mwX@banco-baba-dutra.s1jvk.mongodb.net/?retryWrites=true&w=majority&appName=banco-baba-dutra',
        dbName: process.env.MONGO_DB_NAME || 'banco-baba-dutra',
        collectionName: process.env.MONGO_COLLECTION_NAME || 'players'
    }
};
