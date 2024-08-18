import { Db, Collection, ObjectId } from 'mongodb';
import Player from '../entities/player.entity';
import PlayerRepository from '../entities/repositories/player-repository';
import MongoServer from '../config/mongo-server';

export default class PlayerRepositoryImpl implements PlayerRepository {

    private db: any;
    private collection: any;

    constructor(private mongoServer: MongoServer, private collectionName: string) { }

    public async initialize(): Promise<void> {
        await this.mongoServer.connect();
        this.db = this.mongoServer.getDb(); // Obtém a instância do banco de dados
        this.collection = this.db.collection(this.collectionName) as Collection<Player>; // Obtém a coleção de jogadores
    }

    public async create(player: Player): Promise<string> {
        try {

            const { _id, ...playerWithoutId } = player;

            const result = await this.collection.insertOne(playerWithoutId);

            return result.insertedId.toString();

        } catch (error: any) {
            throw new Error(`Failed to create player: ${error.message}`);
        }
    }

    public async update(player: Player): Promise<Player> {
        try {
            const id = new ObjectId(player._id);

            const { _id, ...updateFields } = player;

            const existingPlayer = await this.collection.findOne({ _id: id });
            if (!existingPlayer) {
                throw new Error("Player not found");
            }

            const result = await this.collection.updateOne(
                { _id: id },
                { $set: updateFields }
            );

            if (result.matchedCount === 0) {
                throw new Error("Failed to update player");
            }

            return { ...existingPlayer, ...updateFields };
        } catch (error: any) {
            throw new Error(`Failed to update player: ${error.message}`);
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            const result = await this.collection.deleteOne({ _id: id });

            if (result.deletedCount !== 1) {
                throw new Error('Failed to delete player');
            }

        } catch (error: any) {
            throw new Error(`Failed to delete player: ${error.message}`);
        }
    }

    public async updateGoals(id: string, additionalGoals: number): Promise<Player> {
        try {

            const objectId = new ObjectId(id);

            const player = await this.collection.findOne({ _id: objectId });

            if (!player) {
                throw new Error('Player not found');
            }

            const updatedGoals = player.goals + additionalGoals;

            const result = await this.collection.updateOne({ _id: objectId }, { $set: { goals: updatedGoals } });

            if (result.modifiedCount !== 1) {
                throw new Error('Failed to update goals');
            }

            const updatedPlayer = await this.get(id);

            return updatedPlayer;

        } catch (error: any) {
            throw new Error(`Failed to update goals: ${error.message}`);
        }
    }

    public async get(id: string): Promise<Player> {
        try {
            const objectId = new ObjectId(id);
            const player = await this.collection.findOne({ _id: objectId });

            if (!player) {
                throw new Error('Player not found');
            }

            return player;

        } catch (error: any) {
            throw new Error(`Failed to retrieve player: ${error.message}`);
        }
    }

    public async getAll(): Promise<Player[]> {
        try {
            return await this.collection.find().toArray();
        } catch (error: any) {
            throw new Error(`Failed to retrieve players: ${error.message}`);
        }
    }

    public async getBestScorer(): Promise<Player> {
        try {
            const player = await this.collection.find().sort({ goals: -1 }).limit(1).next();
            if (!player) {
                throw new Error('No best scorer found');
            }
            return player;
        } catch (error: any) {
            throw new Error(`Failed to retrieve best scorer: ${error.message}`);
        }
    }

    public async getBestAssistant(): Promise<Player> {
        try {
            const player = await this.collection.find().sort({ assists: -1 }).limit(1).next();
            if (!player) {
                throw new Error('No best assistant found');
            }
            return player;
        } catch (error: any) {
            throw new Error(`Failed to retrieve best assistant: ${error.message}`);
        }
    }

    public async getScorerList(): Promise<Player[]> {
        try {
            return await this.collection.find().sort({ goals: -1 }).toArray();
        } catch (error: any) {
            throw new Error(`Failed to retrieve scorer list: ${error.message}`);
        }
    }

    public async getAssistantList(): Promise<Player[]> {
        try {
            return await this.collection.find().sort({ assists: -1 }).toArray();
        } catch (error: any) {
            throw new Error(`Failed to retrieve assistant list: ${error.message}`);
        }
    }
}
