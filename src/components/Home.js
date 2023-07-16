import React from "react";

import Movies from "./Movies";
import Banner from "./Banner";
import Stream from "./Stream";
import TvShows from "./TvShows";
import News from "./News";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <Banner />
            <Movies />
            <Stream />
            <TvShows />
            <News/>
            <Contact />
        </>
    );
}
