import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Pokeball from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#ff5a60",
        p: 3,
        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <Box
          data-testid="navbar-link"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Pokeball}
            style={{ height: "40px", width: "40px" }}
            alt="poke-icon"
          />
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
      </Link>
      {/* Github */}
    </Box>
  );
}
