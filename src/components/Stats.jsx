import React from "react";
import { Grid, Box } from "@mui/material";

export default function Stats({
  hp,
  attack,
  defense,
  spAttack,
  spDefense,
  speed,
}) {
  return (
    <Grid container spacing={2} sx={{ p: 4 }}>
      <StatLine stat={"HP"} value={hp} />
      <StatLine stat={"Attack"} value={attack} />
      <StatLine stat={"Defense"} value={defense} />
      <StatLine stat={"Sp. Atk"} value={spAttack} />
      <StatLine stat={"Sp. Def"} value={spDefense} />
      <StatLine stat={"Speed"} value={speed} />
    </Grid>
  );
}

const StatLine = ({ stat, value }) => {
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
        <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginRight: "24px",
            }}
          >
            {value}
          </span>
          <Bar value={value} />
        </Box>
      </Grid>
    </>
  );
};

const Bar = ({ value }) => {
  return (
    <>
      <div
        style={{
          height: "3px",
          width: `${value}%`,
          backgroundColor: value > 50 ? "rgba(0, 184, 3, 0.5)" : "#FF7777",
          borderTopLeftRadius: "2px",
          borderBottomLeftRadius: "2px",
        }}
      />
      <div
        style={{
          height: "3px",
          width: `${100 - value}%`,
          backgroundColor: "#e0e0e0",
          borderTopRightRadius: "2px",
          borderBottomRightRadius: "2px",
        }}
      />
    </>
  );
};
