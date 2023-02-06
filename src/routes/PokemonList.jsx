import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import PokemonCard from "../components/PokemonCard";

export default function PokemonList() {
  const { isLoading, error, data } = useQuery("allPokemonData", () =>
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=23").then((res) =>
      res.json()
    )
  );

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
      {data?.results?.map((pokemon, index) => {
        return (
          <PokemonCard key={pokemon.name} pokemon={pokemon} id={index + 1} />
        );
      }) ?? null}
    </Grid>
  );
}
