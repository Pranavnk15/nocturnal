import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GenresProvider } from "./context/genre.context.tsx";
import { SearchProvider } from "./context/searchResult.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <GenresProvider>
          <App />
          {/* due to the genreProvider, all the components inside the app can access the genre state  */}
        </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
