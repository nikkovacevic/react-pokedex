import { Box } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import typeBackgroundColors from "../assets/pokemonBackgrounds";
import capitalize, { convertToId } from "../assets/utils";
import About from "../components/About";
import Stats from "../components/Stats";
import ErrorPage from "./ErrorPage";

export default function PokemonDetails() {
  const { id } = useParams();

  const [about, setAbout] = useState(true);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setSpecialDefense] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [abilities, setAbilities] = useState([]);

  const { isLoading, error, data } = useQuery(["PokemonDetails", id], () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setImage(res.sprites.other.dream_world.front_default);
        setTypes(res.types.map((type) => type.type.name));
        res.stats.map((stat) => {
          switch (stat.stat.name) {
            case "hp":
              setHp(stat["base_stat"]);
              break;
            case "attack":
              setAttack(stat["base_stat"]);
              break;
            case "defense":
              setDefense(stat["base_stat"]);
              break;
            case "speed":
              setSpeed(stat["base_stat"]);
              break;
            case "special-attack":
              setSpecialAttack(stat["base_stat"]);
            case "special-defense":
              setSpecialDefense(stat["base_stat"]);
            default:
              break;
          }
        });
        setHeight(res.height / 10);
        setWeight(res.weight / 10);
        setAbilities(res.abilities.map((ability) => ability.ability.name));
      });
  });

  if (error) return <ErrorPage />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "50vh",
          width: "100%",
          backgroundColor: typeBackgroundColors[types[0]],
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            p: 4,
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
                fontSize: "32px",
                marginBottom: "16px",
                letterSpacing: "2px",
              }}
            >
              {capitalize(name)}
            </span>
            <div>
              {types.map((type) => (
                <span
                  key={type}
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
                    marginRight: 4,
                  }}
                >
                  {capitalize(type)}
                </span>
              ))}
            </div>
          </Box>
          <Box
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "16px",
              letterSpacing: "2px",
            }}
          >
            {convertToId(id)}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              zIndex: 1000,
              height: "260px",
              width: "260px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          zIndex: 900,
          height: "40vh",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "32px",
          postition: "relative",
          marginTop: "-10vh",
          pt: 8,
        }}
      >
        <Box
          sx={{
            px: 2,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: about
                ? `4px solid ${typeBackgroundColors[types[0]]}`
                : "",
              cursor: "pointer",
            }}
            onClick={() => {
              setAbout(true);
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: about ? "black" : "#a1a1a1",
              }}
            >
              About
            </span>
          </Box>
          <Box
            sx={{
              p: 2,
              borderBottom: about
                ? ""
                : `4px solid ${typeBackgroundColors[types[0]]}`,
              cursor: "pointer",
            }}
            onClick={() => {
              setAbout(false);
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: about ? "#a1a1a1" : "black",
              }}
            >
              Base Stats
            </span>
          </Box>
        </Box>
        <Box
          sx={{
            px: 2,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-evenly",
          }}
        >
          {about ? (
            <About height={height} weight={weight} abilities={abilities} />
          ) : (
            <Stats
              hp={hp}
              attack={attack}
              defense={defense}
              spAttack={specialAttack}
              spDefense={specialDefense}
              speed={speed}
            />
          )}
        </Box>
        <Box
          sx={{
            px: 8,
            display: { xs: "none", md: "flex" },
            alignItems: "flex-start",
          }}
        >
          <About height={height} weight={weight} abilities={abilities} />
          <Stats
            hp={hp}
            attack={attack}
            defense={defense}
            spAttack={specialAttack}
            spDefense={specialDefense}
            speed={speed}
          />
        </Box>
      </Box>
    </Box>
  );
}
