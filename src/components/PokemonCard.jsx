import React, { useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import typeBackgroundColors from "../assets/pokemonBackgrounds";
import typeIcons from "../assets/pokemonIcons.js";
import capitalize from "../assets/utils";
import PokemonCardLoader from "./PokemonCardLoader";

export default function PokemonCard({ pokemon, id }) {
  const [types, setTypes] = useState([]);
  const [image, setImage] = useState("");

  const { isLoading, error } = useQuery(["pokemonCard", id], () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTypes(res.types.map((type) => type.type.name));
        setImage(res.sprites.front_default);
      });
  });

  if (isLoading || error) return <PokemonCardLoader />;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/pokemon/${id}`}>
        <Paper
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
              src={image}
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
