import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}
          >
            <span
              className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={imageUrl || "https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_1280.png"}
            className="card-img-top"
            alt="notFound..!"
            onError={(e) => {
              e.target.onerror = null;  // Prevent infinite loop
              e.target.src = "https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_1280.png";
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45) + (title.length > 45 ? "..." : "")}</h5>
            <p className="card-text">{description.slice(0, 88) + (description.length > 88 ? "..." : "")}</p>
            <p className='card-text'><small className='text-muted'>By <strong className='text-muted'> {!author ? "Unknown" : author} </strong > on {new Date(date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}
