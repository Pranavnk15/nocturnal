import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { TvShowResult } from "@/hooks/useTvShowList";

interface Props {
  tvShowResult: TvShowResult;
}

export default function TvShowCard({ tvShowResult }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      className="border-0"
      onClick={() => navigate(`/player/tv/${tvShowResult.id}`)}
    >
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">
            {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
}
