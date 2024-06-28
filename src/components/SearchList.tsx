// @ts-nocheck

import { SearchResultContext } from "@/context/searchResult.context";
import useMultiSearch from "@/hooks/useMultiSearch";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";
import { useContext } from "react";

export default function SearchList() {
  const { searchData, searchText } = useContext(SearchResultContext);
  useMultiSearch(searchText);

  // console.log(searchData);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-y-3">
      {searchData?.map((data) => {
        return (
          <div key={data.id}>
            {data.media_type === "movie" ? (
              <MovieCard movieResult={data} />
            ) : (
              <TvShowCard tvShowResult={data} />
            )}
          </div>
        );
      })}
    </div>
  );
}
