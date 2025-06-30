import {Request, Response} from "express";
import * as PlayerService from "../services/players-service";

export const getAllPlayers = async (req: Request, res: Response) => {
    const data = await PlayerService.findAllPlayers();
    if (data.length > 0) {
        return res.status(200).json(data);
    } else {
        return res.status(404).send("Players not found");
    }
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = await PlayerService.findPlayerById(id);
    if (data) {
        res.status(200).json(data);
    } else
        return res.status(404).send('Not Found');
}




