import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { getHotManga } from "./api";
import { MangaGrid } from "./MangaGrid";
export default function App() {
  const [mangas, setMangas] = useState([]);

  const getMangas = async () => {
    try {
      const data = await getHotManga();
      setMangas(data);
    } catch (err) {}
  };

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="max-w-2xl flex flex-col mx-auto p-4 bg-red-700">
      <h1 className="text-2xl text-center font-bold">
        <span role="img" aria-label="fire">
          🔥
        </span>{" "}
        Hot Mangas{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h1>

      <MangaGrid mangas={mangas} />
    </div>
  );
}
