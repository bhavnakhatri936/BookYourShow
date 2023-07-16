import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MoviesItem from "./MoviesItem";
const fetch = require("node-fetch");

export default function SeeAllMovies(props) {
    const [results, setresults] = useState([]);
    const [page, setpage] = useState(1);
    const [total_results, settotal_results] = useState(0);
    // const [genres, setgenres] = useState([])

    const updateMovies = useCallback((props) => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

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
            .then((json) => {
                setresults(json.results);
                settotal_results(json.total_results);
            })
            .catch((err) => console.error("error:" + err));
    }, []);

    // const getGenres = useCallback(() => {
    //     const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             accept: "application/json",
    //             Authorization:
    //                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg0NzFkODMzMDA0NzdmNjA0NTg4YTg1OGM2NTgxYyIsInN1YiI6IjY0OTAwNGY3MmY4ZDA5MDBhZDM1YzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiC2Equhi0tna_BhxIITpEn1dv-F7XVh1fvZYY8vLhc",
    //         },
    //     };

    //     fetch(url, options)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setgenres(json.genres);
    //             // results.forEach((value)=>{
    //             //     value.genre_ids.forEach((val)=>{
    //             //         genres.forEach((ele)=>{
    //             //             console.log(ele.id,val)
    //             //             if(ele.id==val){
    //             //                 val = ele.name;

    //             //             }
    //             //         })
    //             //     })
    //             // })
    //             // console.log(results);
    //         })
    //         .catch((err) => console.error("error:" + err));
    // }, []);

    useEffect(() => {
        updateMovies();
        // getGenres();
    }, [props, updateMovies]);

    const fetchMoreData = async () => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${
            page + 1
        }&pageSize=${props.pageSize}`;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg0NzFkODMzMDA0NzdmNjA0NTg4YTg1OGM2NTgxYyIsInN1YiI6IjY0OTAwNGY3MmY4ZDA5MDBhZDM1YzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiC2Equhi0tna_BhxIITpEn1dv-F7XVh1fvZYY8vLhc",
            },
        };
        setpage(page + 1);
        let data = await fetch(url,options);
        let parseddata = await data.json();
        setresults(results.concat(parseddata.results));
        settotal_results(parseddata.total_results);
    };

    return (
        <>
            <div className="container box" style={{marginTop: '75px'}}>
                <div className="head">
                    <h2>All Movies</h2>
                </div>
            </div>
            <InfiniteScroll
                dataLength={results.length}
                next={fetchMoreData}
                hasMore={results.length !== total_results}
                loader={<h4 className="text-center">Loading...</h4>}
            >
                <div className="container">
                    <div className="row">
                        {results.map((element) => {
                            return (
                                <div className="col-md-4">
                                    <MoviesItem
                                        image={element.poster_path}
                                        votes={element.vote_average}
                                        votesCount={element.vote_count}
                                        title={element.title}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}
