import React, { useEffect, useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import typeBackgroundColors from "../assets/pokemonBackgrounds";
import typeIcons from "../assets/pokemonIcons.js";
import capitalize from "../assets/utils";
import PokemonCardLoader from "./PokemonCardLoader";

export default function PokemonCard({ pokemon, id }) {
  const { isLoading, error, data } = useQuery(["pokemonCard", id], () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
  );

  let types = [];
  if (data) {
    types = data.types.map((type) => type.type.name);
  }

  if (isLoading || error) return <PokemonCardLoader />;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/pokemon/${id}`}>
        <Paper
          className="texture-background"
          elevation={16}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: typeBackgroundColors[types[0]],
            p: 2,
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "28px",
                marginBottom: "16px",
                letterSpacing: "2px",
              }}
            >
              {capitalize(pokemon.name)}
            </span>
            {types.map((type) => (
              <div
                key={type}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                  backgroundColor: "rgba(255,255,255, 0.2)",
                  padding: "4px 16px",
                  maxWidth: "fit-content",
                  borderRadius: "16px",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontSize: "14px",
                  }}
                >
                  {capitalize(type)}
                </span>

                <span
                  style={{
                    color: "white",
                    marginLeft: 8,
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                  }}
                >
                  {typeIcons[type]()}
                </span>
              </div>
            ))}
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
            }}
          >
            <img
              src={data?.sprites?.front_default}
              alt={pokemon.name}
              style={{
                width: "160px",
                height: "160px",
              }}
            />
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}
