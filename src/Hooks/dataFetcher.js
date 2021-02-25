import { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { getStories } from "../utils/apis";

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  console.log(stories.length);
  return { isLoading, stories };
};

export default useDataFetcher;
