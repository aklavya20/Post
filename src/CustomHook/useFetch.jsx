import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
    useEffect(() => {
    fetchApiData();
  }, [url]);

  const fetchApiData = async () => {
    const fetchApi = await fetch(url);
    const data = await fetchApi.json();
    setApiData(data);
  };

  return apiData;
};

export default useFetch;
