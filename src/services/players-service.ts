import * as PlayerRepository from "../repositories/players-repository";
import {PlayerModel} from "../models/PlayerModel";
import * as httpResponse from "../utils/HttpHandler"


export const findAllPlayers = async () => {
    const data = await PlayerRepository.findAllPlayers();
    return  httpResponse.ok(data);
};

export const findPlayerById = async (id: number) => {
    let response = null;
    const data = await PlayerRepository.findPlayerById(id);
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.notFound();
    }
    return response;
};

export const createPlayer = async (player: PlayerModel) => {
    let response = null;
    if (player) {
        await PlayerRepository.createPlayer(player);
        response = await httpResponse.created(player);
    } else response = await httpResponse.badRequest();
    return response;
};

export const updatePlayer = async (id: number, player: PlayerModel) => {
    const data = await PlayerRepository.findAndModify(id, player);
    if (!data) {
        return httpResponse.notFound();
    }
    return httpResponse.ok(data);
};


export const deletePlayer = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRepository.deletePlayer(id);
    if (isDeleted) {
        response = httpResponse.noContent()
    } else {
        response = await httpResponse.notFound()
    }
    return response;
}