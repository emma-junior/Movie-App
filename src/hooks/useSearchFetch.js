import { useState, useEffect } from "react";
import { APIKEYPARAM } from "../constants";

const useSearchFetch = (searchParam) => {
  const url = `https://api.themoviedb.org/3/search/movie${APIKEYPARAM}&query=${searchParam}`;
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch your data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
        setIsError(null);
      })
      .catch((err) => {
        setIsloading(false);
        setIsError(err.message);
      });
  }, [searchParam, url]);
  return { data, isloading, isError };
};

export default useSearchFetch;
