import { useState, useEffect } from "react";
import { APIKEYPARAM, BASEURL } from "../constants";

const useFetch = (requestParam, pageNo) => {
  const url = `${BASEURL}${requestParam}${APIKEYPARAM}&page=${pageNo}`;
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
  }, [requestParam, pageNo, url]);
  return { data, isloading, isError };
};

export default useFetch;
