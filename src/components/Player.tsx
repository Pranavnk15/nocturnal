import React from "react";
import { useParams } from "react-router";

export default function Player() {
  const { playerId, content } = useParams();
  let movieUrl = "";
  if (content === "movie") {
    movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;
  } else {
    movieUrl = `https://vidsrc.xyz/embed/tv/${playerId}`;
  }

  return (
    <div>
      <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={movieUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}
