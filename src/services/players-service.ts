import * as PlayerRepository from "../repositories/players-repository";


export const findAllPlayers = async () => {
    return await PlayerRepository.findAllPlayers();
};

export const findPlayerById = async (id:number) => {
   return await PlayerRepository.findPlayerById(id);
}