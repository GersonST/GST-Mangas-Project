import { Manga } from "./Manga";

export const MangaGrid = (props) => {
  const mangas = props.mangas;

  return (
    <div
      className="grid  md:grid-cols-1 xl:grid-cols-2 gap-4 sm:p-4
    "
    >
      {mangas.map((manga, idx) => {
        return <Manga manga={manga} />;
      })}
    </div>
  );
};
