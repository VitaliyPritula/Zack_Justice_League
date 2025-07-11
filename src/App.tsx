"use strict";
import React, {useState} from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import { Header } from "./components/layout/header";
import { PopularPeople } from "./components/Popular/PopularPeople";
import { PopularGenres } from "./components/PopularGenres";
import { Tvshows } from "./components/Tvshows";
import "./index.css";
import { MoviePage } from "./pages/MoviePage";
import BibgBuck from "./components/BivgBuck";
import ComingSoon from "./components/ComingSoon";
import Register from "./components/Register";
import { Footer } from "./components/layout/footer";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Router>
      <div className="">
        <Header />
        <main className="pt-14 flex-[1_1_auto]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Tvshows title="Trending TV Shows" items={trendingTVShows} />
                  <Tvshows title="Trending Movies" items={trendingMovies} />
                  <PopularGenres />
                  <PopularPeople />
                  <BibgBuck />
                  <ComingSoon onRegisterClick={openPopup} />
                  <Register isOpen={isPopupOpen} onClose={closePopup} />
                </>
              }
            />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
