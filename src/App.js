import "./css/style.css";
import "./App.css";
import { useState } from "react";
// import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
// import Banner from "./components/Banner";
// import Stream from "./components/Stream";
import TvShows from "./components/TvShows";
import News from "./components/News";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import TopRatedMovies from "./components/TopRatedMovies";
import SeeAllMovies from "./components/SeeAllMovies";
import SeeAllTvShows from "./components/SeeAllTvShows";
import SeeAllNews from "./components/SeeAllNews";
import Layout from "./components/Layout";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular";
import TvLinks from "./components/TvLinks";
import MoviesDetail from "./components/MoviesDetail";
import TvShowsItemDetails from "./components/TvShowsItemDetails";

// import MoviesDetail from "./components/MoviesDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Upcoming from "./components/Upcoming";


function App(props) {
   
    return (
        <>
            {/* <Navbar />
           
            {/* <MoviesDetail/> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="tvshows" element={<TvShows />} />
                        <Route path="news" element={<News />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="seeallmovies" element={<SeeAllMovies  pageSize={9}/>} />
                        <Route path="seealltvshows" element={<SeeAllTvShows  pageSize={9}/>} />
                        <Route path="seeallnews" element={<SeeAllNews/>} />
                        <Route path="movies/toprated"element={<TopRatedMovies />}/>
                        <Route path="movies/upcoming" element={<Upcoming />} />
                        <Route path="movies/nowplaying" element={<NowPlaying/>} />
                        <Route path="tv/airingtoday" element={<TvLinks categories="airing_today" title="Shows Airing Today"/>}/>
                        <Route path="tv/ontheair" element={<TvLinks categories="on_the_air" title="Shows On The Air"/>}/>
                        <Route path="tv/popular" element={<TvLinks categories="popular" title="Popular Shows"/>}/>
                        <Route path="tv/toprated" element={<TvLinks categories="top_rated" title="Top Rated Shows"/>}/>
                        <Route path="movies/popular" element={<Popular/>}/>
                        <Route path="moviesdetail/:id" element={<MoviesDetail/>}/>
                        <Route path="tvdetail/:id" element={<TvShowsItemDetails/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
