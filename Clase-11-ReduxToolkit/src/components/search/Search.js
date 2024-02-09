import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../../helpers/pokemonActions";

import { ImSearch } from "react-icons/im";
import { SearchFormStyled, InputStyled, ButtonStyled } from "./SearchStyles";

const Search = () => {
	const [pokemon, setPokemon] = useState("");
	const dispatch = useDispatch();

	return (
		<SearchFormStyled
			onSubmit={(e) => {
				dispatch(fetchPokemon(e, pokemon));
				setPokemon("");
			}}
		>
			<InputStyled
				value={pokemon}
				placeholder="Search"
				onChange={(e) => setPokemon(e.target.value)}
			/>

			<ButtonStyled disabled={!pokemon} type="submit">
				<ImSearch size="20" color="#c1c0c9" />
			</ButtonStyled>
		</SearchFormStyled>
	);
};

export default Search;
