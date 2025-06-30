import {Request, Response} from "express";
import * as PlayerService from "../services/players-service";

export const getAllPlayers = async (req: Request, res: Response) => {
    const data = await PlayerService.findAllPlayers();
    res.status(200).json(data);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = await PlayerService.findPlayerById(id);
    if (data) {
        res.status(200).json(data);
    } else
        return res.status(404).send('Not Found');
}

export const postPlayer = async (req: Request, res: Response) => {
    try {
        const player: PlayerModel = req.body;
        const result = await PlayerService.createPlayer(player);

        if (result) {
            return res.status(201).json({ message: "Player successfully created!" });
        } else {
            return res.status(400).json({ message: "Bad Request" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};





