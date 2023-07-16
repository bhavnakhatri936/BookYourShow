import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
const fetch = require("node-fetch");

export default function Navbar(props) {
    const [searchValue, setSearchValue] = useState("");
    const [results, setresults] = useState([]);

    const searchmovies = useCallback(() => {
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchValue}`;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg0NzFkODMzMDA0NzdmNjA0NTg4YTg1OGM2NTgxYyIsInN1YiI6IjY0OTAwNGY3MmY4ZDA5MDBhZDM1YzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiC2Equhi0tna_BhxIITpEn1dv-F7XVh1fvZYY8vLhc",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setresults(json.results))
            .catch((err) => console.error("error:" + err));
    }, [searchValue]);

    useEffect(() => {
        searchmovies();
    }, [searchValue]);

    const divHide = () => {
        document.getElementById("searchOptns").style.display = "none";
        document.getElementById("search-field").style.borderRadius = "10px 10px 10px 10px";
    };
    const divDisplay = () => {
        document.getElementById("searchOptns").style.display = "block";
        document.getElementById("search-field").style.borderRadius = "10px 10px 0 0";
    };

    return (
        <>
            <div className="container  fixed-top p-0">
                <div className="topHeader">
                    <div id="logo">
                        <img src={"/images/book-your-show-logo.png"} alt="" />
                    </div>
                    <div id="search">
                        <form action="/" method="get">
                            <input
                                type="text"
                                name="search field"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                placeholder="Search for Movies and Tv shows"
                                id="search-field"
                                className="blink search-field"
                                autoComplete="false"
                                onClick={divDisplay}
                            />

                            <div id="searchOptns">
                                <ul>
                                    {results.map((elem) => {
                                        return (
                                            <Link
                                                to={{
                                                    pathname: `moviesdetail/${elem.id}`,
                                                }}
                                                className="moviesdetail"
                                                onClick={divHide}
                                            >
                                                <li>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w92${elem.poster_path}`}
                                                        alt=""
                                                    />
                                                    {elem.title}
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="mainNav" id="navigation">
                        <ul>
                            <li>
                                <Link className="active" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <Link to="movies" className="dropbtn">
                                        MOVIES
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link to="movies/nowplaying">
                                            NOW PLAYING
                                        </Link>
                                        <Link to="movies/toprated">
                                            TOP RATED
                                        </Link>
                                        <Link to="movies/popular">POPULAR</Link>
                                        <Link to="movies/upcoming">
                                            UPCOMING
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <Link to="tvshows" className="dropbtn">
                                        TV SHOWS
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link to="tv/airingtoday">
                                            AIRING TODAY
                                        </Link>
                                        <Link to="tv/ontheair">ON THE AIR</Link>
                                        <Link to="tv/popular">POPULAR</Link>
                                        <Link to="tv/toprated">TOP RATED</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="news">NEWS</Link>
                            </li>
                            <li>
                                <Link to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
