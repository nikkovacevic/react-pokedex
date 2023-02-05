import React from 'react'
import { FaBug, FaDragon, FaFire, FaGhost, FaMountain, FaEgg, FaEye, FaSnowflake } from 'react-icons/fa'
import { GiFairyWand, GiSteelClaws, GiBoxingGlove, GiFeatheredWing, GiHighGrass, GiStoneSphere } from 'react-icons/gi';
import { RiGhost2Fill } from 'react-icons/ri';
import { MdDarkMode, MdBubbleChart, MdWaterDrop } from 'react-icons/md'
import { BsFillLightningChargeFill } from 'react-icons/bs'

const typeIcons = {
    bug: FaBug,
    dragon: FaDragon,
    fairy: GiFairyWand,
    fire: FaFire,
    ghost: FaGhost,
    ground: FaMountain,
    normal: FaEgg,
    psychic: FaEye,
    steel: GiSteelClaws,
    dark: MdDarkMode,
    electric: BsFillLightningChargeFill,
    fighting: GiBoxingGlove,
    flying: GiFeatheredWing,
    grass: GiHighGrass,
    ice: FaSnowflake,
    poison: MdBubbleChart,
    rock: GiStoneSphere,
    water: MdWaterDrop,
};

export default typeIcons;