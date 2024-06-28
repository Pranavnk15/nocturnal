import useMovieList from "@/hooks/useMovies";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/context/genre.context";

export default function MovieList() {
  const { genres } = useContext(GenresContext);
  const { movieLists } = useMovieList(genres);
  // console.log(movieLists);
  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">Movies</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-y-3">
        {movieLists?.map((movieList) => (
          <div key={movieList.id}>
            <MovieCard movieResult={movieList} />
          </div>
        ))}
      </div>
      ;
    </div>
  );
}

//here we take the movie list which will contain the array of movie details
// which we have imported from useMovies hook
//then we map the the movielist and display the data in card
