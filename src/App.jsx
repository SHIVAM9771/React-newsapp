import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general" />}
            />
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="entertainment" />}
            />
            <Route
              path="/general"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general" />}
            />
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="health" />}
            />
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="science" />}
            />
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="technology" />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
