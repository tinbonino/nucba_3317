import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../data/initialPokemon";

const initialState = {
	data: initialPokemon,
	isLoading: false,
	error: false,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		isFetching: (estado) => {
			return {
				...estado,
				isLoading: true,
			};
		},
		success: (estado, action) => {
			return {
				...estado,
				data: action.payload,
				isLoading: false,
			};
		},
		isError: (estado) => {
			return {
				...estado,
				error: "Pokemon no encontrado, busca bien pa 👀",
				isLoading: false,
			};
		},
	},
});

export const { isFetching, success, isError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
