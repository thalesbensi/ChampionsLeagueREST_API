import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

router.get('/players', PlayerController.getAllPlayers);
router.get('/players/:id', PlayerController.getPlayerById);
router.post('/players', PlayerController.postPlayer);
router.patch('/players/:id', PlayerController.updatePlayer);
router.delete('/players/:id', PlayerController.deletePlayer);

/*router.get('/clubs', ClubController.getAllClubs);*/
export default router;
