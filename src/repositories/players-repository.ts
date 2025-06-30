import {PlayerModel} from "../models/PlayerModel";

const fakeDB: PlayerModel[] = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Cristiano Ronaldo" },
    { id: 3, name: "Neymar Jr" },
    { id: 4, name: "Kylian Mbappé" },
    { id: 5, name: "Erling Haaland" },
    { id: 6, name: "Kevin De Bruyne" },
    { id: 7, name: "Vinícius Júnior" },
    { id: 8, name: "Mohamed Salah" },
    { id: 9, name: "Luka Modrić" },
    { id: 10, name: "Robert Lewandowski" },
    { id: 11, name: "Harry Kane" },
    { id: 12, name: "Antoine Griezmann" },
    { id: 13, name: "Pedri" },
    { id: 14, name: "Jude Bellingham" },
    { id: 15, name: "Bernardo Silva" }
];


export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return fakeDB;
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return fakeDB.find(player => player.id === id);
}