import React from "react";
import { Link } from "react-router-dom";
// import MoviesDetail from "./MoviesDetail";


export default function MoviesItem(props) {
    let { image, votes, votesCount, title,id } = props;
    
    return (
        <>
            <Link to={{pathname: `moviesdetail/${props.id}`}}  className="moviesdetail">
                <div className="recMov">
                    <div className="rad">
                        <img
                            className="d-block w-100 topratedimg"
                            src={`https://image.tmdb.org/t/p/original` + image}
                            alt="First slide"
                        />
                        <div className="review movieitemrev">
                            <div className="star">
                                <img src={"/images/star4.png"} alt="" />
                            </div>
                            <div className="votes">
                                <div className="">{`${votes}/10`}</div>
                            </div>
                            <div className="votesCount">{`${votesCount}K Votes`}</div>
                        </div>
                    </div>
                    <div className="movtitle">
                        <h2>{title}</h2>
                    </div>
                </div>
                
            </Link>
        </>
    );
}
