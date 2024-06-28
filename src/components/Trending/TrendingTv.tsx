// @ts-nocheck

import useTrendingList from "@/hooks/useTrendingList";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import TvShowCard from "../TvShowCard";

export default function TrendingTv() {
  const { trendingData } = useTrendingList("tv");

  const [expand, setExpand] = useState(false);

  return (
    <div className="p-3 mb-4 ">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h1 className="text-4xl font-semibold p-5 py-8">Trending TvShow</h1>
        <span className="text-4xl text-gray-500">
          <MdOutlineExpandMore />
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-y-3">
        {expand &&
          trendingData?.map((tvShow) => (
            <div key={tvShow.id}>
              <TvShowCard tvShowResult={tvShow} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((tvShow) => (
            <div key={tvShow.id}>
              <TvShowCard tvShowResult={tvShow} />
            </div>
          ))}
      </div>
    </div>
  );
}
