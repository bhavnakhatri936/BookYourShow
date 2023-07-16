import React, { useCallback, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsDetail from "./NewsDetail";
import { Link} from "react-router-dom";
const fetch = require("node-fetch");

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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

export default function News(props) {
    const [articles, setarticles] = useState([]);

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

    return (
        <>
        <div className="container">
            <div className="newsdetail box">
                <div className="head">
                    <h2>Trending Bollywood News</h2>
                    <p className="text-right">
                        <Link to="seeallnews">See All</Link>
                    </p>
                </div>

                <Carousel responsive={responsive}>
                    {articles.map((element) => {
                        return (
                            <div className="check" key={element.url}>
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
                </Carousel>
            </div>
        </div>
      
        </>
    );
}
