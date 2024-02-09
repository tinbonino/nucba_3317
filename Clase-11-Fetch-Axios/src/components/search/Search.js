import React from "react";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { SearchFormStyled, InputStyled, ButtonStyled } from "./SearchStyles";

const Search = ({handleSubmit}) => {
  const [pokemon,setPokemon]=useState("");

  return (
    <SearchFormStyled
      onSubmit={(e) => {
        handleSubmit(e,pokemon);
        setPokemon("");
      }}
    >
      <InputStyled 
        value={pokemon}
        placeholder="Search"
        onChange={(e)=> setPokemon(e.target.value)}
        />

      <ButtonStyled type="submit">
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
