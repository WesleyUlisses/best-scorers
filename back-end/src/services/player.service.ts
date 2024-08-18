import PlayerRepository from "../entities/repositories/player-repository";
import Player from "../entities/player.entity";

export default class PlayerService {

    private playerRepository: PlayerRepository;

    constructor(playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async create(player: Player): Promise<string> {

        const reponse = await this.playerRepository.create(player);
        return this.playerRepository.create(player);
    }

    public async update(player: Player): Promise<Player> {
        return this.playerRepository.update(player);
    }

    public async updateGoals(id: string, goals: number): Promise<Player> {
        
        const player = await this.playerRepository.get(id);
        player.goals = goals;
        
        return this.playerRepository.update(player);
    }

    public async delete(id: string): Promise<void> {
        return this.playerRepository.delete(id);
    }

    public async get(id: string): Promise<Player> {
        return this.playerRepository.get(id);
    }

    public async getAll(): Promise<Player[]> {
        return this.playerRepository.getAll();
    }

    public async getBestScorer(): Promise<Player> {
        return this.playerRepository.getBestScorer();
    }

    public async getBestAssistant(): Promise<Player> {
        return this.playerRepository.getBestAssistant();
    }

    public async getScorerList(): Promise<Player[]> {
        return this.playerRepository.getScorerList();
    }

    public async getAssistantList(): Promise<Player[]> {
        return this.playerRepository.getAssistantList();
    }
}