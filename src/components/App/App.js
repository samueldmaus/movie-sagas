import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <h1>Movies!</h1>
            <Link to="/"><button>Movie List</button></Link>
          </nav>
          
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details/:id" component={MovieDetails} />
        </Router>
        
      </div>
    );
  }
}

export default App;
