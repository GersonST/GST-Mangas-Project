export const Manga = ({ manga }) => {
  const { attributes } = manga;
  console.log(attributes);
  const title = attributes.titles["en"] || attributes.titles["ja_jp"];
  const img = attributes.posterImage?.small;

  return (
    <div className="p-6 shadow-xl rounded bg-gray-200 ">
      <div className="flex flex-col sm:flex-row space-x-4 justify-start items-start">
        <img src={img} alt={title} className="object-scale-down shadow-2xl" />
        <h3 className="text-lg sm:text-xl font-bold p-4 sm:p-0">{title}</h3>
        <div className="text-justify text-sm sm:text-xl sm:bg-gray-200 bg-gray-300 p-3">
          {attributes.description}
        </div>
      </div>
    </div>
  );
};
