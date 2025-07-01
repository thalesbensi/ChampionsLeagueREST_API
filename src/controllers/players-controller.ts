import {Request, Response} from "express";
import * as PlayerService from "../services/players-service";

export const getAllPlayers = async (req: Request, res: Response) => {
    const httpResponse = await PlayerService.findAllPlayers()
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await PlayerService.findPlayerById(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await PlayerService.createPlayer(bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await PlayerService.deletePlayer(id);
    res.status(httpResponse.statusCode).json(httpResponse.body)
}





