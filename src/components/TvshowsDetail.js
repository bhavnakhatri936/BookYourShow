import React from "react";
import { Link } from "react-router-dom";

export default function TvshowsDetail(props) {
    let { name, image, popularity,id } = props;
    return (
        <>
            <Link
                to={{ pathname: `tvdetail/${id}` }}
                className="moviesdetail"
            >
                <div className="tvDetDiv">
                    <img
                        src={`https://image.tmdb.org/t/p/w300` + image}
                        alt=""
                    />
                    <div className="tv" style={{ width: "250px" }}>
                        <h3>{name}</h3>
                        <div className="graph">
                            <img src={"/images/graph.png"} alt="" />
                            <h3>{`${popularity} K Views`}</h3>
                        </div>
                        <button type="button" className="btn btn-danger mt-2">
                            Watch Now
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
}
