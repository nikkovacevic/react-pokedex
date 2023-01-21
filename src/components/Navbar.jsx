import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Pokeball from "../assets/pokeball.svg";

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#ff5a60",
        p: 4,
        color: "white",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Pokeball} style={{ height: "40px", width: "40px" }} />
            <span
              style={{
                marginLeft: "8px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              POKEDEX
            </span>
          </Box>
        </Grid>
        {/* <Grid item xs={9}>
          <Box>Nekaj druga</Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}
