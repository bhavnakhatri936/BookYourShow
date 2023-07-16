import React from 'react'

export default function NewsDetail(props) {
    let { title, description, imageUrl, newsUrl, author,date } = props;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4" style={{ width: "22rem" }}>
                            <img
                                className="card-img-top"
                                src={imageUrl}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small className="text-muted">By {author?author: "Unknown Author"} on {new Date(date).toGMTString()}</small></p>
                                <a
                                    href={newsUrl} target="blank"
                                    className="btn btn-danger"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    );
}
