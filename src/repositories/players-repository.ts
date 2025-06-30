import {PlayerModel} from "../models/PlayerModel";

const fakeDB = [
    {
        id: 1,
        name: "David Beckham",
        club: "Retired",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 76,
            Shooting: 82,
            Passing: 90,
            Dribbling: 84,
            Defending: 70,
            Physical: 72,
        },
    },
    {
        id: 2,
        name: "Lionel Messi",
        club: "PSG",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 3,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 89,
            Defending: 35,
            Physical: 79,
        },
    },
    {
        id: 4,
        name: "Neymar Jr",
        club: "PSG",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 87,
            Dribbling: 94,
            Defending: 32,
            Physical: 58,
        },
    }
];

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return fakeDB;
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return fakeDB.find(player => player.id === id);
}

export const createPlayer = async (player:PlayerModel) => {
    fakeDB.push(player);
    return player;
}