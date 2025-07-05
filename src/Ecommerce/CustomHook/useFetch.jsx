import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [value, setValue] = useState([]);
  const fetchData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setValue(response);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return value;
};

export default useFetch;
