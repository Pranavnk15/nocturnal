import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

//interface for arr for storing movie list details, utilizing typescript functionality
export interface MovieResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

const useMovieList = (genres?: number | null) => {
  const [movieLists, setMovieList] = useState<MovieResult[]>();

  const fetchMovieList = async () => {
    try {
      const res = await apiClient.get("/discover/movie", {
        params: {
          with_genres: genres,
        },
      });
      setMovieList(res.data.results);
      // console.log(res.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovieList();
  }, [genres]);

  return { movieLists };
};

export default useMovieList;

//in this we hve created a custom hook, which
//fetches the movie list data from the api by hiting the endpoint
//and exporting the list of the data

//we will get the genres context and pass as params to the endpoint
// to fetch the related data

// in this as receving the props we check if the genre is present or not
// and if present then it is of number type else null if not present
