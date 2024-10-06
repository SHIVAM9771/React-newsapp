import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className='col my-3'>
        <div className="card h-100 d-flex flex-column" style={{ width: "18rem" }}>
          <img
            src={imageUrl || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt="News"
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {title ? title.slice(0, 45) + (title.length > 45 ? "..." : "") : "Title Unavailable"}
            </h5>
            <p className="card-text flex-grow-1">
              {description ? description.slice(0, 88) + (description.length > 88 ? "..." : "") : "Description Unavailable"}
            </p>
            <a
              rel='noreferrer'
              href={newsUrl}
              target='_blank'
              className="btn btn-sm btn-dark mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
