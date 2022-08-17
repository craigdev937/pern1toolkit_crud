import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer, PlayerState } from "../models/Interfaces";
import { API } from "./FetchAPI";

const initialState: PlayerState = {
    players: [],
    loading: false,
    error: null
};

const PlayerSlice = createSlice({
    name: "players",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.fetchAll.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAll.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.fetchAll.fulfilled.type]: 
        (state, action: PayloadAction<IPlayer[]>) => {
            state.loading = false,
            state.players = [...action.payload]
        },
    },
});

export const PlayerReducer = PlayerSlice.reducer;




