import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    const { page } = this.state;
    const { pageSize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b01c29fd5ecb4d9f9806a1e9f6edb540&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  handelPreviousClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handelNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({ page: this.state.page + 1 }, this.updateNews);
    }
  };

  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center mb-4'>NewsMonkey - Top Headlines</h1>

        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3 d-flex align-items-stretch" key={element.url}>
                  <NewsItem
                    imageUrl={element.urlToImage}
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between my-4">
          {/* Previous Button */} */}
          <button
            type="button"
            className="btn btn-outline-dark"
            disabled={this.state.page <= 1}
            onClick={this.handelPreviousClick}
          >
            &larr; Previous
          </button>
          {/* Next Button */}
          <button
            type="button"
            className="btn btn-outline-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.handelNextClick}
          >
            Next &rarr;
          </button>

        </div>
      </div>
    );
  }
}
