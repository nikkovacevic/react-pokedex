import React from "react";
import { Box, Grid } from "@mui/material";
import capitalize from "../assets/utils";

export default function About({ height, weight, abilities }) {
  return (
    <Grid container spacing={2} sx={{ p: 4 }}>
      <AboutLine stat={"Height"} value={height} unit={"m"} />
      <AboutLine stat={"Weight"} value={weight} unit={"kg"} />
      <AbilitiesLine abilities={abilities} />
    </Grid>
  );
}

const AboutLine = ({ stat, value, unit }) => {
  return (
    <>
      <Grid item xs={4}>
        <span
          style={{
            color: "#a1a1a1",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {stat}
        </span>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginRight: "24px",
            }}
          >
            {`${value} ${unit}`}
          </span>
        </Box>
      </Grid>
    </>
  );
};

const AbilitiesLine = ({ abilities }) => {
  return (
    <>
      <Grid item xs={4}>
        <span
          style={{
            color: "#a1a1a1",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Abilities
        </span>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginRight: "24px",
            }}
          >
            {abilities.map((ability, index) => {
              if (index + 1 !== abilities.length) {
                return `${capitalize(ability)}, `;
              } else {
                return capitalize(ability);
              }
            })}
          </span>
        </Box>
      </Grid>
    </>
  );
};
