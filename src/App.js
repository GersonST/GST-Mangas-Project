import axios from "axios";
import { useEffect, useState } from "react";
import { getHotManga } from "./api";
import { MangaGrid } from "./MangaGrid";
export default function App() {
  const [mangas, setMangas] = useState([]);
  const [lucky, setLucky] = useState("");
  const [char, setChar] = useState("");

  const getMangas = async () => {
    try {
      const data = await getHotManga();
      setMangas(data);
    } catch (err) {}
  };

  useEffect(() => {
    getMangas();
  }, []);

  useEffect(() => {
    const getChar = async () => {
      await axios
        .get(`https://kitsu.io/api/edge/characters/${lucky}`)
        .then((response) => {
          console.log(response.data.data.attributes);
          setChar(response.data.data.attributes);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getChar();
  }, [lucky]);

  function Lucky() {
    const min = 1;
    const max = 10000;

    const rdn = Math.floor(Math.random() * (max - min));

    console.log(rdn);
    setLucky(rdn);
  }

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
      <button className="btn" onClick={() => Lucky()}>
        Try your lucky
      </button>

      {char && (
        <div>
          <h1>{char.name}</h1>
          <p>{char.description}</p>
          <img src={char.image?.original} alt={char.name} />
        </div>
      )}

      <MangaGrid mangas={mangas} />
    </div>
  );
}
