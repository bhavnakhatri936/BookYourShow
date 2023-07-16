import React, { useCallback, useEffect, useState } from "react";
import { Link} from "react-router-dom";

import MoviesItem from "./MoviesItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Footer from "./Footer";
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

export default function Movies(props) {
    const [results, setresults] = useState([]);
    // const [genres, setgenres] = useState([])

    const updateMovies = useCallback(() => {
        const url =
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

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
    },[]);
 
    // const getGenres = useCallback(() => {
    //     const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg0NzFkODMzMDA0NzdmNjA0NTg4YTg1OGM2NTgxYyIsInN1YiI6IjY0OTAwNGY3MmY4ZDA5MDBhZDM1YzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiC2Equhi0tna_BhxIITpEn1dv-F7XVh1fvZYY8vLhc'
    //       }
    //     };
        
    //     fetch(url, options)
    //       .then(res => res.json())
    //       .then((json) => {
    //         setgenres(json.genres)
    //         // results.forEach((value)=>{
    //         //     value.genre_ids.forEach((val)=>{
    //         //         genres.forEach((ele)=>{
    //         //             console.log(ele.id,val)
    //         //             if(ele.id==val){
    //         //                 val = ele.name;
                          
                        
    //         //             }
    //         //         })
    //         //     })
    //         // })
    //         // console.log(results);
    //     })
    //       .catch(err => console.error('error:' + err));

    // },[])

    useEffect( () => {
        
        updateMovies();
    //    getGenres();
    }, [props, updateMovies]);

    return (
        <>
            <div className="container box">
                <div className="head">
                    <h2>Recommended Movies</h2>
                    <p className="text-right">
                        <Link to="seeallmovies">See All</Link>
                    </p>
                </div>
                <Carousel responsive={responsive}>
                    
                        {results.map((element) => {
                            return (
                                
                                    <MoviesItem
                                        image={element.poster_path}
                                        votes={element.vote_average}
                                        votesCount = {element.vote_count}
                                        title = {element.title}
                                       id={element.id}
                                       key={element.id}
                                    />
                                    
                                
                            );
                        })}
                    
                </Carousel>
                
            </div>
           
        </>
    );
}
