import React from "react";
import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";

export default function MoviesDetail(props) {
    const [results, setresults] = useState([]);
    const params = useParams();
    const updateMovies = useCallback(() => {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;

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
            .then((json) => setresults(json))
            .catch((err) => console.error("error:" + err));
    }, []);

    useEffect(() => {
        console.log('i fire once');
        updateMovies();
        //    getGenres();
    }, [props, updateMovies]);
    return (
        <div className="container p-0">
            <div className="row w-100 moviedetailpage">
                <div className="col-md-3 detail-img">
                    <img
                        src={
                            `https://image.tmdb.org/t/p/w342` +
                            results.poster_path
                        } className="p-0"
                        alt=""
                    />
                </div>
                <div
                    className="col-md-5 detDiv"
                    style={{ padding: "20px 0 20px 20px" }}
                >
                    <div className="title my-2 text-dark">
                        <h1>{results.title}</h1>
                    </div>
                    <div className="ratings d-flex ml-1">
                        <div className="star">
                            <img src={"/images/star4.png"} alt="" />
                        </div>
                        <div className="points mx-3">{`${results.vote_average}/10`}</div>
                        <div className="votes mx-3">{`${results.vote_count}K Votes`}</div>
                    </div>
                    <div
                        className="review d-flex justify-content-between my-2 addrating"
                        
                    >
                        <div className="addrat">
                            <h3>Add your rating and review </h3>
                            <h4 className="m-0">Your ratings matter</h4>
                        </div>
                        <div className="rateNow d-flex align-items-center btn btn-light">
                            <a href="/">Rate Now</a>
                        </div>
                    </div>
                    <div className="date"><h4>In Theaters : {results.release_date}</h4></div>
                    <div className="booknow btn">Watch Now</div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="desc"><h2>About The Movie</h2><h3>{results.overview}</h3></div>
        </div>

    );
}
