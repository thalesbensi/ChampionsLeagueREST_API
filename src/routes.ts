import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

router.get('/players', PlayerController.getAllPlayers);
router.post('/players', PlayerController.postPlayer);
router.delete('/players', PlayerController.deletePlayer)

router.get('/players/:id', PlayerController.getPlayerById);



export default router;
