import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import confused from "../assets/confused.png";

export default function ErrorPage() {
  return (
    <>
      <Box
        className="error-background"
        sx={{
          height: "90vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        py={8}
        gap={4}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              letterSpacing: "5px",
              marginBottom: "24px",
            }}
          >
            Oops!
          </span>

          <img src={confused} style={{ height: "160px", width: "160px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          gap={4}
        >
          <span style={{ fontSize: "24px" }}>Something went wrong...</span>
          <Link to="/">
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                backgroundColor: "#ff5a60",
                "&:hover": {
                  backgroundColor: "#BC3E42",
                },
              }}
              p={4}
            >
              Back home
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
