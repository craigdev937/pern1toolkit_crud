import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        players: () => "PERN Redux-Toolkit!"
    },
});


