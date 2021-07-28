const MangaGrid = (props) => {
  const mangas = props.mangas;

  return (
    <div>
      {mangas.map((manga, idx) => {
        return <Manga manga={manga} />;
      })}
    </div>
  );
};
