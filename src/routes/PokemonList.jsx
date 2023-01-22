import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  const { isLoading, error } = useQuery("allPokemonData", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((res) => setPokemon(res.results));
  });

  if (isLoading) return <div> Loading... </div>;

  if (error) return <div> Error </div>;

  return (
    <Grid
      container
      spacing={4}
      sx={{
        p: 4,
      }}
    >
      {pokemon?.map((pokemon, index) => {
        return (
          <PokemonCard key={pokemon.name} pokemon={pokemon} id={index + 1} />
        );
      }) ?? null}
    </Grid>
  );
}
