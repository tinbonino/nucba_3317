import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";

export const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
	},
});
