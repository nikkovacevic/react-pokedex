import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard";

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=15";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  const { isLoading, error } = useQuery("allPokemonData", () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setPokemon(res.results));
  });

  if (isLoading) return <div> Loading... </div>;

  if (error) return <div> Error </div>;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 1,
      }}
    >
      {pokemon.map((pokemon, index) => {
        console.log(pokemon);
        return (
          <PokemonCard key={pokemon.name} pokemon={pokemon} id={index + 1} />
        );
      }) ?? null}
    </Grid>
  );
}
