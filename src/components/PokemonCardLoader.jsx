import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import typeBackgroundColors from "../assets/pokemonBackgrounds";

export default function PokemonCardLoader() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: typeBackgroundColors["normal"],
          p: 4,
          borderRadius: 6,
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
            Pokemon
          </span>
          <span
            style={{
              color: "white",
              marginBottom: "8px",
              backgroundColor: "rgba(255,255,255, 0.2)",
              padding: "4px 16px",
              maxWidth: "fit-content",
              borderRadius: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            Type
          </span>
        </Box>
        <Box
          sx={{
            height: "160px",
            width: "160px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        />
      </Paper>
    </Grid>
  );
}
