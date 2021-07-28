import axios from "axios";

const HOT_MANGA_URL = "https://kitsu.io/api/edge/trending/manga";

export const getHotManga = async () => {
  try {
    const response = await axios.get(HOT_MANGA_URL);
    const { data } = response;
    console.log(data);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
