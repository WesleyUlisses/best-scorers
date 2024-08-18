import Player from "../player.entity";

export default interface PlayerRepository {

    initialize(): Promise<void>;
    create(player: Player): Promise<string>;
    update(player: Player): Promise<Player>;
    updateGoals(id: string, goals: number): Promise<Player>;
    delete(id: string): Promise<void>;
    get(id: string): Promise<Player>;
    getAll(): Promise<Player[]>;
    getBestScorer(): Promise<Player>;
    getBestAssistant(): Promise<Player>;
    getScorerList(): Promise<Player[]>;
    getAssistantList(): Promise<Player[]>;

}