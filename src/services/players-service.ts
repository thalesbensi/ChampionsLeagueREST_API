import * as PlayerRepository from "../repositories/players-repository";
import {PlayerModel} from "../models/PlayerModel";
import * as httpResponse from "../utils/HttpHandler"


export const findAllPlayers = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
};

export const findPlayerById = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
};

export const createPlayer = async (player: PlayerModel) => {
    let response = null;
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.createPlayer(player);
        response = httpResponse.created(player);
    } else response = await httpResponse.badRequest();
    return response;
};