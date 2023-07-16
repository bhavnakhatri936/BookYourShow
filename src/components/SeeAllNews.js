import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsDetail from "./NewsDetail";
const fetch = require("node-fetch");

export default function SeeAllNews(props) {
    const [articles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // const [genres, setgenres] = useState([])

    const updateNews = useCallback(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=7398fa4da07a444381bfefdbb995d898`;
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
            .then((json) => setarticles(json.articles))
            .catch((err) => console.error("error:" + err));
    }, []);

    useEffect(() => {
        updateNews();
    }, [props, updateNews]);

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

    

    const fetchMoreData = async (props) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=7398fa4da07a444381bfefdbb995d898`;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg0NzFkODMzMDA0NzdmNjA0NTg4YTg1OGM2NTgxYyIsInN1YiI6IjY0OTAwNGY3MmY4ZDA5MDBhZDM1YzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiC2Equhi0tna_BhxIITpEn1dv-F7XVh1fvZYY8vLhc",
            },
        };
        setpage(page + 1);
        let data = await fetch(url, options);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles));
        
    };

    return (
        <>
            <div className="container box" style={{marginTop: '75px'}}>
                <div className="head">
                    <h2>All News</h2>
                </div>
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4 className="text-center">Loading...</h4>}
            >
                <div className="container">
                    <div className="tvDetail box">
                        <div className="row">
                            {articles.map((element) => {
                                return (
                                    <div className="check col-md-4" key={element.url}>
                                <NewsDetail
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                /> 
                            </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}
