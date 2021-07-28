export const Manga = ({ manga }) => {
  const { attributes } = manga;

  return (
    <div className="p-2 shadow rounded">
      <h3>{attributes.titles["en"]} </h3>
    </div>
  );
};
