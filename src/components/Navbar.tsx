// @ts-nocheck

import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import Genres from "./Genres";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { SearchResultContext } from "@/context/searchResult.context";

const Navbar = () => {
  // const [input, setInput] = useState();
  //using conetxt state instead of above

  const { searchText, setSearchText } = useContext(SearchResultContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);

    if (e.target.value.length === 0) {
      navigate(`/movies`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 text-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        className="md:h-20 sm:h-9 h-9 hover:opacity-80 cursor-pointer"
      />
      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchText}
            onChange={handleChange}
          />
        </form>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={"/movies"}>
              <div>Movies</div>
            </Link>
            <Link to={"/tvshows"}>
              <div>TvShows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
