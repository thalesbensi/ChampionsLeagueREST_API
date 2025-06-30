import * as PlayerRepository from "../repositories/players-repository";
import {PlayerModel} from "../models/PlayerModel";


export const findAllPlayers = async () => {
    return await PlayerRepository.findAllPlayers();
};

export const findPlayerById = async (id:number) => {
   return await PlayerRepository.findPlayerById(id);
}

export const createPlayer = async (player:PlayerModel) => {
    return await PlayerRepository.createPlayer(player)
}