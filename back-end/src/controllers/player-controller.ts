import { Request, Response } from "express";
import Player from "../entities/player.entity";
import PlayerService from "../services/player.service";
import PlayerRepositoryImpl from "../repositories/player.repository-impl";
import MongoServer from "../config/mongo-server";
import { config } from "../config/config";

export default class PlayerController {
    
    private playerService: PlayerService;
    private mongoServer: MongoServer;
    private playerRepository: PlayerRepositoryImpl;
    private collectionName: string = config.mongo.collectionName;

    constructor() {
        this.mongoServer = MongoServer.getInstance();
        this.playerRepository = new PlayerRepositoryImpl(this.mongoServer, this.collectionName);
        this.playerRepository.initialize();
        this.playerService = new PlayerService(this.playerRepository);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const player: Player = req.body;

        try {
            const result = await this.playerService.create(player);
            res.status(201).json({ id: result });
        } catch (error: any) {
            res.status(400).json({ message: `Failed to create player: ${error.message}` });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const player: Player = req.body;

        try {
            const result = await this.playerService.update(player);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to update player: ${error.message}` });
        }
    }

    public async updateGoals(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;
        const goals: number = req.body.goals;

        try {
            const result = await this.playerService.updateGoals(id, goals);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to update goals: ${error.message}` });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;

        try {
            await this.playerService.delete(id);
            res.status(204).json(); // 204 No Content é mais apropriado para deletar
        } catch (error: any) {
            res.status(400).json({ message: `Failed to delete player: ${error.message}` });
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;

        try {
            const result = await this.playerService.get(id);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(404).json({ message: `Player not found: ${error.message}` });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.playerService.getAll();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to retrieve players: ${error.message}` });
        }
    }

    public async getBestScorer(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.playerService.getBestScorer();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to retrieve best scorer: ${error.message}` });
        }
    }

    public async getBestAssistant(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.playerService.getBestAssistant();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to retrieve best assistant: ${error.message}` });
        }
    }

    public async getScorerList(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.playerService.getScorerList();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to retrieve scorer list: ${error.message}` });
        }
    }

    public async getAssistantList(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.playerService.getAssistantList();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ message: `Failed to retrieve assistant list: ${error.message}` });
        }
    }
}
