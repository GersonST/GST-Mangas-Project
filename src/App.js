import { useEffect, useState } from "react";
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
    <div className=" sm:p-4 bg-yellow-500">
      <h1 className="text-xl sm:text-4xl text-center font-bold">
        <span role="img" aria-label="fire">
          📚
        </span>
        Mangadex
        <span role="img" aria-label="fire">
          📚
        </span>
      </h1>

      <MangaGrid mangas={mangas} />
    </div>
  );
}
