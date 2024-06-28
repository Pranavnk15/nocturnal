// @ts-nocheck

import { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { GenresContext } from "@/context/genre.context";
import { useNavigate } from "react-router";

const genreList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export default function Genres() {
  // const [genres, setGenres] = useState();
  //instead of the above state we will use the state provided by the context

  const { genres, setGenres } = useContext(GenresContext);
  const [genreName, setGenreName] = useState();
  // console.log(genres);
  // console.log(genreName);

  const navigate = useNavigate();

  const onChange = (data) => {
    setGenres(data);
    navigate("/movies");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className="cursor-pointer">{!genres ? "Genres" : genreName}</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={genres} onValueChange={onChange}>
          {genreList.map((genre) => (
            <DropdownMenuRadioItem
              key={genre.id}
              onClick={() => setGenreName(genre.name)}
              value={genre.id}
            >
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

//here we can have two approaches whre we can fetch the genres from the api and then display
// or else copy and paste the required modified genres only which will save the api call

// approach we will pass the id of the selected genre in a state,
// and pass that state as a param to the movieList so that only that genres movies will be loaded

//now to pass the genre state which contains the selected id of the genre to the useMovie component
// we will need alot of prop drilling hence we will use context api, which will store the context of the genre id
//which can be used directly in the useMovie component

//with the help of onChange function we will not call the setGenres directly instead
//with the onChange we wil call the setGenre, so that after setting the genre, we can navigate to the "/movies"
