import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1

    }
  }

  async componentDidMount() {
    console.log("Component Mounted")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b01c29fd5ecb4d9f9806a1e9f6edb540&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
  }

  handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b01c29fd5ecb4d9f9806a1e9f6edb540&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  handelNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b01c29fd5ecb4d9f9806a1e9f6edb540&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {/* <NewsItem />  start */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url} >
              <NewsItem imageUrl={element.urlToImage} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.title.slice(0, 88) : ""} newsUrl={element.url} />
            </div>
          })}
        </div>
        {/* <NewsItem /> Ends  */}

        {/* Bottom Navigation Buttons Start Here */}

        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handelPreviousClick} > &larr;Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handelNextClick} >Next &rarr;</button>
        </div>

        {/* Bottom Navigation Buttons Ends Here */}
      </div>
    )
  }
}
