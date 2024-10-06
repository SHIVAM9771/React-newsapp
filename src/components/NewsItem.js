import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45) + (title.length > 45 ? "..." : "")}</h5>
            <p className="card-text">{description.slice(0, 88) + (description.length > 88 ? "..." : "")}</p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
        
      </div>
    )
  }
}
