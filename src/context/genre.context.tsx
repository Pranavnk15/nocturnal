import { createContext, useState } from "react";

export const GenresContext = createContext<{
  genres: number | null;
  setGenres: (data: number) => void;
}>({
  genres: null,
  setGenres: () => {},
});

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState(null);
  const value = { genres, setGenres };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};

// here we create a context provide which will be wrapped
//by the App component

//created interface of the context in which we declare the type of the data
//which will be passed and which should be accepted hence we are using typescript for the typesafety
//    setGenres : (data: number) => void;
