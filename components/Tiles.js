import React from "react";
import Link from "next/link";
import tileStyles from "@/styles/Tiles.module.css";
import { tiles } from "../tileDetails";

const Tiles = () => {
  return (
    <main className={tileStyles.main}>
      <div className={tileStyles.grid}>
        {tiles.map((tile) => (
          <Link href={tile.ref} key={tile.id}>
            {/* <img className={tileStyles.card} src={tile.src} /> */}
            <div className={tileStyles.card}>
              <p className={tileStyles.title}>{tile.title}</p>
              <p className={tileStyles.description}>{tile.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Tiles;
