import React, { useCallback, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TvshowsDetail from "./TvshowsDetail";
import { Link} from "react-router-dom";
const fetch = require("node-fetch");


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function TvShows(props) {
    const [results, setresults] = useState([]);

    const updateTvshows = useCallback(() => {
        const url =
            "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
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
    }, []);

    useEffect(() => {
        updateTvshows();
    }, [props, updateTvshows]);

    return (
        <div className="container">
            <div className="tvDetail box">
                <div className="head">
                    <h2>The Best of TV Shows</h2>
                    <p className="text-right">
                        <Link to="seealltvshows">See All</Link>
                    </p>
                </div>

                <Carousel responsive={responsive}>
                    {results.map((elem) => {
                        return (
                            <TvshowsDetail
                                name={elem.name}
                                key={elem.id}
                                image={elem.backdrop_path}
                                popularity={elem.popularity}
                                id={elem.id}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
