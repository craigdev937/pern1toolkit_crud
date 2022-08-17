import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPlayer } from "../models/Interfaces";

const URL = "https://pern1toolkit-deploy.herokuapp.com/api/players";
class FetchAPI {
    fetchAll = createAsyncThunk("players/fetchAll", 
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const players: IPlayer[] = await res.json();
        return [...players];
    });
};

export const API: FetchAPI = new FetchAPI();



// getOne = createAsyncThunk("player/getOne", 
//     async () => {
        
//     });