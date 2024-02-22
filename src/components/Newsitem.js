import React from 'react'

function Newsitem(props) {
    let { title, description, imageUrl, newsUrl, dateTime, author, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: "flex", right: "0", justifyContent: "flex-end", position: "absolute" }}>
                    <span className="badge rounded-pill bg-danger">{source} </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://static.wikia.nocookie.net/7d699c94-d257-46d1-b348-dcecf22d9648/scale-to-width/755"} style={{ height: "13rem" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By: {author} on {new Date(dateTime).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem

