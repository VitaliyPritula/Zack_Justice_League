"use strict";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviePage } from "./pages/MoviePage";
import { Header } from "./components/layout/header";
import Hero from "./components/Hero/Hero";
import { Tvshows } from "./components/Tvshows";
import { PopularGenres } from "./components/PopularGenres";
import { PopularPeople } from "./components/PopularPeople";
import "./index.css";

const trendingTVShows = [
  { id: 1, image: "/Shows/01.jpg" },
  { id: 2, image: "/Shows/02.jpg" },
  { id: 3, image: "/Shows/03.jpg" },
  { id: 4, image: "/Shows/04.jpg" },
  { id: 5, image: "/Shows/05.jpg" },
  { id: 6, image: "/Shows/06.jpg" },
  { id: 7, image: "/Shows/07.jpg" },
];
const trendingMovies = [
  { id: 8, image: "/Shows/08.jpg" },
  { id: 9, image: "/Shows/09.jpg" },
  { id: 10, image: "/Shows/10.jpg" },
  { id: 11, image: "/Shows/11.jpg" },
  { id: 12, image: "/Shows/12.jpg" },
  { id: 13, image: "/Shows/10.jpg" },
  { id: 14, image: "/Shows/08.jpg" },
];
function App() {
  return (
    <Router>
      <Header />
      <main className="pt-14">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Tvshows title="Trending TV Shows" items={trendingTVShows} />
                <Tvshows title="Trending Movies" items={trendingMovies} />
                <PopularGenres />
                {/* <PopularPeople /> */}
              </>
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
