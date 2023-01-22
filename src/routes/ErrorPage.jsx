import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "24px" }}>An error has occured...</span>
      </Box>{" "}
    </>
  );
}
