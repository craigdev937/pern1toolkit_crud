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
        [API.getOne.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getOne.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.getOne.fulfilled.type]: 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false;
            state.players = [action.payload]
        },
        [API.create.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.create.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.create.fulfilled.type]: 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false,
            state.players.push(action.payload)
        },
        [API.update.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.update.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.update.fulfilled.type]:
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false;
            const index = state.players.findIndex(
                (player) => player.id === action.payload.id);
            state.players[index] = {
                ...state.players[index],
                ...action.payload
            };
        },
        [API.delete.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.delete.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.delete.fulfilled.type]:
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false;
            return state.players.filter(
                (player) => player.id !== action.payload.id);
        },
    },
});

export const PlayerReducer = PlayerSlice.reducer;




