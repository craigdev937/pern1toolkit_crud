import { configureStore } from "@reduxjs/toolkit";
import { PlayerReducer } from "./PlayerSlice";

export const RootReducer = configureStore({
    reducer: {
        players: PlayerReducer
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;


