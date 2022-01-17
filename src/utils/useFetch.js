import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const secret = process.env.REACT_APP_API_KEY;
      const d = new Date();
      const monthStart = `${d.toISOString().substring(0, 7)}-01`;
      const monthEnd = `${d.toISOString().substring(0, 10)}`;
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${monthStart}&end_date=${monthEnd}`
      );
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error];
};
