import axios from "axios";

export const getData = async () => {
  const secret = process.env.REACT_APP_API_KEY;
  const d = new Date();
  const monthStart = `${d.toISOString().substring(0, 7)}-01`;
  const monthEnd = `${d.toISOString().substring(0, 10)}`;
  const res = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${monthStart}&end_date=${monthEnd}`
  );
  return res.data;
};
