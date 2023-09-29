// Tiles.js
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import tileStyles from "@/styles/Tiles.module.css";
import { tiles } from "../tileDetails";

const tileVariants = {
  hidden: { x: -100 },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Tiles = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={tileVariants}
      transition={{ staggerChildren: 0.2 }}
      className={tileStyles.main}
    >
      <div className={tileStyles.grid}>
        {tiles.map((tile) => (
          <Link href={tile.ref} key={tile.id}>
            <motion.div
              variants={tileVariants}
              className={tileStyles.card}
            >
              <p className={tileStyles.title}>{tile.title}</p>
              <p className={tileStyles.description}>{tile.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.main>
  );
};

export default Tiles;
